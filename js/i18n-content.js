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
    "p3.t1":"יציאה מנמל תעופה בן גוריון. הגעה לנמל תעופה Tribhuvan קטמנדו. לינה במלון בקטמנדו.",
    "p3.t2":"בוקר בקטמנדו בירת נפאל, נפגש עם קאמאל בחור נפאלי מקומי שיספר את סיפור נפאל ואיתו נטייל ברגל באזור הטאמל, משם נמשיך לכיכר דורבאר המקדשים והשווקים, ובמקדש האלה החיה קומרי. נסיעה לסטופה הגדולה באסיה בודאנט. ארוחת ערב נאוורית מסורתית. לינה בקטמנדו.",

    "p4.k":"יום 3 · מנזר קופאן", "p4.h":"שיחה אחת<br>ששווה שבוע",
    "p4.t1":"נסיעה קצרה למנזר קופאן המשקיף על עמק קטמנדו. מפגש עם הנזיר לופסאן לשיחה - מדיטציה.",

    "p5.k":"יום 3 · טימי, עיר הקדרים", "p5.h":"חימר רטוב<br>ואובניים שלא נעצרים",
    "p5.t1":"נסיעה קצרה לטימי עיר הקדרים. לינה בקטמנדו.",

    "p6.k":"יום 4 · פאטן, עיר האמנים", "p6.h":"כיכר שכולה<br>אבן מגולפת",
    "p6.t1":"נסיעה לפאטן עיר האמנים. סיור במרכז העיר דורבר פאטן. מקדש הזהב. סדנת קערות טיבטיות עם סודיפ, דור רביעי של רוקעי קערות. לינה - בפאטן.",

    "p7.k":"יום 5 · נמובודהה", "p7.h":"האיש שלוחש<br>לצמחים",
    "p7.t1":"נסיעה לנמובודהה. נפגש עם בינוד (הלוחש לצמחים) חבר מקומי איתו נטייל בימים הקרובים.",
    "p7.t2":"מהמנזר נלך דרך סטופה עתיקה שבתוכה מאמינים נמצא האפר של גילגול קודם של סידהארתא הבודהה הראשון (מטא בודהה) לריזורט נמובודהה המשקיף על רכס הרי ההימלאיה. הריזורט אורגני ואקולוגי, מקום קסום הבנוי בתי אבן ועץ אשר נבנה ככפר נפאלי אותנטי. ארוחת ערב של שף הריזורט. בערב נצפה בסרט הגלגול בריזורט. לינה בריזורט נמובודהה.",

    "p8.k":"יום 5 · פוג'ת בוקר", "p8.h":"מנטרות בהיכל,<br>לפני שהיום מתחיל",
    "p8.t1":"במנזר נמובודהה נפגש עם נזיר מקומי, ונשתתף בפוג'ת בוקר, נגינה בכלי נגינה מיוחדים וקריאת מנטרות בהיכל התפילה.",

    "p9.k":"ימים 6–7 · אנשי הטמאנג", "p9.h":"בשדות שרואים<br>את האוורסט",
    "p9.t1":"טיול רגלי בכפרים בסביבה עם בינוד הלוחש לצמחים, בנופים ובשדות של אנשי הטמאנג ומשקיף להרי ההימלאיה המזרחיים לעבר אזור הר האוורסט. בערב נצפה בסרט על אישה מטפסת הרים מעוררת השראה בריזורט.",
    "p9.t2":"טיול לכפר של בינוד, סיור בגן הירק וסדנת אוכל נפאלי. ארוחת צהריים טאלי נאוורי על גג ביתו. נסיעה לקטמנדו, עצירה בפנאוטי במוזיאון מקומי קטן ובמפגש הנהרות ומקדש הבנוי מעץ. לינה בקטמנדו.",

    "p10.k":"יום 8 · נהר הטריסולי", "p10.h":"ואז פתאום<br>הכל נהיה רטוב",
    "p10.t1":"נעצור לרפטינג על נהר הטריסולי. נאכל ארוחת צהריים במבשלת בירה על גדת הנהר.",

    "p11.k":"יום 8 · בנדיפור", "p11.h":"עיירה עתיקה<br>למרגלות ההימלאיה",
    "p11.t1":"נסע בבוקר לכיוון בנדיפור, עיירה קטנה ומקסימה למרגלות ההימלאיה הצופה לעבר רכס האנפורנה. עיירה עתיקה עם מבנים נווארים אותנטיים. נטייל באזור ובערב נצפה בשקיעה על הרי רכס האנפורנה בהרי ההימלאיה. לינה: בבנדיפור במלון בוטיק נווארי אותנטי.",

    "p12.k":"ימים 9–10 · פוקרה", "p12.h":"אגם שמחזיר<br>הרים",
    "p12.t1":"נקום בזריחה לצפות בהרי ההימלאיה, נמשיך בנסיעה לפוקרה. נעצור ונבקר באגם בגנאס טל, נבקר בכפר 14 האחים, נטייל במטע קפה ומייצר סלים מבמבוק, נאכל אצל משפחה מקומית מעל אגם רופה.",
    "p12.t2":"נפגש עם דיפק המדריך שלנו לימים הקרובים. דיפק פרופסור לאנגלית ותושב פוקרה. הוא יספר לנו אודות פוקרה והסביבה. בערב נטייל בעיר באיזור הלייקסייד על גדת האגם פאווה. לינה: פוקרה.",

    "p13.k":"יום 10 · פאגודת השלום", "p13.h":"מבט אחד<br>על כל העמק",
    "p13.t1":"בפוקרה, נבקר במוזיאון ההרים הבינלאומי נכיר את הקבוצות האתניות בנפאל. נסע לפאנדי בנדי, כפרים של קבוצות אתניות שונות בדרך לפאגודת השלום המשקיף על עמק פוקרה והאגם פאווה שמבקש שלום עולמי ומשרה שקט ושלום פנימי.",
    "p13.t2":"נבקר בבית אותנטי של אחת מהקבוצות האתניות ובבית ספר מקומי שם נפגוש את מנהל בית הספר ונלמד על מערכת החינוך והדרך המיוחדת של בית הספר הזה.",

    "p14.k":"יום 10 · בביתו של סאמאר", "p14.h":"מסורת שנשארה<br>אצל משפחה אחת",
    "p14.t1":"לקראת ערב נלך לפגוש את סאמאר בביתו ששייך לקבוצה אתנית קטנה שיחודה בהיותם מוזיקאים שהיו אמונים על בידור המלך בנגינה ושירה והוא משמר את מסורת נגינה על הסרנגי ומלמד את הילדים את הנגינה המיוחדת שהולכת ונעלמת, נשמע \"קונצרט\" וריקודים.",

    "p15.k":"ימים 11–12 · דאמפוס · אסטם", "p15.h":"כפר אקולוגי<br>מול האנפורנה",
    "p15.t1":"נסיעה בג'יפים לדאמפוס למרגלות האנפורנה, כפר של בני קבוצה אתנית — אנשי הגורונג שמוצאם מטיבט, אנשי ההרים. כפר שממנו יוצאים לטרק לאוסטרליין קמפ. נלך עם דיפאק בשבילי הכפרים והשדות בנופים יחודיים לאיזור, לכפר אקולוגי אסטם, המשקיף לעבר רכס הרי האנפורנה. לינה בריזורט באסטם.",
    "p15.t2":"נקום לזריחה מהמקום הקרוב ביותר להרי האנפורנה שנהיה בו, נאכל ארוחת בוקר בריזורט וניסע לפוקרה לבית של דיפק לסדנת הכנת מומו נאכל אותם ונצא לשדה התעופה לטיסה קצרה לקטמנדו. נגיע למלון ונצא למקדש הקופים Swayambhunath.",

    "p16.k":"ימים 13–14 · קטמנדו", "p16.h":"יום אחרון,<br>ובלי לוח זמנים",
    "p16.t1":"יום חופשי בשווקים של קטמנדו.",
    "p16.t2":"ולמחרת, ב-17 באוקטובר, יציאה לשדה התעופה ונחיתה בישראל.",

    /* ---- hosts ---- */
    "h1.n":"קאמאל","h1.r":"קטמנדו","h1.d":"יום 2",
    "h1.t":"בחור נפאלי מקומי שיספר לכם את סיפור נפאל, ואיתו נצא לטייל ברגל באזור הטאמל.",
    "h2.n":"הנזיר לופסאן","h2.r":"מנזר קופאן","h2.d":"יום 3",
    "h2.t":"מפגש אישי לשיחה ומדיטציה במנזר המשקיף על עמק קטמנדו.",
    "h3.n":"סודיפ","h3.r":"פאטן · דור רביעי של רוקעי קערות","h3.d":"יום 4",
    "h3.t":"סדנת קערות טיבטיות בבית המלאכה המשפחתי, אצל מי שהמקצוע עובר אצלו מאב לבן ארבעה דורות.",
    "h4.n":"בינוד","h4.r":"נמובודהה · \"הלוחש לצמחים\"","h4.d":"ימים 5–7",
    "h4.t":"חבר מקומי שילווה אותנו שלושה ימים — בשבילי הכפרים, בגן הירק שלו, ובארוחת טאלי נאוורי על גג ביתו.",
    "h5.n":"דיפק","h5.r":"פוקרה · פרופסור לאנגלית","h5.d":"ימים 9–12",
    "h5.t":"תושב פוקרה שילווה אותנו בימים האחרונים, ויארח אותנו בביתו לסדנת הכנת מומו.",
    "h6.n":"סאמאר","h6.r":"פוקרה · נגן סרנגי","h6.d":"יום 10",
    "h6.t":"בן לקבוצה אתנית קטנה של מוזיקאים שהיו אמונים על בידור המלך. הוא משמר את הנגינה על הסרנגי ומלמד את הילדים מסורת שהולכת ונעלמת.",

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
    "dates.meta":"14 ימים · קבוצה של 10–12 מטיילים",
    "dates.note":"הטיסה לקטמנדו ב-4 באוקטובר. נחיתה בנמל התעופה הבינלאומי טריבהוואן, קטמנדו.",
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
    "p3.t1":"Departure from Ben Gurion Airport. Arrival at Tribhuvan Airport, Kathmandu. Overnight at a hotel in Kathmandu.",
    "p3.t2":"Morning in Kathmandu, the capital of Nepal. We meet Kamal, a local Nepali who will tell us the story of Nepal, and walk with him through the Thamel quarter. From there to Durbar Square, the temples and the markets, and the temple of the living goddess Kumari. A drive to Boudhanath, the largest stupa in Asia. A traditional Newari dinner. Overnight in Kathmandu.",

    "p4.k":"Day 3 · Kopan Monastery", "p4.h":"One conversation<br>worth a week",
    "p4.t1":"A short drive up to Kopan Monastery, overlooking the Kathmandu valley. A meeting with the monk Lopsang — conversation and meditation.",

    "p5.k":"Day 3 · Thimi, town of potters", "p5.h":"Wet clay<br>and wheels that never stop",
    "p5.t1":"A short drive to Thimi, the town of the potters. Overnight in Kathmandu.",

    "p6.k":"Day 4 · Patan, city of artists", "p6.h":"A square made<br>entirely of carved stone",
    "p6.t1":"A drive to Patan, the city of artists. A walk through Patan Durbar Square. The Golden Temple. A Tibetan singing bowl workshop with Sudip, a fourth-generation bowl maker. Overnight in Patan.",

    "p7.k":"Day 5 · Namobuddha", "p7.h":"The man who whispers<br>to plants",
    "p7.t1":"A drive to Namobuddha. We meet Binod (the plant whisperer), a local friend who will travel with us over the coming days.",
    "p7.t2":"From the monastery we walk past an ancient stupa, said to hold the ashes of an earlier incarnation of Siddhartha, the first Buddha, to the Namobuddha resort overlooking the Himalayan range. The resort is organic and ecological, a beautiful place of stone and timber houses built as an authentic Nepali village. Dinner by the resort's chef. In the evening we watch a film at the resort. Overnight at Namobuddha resort.",

    "p8.k":"Day 5 · Morning puja", "p8.h":"Mantras in the hall,<br>before the day begins",
    "p8.t1":"At Namobuddha monastery we meet a local monk and join the morning puja — unusual instruments and the reading of mantras in the prayer hall.",

    "p9.k":"Days 6–7 · The Tamang people", "p9.h":"In the fields that see<br>Everest",
    "p9.t1":"A walk through the surrounding villages with Binod, the plant whisperer, through the landscapes and fields of the Tamang people, looking out to the eastern Himalaya toward the Everest region. In the evening, a film about an inspiring woman mountaineer.",
    "p9.t2":"A walk to Binod's village, a tour of the vegetable garden and a Nepali cooking workshop. Lunch is a Newari thali on his rooftop. A drive to Kathmandu, stopping in Panauti at a small local museum, at the meeting of the rivers and the temple built of wood. Overnight in Kathmandu.",

    "p10.k":"Day 8 · The Trisuli river", "p10.h":"And then suddenly<br>everything is wet",
    "p10.t1":"We stop to raft the Trisuli river. Lunch at a brewery on the riverbank.",

    "p11.k":"Day 8 · Bandipur", "p11.h":"An old town<br>at the foot of the Himalaya",
    "p11.t1":"We set off in the morning toward Bandipur, a small and lovely town at the foot of the Himalaya looking out to the Annapurna range. An old town of authentic Newari buildings. We walk the area and in the evening watch the sun set over the Annapurna range. Overnight in Bandipur, at an authentic Newari boutique hotel.",

    "p12.k":"Days 9–10 · Pokhara", "p12.h":"A lake that gives<br>the mountains back",
    "p12.t1":"We rise at sunrise to watch the Himalaya, then continue to Pokhara. We stop at Begnas Tal lake, visit the village of the 14 brothers, walk through a coffee plantation and past a bamboo basket maker, and eat with a local family above Rupa lake.",
    "p12.t2":"We meet Deepak, our guide for the coming days. Deepak is a professor of English and a Pokhara local, and will tell us about the town and the region. In the evening we walk the Lakeside quarter on the shore of Phewa lake. Overnight in Pokhara.",

    "p13.k":"Day 10 · The Peace Pagoda", "p13.h":"One view<br>over the whole valley",
    "p13.t1":"In Pokhara we visit the International Mountain Museum and come to know the ethnic groups of Nepal. We drive to Pandy Bandy, villages of different ethnic groups, on the way to the Peace Pagoda overlooking the Pokhara valley and Phewa lake — a pagoda that asks for world peace and settles a quiet within.",
    "p13.t2":"We visit an authentic home of one of the ethnic groups, and a local school where we meet the head teacher and learn about the education system and this school's particular way.",

    "p14.k":"Day 10 · At Samar's home", "p14.h":"A tradition kept<br>by one family",
    "p14.t1":"Toward evening we go to meet Samar at his home. He belongs to a small ethnic group whose distinction is that they were the musicians entrusted with entertaining the king through playing and song, and he keeps alive the sarangi tradition and teaches the children the particular way of playing that is slowly disappearing. We hear a \"concert\", and there is dancing.",

    "p15.k":"Days 11–12 · Dhampus · Astam", "p15.h":"An eco-village<br>facing the Annapurna",
    "p15.t1":"A drive by jeep to Dhampus at the foot of the Annapurna, a village of an ethnic group — the Gurung people, whose origins are in Tibet, mountain people. This is the village trekkers set out from for Australian Camp. We walk with Deepak along the village paths and fields, through landscapes particular to this region, to the ecological village of Astam, looking out toward the Annapurna range. Overnight at a resort in Astam.",
    "p15.t2":"We rise for sunrise from the closest point to the Annapurna we will reach, have breakfast at the resort and drive to Pokhara, to Deepak's home, for a momo-making workshop — and we eat them. From there to the airport for a short flight to Kathmandu. We reach the hotel and head out to the monkey temple, Swayambhunath.",

    "p16.k":"Days 13–14 · Kathmandu", "p16.h":"A last day,<br>with no schedule",
    "p16.t1":"A free day in the markets of Kathmandu.",
    "p16.t2":"And the next day, on 17 October, departure to the airport and landing in Israel.",

    "h1.n":"Kamal","h1.r":"Kathmandu","h1.d":"Day 2",
    "h1.t":"A local Nepali who will tell you the story of Nepal, and walk with you through the Thamel quarter.",
    "h2.n":"The monk Lopsang","h2.r":"Kopan Monastery","h2.d":"Day 3",
    "h2.t":"A personal meeting for conversation and meditation, at the monastery overlooking the Kathmandu valley.",
    "h3.n":"Sudip","h3.r":"Patan · fourth-generation bowl maker","h3.d":"Day 4",
    "h3.t":"A Tibetan singing bowl workshop in the family workshop, with a man whose craft has passed from father to son for four generations.",
    "h4.n":"Binod","h4.r":"Namobuddha · \"the plant whisperer\"","h4.d":"Days 5–7",
    "h4.t":"A local friend who travels with us for three days — along the village paths, through his vegetable garden, and over a Newari thali on his rooftop.",
    "h5.n":"Deepak","h5.r":"Pokhara · professor of English","h5.d":"Days 9–12",
    "h5.t":"A Pokhara local who guides us through the final days, and hosts us at his home for a momo-making workshop.",
    "h6.n":"Samar","h6.r":"Pokhara · sarangi player","h6.d":"Day 10",
    "h6.t":"He belongs to a small ethnic group of musicians who once entertained the king. He keeps the sarangi alive and teaches the children a tradition that is slowly disappearing.",

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

    "dates.meta":"14 days · a group of 10–12 travellers",
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
