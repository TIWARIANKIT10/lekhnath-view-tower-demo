const REPO = "https://github.com/TIWARIANKIT10/lekhnath-view-tower-demo";
const PREV = (b: string) =>
  "https://lekhnath-view-tower-demo-git-" + b.replaceAll("/", "-") + "-tiwariankit10s-projects.vercel.app";

type Site = {
  n: string; name: string; area: string; badge: string; pitch: string;
  chips: string[]; colors: [string, string]; site: string; code: string;
};

const sites: Site[] = [
  { n: "Hotel #0", name: "Hotel Lekhnath View Tower & Eco Farm", area: "Lekhnath · the first target", badge: "Branch",
    pitch: "The original demo that started this business — 360° view tower, eco farm, WhatsApp booking. Now on its own branch, like every other hotel.",
    chips: ["4.8★ Google", "9.8 Booking.com", "+977 985-6052139"], colors: ["#123528", "#d9a441"],
    site: PREV("hotel/lekhnath-view-tower"), code: REPO + "/tree/hotel/lekhnath-view-tower" },
  { n: "Enhanced v2", name: "View Tower — Enhanced Edition", area: "Same hotel, Framer Motion + Three.js upgrade", badge: "Branch",
    pitch: "The cinematic upgrade of the demo: firefly hero, motion design, Booking.com links.",
    chips: ["Branch design-v2", "Booking.com links"], colors: ["#0c2b21", "#e8b34b"],
    site: PREV("design-v2"), code: REPO + "/tree/design-v2" },
  { n: "Hotel #1", name: "Grand Hotel Begnas", area: "Begnas Sadak · 13 rooms", badge: "Branch",
    pitch: "Loved (Expedia 10/10) but invisible — landline-only, no website at all.",
    chips: ["Call booking", "+977 61-561129", "Navy / gold design"], colors: ["#0a1628", "#c9a24b"],
    site: PREV("hotel/grand-hotel-begnas"), code: REPO + "/tree/hotel/grand-hotel-begnas" },
  { n: "Hotel #2", name: "Hotel Seven Lake Paradise", area: "Begnastaal-11 · 15 rooms, 3-star", badge: "Branch",
    pitch: "Premium rooms, scattered reputation — the fix is one strong direct channel.",
    chips: ["WhatsApp booking", "NPR 8,790–16,538", "Teal / coral design"], colors: ["#04211d", "#ff7a59"],
    site: PREV("hotel/hotel-seven-lake-paradise"), code: REPO + "/tree/hotel/hotel-seven-lake-paradise" },
  { n: "Hotel #3", name: "Seven Lakes Resort", area: "29 Bhandardhik · 19 rooms, two pools", badge: "Branch",
    pitch: "688 Google reviews of demand leaking through an old http site.",
    chips: ["WhatsApp booking", "Google 4.7 · 688", "Forest / amber design"], colors: ["#12291a", "#e8a33d"],
    site: PREV("hotel/seven-lakes-resort"), code: REPO + "/tree/hotel/seven-lakes-resort" },
  { n: "Hotel #4", name: "Hotel Young's Stupa", area: "Lekhnath-09 · 12 rooms, rooftop", badge: "Branch",
    pitch: "Guests rate it 9.7 — OTAs sell it from $7. Underpriced and unreachable.",
    chips: ["Call booking", "Trip.com 9.7", "Plum / saffron design"], colors: ["#191423", "#e8a33d"],
    site: PREV("hotel/hotel-youngs-stupa"), code: REPO + "/tree/hotel/hotel-youngs-stupa" },
  { n: "Hotel #5", name: "Begnas Lake Front Guest House", area: "31 Majhikuna · 12 rooms, on the shore", badge: "Branch",
    pitch: "Best shore in Majhikuna — its 'website' is its Facebook page.",
    chips: ["WhatsApp booking", "Family-run · yoga hall", "Slate / terracotta design"], colors: ["#0c1b26", "#c75b39"],
    site: PREV("hotel/begnas-lake-front-guest-house"), code: REPO + "/tree/hotel/begnas-lake-front-guest-house" },
  { n: "Hotel #6", name: "Robin's Nest Hotel & Restaurant", area: "Deorali · garden hilltop, host Nima", badge: "Branch",
    pitch: "Tripadvisor 4.8 and no phone number anywhere on the internet.",
    chips: ["Booking.com-primary", "TA 4.8 · real quotes", "Olive / rose design"], colors: ["#1c2410", "#c25e7c"],
    site: PREV("hotel/robins-nest"), code: REPO + "/tree/hotel/robins-nest" },
  { n: "Hotel #7", name: "Rupakot Resort", area: "Rupakot ridge, 1,100 m · 42 rooms", badge: "Redesign",
    pitch: "A proven 4-star resort (8.7 across 2,469 ratings) whose site undersells it.",
    chips: ["WhatsApp booking", "Trivago 8.7 · 2,469", "Charcoal / copper design"], colors: ["#171310", "#a9713b"],
    site: PREV("hotel/rupakot-resort"), code: REPO + "/tree/hotel/rupakot-resort" },
];

const queue: [string, string, string][] = [
  ["#8", "The Begnas Lake Resort & Villas", "redesign tier"],
  ["#9", "Annapurna Royal Camp", "luxury camp"],
  ["#10", "Sanu Lake on de' Water", "lakeside"],
  ["#11", "Begnas Yoga & Retreat", "retreat niche"],
  ["#12", "Ram Homestay", "top-rated homestay"],
  ["#13", "Serene Himalaya View", "view lodge"],
  ["#14", "Tropical Escape – Patal Eco Villa", "eco villa"],
  ["#15", "Chillgarden ECO Home", "eco stay"],
  ["#16", "Lakefront Guest House (Majhikuna)", "guest house"],
  ["#17", "Begnas Aqua Park Resort & Restaurant", "family resort"],
  ["#18", "Hotel Day Break", "in-town hotel"],
  ["#19", "Lake Wave Cottage & Restaurant", "cottages"],
  ["#20", "Tiger Mountain Pokhara Lodge", "aspirational · last"],
];

export default function Home() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="kicker">Ankit's Hotel Website Business · Lekhnath, Pokhara</div>
        <h1>Every hotel website,<br /><em>one front door.</em></h1>
        <p className="sub">This page is the main site now — the index of the whole Lekhnath Top-20 project. Open any hotel's website, jump to its code and owner-approach README, and see what's still in the queue.</p>
        <div className="stats">
          <div className="stat"><b>9</b>sites ready</div>
          <div className="stat"><b>7 / 20</b>prospects done</div>
          <div className="stat"><b>13</b>in the queue</div>
          <div className="stat"><b>1</b>repo, one branch each</div>
        </div>
        <div className="bar"><i /></div>
        <p className="note"><b>How opening works:</b> every hotel — the View Tower included — lives on <b>its own branch</b> with its own Vercel preview. Those previews ask for <b>your Vercel login</b> first (deployment protection keeps them private until you pitch). The <b>Code + pitch</b> button always works: it opens the branch with its README — hotel facts, the pitch, and what to say to the owner.</p>
      </header>

      <h2>Ready to show</h2>
      <div className="grid">
        {sites.map((s) => (
          <article className="card" key={s.name}>
            <div className="thumb" style={{ background: `linear-gradient(120deg, ${s.colors[0]}, ${s.colors[1]})` }}>
              <span className="num">{s.n}</span><span className="badge">{s.badge}</span>
            </div>
            <div className="body">
              <div className="name">{s.name}</div>
              <div className="meta">{s.area}</div>
              <p className="pitch">{s.pitch}</p>
              <div className="chips">
                {s.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                <span className="chip"><span className="dots">
                  <span className="dot" style={{ background: s.colors[0] }} />
                  <span className="dot" style={{ background: s.colors[1] }} />
                </span></span>
              </div>
              <div className="links">
                <a className="btn btn-site" href={s.site} target="_blank" rel="noreferrer">Open site</a>
                <a className="btn btn-code" href={s.code} target="_blank" rel="noreferrer">Code + pitch</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2>Still in the queue</h2>
      <div className="queue">
        {queue.map((q) => (
          <div className="q" key={q[0]}><div><b>{q[0]}</b> · {q[1]}</div><span>{q[2]}</span></div>
        ))}
      </div>

      <footer>
        Built with the Lekhnath Top-20 project · Repo:{" "}
        <a href={REPO} target="_blank" rel="noreferrer">TIWARIANKIT10/lekhnath-view-tower-demo</a>
        {" "}· Each new hotel gets added here as its branch is finished.
      </footer>
    </div>
  );
}
