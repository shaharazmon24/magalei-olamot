# מגלי עולמות — האתר

אתר סטטי. אין תהליך בנייה, אין תלויות, אין שרת.

**חי בכתובת:** https://shaharazmon24.github.io/magalei-olamot/

```
site/
├── index.html              העמוד
├── css/style.css           העיצוב
├── js/
│   ├── i18n.js             מילון הממשק — עברית ואנגלית
│   ├── i18n-content.js     מילון התוכן — פאנלים, מארחים, מחירים, סיפור
│   ├── data.js             14 ימי המסלול + 14 המלצות (עברית)
│   ├── data-en.js          אותו דבר באנגלית
│   └── app.js              המנוע — גלילה, אקורדיון, טופס, שפה
└── img/                    24 רקעים × 2 גרסאות + לוגו
```

---

## הפעלה מקומית

```bash
python -m http.server 8900
```
ואז `http://127.0.0.1:8900`

> חייבים שרת. פתיחת הקובץ ישירות (`file://`) חוסמת טעינת תמונות וסקריפטים.

---

## פריסה — GitHub Pages

התיקייה הזו **היא** המאגר `shaharazmon24/magalei-olamot`.

```bash
git add -A && git commit -m "..." && git push
```

וזהו. Pages בונה מחדש תוך פחות מדקה. אין שלב build, אין CI.

**דומיין מותאם** (כשרועי יקנה): מוסיפים קובץ `CNAME` בשורש עם הדומיין, ומכוונים DNS ל-`shaharazmon24.github.io`.

<details>
<summary>חלופה: Netlify Drop</summary>

```bash
python research/make_zip.py     # יוצר magalei-olamot-site.zip
```
גוררים את ה-**ZIP** ל-`app.netlify.com/drop`.
⚠️ אל תגררו תיקייה — Netlify דורש `index.html` בשורש הארכיון.
</details>

---

## שתי שכבות השפה

לחיצה על `EN` מחליפה **הכל**: 188 מחרוזות, כיוון הקריאה (RTL↔LTR), 14 ימי המסלול, 14 ההמלצות, שמות תחנות המסע והודעת הוואטסאפ. הבחירה נשמרת ב-`localStorage`.

**להוספת טקסט חדש:**
1. בתגית ב-HTML: `data-i18n="key"` (טקסט) · `data-i18n-html="key"` (מכיל `<br>`) · `data-i18n-ph="key"` (placeholder)
2. מוסיפים `key` לשני המילונים ב-`i18n-content.js`

`research/find_untranslated.py` סורק ומאתר כל מחרוזת עברית שנשכחה.

---

## מנוע הרקעים — שתי מלכודות שכבר נפלנו בהן

**`paint()` נוגע רק ב-1–2 שכבות.** גרסה מוקדמת עברה על כל 24 בכל פריים — 48 כתיבות סגנון, 60 פעם בשנייה. טלפון לא עמד בזה.

**התנאי לניקוי חייב להיות מדויק.** הבאג שנוצר מהאופטימיזציה: פריים שהיה "הבא בתור" אך לא הוצג בפועל דולג בניקוי **וגם** לא נרשם למעקב — ונשאר דלוק לנצח. התנאי כעת בודק `showB > 0`, ובכל מעבר סעיף רצה סריקה מלאה כרשת ביטחון.

**נמדד:** חציון 18ms, אפס פריימים מעל 32ms, במובייל, כולל הזום.

---

## מה עוד פתוח

### ⚠️ הטופס — מצב ביניים
כרגע **פותח וואטסאפ** עם כל הפרטים כתובים. עובד, אבל **הלקוח עדיין צריך ללחוץ שלח**.

לחיבור אמיתי — [Web3Forms](https://web3forms.com), **חינם עד 250 פניות בחודש**, בלי כרטיס אשראי:
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="המפתח-של-רועי">
```
ואז להסיר את `e.preventDefault()` ב-`app.js`.

### ⚠️ ממתין לרועי
ראה `FOR-ROI.md` בשורש הפרויקט.

### 🎬 הבא: מעברי וידאו
ראה `research/03-IMAGE-VIDEO-METHOD.md`.

---

## נגישות ו-SEO

✅ `index, follow` (הישן היה `noindex`) · JSON-LD `TravelAgency` + `TouristTrip` + 3 הצעות מחיר · H1 יחיד · RTL מלא · `aria-expanded`/`aria-controls` באקורדיון · מיקוד מקלדת נראה · `prefers-reduced-motion` · Esc סוגר תפריט · טלפונים לחיצים · אפס גלילה אופקית · `rel="noopener"` בכל קישור חיצוני.

---

## סקריפטים

| קובץ | מה עושה |
|---|---|
| `research/make_zip.py` | ארכיון לפריסה ידנית |
| `research/verify_zip.py` | מאמת שכל נתיב שהעמוד מבקש קיים בארכיון |
| `research/pack_preview.py` | קובץ HTML יחיד עצמאי לשיתוף |
| `research/find_untranslated.py` | מאתר מחרוזות בלי תרגום |
| `research/dupe_check.py` | מאתר פאנלים עם תוכן זהה |
