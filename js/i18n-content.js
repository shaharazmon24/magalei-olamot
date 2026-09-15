/* ============================================================
   Content strings — panels, hosts, price lists, the founding story.
   Merged into I18N at load. Hebrew is the client's own wording;
   English is a translation of it, never a rewrite.
   ============================================================ */
(function () {
  var HE = {
    /* ---- manifest ---- */
    "p1.k":"מגלי עולמות",
    "p1.h":"יש מקומות שמבקרים בהם,<br>ויש מקומות לחוות באמת",
    "p1.t1":"נפאל היא בדיוק מקום כזה — ארץ של פסגות אדירות, תרבות עתיקה, מקדשים מרהיבים ואנשים חמים שמקבלים את פני המבקרים בלב פתוח.",
    "p1.t2":"אנחנו מאמינים שטיול מוצלח הוא הרבה יותר מרשימת אתרים ונקודות עצירה. לכן יצרנו טיולי בוטיק ייחודיים לנפאל, המשלבים חוויות אותנטיות, קבוצות קטנות, ליווי אישי ותכנון מוקפד עד הפרט האחרון.",
    "p2.k":"הדרך שלנו",
    "p2.h":"לוקחים אתכם<br><em>מעבר למסלולים המוכרים</em>",
    "p2.t1":"אל כפרים מסורתיים, נופים עוצרי נשימה, מקומות מיוחדים שרוב המטיילים אינם מגיעים אליהם, ומפגשים אנושיים שהופכים כל מסע לחוויה בלתי נשכחת.",
    "p2.t2":"אנו מקפידים על קצב נעים, בתי אירוח נבחרים, תוכן איכותי וליווי מקצועי לאורך כל הדרך, כך שתוכלו ליהנות מהמסע בראש שקט ולהתמסר לחוויה.",

    /* ---- journey ---- */
    "p3.k":"ימים 1–2 · קטמנדו", "p3.h":"העיר מתעוררת<br>לקראתכם",
    "p3.t1":"יציאה מנמל התעופה בן גוריון. לילה בטיסה.",
    "p3.t2":"הגעה לנמל התעופה Tribhuvan בקטמנדו, ונסיעה קצרה למלון בטאמל. נפגש עם קאמאל, בחור נפאלי מקומי שיספר את סיפור נפאל, ואיתו נטייל ברגל באזור הטאמל. משם נמשיך לכיכר דורבר — המקדשים והשווקים — ולמקדש האלה החיה קומרי. בערב, ארוחת ערב נווארית מסורתית. לינה במלון בטאמל.",

    "p4.k":"יום 3 · מנזר קופאן", "p4.h":"שיחה אחת<br>ששווה שבוע",
    "p4.t1":"בוקר בקטמנדו, בירת נפאל. נסיעה קצרה למנזר קופאן, המשקיף על עמק קטמנדו, ומפגש עם נזיר מקומי לשיחה ומדיטציה.",

    "p5.k":"יום 3 · טימי, עיר הקדרים", "p5.h":"חימר רטוב<br>ואובניים שלא נעצרים",
    "p5.t1":"נמשיך לטימי, עיר הקדרים, ומשם לבודהנת — סטופה מהגדולות בעולם. ארוחת ערב במסעדת אוטפלה, של המנזר הסמוך לסטופה. לינה במלון בטאמל.",

    "p6.k":"יום 4 · פאטן, עיר האמנים", "p6.h":"כיכר שכולה<br>אבן מגולפת",
    "p6.t1":"נסיעה לפאטן, עיר האמנים. סיור במרכז העיר בכיכר דורבר פאטן, ביקור במקדש הזהב, וסדנת קערות טיבטיות עם סודיפ — דור רביעי של רוקעי קערות. לינה בפאטן.",

    "p7.k":"יום 5 · נמובודהה", "p7.h":"האיש שלוחש<br>לצמחים",
    "p7.t1":"נסיעה לנמובודהה. נפגש עם בינוד, הלוחש לצמחים, חבר מקומי שאיתו נטייל בימים הקרובים.",

    "p8.k":"יום 5 · פוג'ת בוקר", "p8.h":"מנטרות בהיכל,<br>לפני שהיום מתחיל",
    "p8.t1":"במנזר נמובודהה נפגש עם נזיר מקומי ונשתתף בפוג'ת בוקר — נגינה בכלי נגינה מיוחדים וקריאת מנטרות בהיכל התפילה.",
    "p8.t2":"מהמנזר נלך דרך סטופה עתיקה, שבתוכה מאמינים נמצא האפר של גילגול קודם של סידהארתא, הבודהה הראשון (מטא בודהה), אל ריזורט נמובודהה המשקיף על רכס הרי ההימלאיה. הריזורט אורגני ואקולוגי, מקום קסום הבנוי בתי אבן ועץ, שנבנה ככפר נפאלי אותנטי. נאכל ארוחת צהריים קלה, ונרד במורד ההר לריזורט וישידהי אלייה. ארוחת ערב של שף הריזורט מהגן האורגני של הריזורט. לינה בריזורט וישידהי אלייה.",

    "p8b.k":"יום 6 · כפר נווארי", "p8b.h":"כפר שיצא ממנו<br>כוכב קולנוע",
    "p8b.t1":"עם בינוד נרד במורד הגבעה, מהריזורט אל כפר נווארי אותנטי בנופי העמק. נפגוש את תושבי המקום ונכיר את החקלאות המקומית. מהכפר הזה יצא אחד משחקני הקולנוע המפורסמים בנפאל, שהוא גם קומיקאי מוכר. לינה בריזורט וישידהי אלייה.",

    "p9.k":"יום 7 · אנשי הטמאנג", "p9.h":"בשדות שרואים<br>את האוורסט",
    "p9.t1":"טיול רגלי בכפרים בסביבה עם בינוד, הלוחש לצמחים, בנופים ובשדות של אנשי הטמאנג, במבט אל הרי ההימלאיה המזרחיים לעבר אזור הר האוורסט.",
    "p9.t2":"משם לכפר של בינוד: סיור בגן הירק וסדנת אוכל נפאלי. ארוחת צהריים — טאלי נווארי על גג ביתו. בהמשך נסיעה לקטמנדו, עם עצירה בפנאוטי במוזיאון מקומי קטן, במפגש הנהרות ובמקדש הבנוי מעץ. לינה במלון בטאמל.",

    "p10.k":"יום 8 · נהר הטריסולי", "p10.h":"ואז פתאום<br>הכל נהיה רטוב",
    "p10.t1":"בדרך לבנדיפור נעצור לרפטינג על נהר הטריסולי, במידה ויתאפשר, ונאכל ארוחת צהריים במבשלת בירה על גדת הנהר.",

    "p11.k":"יום 8 · בנדיפור", "p11.h":"עיירה עתיקה<br>למרגלות ההימלאיה",
    "p11.t1":"לקראת ערב נגיע לבנדיפור, העיירה הציורית — עיירה קטנה ומקסימה למרגלות ההימלאיה, הצופה לעבר רכס האנפורנה, עיירה עתיקה עם מבנים נוואריים אותנטיים. נפגש עם דיפאק, המדריך שלנו לימים הקרובים — פרופסור לאנגלית ותושב פוקרה — שיספר לנו על האזור. נטייל באזור, ובערב נצפה בשקיעה על הרי רכס האנפורנה. לינה בבנדיפור, במלון בוטיק נווארי אותנטי.",

    "p12.k":"יום 9 · פוקרה", "p12.h":"אגם שמחזיר<br>הרים",
    "p12.t1":"נקום בזריחה לצפות בהרי ההימלאיה, ונמשיך בנסיעה לפוקרה. נעצור ונבקר באגם בגנאס טל, נבקר בכפר חמשת האחים (Pachabhaiya), ונטייל במטע קפה ואצל מייצר סלים מבמבוק.",
    "p12.t2":"בערב נטייל בעיר באזור הלייקסייד, על גדת אגם פאווה. לינה בפוקרה.",

    "p13.k":"יום 10 · פאגודת השלום", "p13.h":"מבט אחד<br>על כל העמק",
    "p13.t1":"אניטה, מדריכה בפוקרה ואשתו של דיפאק, מצטרפת אלינו היום. בפוקרה נבקר במוזיאון ההרים הבינלאומי ונכיר את הקבוצות האתניות בנפאל. ניסע לפאנדי בנדי, כפרים של קבוצות אתניות שונות, ולפסל השיווה, בדרך לפאגודת השלום המשקיפה על עמק פוקרה ועל אגם פאווה — פאגודה שמבקשת שלום עולמי ומשרה שקט ושלום פנימי.",
    "p13.t2":"נבקר בבית אותנטי של אחת מהקבוצות האתניות, ובבית ספר מקומי שם נפגוש את מנהל בית הספר ונלמד על מערכת החינוך והדרך המיוחדת של בית הספר הזה.",

    "p14.k":"יום 10 · בביתו של סאמאר", "p14.h":"מסורת שנשארה<br>אצל משפחה אחת",
    "p14.t1":"לקראת ערב נלך לפגוש את סאמאר בביתו, בן לקבוצה אתנית קטנה שייחודה בהיותם מוזיקאים שהיו אמונים על בידור המלך בנגינה ובשירה. הוא משמר את מסורת הנגינה על הסרנגי ומלמד את הילדים את הנגינה המיוחדת שהולכת ונעלמת. נשמע קונצרט וריקודים. לינה בפוקרה.",

    "p15.k":"יום 11 · דאמפוס · אסטם", "p15.h":"כפר אקולוגי<br>מול האנפורנה",
    "p15.t1":"נסיעה בג'יפים לדאמפוס למרגלות האנפורנה — כפר של אנשי הגורונג, שמוצאם מטיבט, אנשי ההרים. זהו הכפר שממנו יוצאים לטרק לאוסטרליין קמפ.",
    "p15.t2":"נלך עם דיפאק בשבילי הכפרים והשדות, בנופים ייחודיים לאזור, אל אסטם — כפר אקולוגי המשקיף לעבר רכס הרי האנפורנה. לינה בריזורט באסטם.",

    "p15b.k":"יום 12 · בביתו של דיפאק", "p15b.h":"מהזריחה מול האנפורנה<br>אל שולחן המומו",
    "p15b.t1":"נקום לזריחה מהמקום הקרוב ביותר להרי האנפורנה שנהיה בו. נאכל ארוחת בוקר בריזורט וניסע לפוקרה, לביתו של דיפאק, לסדנת הכנת מומו — ונאכל אותם.",
    "p15b.t2":"משם נצא לשדה התעופה לטיסה קצרה לקטמנדו. נגיע למלון ונצא לסוואימבונאט, מקדש הקופים (Swayambhunath). לינה במלון בטאמל.",

    "p15c.k":"יום 13 · בקטפור", "p15c.h":"עיר של מאמינים,<br>קדרים וחרשי עץ",
    "p15c.t1":"נסיעה קצרה לבקטפור, אחת מערי הממלכה העתיקות בנפאל — עיר של מאמינים, קדרים וחרשי עץ. נפגוש את קרישנה, תושב המקום ומומחה במיתולוגיה ההינדואית, שילווה אותנו בסמטאות העיר. נבקר אצל רם, האדם שהחזיר לנפאל את ייצור הנייר הייחודי, ונראה את אוסף גילופי העץ שלו. נבקר אצל סאג'ן הקדר, בכיכר הקדרים.",
    "p15c.t2":"לקראת ערב ניסע לפשופאטינט, שם שריפת גוף המתים על נהר הבגמטי הקדוש להינדים — נהר שזורם בקטמנדו, בירת נפאל, וממשיך אל הגנגס, הנהר הקדוש בהודו. סגירת מעגל של חיים אחד בגלגל החיים והמוות. לינה במלון בטאמל.",

    "p16.k":"יום 14 · קטמנדו", "p16.h":"יום אחרון,<br>ובלי לוח זמנים",
    "p16.t1":"יום חופשי בשווקים של קטמנדו. מי שרוצה יכול להצטרף אלינו לסמאדהי, מקום הקבורה של שיוואפורי באבא — האיש שחי 137 שנים והיה מורה למנהיגי ארצות ולמורים רוחניים — שהוא היום אתר עלייה לרגל, מדיטציה ותפילה.",
    "p16.t2":"לקראת ערב יציאה לשדה התעופה לטיסה חזרה, ונחיתה בישראל למחרת.",
    /* ---- hosts ---- */
    "h1.n":"קאמאל","h1.r":"קטמנדו","h1.d":"יום 2",
    "h1.t":"בחור נפאלי מקומי שיספר לכם את סיפור נפאל, ואיתו נצא לטייל ברגל באזור הטאמל.",
    "h3.n":"סודיפ","h3.r":"פאטן · דור רביעי של רוקעי קערות","h3.d":"יום 4",
    "h3.t":"סדנת קערות טיבטיות בבית המלאכה המשפחתי, אצל מי שהמקצוע עובר אצלו מאב לבן ארבעה דורות.",
    "h4.n":"בינוד","h4.r":"נמובודהה · \"הלוחש לצמחים\"","h4.d":"ימים 5–7",
    "h4.t":"חבר מקומי שילווה אותנו שלושה ימים — בשבילי הכפרים, בגן הירק שלו, ובארוחת טאלי נווארי על גג ביתו.",
    "h5.n":"דיפאק","h5.r":"פוקרה · פרופסור לאנגלית","h5.d":"ימים 8–9, 11–12",
    "h5.t":"תושב פוקרה שילווה אותנו בימים האחרונים, ויארח אותנו בביתו לסדנת הכנת מומו.",
    "h6.n":"סאמאר","h6.r":"פוקרה · נגן סרנגי","h6.d":"יום 10",
    "h6.t":"בן לקבוצה אתנית קטנה של מוזיקאים שהיו אמונים על בידור המלך. הוא משמר את הנגינה על הסרנגי ומלמד את הילדים מסורת שהולכת ונעלמת.",
    "h7.n":"רם","h7.r":"בקטפור · נייר לוקטה","h7.d":"יום 13",
    "h7.t":"האיש שהחזיר לנפאל את ייצור הנייר הייחודי, משיח הדפנה ההררי. בביתו אולמות של פסלים וקורות עץ מגולפים — מעין מוזיאון פרטי.",

    /* ---- included / excluded ---- */
    "inc1":"מלונות","inc2":"אירוח מלא — מסעדות וכו'","inc3":"נסיעות","inc4":"כניסה לאתרים",
    "inc5":"סדנאות ותרגולים","inc6":"טיפולי מגע","inc7":"מדיטציות","inc8":"דמיון מודרך","inc9":"הדרכות",
    "exc1":"טיסה",
    "exc1s":"אנחנו דואגים להזמנת טיסה בעדיפות ליציאה קבוצתית. בבחירה אישית ניתן להזמין טיסה בנפרד, כל עוד מגיעים לקטמנדו בתאריך יום הטיול הראשון.",
    "exc2":"אלכוהול",
    "exc3":"ויזה לשבועיים","exc3s":"כ-30$. ניתן להשיג בשדה התעופה בקטמנדו או באינטרנט.",

    /* ---- the founding story ---- */
    "st1":"הטיול הראשון שלנו כזוג היה לנפאל. שני צעירים עם תרמילים גדולים על הגב נוחתים בקטמנדו, ומוקסמים מכל מה שרואות עינינו, שומעות אוזנינו וטועם פינו — ובעיקר פועם ליבנו. התאהבנו בנופים ובטעמים, אבל בעיקר התאהבנו באנשי נפאל.",
    "st2":"בשנת 2014 יצאנו עם שני ילדינו לשנת מסע, והיה ברור שהמקום הראשון שנגיע אליו ונכיר לילדינו יהיה נפאל. וכמובן שגם הם נדבקו בחיידק הנפאלי, שכנראה יידבק בהם לכל החיים.",
    "st3":"המוטו שלנו בכל טיול מאוד פשוט:<br>אנשים, נופים וטעמים.",
    "st4":"לכן הטיולים שלנו מחפשים את האותנטי — פגישות עם אנשים מקומיים, לטעום את האוכל המקומי, לרדת לשבילים צדדיים ולגלות אוצרות.",
    "st5":"הפעם אנחנו רוצים לקחת אתכם לחוויה בנפאל. להכיר לכם את המקומות שאהבנו במיוחד, מפגש עם תרבות מיוחדת, מפגשים עם אנשים מיוחדים, צבעוניות במיטבה, טעמים וריחות, ערים, הרים וכפרים.",
    "st6":"אנחנו מזמינים אתכם למסע משותף — ליצור ביחד מרחב מאפשר, מקבל ותומך. מהניסיון שלנו בהנחיית קבוצות וקורסים, מרחב משותף כזה מאפשר גילוי והעצמה אישית.",

    /* ---- loose ---- */
    "dates.meta":"שבועיים · קבוצה של 10–12 מטיילים",
    "dates.note":"הטיסה לקטמנדו ב-4 באוקטובר. נחיתה בנמל התעופה הבינלאומי Tribhuvan, קטמנדו.",
    "itin.note":"בכל בוקר, לפני ארוחת הבוקר, מוזמנים להתחיל את היום עם צ'י קונג ומדיטציה עם עדי.",
    "itin.flex":"נפאל אינה שוויץ, וזה חלק מהיופי. מזג אוויר, דרכים ומזל עשויים לשנות סדר יום — המסלול גמיש, הכיוון לא.",
    "price.allin":"כשאנחנו אומרים מחיר כולל הכל — הכוונה להכל.",
    "itin.lede":"לחצו על כל יום כדי לפתוח את הפירוט המלא.",
    "hosts.lede":"בכל טיול אנחנו לוקחים אתכם אל אנשים שהכרנו לאורך השנים. הם לא מדריכים ששכרנו — הם פותחים לכם את הבית, את הסדנה ואת השולחן שלהם.",
    "price.lede":"המחיר למטייל בחדר זוגי, ומשתנה לפי גודל הקבוצה.",
    "about.lede":"מפיקים ומלווים טיולים וסדנאות בסיני, נפאל, הודו וישראל.",
    "c.lede":"השאירו פרטים ונחזור אליכם, או פשוט תרימו טלפון. אנחנו עונים.",
    "c.roi":"רועי","c.adi":"עדי","ftr.roi":"רועי","ftr.adi":"עדי",
    "ftr.fine":"מגלי עולמות · טיולי בוטיק לנפאל"
  };

  var EN = {
    "p1.k":"Magalei Olamot",
    "p1.h":"Some places you visit,<br>and some you truly live",
    "p1.t1":"Nepal is exactly that kind of place — a land of vast peaks, ancient culture, extraordinary temples, and warm people who greet visitors with an open heart.",
    "p1.t2":"We believe a good journey is far more than a list of sites and stops. So we built boutique journeys to Nepal that bring together genuine experiences, small groups, personal guidance, and planning worked out to the last detail.",
    "p2.k":"Our Way",
    "p2.h":"We take you<br><em>past the routes everybody knows</em>",
    "p2.t1":"To traditional villages, breathtaking landscapes, places most travellers never reach, and human encounters that turn every journey into something you don't forget.",
    "p2.t2":"We keep an easy pace, choose our guesthouses carefully, and stay with you the whole way — so you can enjoy the journey with a quiet mind and simply give yourself to it.",

    "p3.k":"Days 1–2 · Kathmandu", "p3.h":"The city that wakes<br>before you do",
    "p3.t1":"Departure from Ben Gurion Airport. Overnight on the flight.",
    "p3.t2":"Arrival at Tribhuvan Airport in Kathmandu, and a short drive to our hotel in Thamel. We meet Kamal, a local Nepali who will tell us the story of Nepal, and walk with him through the Thamel quarter. From there to Durbar Square — the temples and the markets — and to the temple of the living goddess Kumari. In the evening, a traditional Newari dinner. Overnight at a hotel in Thamel.",

    "p4.k":"Day 3 · Kopan Monastery", "p4.h":"One conversation<br>worth a week",
    "p4.t1":"Morning in Kathmandu, the capital of Nepal. A short drive to Kopan Monastery, overlooking the Kathmandu valley, and a meeting with a local monk for conversation and meditation.",

    "p5.k":"Day 3 · Thimi, town of potters", "p5.h":"Wet clay<br>and wheels that never stop",
    "p5.t1":"We continue to Thimi, the town of potters, and from there to Boudhanath — one of the largest stupas in the world. Dinner at Utpala, the restaurant of the monastery beside the stupa. Overnight at a hotel in Thamel.",

    "p6.k":"Day 4 · Patan, city of artists", "p6.h":"A square made<br>entirely of carved stone",
    "p6.t1":"We drive to Patan, the city of artists. A walk through Patan Durbar Square, a visit to the Golden Temple, and a Tibetan singing bowl workshop with Sudip — a fourth-generation bowl maker. Overnight in Patan.",

    "p7.k":"Day 5 · Namobuddha", "p7.h":"The man who whispers<br>to plants",
    "p7.t1":"We drive to Namobuddha. We meet Binod, the plant whisperer, a local friend who will travel with us over the coming days.",

    "p8.k":"Day 5 · Morning puja", "p8.h":"Mantras in the hall,<br>before the day begins",
    "p8.t1":"At Namobuddha monastery we meet a local monk and join the morning puja — unusual instruments and the reading of mantras in the prayer hall.",
    "p8.t2":"From the monastery we walk past an ancient stupa, said to hold the ashes of an earlier incarnation of Siddhartha, the first Buddha (Meta Buddha), to the Namobuddha resort overlooking the Himalayan range. The resort is organic and ecological, a beautiful place of stone and timber houses built as an authentic Nepali village. We have a light lunch, and head down the mountain to Resort Vishiddhi Alaya. Dinner by the resort's chef, from the resort's own organic garden. Overnight at Resort Vishiddhi Alaya.",

    "p8b.k":"Day 6 · A Newari village", "p8b.h":"The village<br>a film star came from",
    "p8b.t1":"With Binod we head down the hill, from the resort to an authentic Newari village in the valley landscape. We meet the people of the village and get to know the local farming. This village is the hometown of one of Nepal's famous film actors, who is also a well-known comedian. Overnight at Resort Vishiddhi Alaya.",

    "p9.k":"Day 7 · The Tamang people", "p9.h":"In the fields that see<br>Everest",
    "p9.t1":"A walk through the surrounding villages with Binod, the plant whisperer, through the landscapes and fields of the Tamang people, looking out to the eastern Himalaya toward the Everest region.",
    "p9.t2":"From there to Binod's village: a tour of his vegetable garden and a Nepali cooking workshop. Lunch is a Newari thali on his rooftop. Later we drive to Kathmandu, stopping in Panauti at a small local museum, at the meeting of the rivers and at the temple built of wood. Overnight at a hotel in Thamel.",

    "p10.k":"Day 8 · The Trisuli river", "p10.h":"And then suddenly<br>everything is wet",
    "p10.t1":"On the way to Bandipur we stop to raft the Trisuli river, if possible, and have lunch at a brewery on the riverbank.",

    "p11.k":"Day 8 · Bandipur", "p11.h":"An old town<br>at the foot of the Himalaya",
    "p11.t1":"Toward evening we reach Bandipur, the picturesque town — a small and lovely town at the foot of the Himalaya, looking out to the Annapurna range, an old town of authentic Newari buildings. We meet Dipak, our guide for the coming days — a professor of English and a Pokhara local — who will tell us about the region. We walk the area, and in the evening watch the sun set over the Annapurna range. Overnight in Bandipur, at an authentic Newari boutique hotel.",

    "p12.k":"Day 9 · Pokhara", "p12.h":"A lake that gives<br>the mountains back",
    "p12.t1":"We rise at sunrise to watch the Himalaya, then continue to Pokhara. We stop at Begnas Tal lake, visit the village of the five brothers (Pachabhaiya), and walk through a coffee plantation and past a bamboo basket maker.",
    "p12.t2":"In the evening we walk the Lakeside quarter, on the shore of Phewa lake. Overnight in Pokhara.",

    "p13.k":"Day 10 · The Peace Pagoda", "p13.h":"One view<br>over the whole valley",
    "p13.t1":"Anita, a guide in Pokhara and Dipak's wife, joins us today. In Pokhara we visit the International Mountain Museum and learn about the ethnic groups of Nepal. We drive to Pumdi Bhumdi, villages of different ethnic groups, and to the Shiva statue, on the way to the Peace Pagoda overlooking the Pokhara valley and Phewa lake — a pagoda that calls for world peace and brings a sense of calm and inner peace.",
    "p13.t2":"We visit an authentic home of one of the ethnic groups, and a local school where we meet the head teacher and learn about the education system and this school's particular approach.",

    "p14.k":"Day 10 · At Samar's home", "p14.h":"A tradition kept<br>by one family",
    "p14.t1":"Toward evening we go to meet Samar at his home; he belongs to a small ethnic group whose distinction is that they were the musicians entrusted with entertaining the king through playing and song. He keeps the sarangi tradition alive and teaches the children a way of playing that is slowly disappearing. We hear a concert, and there is dancing. Overnight in Pokhara.",

    "p15.k":"Day 11 · Dhampus · Astam", "p15.h":"An eco-village<br>facing the Annapurna",
    "p15.t1":"We drive by jeep to Dhampus at the foot of the Annapurna — a village of the Gurung people, mountain people whose origins are in Tibet. This is the village trekkers set out from for Australian Camp.",
    "p15.t2":"We walk with Dipak along the village paths and through the fields, in landscapes particular to this region, to Astam — an ecological village looking out toward the Annapurna range. Overnight at a resort in Astam.",

    "p15b.k":"Day 12 · At Dipak's home", "p15b.h":"From sunrise over the Annapurna<br>to the momo table",
    "p15b.t1":"We rise for sunrise from the closest point to the Annapurna we will reach. We have breakfast at the resort and drive to Pokhara, to Dipak's home, for a momo-making workshop — and we eat them.",
    "p15b.t2":"From there to the airport for a short flight to Kathmandu. We reach the hotel and head out to Swayambhunath, the monkey temple. Overnight at a hotel in Thamel.",

    "p15c.k":"Day 13 · Bhaktapur", "p15c.h":"A city of believers,<br>potters and woodcarvers",
    "p15c.t1":"A short drive to Bhaktapur, one of the ancient royal cities of Nepal — a city of believers, potters and woodcarvers. We meet Krishna, a local resident and an expert in Hindu mythology, who will guide us through the city's lanes. We visit Ram, the man who brought the making of Nepal's unique paper back to the country, and see his collection of wood carvings. We visit Sajan the potter, in Potters' Square.",
    "p15c.t2":"Toward evening we drive to Pashupatinath, where the dead are cremated on the Bagmati river, sacred to Hindus — a river that flows through Kathmandu, the capital of Nepal, and on into the Ganges, the holy river of India. The closing of one life's circle in the wheel of life and death. Overnight at a hotel in Thamel.",

    "p16.k":"Day 14 · Kathmandu", "p16.h":"A last day,<br>with no schedule",
    "p16.t1":"A free day in the markets of Kathmandu. Anyone who wishes can join us at the samadhi, the burial place of Shivapuri Baba — the man who lived 137 years and was a teacher to national leaders and spiritual teachers — which today is a place of pilgrimage, meditation and prayer.",
    "p16.t2":"Toward evening we leave for the airport for the flight home, landing in Israel the next day.",
    "h1.n":"Kamal","h1.r":"Kathmandu","h1.d":"Day 2",
    "h1.t":"A local Nepali who will tell you the story of Nepal, and walk with you through the Thamel quarter.",
    "h3.n":"Sudip","h3.r":"Patan · fourth-generation bowl maker","h3.d":"Day 4",
    "h3.t":"A Tibetan singing bowl workshop in the family workshop, with a man whose craft has passed from father to son for four generations.",
    "h4.n":"Binod","h4.r":"Namobuddha · \"the plant whisperer\"","h4.d":"Days 5–7",
    "h4.t":"A local friend who travels with us for three days — along the village paths, through his vegetable garden, and over a Newari thali on his rooftop.",
    "h5.n":"Dipak","h5.r":"Pokhara · professor of English","h5.d":"Days 8–9, 11–12",
    "h5.t":"A Pokhara local who guides us through the final days, and hosts us at his home for a momo-making workshop.",
    "h6.n":"Samar","h6.r":"Pokhara · sarangi player","h6.d":"Day 10",
    "h6.t":"He belongs to a small ethnic group of musicians who once entertained the king. He keeps the sarangi alive and teaches the children a tradition that is slowly disappearing.",
    "h7.n":"Ram","h7.r":"Bhaktapur · lokta paper","h7.d":"Day 13",
    "h7.t":"The man who brought the making of Nepal's unique paper, from the mountain daphne shrub, back to the country. His home holds halls of sculptures and carved wooden beams — a private museum of sorts.",

    "inc1":"Hotels","inc2":"Full board — restaurants and so on","inc3":"Transport","inc4":"Site entry fees",
    "inc5":"Workshops and practices","inc6":"Bodywork treatments","inc7":"Meditation","inc8":"Guided imagery","inc9":"Guiding",
    "exc1":"Flights",
    "exc1s":"We arrange flights, with preference given to the group departure. You may also book separately, as long as you reach Kathmandu on the first day of the trip.",
    "exc2":"Alcohol",
    "exc3":"A two-week visa","exc3s":"About $30. Available at Kathmandu airport or online.",

    "st1":"Our first journey together as a couple was to Nepal. Two young people with big packs on their backs land in Kathmandu, enchanted by everything our eyes saw, our ears heard and our mouths tasted — and above all by what our hearts felt. We fell in love with the landscapes and the flavours, but most of all we fell in love with the people of Nepal.",
    "st2":"In 2014 we set out with our two children for a year of travelling, and it was obvious that the first place we would take them was Nepal. And of course they caught the Nepal bug too — one they will probably carry for life.",
    "st3":"Our motto on every journey is simple:<br>people, landscapes and flavours.",
    "st4":"So our journeys look for what is genuine — meeting local people, tasting the local food, turning down the side paths and finding what is hidden there.",
    "st5":"This time we want to take you into that experience in Nepal. To introduce you to the places we loved most, to a remarkable culture, to remarkable people, to colour at its best, to flavours and scents, cities, mountains and villages.",
    "st6":"We invite you to travel with us — to create together a space that allows, accepts and supports. From our experience leading groups and courses, a shared space like that makes room for discovery and for personal growth.",

    "dates.meta":"Two weeks · a group of 10–12 travellers",
    "dates.note":"Flight to Kathmandu on 4 October. Arrival at Tribhuvan International Airport, Kathmandu.",
    "itin.note":"Every morning, before breakfast, you're welcome to begin the day with Qi Gong and meditation with Adi.",
    "itin.flex":"Nepal is not Switzerland, and that is part of the beauty. Weather, roads and luck may reorder a day — the route is flexible, the direction is not.",
    "price.allin":"When we say all-inclusive — we mean all of it.",
    "itin.lede":"Tap any day to open the full detail.",
    "hosts.lede":"On every journey we bring you to people we have come to know over the years. They are not guides we hired — they open their home, their workshop and their table to you.",
    "price.lede":"Price per traveller in a shared double room, varying with group size.",
    "about.lede":"We create and lead journeys and workshops in Sinai, Nepal, India and Israel.",
    "c.lede":"Leave your details and we'll get back to you — or just pick up the phone. We answer.",
    "c.roi":"Roy","c.adi":"Adi","ftr.roi":"Roy","ftr.adi":"Adi",
    "ftr.fine":"Magalei Olamot · Boutique Journeys to Nepal"
  };

  if (typeof I18N !== 'undefined') {
    var k;
    for (k in HE) { if (HE.hasOwnProperty(k)) I18N.he[k] = HE[k]; }
    for (k in EN) { if (EN.hasOwnProperty(k)) I18N.en[k] = EN[k]; }
  }
})();
