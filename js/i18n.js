/* ============================================================
   שכבת השפה — עברית / אנגלית
   מפתחות תואמים ל-data-i18n ב-index.html
   ============================================================ */

const I18N = {
  he: {
    /* nav */
    "nav.journey":"המסלול", "nav.hosts":"האנשים", "nav.price":"המחיר",
    "nav.about":"מי אנחנו", "nav.voices":"המלצות", "nav.contact":"צרו קשר",
    "nav.langLabel":"EN", "nav.menu":"תפריט",

    /* hero */
    "hero.h1a":"מסע רחוק", "hero.h1b":"למקום קרוב",
    "hero.sub":"טיולי בוטיק לנפאל",
    "hero.m1":"14 ימים", "hero.m2":"10–11 מטיילים", "hero.m3":"4–17 באוקטובר 2026",
    "hero.cta1":"לשריין מקום", "hero.cta2":"לראות את המסלול",
    "hero.cue":"גללו והמסע מתחיל",

    /* manifest */
    "man.kicker":"מגלי עולמות",
    "man.h":"יש מקומות שמבקרים בהם,<br>ויש מקומות לחוות באמת",
    "man.p1":"נפאל היא בדיוק מקום כזה — ארץ של פסגות אדירות, תרבות עתיקה, מקדשים מרהיבים ואנשים חמים שמקבלים את פני המבקרים בלב פתוח.",
    "man.p2":"אנחנו מאמינים שטיול מוצלח הוא הרבה יותר מרשימת אתרים ונקודות עצירה. לכן יצרנו טיולי בוטיק ייחודיים לנפאל, המשלבים חוויות אותנטיות, קבוצות קטנות, ליווי אישי ותכנון מוקפד עד הפרט האחרון.",
    "man2.h":"לוקחים אתכם מעבר למסלולים המוכרים",
    "man2.p1":"אל כפרים מסורתיים, נופים עוצרי נשימה, מקומות מיוחדים שרוב המטיילים אינם מגיעים אליהם, ומפגשים אנושיים שהופכים כל מסע לחוויה בלתי נשכחת.",
    "man2.p2":"אנו מקפידים על קצב נעים, בתי אירוח נבחרים, תוכן איכותי וליווי מקצועי לאורך כל הדרך, כך שתוכלו ליהנות מהמסע בראש שקט ולהתמסר לחוויה.",
    "man3.h":"זאת לא סתם חופשה<br>אלא הזדמנות לפגוש את עצמך",
    "man3.p1":"זוהי הזמנה לטייל איתנו בקבוצה קטנה ואינטימית — טיול מיוחד, כמו לטייל עם חברים. אנחנו יודעים ליצור מרחב של ריפוי ושל הקשבה, שמאפשר לכל אחד להתחבר למרכז ולשקט של עצמו.",
    "man3.p2":"הטיול איתנו הוא חוויה צבעונית של טעמים, של טבע עוצמתי ושל מפגשים עם אנשים מיוחדים. הרבה רגעים קסומים שילכו אתכם הלאה בחיים.",

    /* dates */
    "a11y.skip":"דלג לתוכן הראשי",
    "dates.kicker":"הטיולים הבאים", "dates.h":"הטיולים של 2026",
    "dates.d1":"16–29 בספטמבר 2026", "dates.d2":"4–17 באוקטובר 2026",
    "dates.meta":"14 ימים · קבוצה של 10–11 מטיילים",
    "dates.full":"מלא", "dates.open":"ההרשמה בעיצומה",
    "dates.note":"הטיסה לקטמנדו ב-4 באוקטובר. נחיתה בנמל התעופה הבינלאומי טריבהוואן, קטמנדו.",
    "dates.cta":"לבדוק זמינות",

    /* itinerary */
    "itin.kicker":"תוכנית הטיול", "itin.h":"14 הימים, יום אחר יום",
    "itin.lede":"לחצו על כל יום כדי לפתוח את הפירוט המלא.",
    "itin.note":"בכל בוקר, לפני ארוחת הבוקר, מוזמנים להתחיל את היום עם צ'י קונג ומדיטציה עם עדי.",

    /* hosts */
    "hosts.kicker":"האנשים שתפגשו",
    "hosts.h":"זה לא מסלול.<br>אלה חברים שלנו.",
    "hosts.lede":"בכל טיול אנחנו לוקחים אתכם אל אנשים שהכרנו לאורך השנים. הם לא מדריכים ששכרנו — הם פותחים לכם את הבית, את הסדנה ואת השולחן שלהם.",

    /* price */
    "price.kicker":"המחיר", "price.h":"כמה עולה כל הכיף הזה",
    "price.lede":"המחיר למטייל בחדר זוגי, ומשתנה לפי גודל הקבוצה.",
    "price.r1":"קבוצה של 10–12 אנשים", "price.r2":"קבוצה של 6–9 אנשים",
    "price.r3":"קבוצה של עד 5 אנשים", "price.r4":"תוספת לחדר יחיד",
    "price.incH":"המחיר כולל", "price.excH":"המחיר אינו כולל",
    "price.allin":"כשאנחנו אומרים מחיר כולל הכל — הכוונה להכל.",

    /* about */
    "about.kicker":"מי אנחנו", "about.h":"מטיילים בטבע<br>ובנפש האדם",
    "about.lede":"מפיקים ומלווים טיולים וסדנאות בסיני, נפאל, הודו וישראל.",
    "about.roi":"רועי אסף", "about.roiRole":"רפלקסולוג, חקלאי, דייג",
    "about.adi":"עדי אסף", "about.adiRole":"מרצה ומטפלת ברפלקסולוגיה",
    "about.motto":"המוטו שלנו בכל טיול מאוד פשוט:<br>אנשים, נופים וטעמים.",

    /* voices */
    "voices.kicker":"מה אומרים מי שכבר היו",
    "voices.h":"הם חזרו,<br>וזה מה שהם כתבו",

    /* contact */
    "c.kicker":"צרו קשר", "c.h":"בואו נדבר",
    "c.lede":"השאירו פרטים ונחזור אליכם, או פשוט תרימו טלפון. אנחנו עונים.",
    "c.fn":"שם פרטי *", "c.ln":"שם משפחה *", "c.em":"אימייל *", "c.ph":"טלפון *",
    "c.dep":"איזו יציאה מעניינת אתכם?", "c.ppl":"כמה מטיילים?", "c.room":"סוג חדר",
    "c.msg":"נשמח להכיר", "c.msgPh":"ספרו לנו קצת על עצמכם, או שאלו אותנו כל דבר",
    "c.dep1":"4–17 באוקטובר 2026", "c.dep2":"16–29 בספטמבר 2026 — מלא", "c.dep3":"יציאה עתידית / עדיין לא בטוח",
    "c.ppl4":"4 ומעלה",
    "c.room1":"חדר זוגי", "c.room2":"חדר יחיד (תוספת 500$)", "c.room3":"עדיין לא יודע",
    "c.consent":"אני מאשר/ת שתחזרו אליי בטלפון, בוואטסאפ או במייל בנוגע לפנייה זו.",
    "c.submit":"שליחה",
    "c.wa":"וואטסאפ", "c.waSub":"התשובה הכי מהירה",
    "c.policyH":"מדיניות ביטול",
    "c.p1":"עד חודש לפני הטיול", "c.p1v":"ללא דמי ביטול",
    "c.p2":"בין 30 ל-21 יום לפני היציאה", "c.p2v":"50% מעלות הטיול",
    "c.p3":"בין 21 ל-8 ימים לפני היציאה", "c.p3v":"80% מעלות הטיול",
    "c.p4":"מ-7 ימים לפני היציאה", "c.p4v":"מלוא המחיר",

    /* footer + form messages */
    "ftr.tag":"מסע רחוק למקום קרוב",
    "ftr.fine":"מגלי עולמות · טיולי בוטיק לנפאל",
    "form.missing":"נשארו עוד כמה פרטים למלא.",
    "form.badEmail":"כתובת האימייל לא נראית תקינה.",
    "form.consent":"צריך לאשר שנוכל לחזור אליכם.",
    "form.sending":"פותח וואטסאפ עם הפרטים שמילאתם…",
    "wa.float":"דברו איתנו",
    "wa.msg":"היי רועי, הגעתי דרך האתר של מגלי עולמות ואשמח לשמוע עוד על הטיול לנפאל"
  },

  en: {
    "nav.journey":"The Route", "nav.hosts":"The People", "nav.price":"Pricing",
    "nav.about":"About Us", "nav.voices":"Reviews", "nav.contact":"Contact",
    "nav.langLabel":"עב", "nav.menu":"Menu",

    "hero.h1a":"A Far Journey", "hero.h1b":"to a Close Place",
    "hero.sub":"Boutique Journeys to Nepal",
    "hero.m1":"14 days", "hero.m2":"10–11 travellers", "hero.m3":"4–17 October 2026",
    "hero.cta1":"Reserve a Place", "hero.cta2":"See the Route",
    "hero.cue":"Scroll, and the journey begins",

    "man.kicker":"Magalei Olamot",
    "man.h":"Some places you visit,<br>and some you truly live",
    "man.p1":"Nepal is exactly that kind of place — a land of vast peaks, ancient culture, extraordinary temples, and warm people who greet visitors with an open heart.",
    "man.p2":"We believe a good journey is far more than a list of sites and stops. So we built boutique journeys to Nepal that bring together genuine experiences, small groups, personal guidance, and planning worked out to the last detail.",
    "man2.h":"We take you past the routes everybody knows",
    "man2.p1":"To traditional villages, breathtaking landscapes, places most travellers never reach, and human encounters that turn every journey into something you don't forget.",
    "man2.p2":"We keep an easy pace, choose our guesthouses carefully, and stay with you the whole way — so you can enjoy the journey with a quiet mind and simply give yourself to it.",
    "man3.h":"This isn't just a holiday.<br>It's a chance to meet yourself.",
    "man3.p1":"This is an invitation to travel with us in a small, intimate group — a journey that feels like travelling with friends. We know how to create a space of healing and of listening, where each person can find their own centre and quiet.",
    "man3.p2":"Travelling with us is a vivid experience of flavours, of powerful nature, and of meeting remarkable people. A great many small, magical moments that stay with you long afterwards.",

    "a11y.skip":"Skip to main content",
    "dates.kicker":"Upcoming Journeys", "dates.h":"2026 Departures",
    "dates.d1":"16–29 September 2026", "dates.d2":"4–17 October 2026",
    "dates.meta":"14 days · a group of 10–11 travellers",
    "dates.full":"Full", "dates.open":"Now Booking",
    "dates.note":"Flight to Kathmandu on 4 October. Arrival at Tribhuvan International Airport, Kathmandu.",
    "dates.cta":"Check Availability",

    "itin.kicker":"The Itinerary", "itin.h":"Fourteen days, one by one",
    "itin.lede":"Tap any day to open the full detail.",
    "itin.note":"Every morning, before breakfast, you're welcome to begin the day with Qi Gong and meditation with Adi.",

    "hosts.kicker":"The People You'll Meet",
    "hosts.h":"It isn't an itinerary.<br>They're our friends.",
    "hosts.lede":"On every journey we bring you to people we've come to know over the years. They aren't guides we hired — they open their home, their workshop and their table to you.",

    "price.kicker":"Pricing", "price.h":"What all this costs",
    "price.lede":"Price per traveller in a shared double room, varying with group size.",
    "price.r1":"Group of 10–12 people", "price.r2":"Group of 6–9 people",
    "price.r3":"Group of up to 5 people", "price.r4":"Single room supplement",
    "price.incH":"The price includes", "price.excH":"The price does not include",
    "price.allin":"When we say all-inclusive — we mean all of it.",

    "about.kicker":"About Us", "about.h":"Travellers in nature,<br>and in the human spirit",
    "about.lede":"We create and lead journeys and workshops in Sinai, Nepal, India and Israel.",
    "about.roi":"Roy Assaf", "about.roiRole":"Reflexologist, farmer, fisherman",
    "about.adi":"Adi Assaf", "about.adiRole":"Lecturer and reflexology practitioner",
    "about.motto":"Our motto on every journey is simple:<br>people, landscapes and flavours.",

    "voices.kicker":"From Those Who Have Been",
    "voices.h":"They came home,<br>and this is what they wrote",

    "c.kicker":"Contact", "c.h":"Let's talk",
    "c.lede":"Leave your details and we'll get back to you — or just pick up the phone. We answer.",
    "c.fn":"First name *", "c.ln":"Last name *", "c.em":"Email *", "c.ph":"Phone *",
    "c.dep":"Which departure interests you?", "c.ppl":"How many travellers?", "c.room":"Room type",
    "c.msg":"Tell us about yourself", "c.msgPh":"A little about you, or anything you'd like to ask",
    "c.dep1":"4–17 October 2026", "c.dep2":"16–29 September 2026 — full", "c.dep3":"A future departure / not sure yet",
    "c.ppl4":"4 or more",
    "c.room1":"Shared double", "c.room2":"Single room (+$500)", "c.room3":"Not sure yet",
    "c.consent":"I agree that you may contact me by phone, WhatsApp or email about this enquiry.",
    "c.submit":"Send",
    "c.wa":"WhatsApp", "c.waSub":"The fastest reply",
    "c.policyH":"Cancellation policy",
    "c.p1":"Up to one month before departure", "c.p1v":"No cancellation fee",
    "c.p2":"Between 30 and 21 days before", "c.p2v":"50% of the trip cost",
    "c.p3":"Between 21 and 8 days before", "c.p3v":"80% of the trip cost",
    "c.p4":"From 7 days before departure", "c.p4v":"Full price",

    "ftr.tag":"A far journey to a close place",
    "ftr.fine":"Magalei Olamot · Boutique Journeys to Nepal",
    "form.missing":"A few details are still missing.",
    "form.badEmail":"That email address doesn't look right.",
    "form.consent":"Please confirm we may get back to you.",
    "form.sending":"Opening WhatsApp with your details…",
    "wa.float":"Talk to us",
    "wa.msg":"Hi Roy, I found you through the Magalei Olamot website and I'd love to hear more about the Nepal journey"
  }
};
