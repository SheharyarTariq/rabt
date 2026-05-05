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
    title: "Film & Fashion",
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

