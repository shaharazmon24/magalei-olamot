/* ============================================================
   מגלי עולמות — מנוע האתר
   ============================================================ */
(function () {
  'use strict';

  var WA_NUMBER = '972544772010';           // רועי

  /* Web3Forms. This key is MEANT to be public - Web3Forms is a client-side
     service and the key identifies the form, it is not a password. It is
     visible to anyone who views source, by design. */
  var W3F_KEY = 'c931d947-8031-41be-a8ef-7d0ebafbad81';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = function () { return window.matchMedia('(max-width: 768px)').matches; };

  /* ------------------------------------------------------------
     1. CINEMATIC STAGE
     Each [data-bg] section owns a background frame. Scroll position
     decides which frame is showing and hands over to the next one
     late, on an eased curve, so two frames are never both at half
     strength for long.
     ------------------------------------------------------------ */
  var stage = document.getElementById('stage');
  var sections = [].slice.call(document.querySelectorAll('[data-bg]'));
  var frames = [];      // one per unique image, in scroll order
  var order = [];       // section index -> frame index

  (function buildStage() {
    var seen = {};
    sections.forEach(function (sec) {
      var key = sec.getAttribute('data-bg');
      if (!(key in seen)) {
        seen[key] = frames.length;
        var layer = document.createElement('div');
        layer.className = 'stage__layer';
        var img = document.createElement('img');
        img.alt = '';
        img.decoding = 'async';
        img.dataset.base = key;
        layer.appendChild(img);
        stage.appendChild(layer);
        frames.push({ el: layer, img: img, loaded: false, key: key });
      }
      order.push(seen[key]);
    });
  })();

  /* Backgrounds and frame sequences are fetched by script, so they never
     carried the ?v= that index.html puts on css and js - which meant a
     rebuilt background stayed stale in the browser forever. That is what
     kept the picture jumping: the cached still was 2400x1340 (1.7910) while
     the new frames were 1.7778, and object-fit: cover crops those two
     differently. The version is read off this file's own URL so one bump in
     index.html moves everything together. */
  var ASSET_V = (function () {
    var el = document.querySelector('script[src*="js/app.js"]');
    var m = el && el.getAttribute('src').match(/[?&]v=([^&]+)/);
    return m ? m[1] : '';
  })();
  function ver(url) { return ASSET_V ? url + '?v=' + ASSET_V : url; }

  function srcFor(key) {
    return ver('img/' + key + (isMobile() ? '-m' : '-w') + '.webp');
  }

  function load(i) {
    var f = frames[i];
    if (!f || f.loaded) return;
    f.loaded = true;
    f.img.src = srcFor(f.key);
  }

  // first frame eagerly, its neighbour right after, the rest as we approach
  load(0);
  frames[0].img.fetchPriority = 'high';
  window.addEventListener('load', function () { load(1); });

  var current = -1, ticking = false;

  /* which frames currently carry a non-zero opacity, so paint() can clear
     exactly those and nothing else */
  var live = [];

  /* The slow zoom. Once paint() stopped writing to all 24 layers it became
     affordable on a phone too, so it runs everywhere — just gentler on mobile,
     where a smaller travel keeps the compositor comfortable. */
  var kenBurns = !reduced;
  function kbRange() { return isMobile() ? 0.030 : 0.055; }

  /* ------------------------------------------------------------
     1c. SCRUBBED TRANSITIONS
     Where a rendered transition exists for a pair of backgrounds, the
     handover stops being a crossfade and becomes a camera move the finger
     drives: a canvas draws one frame of the sequence per scroll position.
     Everything here is additive — no sequence, no network, or reduced
     motion, and the original crossfade runs untouched.
     ------------------------------------------------------------ */
  var TRANS_FADE = 0.42;          // video panels hand over across a longer run
  var trans = [];                 // section index -> transition, sparse
  var scrub = document.createElement('canvas');
  scrub.className = 'stage__scrub';
  scrub.setAttribute('aria-hidden', 'true');
  stage.appendChild(scrub);
  var sctx = scrub.getContext('2d', { alpha: false });
  var scrubOp = 0;
  /* There is ONE canvas, so there is one record of what is currently drawn on
     it. Keeping this per-transition was a real bug: crossing into a panel
     whose own 'last drawn' index happened to match skipped the redraw, and the
     canvas went on showing the PREVIOUS panel's frame. */
  var painted = { id: null, idx: -1 };

  function sizeScrub() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.round(stage.clientWidth * dpr);
    var h = Math.round(stage.clientHeight * dpr);
    if (scrub.width !== w || scrub.height !== h) {
      scrub.width = w; scrub.height = h;
      painted.id = null; painted.idx = -1;   // resizing a canvas wipes it
    }
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  /* The scale a panel opens at. Footage that dollies carries its own move and
     opens at 1; everything else opens at the top of the Ken Burns travel.
     A, B and the canvas all read this, because when they disagreed the
     background jumped 4.7% the moment the canvas took over. */
  function openScale(sectionIndex) {
    if (!kenBurns) return 1;
    var t = trans[sectionIndex];
    return (t && t.camera === 'dolly') ? 1 : 1 + kbRange();
  }

  /* Frame 0 is, by construction, the same picture as the panel's own still -
     the extractor builds them from one source and refuses to ship them if
     they differ. So it is never downloaded: the canvas draws the still's own
     <img>, which is already in memory. That saves ~200KB a panel and makes
     the handover exact rather than merely verified. */
  function prime(tr, still) {
    tr.head = still;
    if (tr.primed) return;
    tr.primed = true;
    var pre = isMobile() ? 'm' : 'd', left = tr.n - 1;
    tr.imgs = [null];
    for (var i = 1; i < tr.n; i++) {
      var im = new Image();
      im.decoding = 'async';
      /* the last frame to arrive has to ask for a repaint: a visitor sitting
         still at the top of the page gets no scroll event to trigger one */
      var done = function () { if (--left === 0) { tr.ready = true; onScroll(); } };
      im.onload = done;
      im.onerror = done;
      im.src = ver('frames/' + tr.id + '/' + pre + pad2(i) + '.webp');
      tr.imgs.push(im);
    }
  }

  function drawFrame(tr, i) {
    var im = (i === 0) ? tr.head : tr.imgs[i];
    if (!im || !im.complete || !im.naturalWidth) return false;
    var cw = scrub.width, ch = scrub.height;
    var k = Math.max(cw / im.naturalWidth, ch / im.naturalHeight);
    var dw = im.naturalWidth * k, dh = im.naturalHeight * k;
    sctx.drawImage(im, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    return true;
  }

  if (!reduced && window.fetch) {
    fetch(ver('frames/manifest.json')).then(function (r) {
      return r.ok ? r.json() : null;
    }).then(function (man) {
      if (!man) return;
      for (var i = 0; i < sections.length - 1; i++) {
        var a = sections[i].getAttribute('data-bg');
        var b = sections[i + 1].getAttribute('data-bg');
        for (var id in man) {
          if (man[id].from === a && man[id].to === b) {
            trans[i] = { id: id, n: man[id].frames, imgs: [],
                         kind: man[id].kind || 'transition',
                         camera: man[id].camera || 'locked',
                         primed: false, ready: false };
          }
        }
      }
      sizeScrub();
      /* boot already painted once, before this landed. Repaint so a visitor
         who has not scrolled yet still gets the sequence primed in time. */
      onScroll();
    })['catch'](function () { /* the crossfade is already the fallback */ });
  }

  /* ------------------------------------------------------------
     1b. JOURNEY RAIL
     ------------------------------------------------------------ */
  var rail = document.getElementById('rail');
  var stops = [].slice.call(document.querySelectorAll('[data-stop]')).map(function (el) {
    return { el: el, name: el.getAttribute('data-stop') };
  });
  var railItems = [], railAt = -1;

  stops.forEach(function (s, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'rail__item';
    b.setAttribute('aria-label', 'לקפוץ אל ' + s.name);
    b.innerHTML = '<span class="rail__label">' + s.name + '</span><span class="rail__dot"></span>';
    b.addEventListener('click', function () {
      window.scrollTo({ top: s.el.offsetTop + 4, behavior: reduced ? 'auto' : 'smooth' });
    });
    rail.appendChild(b);
    railItems.push(b);
  });

  function paint() {
    ticking = false;
    var vh = window.innerHeight;
    var mid = window.scrollY + vh * 0.5;

    var active = 0, prog = 0, aTop = 0, aH = 1;
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i], top = s.offsetTop, h = s.offsetHeight;
      if (mid >= top && mid < top + h) { active = i; prog = (mid - top) / h; aTop = top; aH = h; break; }
      if (mid >= top + h) { active = i; prog = 1; aTop = top; aH = h; }
    }

    // preload the next two frames before they are needed
    load(order[active]); load(order[active + 1]); load(order[active + 2]);

    var FADE = 0.24;
    var t = (prog - (1 - FADE)) / FADE;
    var blend = t > 0 ? t * t * (3 - 2 * t) : 0;   // smoothstep
    var aFrame = order[active];
    var bFrame = order[active + 1];

    /* Only the one or two frames in play get written to. Touching all 24 every
       animation frame was enough style work to make a phone stutter. */
    var showA = 1 - (bFrame !== undefined && bFrame !== aFrame ? blend : 0);
    var showB = (bFrame !== undefined && bFrame !== aFrame && blend > 0) ? blend : 0;

    /* Clear everything that will not be written to below. Testing only against
       bFrame was the bug: a frame queued as "next" but not actually shown this
       pass was skipped by the clear AND never re-tracked, so it stayed lit. */
    /* A rendered transition owns this handover: the canvas shows the camera
       move and both still layers go dark beneath it. */
    var tr = trans[active], useScrub = false, life = false, tf = 0;
    if (tr) {
      /* 'life' spends the whole panel on the footage and simply crossfades out
         at the end, so the same seconds of camera travel are spread over the
         entire scroll instead of being crammed into the handover. */
      life = (tr.kind === 'life');
      if (life) {
        /* progress is measured at the viewport centre, so the first panel can
           never report less than half and the last never more — without this
           remap a whole half of the sequence is simply unreachable. */
        var docH = document.documentElement.scrollHeight;
        var r0 = Math.max(0, (vh * 0.5 - aTop) / aH);
        var r1 = Math.min(1, (docH - vh * 0.5 - aTop) / aH);
        tf = (prog - r0) / Math.max(0.15, r1 - r0);
      } else {
        tf = (prog - (1 - TRANS_FADE)) / TRANS_FADE;
      }
      /* sized here rather than at setup: the stage can still be measuring
         itself when the manifest lands, and the guard makes this ~free */
      if (tf > -0.35) { sizeScrub(); prime(tr, frames[aFrame].img); }
      if (tf >= 0 && tr.ready) {
        var tc = tf > 1 ? 1 : tf;
        var want = Math.round(tc * (tr.n - 1));
        if ((painted.id !== tr.id || painted.idx !== want) && drawFrame(tr, want)) {
          painted.id = tr.id; painted.idx = want;
        }
        /* only trust the canvas while it actually holds THIS panel's frame */
        useScrub = (painted.id === tr.id);
      }
    }
    /* a sequence one panel ahead needs its head start too */
    /* Lead time for the next panel, but not so early that a visitor who
       lands and never scrolls pays for it: at rest on the hero prog is 0.5. */
    var nx = trans[active + 1];
    if (nx && prog > 0.58 && frames[order[active + 1]]) {
      sizeScrub();
      prime(nx, frames[order[active + 1]].img);
    }

    /* in life mode the canvas simply IS layer A, so layer B still fades in
       over it exactly as it always did */
    var keepA = useScrub ? -1 : aFrame;
    var keepB = ((life || !useScrub) && showB > 0) ? bFrame : -1;
    for (var n = 0; n < live.length; n++) {
      var liveIdx = live[n];
      if (liveIdx !== keepA && liveIdx !== keepB) {
        var f0 = frames[liveIdx];
        f0.el.style.opacity = 0;
        f0.el.style.willChange = 'auto';
      }
    }
    live.length = 0;

    /* Cheap safety net: on a section change, reconcile every frame once. A fast
       flick can outrun the tracker, and this costs nothing between changes. */
    if (active !== current) {
      for (var q = 0; q < frames.length; q++) {
        if (q !== keepA && q !== keepB && frames[q].el.style.opacity !== '0'
            && frames[q].el.style.opacity !== '') {
          frames[q].el.style.opacity = 0;
          frames[q].el.style.willChange = 'auto';
        }
      }
    }

    var wantOp = useScrub ? (life ? showA : 1) : 0;
    if (useScrub && life && tf > 1) wantOp = showA;   // stay put past the end
    if (wantOp !== scrubOp) { scrub.style.opacity = wantOp; scrubOp = wantOp; }

    if (useScrub && life) {
      /* The canvas has to carry EXACTLY the zoom the still layer would have at
         this scroll position. Leaving it at scale 1 while the still sat at
         1.027 made the picture jump the instant the canvas took over. The
         footage is locked off, so this gentle zoom is the only camera move in
         the panel — the same one every other panel has. */
      /* footage that already dollies carries its own move - stacking the
         page's zoom on top of it is the doubling-up that read as coarse */
      var o = openScale(active);
      if (o === 1) { scrub.style.transform = ''; }
      else {
        scrub.style.transform =
          'scale(' + (o - prog * kbRange()).toFixed(4) + ')';
      }
    } else if (useScrub && kenBurns) {
      /* Pick the zoom up exactly where layer A left it and hand it to layer B
         exactly where B expects it, so neither seam pops. */
      var kb = kbRange();
      var z0 = 1 + kb - (1 - TRANS_FADE) * kb;
      var z1 = 1 + kb * 1.4 - kb * 0.5;
      var tz = tf > 1 ? 1 : tf;
      scrub.style.transform = 'scale(' + (z0 + (z1 - z0) * tz).toFixed(4) + ')';
    }

    if (useScrub && !life) {          // the canvas owns the whole handover
      if (active !== current) current = active;
      paintChrome(vh, mid);
      return;
    }

    var fa = useScrub ? null : frames[aFrame];
    if (fa) {
      fa.el.style.opacity = showA;
      fa.el.style.willChange = 'opacity, transform';
      /* the still must sit at whatever scale the canvas will take over at,
         or the picture jumps the instant the visitor scrolls */
      var aOpen = openScale(active);
      if (aOpen === 1) { fa.el.style.transform = ''; }
      else { fa.el.style.transform = 'scale(' + (aOpen - prog * kbRange()).toFixed(4) + ')'; }
      live.push(aFrame);
    }
    if (showB > 0) {
      var fb = frames[bFrame];
      fb.el.style.opacity = showB;
      fb.el.style.willChange = 'opacity, transform';
      /* B must arrive at exactly the scale its own panel will open at. It used
         to land on 1.0496 regardless, so a panel whose footage dollies - and
         therefore opens at 1 - jumped 4.7% the instant it became active. */
      var bOpen = openScale(active + 1);
      if (!kenBurns) { fb.el.style.transform = ''; }
      else if (bOpen === 1) { fb.el.style.transform = ''; }
      else {
        var bFrom = 1 + kbRange() * 1.4;
        fb.el.style.transform =
          'scale(' + (bFrom + (bOpen - bFrom) * showB).toFixed(4) + ')';
      }
      live.push(bFrame);
    }

    if (active !== current) current = active;
    paintChrome(vh, mid);
  }

  /* rail + header + floating whatsapp — runs whichever way the stage painted */
  function paintChrome(vh, mid) {
    if (stops.length) {
      var first = stops[0].el.offsetTop - vh * 0.5;
      var last = stops[stops.length - 1].el.offsetTop + stops[stops.length - 1].el.offsetHeight;
      var inJourney = window.scrollY > first && window.scrollY < last;
      rail.classList.toggle('show', inJourney);
      if (inJourney) {
        var at = 0;
        for (var k = 0; k < stops.length; k++) {
          if (mid >= stops[k].el.offsetTop) at = k;
        }
        if (at !== railAt) {
          railAt = at;
          railItems.forEach(function (b, i) { b.classList.toggle('active', i === at); });
        }
      }
    }

    // header + floating whatsapp
    hdr.classList.toggle('solid', window.scrollY > vh * 0.55);
    waFloat.classList.toggle('on', window.scrollY > vh * 0.9);
  }

  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }

  /* swap between -w and -m sources when the breakpoint is crossed */
  var wasMobile = isMobile();
  window.addEventListener('resize', function () {
    if (isMobile() !== wasMobile) {
      wasMobile = isMobile();
      kenBurns = !reduced;
      frames.forEach(function (f) {
        if (f.loaded) f.img.src = srcFor(f.key);
        f.el.style.transform = '';
      });
      /* the sequences are cut per device class, so they are fetched again */
      trans.forEach(function (t) {
        if (t) { t.primed = false; t.ready = false; t.imgs = []; }
      });
      painted.id = null; painted.idx = -1;
    }
    sizeScrub();
    onScroll();
  });

  /* ------------------------------------------------------------
     2. HEADER
     ------------------------------------------------------------ */
  var hdr = document.getElementById('hdr');
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');

  var hdrSocial = document.querySelector('.hdr__social');

  /* On a phone the closed menu is only opacity:0 and pointer-events:none.
     Both of those are invisible to a screen reader, which happily reads out a
     full navigation that is not on the screen - and tab still lands in it. So
     the closed menu is made `inert`, which removes it from the accessibility
     tree AND from the tab order, and that is undone at desktop width where the
     same element is the real, permanently visible nav. */
  /* Do NOT re-declare the breakpoint here. A copy of `max-width:768px` in JS
     is a second source of truth that silently drifts from the CSS, and relying
     on the matchMedia `change` event alone failed outright in testing: the nav
     stayed inert at 1440px, which would have made the site's main navigation
     unreachable by keyboard - an accessibility fix that breaks accessibility.
     The burger's own computed display IS the answer to "is this a toggle menu
     right now", it comes from the same CSS, and it cannot drift. */
  function menuIsToggle() {
    return getComputedStyle(burger).display !== 'none';
  }

  function syncNavHidden() {
    var hide = menuIsToggle() && !nav.classList.contains('on');
    if (hide) { nav.setAttribute('inert', ''); nav.setAttribute('aria-hidden', 'true'); }
    else      { nav.removeAttribute('inert'); nav.removeAttribute('aria-hidden'); }
  }

  function closeMenu() {
    nav.classList.remove('on');
    burger.classList.remove('on');
    if (hdrSocial) hdrSocial.classList.remove('on');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    syncNavHidden();
    /* send focus back where it came from, or it is left on a node that has
       just been made inert and the user is stranded at the top of the page */
    try { burger.focus({ preventScroll: true }); } catch (err) { burger.focus(); }
  }

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('on');
    burger.classList.toggle('on', open);
    if (hdrSocial) hdrSocial.classList.toggle('on', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    syncNavHidden();
    if (open) {
      var first = nav.querySelector('a[href]');
      if (first) { try { first.focus({ preventScroll: true }); } catch (err) { first.focus(); } }
    }
  });

  syncNavHidden();
  var navSyncTimer;
  window.addEventListener('resize', function () {
    clearTimeout(navSyncTimer);
    navSyncTimer = setTimeout(syncNavHidden, 120);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && nav.classList.contains('on')) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('on')) closeMenu();
  });

  /* ------------------------------------------------------------
     3. REVEAL ON SCROLL
     ------------------------------------------------------------ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  function observeReveals() {
    document.querySelectorAll('.rv:not(.on)').forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------
     4. ITINERARY ACCORDION
     ------------------------------------------------------------ */
  function buildDays() {
    var host = document.getElementById('days');
    if (!host) return;
    var src = (current_lang === 'en' && typeof ITINERARY_EN !== 'undefined') ? ITINERARY_EN : ITINERARY;
    if (typeof src === 'undefined') return;
    host.innerHTML = '';

    src.forEach(function (day, i) {
      var wrap = document.createElement('div');
      wrap.className = 'day';

      var btn = document.createElement('button');
      btn.className = 'day__btn';
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      btn.id = 'dayBtn' + i;
      btn.setAttribute('aria-controls', 'dayBody' + i);
      btn.innerHTML =
        '<span class="day__no">' + day.d + '</span>' +
        '<span class="day__ttl">' + day.t + '</span>' +
        '<span class="day__x" aria-hidden="true"></span>';

      var body = document.createElement('div');
      body.className = 'day__body';
      body.id = 'dayBody' + i;
      body.setAttribute('role', 'region');
      body.setAttribute('aria-labelledby', 'dayBtn' + i);
      body.innerHTML = '<p>' + day.b +
        (day.stay ? '<span class="stay">' + day.stay + '</span>' : '') + '</p>';

      btn.addEventListener('click', function () {
        var open = wrap.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        body.style.maxHeight = open ? body.scrollHeight + 'px' : 0;
      });

      wrap.appendChild(btn); wrap.appendChild(body); host.appendChild(wrap);
    });
  }

  // keep open panels correct after a resize reflows the text
  window.addEventListener('resize', function () {
    document.querySelectorAll('.day.open .day__body').forEach(function (b) {
      b.style.maxHeight = b.scrollHeight + 'px';
    });
  });


  /* ------------------------------------------------------------
     4b. THE ROUTE MAP
     Every word on this map comes from ITINERARY. It holds place
     names and coordinates and nothing else - the moment it carries
     its own prose it starts drifting from what the itinerary says,
     and a map that contradicts the itinerary is worse than none.
     ------------------------------------------------------------ */
  var MAP_STOPS = [
    {he:'קטמנדו',    en:'Kathmandu',   lon:85.324, lat:27.717, days:[0,1,6,11,12,13], dx:-96, dy:-34},
    {he:'מנזר קופאן', en:'Kopan',       lon:85.362, lat:27.744, days:[2],       dx: 82, dy:-70},
    {he:'פאטן',      en:'Patan',       lon:85.324, lat:27.667, days:[3],       dx:-88, dy: 44},
    {he:'נמובודהה',  en:'Namobuddha',  lon:85.584, lat:27.571, days:[4,5,6],   dx: 26, dy: 54},
    {he:'הטריסולי',  en:'The Trisuli', lon:84.850, lat:27.850, days:[7],       dx:  0, dy: 46},
    {he:'בנדיפור',   en:'Bandipur',    lon:84.417, lat:27.933, days:[7],       dx:  0, dy:-38},
    {he:'פוקרה',     en:'Pokhara',     lon:83.986, lat:28.209, days:[8,9,11],  dx:  6, dy: 50},
    {he:'דאמפוס',    en:'Dhampus',     lon:83.850, lat:28.310, days:[10],      dx: 88, dy:-28},
    {he:'אסטם',      en:'Astam',       lon:83.870, lat:28.262, days:[10,11],   dx:-74, dy: 40}
  ];
  var MAP_PEAKS = [
    {he:'אנפורנה', en:'Annapurna', lon:83.820, lat:28.596},
    {he:'מאצ׳אפוצ׳רה', en:'Machhapuchhre', lon:83.949, lat:28.495},
    {he:'לנגטנג', en:'Langtang', lon:85.517, lat:28.256}
  ];

  var MAPBOX = {w:1200, h:540, pad:{t:132, r:90, b:78, l:90}};
  var MAP_LON = [83.72, 85.70], MAP_LAT = [27.50, 28.42];
  var MAP_K = Math.cos(28 * Math.PI / 180);

  function mapPt(lon, lat) {
    var x0 = MAP_LON[0] * MAP_K, x1 = MAP_LON[1] * MAP_K, xv = lon * MAP_K;
    var w = MAPBOX.w - MAPBOX.pad.l - MAPBOX.pad.r;
    var h = MAPBOX.h - MAPBOX.pad.t - MAPBOX.pad.b;
    return [ MAPBOX.pad.l + (xv - x0) / (x1 - x0) * w,
             MAPBOX.pad.t + (MAP_LAT[1] - lat) / (MAP_LAT[1] - MAP_LAT[0]) * h ];
  }

  function dayRange(idx, src, he) {
    var ns = idx.map(function (k) { return parseInt(src[k].d.replace(/[^0-9]/g, ''), 10); })
                .sort(function (a, b) { return a - b; });
    var runs = [], i = 0;
    while (i < ns.length) {
      var a = ns[i], b = a;
      while (i + 1 < ns.length && ns[i+1] === b + 1) { b = ns[++i]; }
      runs.push(a === b ? String(a) : a + '–' + b);
      i++;
    }
    var txt = runs.join(', ');
    if (ns.length === 1) return (he ? 'יום ' : 'Day ') + txt;
    return (he ? 'ימים ' : 'Days ') + txt;
  }

  var mapDrawn = false, mapSel = -1, mapLens = null;

  function buildMap() {
    var svg = document.getElementById('jmap');
    if (!svg) return;
    var src = (current_lang === 'en' && typeof ITINERARY_EN !== 'undefined') ? ITINERARY_EN : ITINERARY;
    if (typeof src === 'undefined') return;
    var he = (current_lang !== 'en');
    var NS = 'http://www.w3.org/2000/svg';
    function E(t, a) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); return e; }

    /* ---- terrain: drawn once, it does not change with language ---- */
    var terrain = document.getElementById('jterrain');
    if (!terrain.childNodes.length) {
      function ridge(seed, base, amp, fill, stroke) {
        var pts = [], n = 64, x0 = -60, x1 = MAPBOX.w + 60;
        for (var i = 0; i <= n; i++) {
          var x = x0 + i * (x1 - x0) / n, t = i * 0.34 + seed;
          var v = Math.sin(t) * 0.50 + Math.sin(t * 2.17 + seed) * 0.28 +
                  Math.sin(t * 4.4 + seed * 1.9) * 0.14 + Math.sin(t * 8.3 + seed * 2.7) * 0.08;
          pts.push([x, base - Math.abs(v) * amp]);
        }
        var line = pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join('L');
        /* fill and outline as two paths: one closed path that is both filled
           and stroked draws its own flat baseline, and that straight bright
           line across the frame reads as the edge of a box, not a range */
        terrain.appendChild(E('path', {d:'M' + x0 + ',' + base + 'L' + line + 'L' + x1 + ',' + base + 'Z',
          fill:fill, stroke:'none'}));
        terrain.appendChild(E('path', {d:'M' + line, fill:'none', stroke:stroke,
          'stroke-width':1.1, 'class':'jridge'}));
      }
      ridge(1.0, 150, 76, 'url(#ridgefade)',  'rgba(244,241,234,.11)');
      ridge(3.3, 161, 50, 'url(#ridgefade2)', 'rgba(244,241,234,.17)');
      var r1 = mapPt(85.05, 27.92), r2 = mapPt(84.80, 27.83), r3 = mapPt(84.55, 27.86);
      terrain.appendChild(E('path', {'class':'jriver',
        d:'M' + r1[0] + ',' + r1[1] + 'Q' + r2[0] + ',' + (r2[1] + 16) + ' ' + r3[0] + ',' + r3[1]}));
    }
    /* peak names do change with language */
    [].slice.call(terrain.querySelectorAll('.jpeak,.jpeakmark')).forEach(function (n) { n.remove(); });
    MAP_PEAKS.forEach(function (p) {
      var c = mapPt(p.lon, p.lat), x = c[0], y = Math.max(54, Math.min(c[1], 104));
      terrain.appendChild(E('path', {'class':'jpeakmark',
        d:'M' + (x - 9) + ',' + (y + 13) + 'L' + x + ',' + y + 'L' + (x + 9) + ',' + (y + 13)}));
      var t = E('text', {x:x, y:y - 8, 'class':'jpeak', 'text-anchor':'middle'});
      t.textContent = he ? p.he : p.en; terrain.appendChild(t);
    });

    /* ---- the route ---- */
    var pts = MAP_STOPS.map(function (s) { return mapPt(s.lon, s.lat); });
    var d = 'M' + pts[0][0].toFixed(1) + ',' + pts[0][1].toFixed(1);
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i-1] || pts[i], p1 = pts[i], p2 = pts[i+1], p3 = pts[i+2] || p2;
      d += 'C' + (p1[0] + (p2[0]-p0[0])/6).toFixed(1) + ',' + (p1[1] + (p2[1]-p0[1])/6).toFixed(1) +
           ' ' + (p2[0] - (p3[0]-p1[0])/6).toFixed(1) + ',' + (p2[1] - (p3[1]-p1[1])/6).toFixed(1) +
           ' ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1);
    }
    var route = document.getElementById('jroute');
    route.setAttribute('d', d);
    document.getElementById('jghost').setAttribute('d', d);

    /* the flight home. Day 12 ends in Kathmandu, not in the west - a one-way
       line stopping at Astam would say the trip ends there, and it does not. */
    var pk = mapPt(83.986, 28.209), kt = mapPt(85.324, 27.717);
    var fl = document.getElementById('jflight');
    fl.setAttribute('d', 'M' + pk[0] + ',' + (pk[1] - 12) + 'Q' + ((pk[0]+kt[0])/2) + ',' +
      (Math.min(pk[1], kt[1]) - 118) + ' ' + kt[0] + ',' + (kt[1] - 12));
    var flbl = document.getElementById('jflightlbl');
    var day12 = src[11];
    flbl.textContent = (he ? 'טיסה חזרה · ' : 'Flight back · ') + day12.d;
    flbl.setAttribute('x', (pk[0] + kt[0]) / 2);
    flbl.setAttribute('y', Math.min(pk[1], kt[1]) - 66);

    /* ---- stops ---- */
    var gs = document.getElementById('jstops');
    gs.innerHTML = '';
    var nodes = MAP_STOPS.map(function (s, i) {
      var c = mapPt(s.lon, s.lat), lx = c[0] + s.dx, ly = c[1] + s.dy, up = s.dy < 0;
      var g = E('g', {'class':'jstop', tabindex:'0', role:'button'});
      g.setAttribute('aria-label', (he ? s.he : s.en));
      if (Math.abs(s.dx) > 18 || Math.abs(s.dy) > 36) {
        var ex = lx - Math.sign(s.dx) * Math.min(Math.abs(s.dx) * 0.42, 26);
        g.appendChild(E('path', {'class':'jleader',
          d:'M' + c[0].toFixed(1) + ',' + c[1].toFixed(1) + 'L' + ex.toFixed(1) + ',' + (ly + (up ? 7 : -15)).toFixed(1)}));
      }
      g.appendChild(E('circle', {cx:c[0], cy:c[1], r:15, 'class':'jstop__halo'}));
      g.appendChild(E('circle', {cx:c[0], cy:c[1], r:5.2, 'class':'jstop__dot'}));
      var lbl = E('text', {x:lx, y:ly, 'class':'jstop__lbl', 'text-anchor':'middle'});
      lbl.textContent = he ? s.he : s.en; g.appendChild(lbl);
      /* the day numbers are read off ITINERARY, never typed here.
         Contiguous runs collapse; gaps do NOT. Kathmandu is days 1, 2, 7 and
         12-14, and writing that as "1-14" would claim the whole trip happens
         there. Pokhara has the same trap. */
      var day = E('text', {x:lx, y:ly + (up ? -20 : 20), 'class':'jstop__day', 'text-anchor':'middle'});
      day.textContent = dayRange(s.days, src, he);
      g.appendChild(day);
      gs.appendChild(g);
      g.addEventListener('click', function () { mapSelect(i, src, he); });
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); mapSelect(i, src, he); }
      });
      g.addEventListener('pointerenter', function () { g.classList.add('on'); });
      g.addEventListener('pointerleave', function () { g.classList.remove('on'); });
      return g;
    });
    svg.__nodes = nodes;

    /* distance of each stop along the path, measured once */
    var len = route.getTotalLength();
    mapLens = MAP_STOPS.map(function (s) {
      var c = mapPt(s.lon, s.lat), best = 0, bd = 1e9;
      for (var L = 0; L <= len; L += len / 400) {
        var pt = route.getPointAtLength(L);
        var dd = (pt.x - c[0]) * (pt.x - c[0]) + (pt.y - c[1]) * (pt.y - c[1]);
        if (dd < bd) { bd = dd; best = L; }
      }
      return best;
    });
    svg.__len = len;

    mapSel = -1;
    mapHint(he);
    if (mapDrawn) { mapDrawTo(len, 0); nodes.forEach(function (n) { n.classList.add('passed'); }); }
  }

  function mapHint(he) {
    document.getElementById('jread').innerHTML = '<p class="jread__hint">' +
      (he ? 'בחרו תחנה על המפה' : 'Choose a stop on the map') + '</p>';
  }

  function mapDrawTo(target, dur) {
    var route = document.getElementById('jroute'), len = document.getElementById('jmap').__len;
    var from = len - (parseFloat(route.style.strokeDashoffset) || 0);
    route.style.strokeDasharray = len + ' ' + len;
    if (dur === 0 || prefersReducedMotion()) { route.style.transition = 'none'; }
    else {
      if (dur === undefined) dur = 340 + Math.abs(target - from) / len * 1500;
      route.style.transition = 'stroke-dashoffset ' + Math.round(dur) + 'ms cubic-bezier(.33,.02,.2,1)';
    }
    route.style.strokeDashoffset = (len - target);
  }
  function prefersReducedMotion() {
    return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function mapSelect(i, src, he) {
    var svg = document.getElementById('jmap'), nodes = svg.__nodes, len = svg.__len;
    var read = document.getElementById('jread');
    if (i === mapSel) {                       /* a way back, or the map sticks on a fragment */
      mapSel = -1;
      nodes.forEach(function (n) { n.classList.remove('sel'); n.classList.add('passed'); });
      mapDrawTo(len); mapHint(he); return;
    }
    mapSel = i;
    nodes.forEach(function (n, j) {
      n.classList.toggle('sel', j === i);
      n.classList.toggle('passed', j <= i);
    });
    mapDrawTo(mapLens[i]);

    /* The day's own words arrive here rather than sending the reader up the
       page to the accordion and back down. It is still ITINERARY's text - the
       single source is unchanged, only the place it is shown. */
    var s = MAP_STOPS[i];
    mapShow(i, 0, src, he);
  }

  function mapShow(i, pick, src, he) {
    var s = MAP_STOPS[i], read = document.getElementById('jread');
    var day = src[s.days[pick]];
    var tabs = '';
    if (s.days.length > 1) {
      /* Kathmandu covers six days. Six bodies at once would make the page jump
         by a screenful; day tabs keep the panel a calm, fixed height. */
      tabs = '<div class="jread__tabs" role="tablist">' + s.days.map(function (k, n) {
        return '<button class="jread__tab' + (n === pick ? ' on' : '') + '" type="button" role="tab" ' +
               'aria-selected="' + (n === pick) + '" data-pick="' + n + '">' +
               src[k].d.replace(/[^0-9]/g, '') + '</button>';
      }).join('') + '</div>';
    }
    read.innerHTML =
      '<div class="jread__in">' +
        '<div class="jread__top">' +
          '<p class="jread__place">' + (he ? s.he : s.en) + '</p>' + tabs +
        '</div>' +
        '<div class="jread__body" id="jbody">' +
          '<p class="jread__d">' + day.d + '</p>' +
          '<h3 class="jread__t">' + day.t + '</h3>' +
          '<p class="jread__b">' + day.b + '</p>' +
          (day.stay ? '<p class="jread__stay">' + day.stay + '</p>' : '') +
        '</div>' +
        '<p class="jread__back">' + (he
          ? 'לחיצה נוספת על התחנה מחזירה את כל המסלול.'
          : 'Tapping the stop again restores the whole line.') + '</p>' +
      '</div>';

    /* stagger the lines in, so the text arrives instead of appearing */
    var body = document.getElementById('jbody');
    [].slice.call(body.children).forEach(function (el, n) {
      el.style.animationDelay = (60 + n * 70) + 'ms';
    });

    read.querySelectorAll('.jread__tab').forEach(function (b) {
      b.addEventListener('click', function () {
        mapShow(i, parseInt(b.getAttribute('data-pick'), 10), src, he);
      });
    });
  }
  function mapArm() {
    var svg = document.getElementById('jmap');
    if (!svg || !('IntersectionObserver' in window)) { mapDrawn = true; return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting || mapDrawn) return;
        mapDrawn = true; io.disconnect();
        var nodes = svg.__nodes, len = svg.__len;
        if (prefersReducedMotion()) {
          mapDrawTo(len, 0); nodes.forEach(function (n) { n.classList.add('passed'); }); return;
        }
        var route = document.getElementById('jroute');
        route.style.transition = 'none';
        route.style.strokeDasharray = len + ' ' + len;
        route.style.strokeDashoffset = len;
        nodes.forEach(function (n) { n.classList.remove('passed'); });
        route.getBoundingClientRect();
        var DUR = 2600;
        mapDrawTo(len, DUR);
        MAP_STOPS.forEach(function (s, i) {
          setTimeout(function () { nodes[i].classList.add('passed'); }, (mapLens[i] / len) * DUR + 120);
        });
      });
    }, {threshold:.3});
    io.observe(svg);
  }

  /* ------------------------------------------------------------
     5. TESTIMONIALS
     ------------------------------------------------------------ */
  function buildVoices() {
    var host = document.getElementById('quotes');
    if (!host) return;
    var src = (current_lang === 'en' && typeof VOICES_EN !== 'undefined') ? VOICES_EN : VOICES;
    if (typeof src === 'undefined') return;
    host.innerHTML = '';
    src.forEach(function (v) {
      var q = document.createElement('figure');
      q.className = 'quote';
      q.innerHTML =
        '<blockquote class="quote__txt">' + v.q + '</blockquote>' +
        '<figcaption class="quote__by">' +
          '<span class="quote__name">' + v.n + '</span>' +
          '<span class="quote__meta">' + v.m + '</span>' +
        '</figcaption>';
      host.appendChild(q);
    });
  }

  /* stop names on the journey rail follow the language too */
  var STOPS_EN = { 'קטמנדו':'Kathmandu', 'קופאן':'Kopan', 'טימי':'Thimi', 'פאטן':'Patan',
    'נמובודהה':'Namobuddha', 'הטריסולי':'Trisuli', 'בנדיפור':'Bandipur',
    'פוקרה':'Pokhara', 'סאמאר':'Samar', 'אסטם':'Astam', 'חזרה':'Return' };
  function buildRailLabels() {
    railItems.forEach(function (b, i) {
      var he = stops[i].name;
      var label = (current_lang === 'en') ? (STOPS_EN[he] || he) : he;
      var span = b.querySelector('.rail__label');
      if (span) span.textContent = label;
      b.setAttribute('aria-label', (current_lang === 'en' ? 'Jump to ' : 'לקפוץ אל ') + label);
    });
  }

  /* ------------------------------------------------------------
     6. WHATSAPP — prefilled, and aware of what the visitor picked
     ------------------------------------------------------------ */
  function waHref() {
    var dep = document.getElementById('dep');
    var chosen = dep && dep.value ? dep.value : 'אוקטובר 2026';
    var base = (typeof t === 'function' && t('wa.msg')) || 'היי רועי, הגעתי דרך האתר של מגלי עולמות ואשמח לשמוע עוד על הטיול לנפאל';
    var msg = base + ' (' + chosen + ').';
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
  }
  var waFloat = document.getElementById('waFloat');
  var waLink = document.getElementById('waLink');
  function refreshWa() {
    var h = waHref();
    if (waFloat) waFloat.href = h;
    if (waLink) waLink.href = h;
  }
  refreshWa();
  var depSel = document.getElementById('dep');
  if (depSel) depSel.addEventListener('change', refreshWa);

  /* ------------------------------------------------------------
     7. FORM
     No backend is wired yet. Rather than silently losing an enquiry,
     the form hands the visitor straight to WhatsApp with everything
     they typed already written out.
     ------------------------------------------------------------ */
  var form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('fnote');
      var need = ['fn', 'ln', 'em', 'ph'];
      for (var i = 0; i < need.length; i++) {
        var el = document.getElementById(need[i]);
        if (!el.value.trim()) { el.focus(); note.textContent = t('form.missing'); return; }
      }
      var em = document.getElementById('em');
      if (!/^\S+@\S+\.\S+$/.test(em.value)) { em.focus(); note.textContent = t('form.badEmail'); return; }
      if (!document.getElementById('ok').checked) { note.textContent = t('form.consent'); return; }

      var v = function (id) { var e2 = document.getElementById(id); return e2 ? e2.value : ''; };
      var lines = [
        'היי רועי, הגעתי דרך האתר של מגלי עולמות.',
        '',
        'שם: ' + v('fn') + ' ' + v('ln'),
        'אימייל: ' + v('em'),
        'טלפון: ' + v('ph'),
        'יציאה: ' + v('dep'),
        'מספר מטיילים: ' + v('ppl'),
        'סוג חדר: ' + v('room')
      ];
      if (v('msg').trim()) { lines.push('', v('msg').trim()); }

      note.textContent = t('form.sending');

      /* The e-mail is a SILENT RECORD, not the visitor's channel. WhatsApp is
         what they see. This matters because until now a lead existed only for
         as long as wa.me managed to open: if the visitor had no WhatsApp, or a
         popup blocker stopped the tab, the enquiry vanished and nobody knew it
         had ever been made.

         Deliberately NOT awaited. window.open has to run in the same tick as
         the submit event or the browser treats it as an unrequested popup and
         blocks it - awaiting the POST first would break the visible channel to
         protect the invisible one. Any failure here is swallowed: the visitor
         has already been handed WhatsApp and must never see an error about a
         backup they were never told about. */
      if (W3F_KEY) {
        try {
          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: W3F_KEY,
              subject: 'פנייה חדשה מהאתר — ' + v('fn') + ' ' + v('ln'),
              from_name: 'מגלי עולמות · האתר',
              'שם': v('fn') + ' ' + v('ln'),
              email: v('em'),
              'טלפון': v('ph'),
              'יציאה': v('dep'),
              'מספר מטיילים': v('ppl'),
              'סוג חדר': v('room'),
              'הודעה': v('msg').trim() || '—',
              'שפת הגלישה': current_lang === 'en' ? 'English' : 'עברית'
            })
          })['catch'](function () { /* silent by design */ });
        } catch (err) { /* silent by design */ }
      }

      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }

  /* ------------------------------------------------------------
     8. LANGUAGE
     Swaps every tagged string, flips the document direction, and
     rebuilds the two generated lists. The choice is remembered.
     ------------------------------------------------------------ */
  var lang = document.getElementById('lang');
  var current_lang = 'he';

  function t(key) {
    var dict = (typeof I18N !== 'undefined' && I18N[current_lang]) || {};
    return dict[key];
  }

  function applyLang(code) {
    if (typeof I18N === 'undefined' || !I18N[code]) return;
    current_lang = code;

    var html = document.documentElement;
    html.lang = code;
    html.dir = (code === 'he') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-html'));
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-ph'));
      if (v !== undefined) el.placeholder = v;
    });

    // the departure meta rows repeat one string
    document.querySelectorAll('.dep__meta').forEach(function (el) {
      var v = t('dates.meta'); if (v) el.textContent = v;
    });

    // rebuild the generated lists in the new language
    buildDays();
    buildVoices();
    buildRailLabels();
    buildMap();

    if (lang) {
      lang.textContent = t('nav.langLabel') || (code === 'he' ? 'EN' : 'עב');
      lang.setAttribute('aria-label', code === 'he' ? 'Switch to English' : 'החלף לעברית');
    }
    document.getElementById('burger').setAttribute('aria-label', t('nav.menu') || 'תפריט');

    refreshWa();
    try { localStorage.setItem('mo_lang', code); } catch (e) {}
  }

  if (lang) {
    lang.addEventListener('click', function () {
      applyLang(current_lang === 'he' ? 'en' : 'he');
    });
  }

  /* ------------------------------------------------------------
     9. BOOT
     ------------------------------------------------------------ */
  document.getElementById('yr').textContent = new Date().getFullYear();

  var saved = null;
  try { saved = localStorage.getItem('mo_lang'); } catch (e) {}
  applyLang(saved === 'en' ? 'en' : 'he');

  mapArm();          /* the route draws itself the first time the map is scrolled into view */
  observeReveals();
  window.addEventListener('scroll', onScroll, { passive: true });
  paint();
})();
