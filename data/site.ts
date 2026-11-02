// Raniban Retreat — content for the one-page concept site.
// Facts are from the retreat's own website and its Trip.com /
// Hotels.com listings (checked 2026-11-02). Rates marked DEMO are
// placeholders in the range of its published OTA prices and MUST be
// confirmed with the retreat before this page is used commercially.

export const HOTEL = {
  name: "Raniban Retreat",
  tagline: "The Queen's Forest Retreat",
  location: "Raniban Forest, World Peace Pagoda Hill, Pokhara",
  address: "World Peace Pagoda Access Road, Pumdi Bhumdi, Pokhara 33700, Nepal",
  phoneDisplay: "+977 980-2855466",
  phoneTel: "+9779802855466",
  // WhatsApp uses the same primary number in this concept build —
  // to be confirmed with the retreat (a second published number,
  // +977 984-1218466, also appears on some listings).
  whatsapp: "9779802855466",
  email: "reservations@raniban.com",
  emailInfo: "info@raniban.com",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  mapsUrl:
    "https://www.google.com/maps?q=Raniban+Retreat+Pokhara&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Raniban+Retreat+Pokhara",
  ratings: [
    { label: "Trip.com", score: "9.5/10", note: "Guest rating" },
    { label: "Hotels.com", score: "9.2/10", note: "“Wonderful”" },
    { label: "Staff", score: "9.5/10", note: "Guest surveys" },
  ],
};

export const HERO_SLIDES = [
  {
    src: "https://www.himalayaheart.com/public/thumb/pokhara-lake-mountain-view.jpg",
    alt: "Annapurna range above Phewa Lake at sunrise",
  },
  {
    src: "https://haratitravels.com.np/wp-content/uploads/2018/04/pokhara-tour-1024x533.jpg",
    alt: "Machhapuchhre and the Annapurna panorama over Pokhara",
  },
  {
    src: "https://peregrinetreks.com/wp-content/uploads/2026/05/world-peace-pagoda-with-the-backdrop-of-mountains-in-pokhara.webp",
    alt: "World Peace Pagoda above the retreat forest",
  },
];

export interface Room {
  id: string;
  name: string;
  view: string;
  bed: string;
  guests: number;
  size: string;
  blurb: string;
  amenities: string[];
  rate: number; // DEMO nightly rate, USD, breakfast included
  img: string;
  tag?: string;
}

export const ROOMS: Room[] = [
  {
    id: "sunrise-premium",
    name: "Sunrise View Premium Room",
    view: "Annapurna sunrise",
    bed: "1 queen + 1 single bed",
    guests: 3,
    size: "Spacious premium room",
    blurb:
      "From the newest wing of the retreat — wake before dawn and watch first light turn the whole Annapurna range gold, from your bed.",
    amenities: ["Breakfast included", "Private bathroom", "Mountain-view window", "Free Wi-Fi", "Daily housekeeping"],
    rate: 99,
    img: "https://www.dam.bleiche.de/_data/i/upload/2019/12/16/20191216142011-676941ec-cu_e1008x756.jpg",
    tag: "Most loved for sunrise",
  },
  {
    id: "lake-cottage",
    name: "Lake View Cottage",
    view: "Phewa Lake & the Pagoda",
    bed: "1 queen + 1 single bed",
    guests: 3,
    size: "Standalone cottage",
    blurb:
      "A Gurung-style cottage looking straight down to Phewa Lake and the World Peace Pagoda — the valley lights up below you at night.",
    amenities: ["Breakfast included", "Air conditioning", "Private bathroom", "Sitting area", "Free Wi-Fi"],
    rate: 109,
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max1500/37343407.jpg?k=1e600d415e667f0de4b99beb56037059eeffa159a2893081b29d6d25888f06cd&o=",
  },
  {
    id: "mountain-cottage",
    name: "Mountain View Cottage",
    view: "Full Annapurna panorama",
    bed: "1 queen + 1 single bed",
    guests: 3,
    size: "Standalone cottage",
    blurb:
      "The classic Raniban stay — a traditional cottage in the forest with the entire Himalayan arc, Dhaulagiri to Himalchuli, in one frame.",
    amenities: ["Breakfast included", "Air conditioning", "Private bathroom", "Forest setting", "Free Wi-Fi"],
    rate: 119,
    img: "https://images.sembo.travel/ImageService/ImageHandler.ashx?service=url&nameOfImage=https%3A%2F%2Fi.travelapi.com%2Flodging%2F7000000%2F6650000%2F6642000%2F6641906%2Fec18e692_z.jpg&resizeMode=FitInside&semboApp=true",
  },
  {
    id: "jacuzzi-room",
    name: "Sunrise View Jacuzzi Room",
    view: "Sunrise + private jacuzzi",
    bed: "1 king bed",
    guests: 2,
    size: "Premium suite room",
    blurb:
      "For slow evenings: a king bed, the sunrise view, and your own jacuzzi to soak in while the mountains fade to violet.",
    amenities: ["Breakfast included", "Private jacuzzi", "King bed", "Private bathroom", "Free Wi-Fi"],
    rate: 149,
    img: "https://static.cupid.travel/rooms-large-pictures/ex_6def9220_z.jpg",
    tag: "For couples",
  },
];

export interface Extra {
  id: string;
  name: string;
  detail: string;
  price: number; // DEMO price, USD
  unit: string;
}

export const EXTRAS: Extra[] = [
  { id: "airport-pickup", name: "Private airport pickup", detail: "Pokhara International Airport to the retreat", price: 25, unit: "per trip" },
  { id: "candlelight", name: "Candlelight dinner", detail: "Private terrace table for two, set menu", price: 45, unit: "per couple" },
  { id: "massage", name: "Full-body massage · 60 min", detail: "At the retreat spa", price: 40, unit: "per person" },
  { id: "sauna", name: "Sauna & steam session", detail: "45 minutes, towels included", price: 10, unit: "per person" },
  { id: "sunrise-hike", name: "Guided sunrise hike", detail: "Forest trail to the World Peace Pagoda with a local guide", price: 15, unit: "per person" },
  { id: "extra-breakfast", name: "Extra breakfast", detail: "For additional guests", price: 12, unit: "per person" },
  { id: "bonfire", name: "Bonfire evening", detail: "Private fire pit setup with seating", price: 10, unit: "per evening" },
  { id: "mattress", name: "Extra mattress", detail: "Added to your room", price: 10, unit: "per night" },
];

export const EXPERIENCES = [
  {
    title: "Infinity Pool",
    text: "Swim at the forest's edge, eye-level with the lake and the ranges beyond.",
    img: "https://aw-d.tripcdn.com/images/0583c12000nx5j9fn65E4.jpg?proc=resize/m_w,w_550,h_350,5523&proc=format/f_webp",
  },
  {
    title: "Spa & Sauna",
    text: "Massage, sauna and steam — the slow way to end a day on the trails.",
    img: "https://media.meintophotel.de/uploads/2026/05/Hotelzimmer-mit-Sauna-Das-Gerstl-Mals-Terrasse.jpg",
  },
  {
    title: "The Pagoda Trail",
    text: "Stone steps through Raniban forest lead from the retreat to the World Peace Pagoda.",
    img: "https://ik.imagekit.io/qn1gkawvy/tr:w-1280/photos/countries/nepal/kanchenjunga-base-camp-trek/stone-steps-forest-trail.jpg",
  },
  {
    title: "Sunrise Yoga",
    text: "Morning practice on the terrace as the peaks turn gold — mats and mountain air provided.",
    img: "https://peregrinetreks.com/wp-content/uploads/2026/05/world-peace-pagoda-with-the-backdrop-of-mountains-in-pokhara.webp",
  },
  {
    title: "Terrace Dining",
    text: "Nepali and continental plates served where the view does half the work.",
    img: "https://www.georgenhoehe.com/wp-content/uploads/fruehstueck-1024x681.jpg.webp",
  },
];

export const REVIEWS = [
  {
    quote:
      "The absolute standout feature is the stunning view of the Annapurna mountains. If you are looking for spectacular scenery, do not hesitate.",
    name: "Atie T.",
    meta: "Stayed in a Mountain View Cottage · Trip.com",
  },
  {
    quote:
      "Wonderful resort. The best place to stay in Pokhara if you want to experience the sunrise.",
    name: "Samiul",
    meta: "Guest review · Trip.com",
  },
  {
    quote:
      "Beautiful surroundings, delicious breakfast and dinner. You can watch the snow-capped sunrise and a sea of clouds right from the hotel.",
    name: "Guest",
    meta: "Stayed October 2026 · Trip.com",
  },
  {
    quote:
      "Extremely comfortable, a fantastic view, and the staff were super friendly. If we had more vacation time, we would have stayed more nights.",
    name: "Guest",
    meta: "Stayed October 2026 · Trip.com",
  },
];

export const FAQS = [
  {
    q: "How do we reach the retreat?",
    a: "By road in about 30–35 minutes from Pokhara International Airport, or a taxi from Lakeside (around NPR 1,500). Walkers can climb the forest trail — roughly 522 stone steps from the lakeside up through Raniban forest, with the Peace Pagoda steps continuing from our gate. We can arrange pickup on request.",
  },
  {
    q: "What are check-in and check-out times?",
    a: `Check-in from ${HOTEL.checkIn}, check-out until ${HOTEL.checkOut}. Early arrivals are welcome to relax on the terrace while the room is prepared.`,
  },
  {
    q: "Is the retreat really solar powered?",
    a: "Yes — Raniban runs on solar energy with 24-hour backup, spring water brought from a natural source, and a team drawn almost entirely from the local neighbourhood.",
  },
  {
    q: "Is breakfast included?",
    a: "Yes, breakfast is included with every stay — served on the terrace facing the mountains whenever the weather allows.",
  },
];
