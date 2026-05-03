export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  client: string;
  cover: string;
  tags: string[];
  description: string;
};

export const SERVICES = [
  {
    title: "Film & Commercial",
    body:
      "Brand films, commercials and long-form narrative pieces — from first treatment through final colour.",
  },
  {
    title: "Documentary",
    body:
      "Observational and interview-led documentary, told with restraint and a feel for the quiet moment.",
  },
  {
    title: "Music Videos",
    body:
      "Performance films and concept-led music videos built around the song and the artist.",
  },
  {
    title: "Branded Content",
    body:
      "Episodic and social content, designed for the channel and the culture it lives in.",
  },
  {
    title: "Direction & Treatment",
    body:
      "Director-led treatments, mood, references, and shot design — delivered as a full creative document.",
  },
  {
    title: "Post-Production",
    body:
      "Edit, grade, sound design and finishing. Crafted in-house with a handful of trusted collaborators.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "the-quiet-room",
    title: "The Quiet Room",
    type: "Short Film",
    year: "2025",
    client: "Independent",
    cover:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80",
    tags: ["Direction", "35mm", "Colour"],
    description:
      "A one-room drama about two strangers, one night and the weight of what isn't said.",
  },
  {
    slug: "northern-lines",
    title: "Northern Lines",
    type: "Commercial",
    year: "2025",
    client: "Aether Eyewear",
    cover:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=2000&q=80",
    tags: ["Brand Film", "Product", "Location"],
    description:
      "A 60-second brand film for Aether's autumn drop, shot across three cities in one week.",
  },
  {
    slug: "sahiba",
    title: "Sahiba",
    type: "Music Video",
    year: "2024",
    client: "Maahi Records",
    cover:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=2000&q=80",
    tags: ["Performance", "Narrative", "Studio"],
    description:
      "A performance-led music video built around a single, slow camera move.",
  },
  {
    slug: "atlas-quarterly",
    title: "Atlas Quarterly",
    type: "Documentary",
    year: "2024",
    client: "Atlas Magazine",
    cover:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=80",
    tags: ["Interview", "Observational"],
    description:
      "A quarterly documentary portrait series on makers, builders and the craft they keep.",
  },
  {
    slug: "house-of-linen",
    title: "House of Linen",
    type: "Brand Film",
    year: "2024",
    client: "Sana Linen Co.",
    cover:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=2000&q=80",
    tags: ["Fashion", "Craft"],
    description:
      "A heritage film for a linen house — loom, light and two generations of weavers.",
  },
  {
    slug: "tides",
    title: "Tides",
    type: "Short Film",
    year: "2023",
    client: "Independent",
    cover:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80",
    tags: ["Narrative", "Coastal", "16mm"],
    description:
      "A coastal short about inheritance, told in three acts and one long morning.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "on-restraint",
    title: "On Restraint — why we cut more than we add.",
    excerpt:
      "Good films are made by what you take out. A short essay on why restraint, silence and space are our most trusted tools.",
    date: "March 2026",
    category: "Craft",
    readTime: "6 min read",
    cover:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "treatment-first",
    title: "Why we write the treatment before we pitch.",
    excerpt:
      "A treatment isn't a sales document — it's a promise. A look at how we build ours, why we won't skip them, and what a good one contains.",
    date: "February 2026",
    category: "Process",
    readTime: "8 min read",
    cover:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=80",
  },
  {
    slug: "notes-from-set",
    title: "Three nights on set — dispatches from Sahiba.",
    excerpt:
      "Shooting a music video in three nights, a single room and too much tea — a set diary from the Sahiba shoot.",
    date: "January 2026",
    category: "On Set",
    readTime: "5 min read",
    cover:
      "https://images.unsplash.com/photo-1543949806-2c9935e6e803?auto=format&fit=crop&w=2000&q=80",
  },
];

export const TEAM = [
  { name: "Arsalan M.", role: "Founder · Director" },
  { name: "Zainab K.", role: "Executive Producer" },
  { name: "Hamza R.", role: "Director of Photography" },
  { name: "Sara F.", role: "Post & Colour" },
];

export const CLIENTS = [
  "Aether",
  "Atlas Magazine",
  "Sana Linen Co.",
  "Maahi Records",
  "Noor Studio",
  "Rang Lab",
  "Kismet",
  "Minār",
];

export const TESTIMONIALS = [
  {
    quote:
      "Rabt brought a stillness to the film that we hadn't thought possible for a brand commercial. The final cut was everything our brief wasn't — and everything our product needed.",
    name: "Hana Mirza",
    role: "Creative Director",
    project: "Aether Eyewear",
  },
  {
    quote:
      "Working with the Rabt team felt like collaborating with people who genuinely love cinema. They understood the song before we'd even finished explaining it.",
    name: "Bilal Saeed",
    role: "Artist",
    project: "Sahiba — Music Video",
  },
  {
    quote:
      "They shot our two-hundred-year-old linen story in three days and came back with something that felt like a feature film. Quietly exceptional.",
    name: "Sana Chaudhry",
    role: "Founder",
    project: "Sana Linen Co.",
  },
];

