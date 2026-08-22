/* ============================================================
   English content layer.
   Translated from the Hebrew source in data.js. Prices, dates and
   cancellation terms are never altered here — only rendered.
   ============================================================ */

const ITINERARY_EN = [
  { d:"Day 1",  t:"Leaving Israel",
    b:"Departure from Ben Gurion Airport, arriving at Tribhuvan Airport in Kathmandu.",
    stay:"Overnight at a hotel in Kathmandu" },

  { d:"Day 2",  t:"Kathmandu — Thamel, Durbar Square and Boudhanath",
    b:"Morning in Kathmandu, the capital of Nepal. We meet Kamal, a local Nepali who will tell us the story of his country, and walk with him through the Thamel quarter. From there to Durbar Square — the temples and the markets — and to the temple of the living goddess Kumari. Later we drive to Boudhanath, the largest stupa in Asia. In the evening, a traditional Newari dinner.",
    stay:"Overnight in Kathmandu" },

  { d:"Day 3",  t:"Kopan Monastery and Thimi, the potters' town",
    b:"A short drive up to Kopan Monastery, looking out over the Kathmandu valley, and a meeting with the monk Lopsang for conversation and meditation. From there a short drive to Thimi, the town of the potters.",
    stay:"Overnight in Kathmandu" },

  { d:"Day 4",  t:"Patan, the city of artists",
    b:"We drive to Patan, the city of artists. A walk through Patan Durbar Square, a visit to the Golden Temple, and a Tibetan singing bowl workshop with Sudip — a fourth-generation bowl maker.",
    stay:"Overnight in Patan" },

  { d:"Day 5",  t:"Namobuddha — meeting Binod",
    b:"We drive to Namobuddha and meet Binod, the plant whisperer, a local friend who will travel with us over the coming days. At the monastery we meet a local monk and join the morning puja — unusual instruments and the reading of mantras in the prayer hall. From the monastery we walk past an ancient stupa, said to hold the ashes of an earlier incarnation of Siddhartha, the first Buddha, to the Namobuddha resort overlooking the Himalayan range. The resort is organic and ecological, a beautiful place of stone and timber houses built as an authentic Nepali village. Dinner by the resort's chef, and a film in the evening.",
    stay:"Overnight at Namobuddha resort" },

  { d:"Day 6",  t:"In the fields of the Tamang people",
    b:"A walk through the surrounding villages with Binod, through the landscapes and fields of the Tamang people, looking out to the eastern Himalaya toward the Everest region. In the evening, a film about an inspiring woman mountaineer.",
    stay:"Overnight at Namobuddha resort" },

  { d:"Day 7",  t:"Binod's village and a Nepali cooking workshop",
    b:"A walk to Binod's village, a tour of his vegetable garden and a Nepali cooking workshop. Lunch is a Newari thali on his rooftop. Later we drive back to Kathmandu, stopping in Panauti at a small local museum, at the meeting of the rivers, and at the temple built of wood.",
    stay:"Overnight in Kathmandu" },

  { d:"Day 8",  t:"Rafting the Trisuli, and on to Bandipur",
    b:"We set off in the morning toward Bandipur. On the way we stop to raft the Trisuli river, and have lunch at a brewery on the riverbank. We continue to Bandipur, a small and lovely town at the foot of the Himalaya looking out to the Annapurna range — an old town of authentic Newari buildings. We walk the area, and in the evening watch the sun set over the Annapurna.",
    stay:"Overnight in Bandipur, at an authentic Newari boutique hotel" },

  { d:"Day 9",  t:"Sunrise, and on to Pokhara",
    b:"We rise at sunrise to watch the Himalaya, then continue to Pokhara. We stop at Begnas Tal lake, visit the village of the 14 brothers, walk through a coffee plantation and past a bamboo basket maker, and eat with a local family above Rupa lake. We meet Deepak, our guide for the coming days — a professor of English and a Pokhara local — who tells us about the town and the region. In the evening we walk the Lakeside quarter on the shore of Phewa lake.",
    stay:"Overnight in Pokhara" },

  { d:"Day 10", t:"The Peace Pagoda and meeting Samar",
    b:"In Pokhara we visit the International Mountain Museum and learn about the ethnic groups of Nepal. We drive to Pandy Bandy, villages of different ethnic groups, on the way to the Peace Pagoda overlooking the Pokhara valley and Phewa lake. We visit an authentic home of one of the ethnic groups, and a local school where we meet the head teacher and learn about the education system and this school's particular approach. Toward evening we go to meet Samar at his home. He belongs to a small ethnic group whose distinction is that they were the musicians entrusted with entertaining the king through playing and song. He keeps the sarangi tradition alive and teaches the children a way of playing that is slowly disappearing. We hear a concert, and there is dancing.",
    stay:"Overnight in Pokhara" },

  { d:"Day 11", t:"Dhampus and the eco-village of Astam",
    b:"We drive by jeep to Dhampus at the foot of the Annapurna — a village of the Gurung people, mountain people whose origins are in Tibet. This is the village trekkers set out from for Australian Camp. We walk with Deepak along the village paths and through the fields, in landscapes particular to this region, to Astam — an ecological village looking out toward the Annapurna range.",
    stay:"Overnight at a resort in Astam" },

  { d:"Day 12", t:"Sunrise over the Annapurna, and a momo workshop",
    b:"We rise for sunrise from the closest point to the Annapurna we will reach. Breakfast at the resort, then a drive to Pokhara, to Deepak's home, for a momo-making workshop — and we eat them. From there to the airport for a short flight to Kathmandu. We reach the hotel and head out to the monkey temple, Swayambhunath.",
    stay:"Overnight in Kathmandu" },

  { d:"Day 13", t:"A free day",
    b:"A free day in the markets of Kathmandu.",
    stay:"Overnight in Kathmandu" },

  { d:"Day 14", t:"Home · 17/10/26",
    b:"Departure to Kathmandu airport, and landing in Israel.",
    stay:"" }
];

const VOICES_EN = [
  { n:"Tanya", m:"Nepal · October 2025", q:"Dear all, what a wonderful journey we had. We agreed to open ourselves to new experiences, we left our comfort zone in so many ways, and we found a whole world — colourful, alive, surprising, moving, going straight to the heart. I went through something that widened both heart and mind, and finished a little different from how I began — more open, more at ease, seeing more clearly what matters and what doesn't. And a special thank you to dear Adi and Roy, who were a loving mother and father to us, attentive and caring, and who granted our wishes sometimes before we had even spoken them." },

  { n:"Yosefa", m:"Nepal", q:"I met Adi and Roy Assaf through the reflexology courses Adi teaches. The connection was immediate — remarkable people, with enormous hearts, endless generosity, open and welcoming. One day Roy told me about a project he was dreaming up: a trip to Nepal. \"Count me in!\" — that was my immediate answer, without knowing when, the route, the price or any other detail. We arrived in Nepal and were immediately caught by their enthusiasm for the place. Nothing was spared: roomy jeeps, unusual places to stay, delicious meals, meetings with special people, monastery visits, meditation, Qi Gong, and workshops particular to the region. Anyone who wants to experience travel on another level — Adi and Roy Assaf are the address." },

  { n:"Yossi", m:"Nepal", q:"I went with Roy and Adi on a journey to Nepal — my own personal journey, within a group they organised and navigated. A journey that brought me to enchanting places, at an atmosphere and a pace I had never experienced. A journey that revealed a Nepal I did not know, the inner lives of the people who live there, that opened up the monasteries hidden in the mountains, the homes and the work of Nepal's people, the local food and traditions — and still left me time and space for myself. For me it was an extraordinary journey." },

  { n:"Osnat", m:"Nepal · September 2018", q:"Before the trip we could not have imagined the experience ahead of us. Roy and Adi managed to bring together a lovely group of people who, though most had never met, connected and became close even on the way to Nepal. Beyond the astonishing landscapes and the unusual places, the added value of travelling with them is the fascinating encounters with local people — encounters you would have no chance of having on any other trip. They built a route that on the one hand takes in a great deal, and on the other never feels rushed or tightly scheduled." },

  { n:"Moshiko", m:"Nepal", q:"It was a very special journey. A journey in which you come to understand Nepalis from the inside. We were a small group and a very easy connection formed within it. At first I worried about being the youngest in the company, but Adi and Roy know how to create chemistry and connection in any situation. It was a quality trip, with comfortable hotels. We went into paper mills, potteries and craft workshops. The Nepalis are warm and kind, and that was very special. Excellent food, local tastes. Warmly recommended." },

  { n:"Shlomit", m:"Nepal", q:"The trip to Nepal under Adi and Roy Assaf's direction is not an ordinary trip of the kind usually run for a group. The starting point is meeting people up close — including the way they live in their own homes, their work, their doubts and their thoughts. The pace is relaxed and adapted to the group, with a great deal of flexibility. The organisation is excellent, the hotels good and some of them outstanding, and Adi and Roy's care is responsible, personal and sensitive." },

  { n:"Pnina", m:"Nepal", q:"Travelling with Adi and Roy is like travelling with a mother and father, in the best sense of the words. They give personal, warm and loving attention, and look after everyone in the group. I would never have got to Nepal without them. The landscapes are etched in my memory, the food, the temples, the markets. Recommended." },

  { n:"Nava Kahana", m:"Nepal", q:"An easy, varied trip — landscapes, nature, a close acquaintance with the people, magnificent monasteries, temples, even one of monkeys. Thought has gone into every site, view, hotel and meal. Meetings with interesting local guides who explain patiently and answer every question, in an atmosphere of calm and enjoyment. Recommended!" },

  { n:"Esti Hermon", m:"Nepal", q:"Through them I met many of the people photographed in those wonderful pictures, and some of them became my friends too. That is part of the point of the trip — to come to know an enchanting culture, wonderful people, to make new friendships in other countries. It isn't only a trip, it is far more than that. Because of them I will return to Nepal to know it better, and I have people to see there — friends." },

  { n:"Neta Balaban", m:"Nepal", q:"The experience of travelling in Nepal with Roy and Adi Assaf still echoes in me. It is beyond the places, it is more than the logistics and the arrangements they make beforehand and every single day — it is a personal embrace in every respect, in a way that deepens the experience and shapes it exactly to me, to you, to each participant. Warmly recommended." },

  { n:"Anat Argov Urbach", m:"Nepal", q:"I recommend them too. I took part in the trip to Nepal and it was a very special experience — interesting and thoroughly enjoyable." },

  { n:"Anat", m:"Nepal", q:"Warmly recommended. An unforgettable experience." },

  { n:"Orly", m:"Sinai", q:"An enchanting trip! I was lucky enough to be on the very first one. The calm of Sinai, the landscapes, the water, the force of the desert, and the finest pair of \"Bedouins\" there are — Roy and Adi. In short, pure pleasure." },

  { n:"Osnat Levita", m:"Sinai", q:"There is nothing better than travelling with Adi and Roy, and certainly not for rediscovering the magic of Sinai. I recommend it very, very warmly. An experience for life." }
];
