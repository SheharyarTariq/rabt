export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  client: string;
  cover: string;
  tags: string[];
  description: string;
  video?: string;
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
    title: "Wedding Films",
    body:
      "Performance films and concept-led wedding films built around the song and the artist.",
  },
  {
    title: "Story Telling",
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
    slug: "emaan-and-ali",
    title: "Emaan & Ali",
    type: "Wedding Film",
    year: "2025",
    client: "Independent",
    cover: "/short-film/shortfilm1.PNG",
    tags: ["Wedding", "Love Story", "Cinematic"],
    description:
      "a love that feels like home, now and forever.",
    video: "https://www.youtube.com/embed/n--BIdAZBuA",
  },
  {
    slug: "hamza-and-maryam-raja",
    title: "Hamza & Maryam Raja",
    type: "Wedding Film",
    year: "2025",
    client: "Independent",
    cover: "/short-film/shortfilm2.PNG",
    tags: ["Wedding", "Creative", "Connection"],
    description:
      "where creativity met connection, and turned into forever.",
    video: "https://www.youtube.com/embed/uZ2PVm5HlB8",
  },
  {
    slug: "kanza-and-subhan",
    title: "Kanza & Subhan",
    type: "Wedding Film",
    year: "2025",
    client: "Independent",
    cover: "/short-film/shortfilm3.PNG",
    tags: ["Wedding", "Soft", "Romantic"],
    description: "soft, simple, and meant to be.",
    video: "https://www.youtube.com/embed/DD7ecxCCz9k",
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
      "Shooting a wedding film in three nights, a single room and too much tea — a set diary from the Sahiba shoot.",
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
    project: "Sahiba — Wedding Film",
  },
  {
    quote:
      "They shot our two-hundred-year-old linen story in three days and came back with something that felt like a feature film. Quietly exceptional.",
    name: "Sana Chaudhry",
    role: "Founder",
    project: "Sana Linen Co.",
  },
];

