// Images now live in /public (copied from the source repo's src/assets),
// so we reference them by URL instead of importing them as modules.

export type Show = {
  title: string;
  host: string;
  meta: string;
  image: string;
  progress?: number;
};

export const recentlyWatched: Show[] = [
  { title: "The Long Cut", host: "Mara Vance", meta: "Ep. 212 · 48 min left", image: "/cover-2.jpg", progress: 62 },
  { title: "Cold Ledger", host: "Desmond Rhee", meta: "Ep. 88 · 12 min left", image: "/cover-1.jpg", progress: 84 },
  { title: "Static & Signal", host: "Ida Okonkwo", meta: "Ep. 41 · 30 min left", image: "/cover-3.jpg", progress: 35 },
  { title: "Night Desk", host: "Priya Raman", meta: "Ep. 7 · 5 min left", image: "/cover-2.jpg", progress: 92 },
  { title: "Off the Record", host: "Silas Bloom", meta: "Ep. 154 · 21 min left", image: "/cover-1.jpg", progress: 48 },
];

export const upcoming: Show[] = [
  { title: "Everything Burns", host: "Nia Calloway", meta: "Premieres Aug 18", image: "/cover-1.jpg" },
  { title: "The Quiet Hour", host: "Tomas Iles", meta: "Premieres Aug 20", image: "/cover-3.jpg" },
  { title: "Second Draft", host: "Ruby Ozawa", meta: "Premieres Aug 22", image: "/cover-2.jpg" },
  { title: "Hard Numbers", host: "Bea Marchetti", meta: "Premieres Aug 25", image: "/cover-1.jpg" },
  { title: "Verdict Pending", host: "Owen Frye", meta: "Premieres Sep 02", image: "/cover-3.jpg" },
];

export const trending: Show[] = [
  { title: "Blackout Radio", host: "Kofi Adjei", meta: "1.2M listens this week", image: "/cover-3.jpg" },
  { title: "Mother Tongue", host: "Lena Duarte", meta: "980K listens this week", image: "/cover-2.jpg" },
  { title: "Case No. 9", host: "Harper Quinn", meta: "870K listens this week", image: "/cover-1.jpg" },
  { title: "Deep Field", host: "Yusuf Karim", meta: "744K listens this week", image: "/cover-3.jpg" },
  { title: "The Bench", host: "Marcus Lyle", meta: "610K listens this week", image: "/cover-2.jpg" },
];

export type Creator = {
  name: string;
  role: string;
  bio: string;
  shows: string;
  image: string;
  showTitle: string;
  showBlurb: string;
  showImage: string;
  talent: string[];
  upcomingEpisodes: { title: string; date: string; length: string }[];
};

export const creators: Creator[] = [
  {
    name: "Mara Vance",
    role: "Host · Longform Journalism",
    bio: "Ten years on the investigative beat. Now she edits the tape herself and lets the silences do the talking.",
    shows: "3 shows · 412 episodes",
    image: "/creator-1.jpg",
    showTitle: "The Long Cut",
    showBlurb:
      "One story, told across a whole season. Court tape, field recordings, and the parts other newsrooms cut for time.",
    showImage: "/cover-2.jpg",
    talent: ["Mara Vance — host", "Ellis Grant — producer", "Dana Whit — field reporter"],
    upcomingEpisodes: [
      { title: "The File Room", date: "Aug 18", length: "54 min" },
      { title: "Two Witnesses", date: "Aug 25", length: "48 min" },
      { title: "What the Clerk Saw", date: "Sep 01", length: "61 min" },
    ],
  },
  {
    name: "Desmond Rhee",
    role: "Host · True Crime",
    bio: "Former court reporter turned narrator. Builds each season from transcripts nobody else bothered to read.",
    shows: "2 shows · 188 episodes",
    image: "/creator-2.jpg",
    showTitle: "Cold Ledger",
    showBlurb:
      "Cases that closed on paper and nowhere else. Every episode starts with a document and ends with a question.",
    showImage: "/cover-1.jpg",
    talent: ["Desmond Rhee — host", "Nora Sipe — researcher", "Ben Adeyemi — sound design"],
    upcomingEpisodes: [
      { title: "Exhibit 14", date: "Aug 19", length: "43 min" },
      { title: "The Second Ledger", date: "Aug 26", length: "50 min" },
      { title: "Unsigned", date: "Sep 03", length: "38 min" },
    ],
  },
  {
    name: "Ida Okonkwo",
    role: "Host · Culture & Music",
    bio: "Producer, DJ, and archivist tracing how a single sample travels across four decades of sound.",
    shows: "4 shows · 265 episodes",
    image: "/creator-3.jpg",
    showTitle: "Static & Signal",
    showBlurb:
      "A sample, a city, and forty years of sound. Ida pulls the crates apart and puts the lineage back together.",
    showImage: "/cover-3.jpg",
    talent: ["Ida Okonkwo — host", "Jules Ferrer — music supervisor", "Kem Osei — engineer"],
    upcomingEpisodes: [
      { title: "Break Beat Genealogy", date: "Aug 21", length: "46 min" },
      { title: "The Lagos Tapes", date: "Aug 28", length: "52 min" },
      { title: "One Bar, Four Decades", date: "Sep 05", length: "40 min" },
    ],
  },
  {
    name: "Bea Marchetti",
    role: "Host · Business & Finance",
    bio: "Reads the filings so you don't have to. Twenty minutes a day, no hype, no tickers shouted at you.",
    shows: "1 show · 620 episodes",
    image: "/creator-4.jpg",
    showTitle: "Hard Numbers",
    showBlurb:
      "Twenty minutes each morning on what the filings actually said. No hype, no shouting, no stock tips.",
    showImage: "/cover-1.jpg",
    talent: ["Bea Marchetti — host", "Theo Lund — analyst", "Rae Kinsella — producer"],
    upcomingEpisodes: [
      { title: "Footnote Season", date: "Aug 18", length: "21 min" },
      { title: "Buybacks, Quietly", date: "Aug 19", length: "19 min" },
      { title: "The Auditor Left", date: "Aug 20", length: "24 min" },
    ],
  },
];

export type LiveEvent = {
  title: string;
  city: string;
  venue: string;
  date: string;
  image: string;
};

export const liveEvents: LiveEvent[] = [
  { title: "Cold Ledger Live", city: "Chicago", venue: "The Vic Theatre", date: "Aug 29", image: "/cover-3.jpg" },
  { title: "Blackout Radio Session", city: "Atlanta", venue: "Terminal West", date: "Sep 06", image: "/cover-1.jpg" },
  { title: "Night Desk After Hours", city: "New York", venue: "Bell House", date: "Sep 14", image: "/cover-2.jpg" },
  { title: "Deep Field On Stage", city: "Austin", venue: "Scoot Inn", date: "Sep 27", image: "/cover-3.jpg" },
  { title: "The Bench Finale", city: "Los Angeles", venue: "The Regent", date: "Oct 11", image: "/cover-1.jpg" },
];

export const categories = [
  "Culture",
  "Sports",
  "Crime",
  "News",
  "Health",
  "Business & Finance",
  "Politics",
  "Spirituality",
  "Entertainment",
  "Black Culture",
  "Music",
  "History",
  "Pride",
  "Science & Technology",
  "Fiction",
  "Games & Hobbies",
  "Influencers & Hosts",
  "Food",
  "Kids & Family",
  "Mindfulness",
  "Relationships",
  "Travel",
  "Climate",
  "Gaming",
  "Government",
  "Comedy",
];
