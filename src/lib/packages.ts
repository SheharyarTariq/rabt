export type PackageFeatureData = {
  id: string;
  eyebrow: string;
  titleLead: string;
  titleScript: string;
  titleTail: string;
  price: string;
  body: string[];
  highlights: string[];
  imageLeft: { src: string; alt: string };
  imageRight: { src: string; alt: string };
};

export const PAK_PACKAGES: PackageFeatureData[] = [
  {
    id: "package-one",
    eyebrow: "— Package 01 · The Heirloom Film · PKR 45,000 · For One Day",
    titleLead: "The Heirloom Film",
    titleScript: "for",
    titleTail: "one timeless day",
    price: "PKR 45,000",
    body: [
      "A timeless cinematic piece crafted to preserve the feeling of your wedding in its most elegant form.",
    ],
    highlights: [
      "2–3 Minute Cinematic Wedding Film",
      "Thoughtfully Curated Storytelling",
      "Signature Color Grading",
      "Cinematic Sound Design",
    ],
    imageLeft: {
      src: "/package/package1.JPG",
      alt: "Heirloom wedding film still",
    },
    imageRight: {
      src: "/package/package11.JPG",
      alt: "Heirloom wedding film still",
    },
  },
  {
    id: "package-two",
    eyebrow: "— Package 02 · The Legacy Story · PKR 70,000 · 1-Day Coverage",
    titleLead: "The Legacy Story",
    titleScript: "for an",
    titleTail: "immersive celebration",
    price: "PKR 70,000",
    body: [
      "A deeper, more immersive narrative capturing the emotion, energy, and essence of your celebration.",
    ],
    highlights: [
      "2–3 Minute Cinematic Wedding Film",
      "10–15 Minute Documentary Film",
      "Story-Driven Editing Approach",
      "Professional Audio Enhancement",
      "Cinematic Color Grading & Sound Design",
    ],
    imageLeft: {
      src: "/package/pack2.JPG",
      alt: "Legacy story wedding still",
    },
    imageRight: {
      src: "/package/pack22.JPG",
      alt: "Legacy story wedding still",
    },
  },
  {
    id: "package-three",
    eyebrow: "— Package 03 · The Timeless Collection · PKR 35,000 · 1-Day Coverage",
    titleLead: "The Timeless Collection",
    titleScript: "for",
    titleTail: "moments that linger",
    price: "PKR 35,000",
    body: [
      "An elegant photography experience focused on capturing moments that live beyond the day.",
    ],
    highlights: [
      "1-Day Coverage",
      "Unlimited Raw Images",
      "100 Handcrafted Edited Photos",
      "Signature Color-Graded Edits",
      "Aesthetic & Detail-Oriented Coverage",
      "Online Gallery Delivery",
    ],
    imageLeft: {
      src: "/package/package3.JPG",
      alt: "Timeless collection photography still",
    },
    imageRight: {
      src: "/package/package33.JPG",
      alt: "Timeless collection photography still",
    },
  },
];

export const INTERNATIONAL_PACKAGES: PackageFeatureData[] = [
  {
    id: "intl-package-one",
    eyebrow: "— Package 01 · The Heirloom Film · $1,000 · For One Day",
    titleLead: "The Heirloom Film",
    titleScript: "for",
    titleTail: "one timeless day",
    price: "$1,000",
    body: [
      "A timeless cinematic piece crafted to preserve the feeling of your wedding in its most elegant form.",
    ],
    highlights: [
      "2–3 Minute Cinematic Wedding Film",
      "Thoughtfully Curated Storytelling",
      "Signature Color Grading",
      "Cinematic Sound Design",
    ],
    imageLeft: {
      src: "/package/package1.JPG",
      alt: "Heirloom wedding film still",
    },
    imageRight: {
      src: "/package/package11.JPG",
      alt: "Heirloom wedding film still",
    },
  },
  {
    id: "intl-package-two",
    eyebrow: "— Package 02 · The Legacy Story · $1,700 · 1-Day Coverage",
    titleLead: "The Legacy Story",
    titleScript: "for an",
    titleTail: "immersive celebration",
    price: "$1,700",
    body: [
      "A deeper, more immersive narrative capturing the emotion, energy, and essence of your celebration.",
    ],
    highlights: [
      "2–3 Minute Cinematic Wedding Film",
      "10–15 Minute Documentary Film",
      "Story-Driven Editing Approach",
      "Professional Audio Enhancement",
      "Cinematic Color Grading & Sound Design",
    ],
    imageLeft: {
      src: "/package/pack2.JPG",
      alt: "Legacy story wedding still",
    },
    imageRight: {
      src: "/package/pack22.JPG",
      alt: "Legacy story wedding still",
    },
  },
  {
    id: "intl-package-three",
    eyebrow: "— Package 03 · The Timeless Collection · $700 · 1-Day Coverage",
    titleLead: "The Timeless Collection",
    titleScript: "for",
    titleTail: "moments that linger",
    price: "$700",
    body: [
      "An elegant photography experience focused on capturing moments that live beyond the day.",
    ],
    highlights: [
      "1-Day Coverage",
      "Unlimited Raw Images",
      "100 Handcrafted Edited Photos",
      "Signature Color-Graded Edits",
      "Aesthetic & Detail-Oriented Coverage",
      "Online Gallery Delivery",
    ],
    imageLeft: {
      src: "/package/package3.JPG",
      alt: "Timeless collection photography still",
    },
    imageRight: {
      src: "/package/package33.JPG",
      alt: "Timeless collection photography still",
    },
  },
];
