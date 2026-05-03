export type PackageFeatureData = {
  id: string;
  eyebrow: string;
  titleLead: string;
  titleScript: string;
  titleTail: string;
  body: string[];
  highlights: string[];
  imageLeft: { src: string; alt: string };
  imageRight: { src: string; alt: string };
};

export const PAK_PACKAGES: PackageFeatureData[] = [
  {
    id: "package-one",
    eyebrow: "— Package 01 · Signature",
    titleLead: "A modern approach",
    titleScript: "to an",
    titleTail: "age old tradition",
    body: [
      "Considered to be the epitome of modern wedding cinema in Pakistan, Rabt has been crafting films that transform the country's wedding landscape on a regular basis.",
      "Awarded for our restrained, story-led approach, the Signature package is built for couples who want their day captured as a film, not a record.",
    ],
    highlights: [
      "Pre-wedding film",
      "Highlight reel",
      "Cinematic teaser",
      "Same-day edit",
    ],
    imageLeft: {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1000&q=80",
      alt: "Bridal portrait",
    },
    imageRight: {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      alt: "Wedding scene",
    },
  },
  {
    id: "package-two",
    eyebrow: "— Package 02 · Heritage",
    titleLead: "A timeless craft",
    titleScript: "for an",
    titleTail: "unforgettable day",
    body: [
      "Heritage is built around the rituals — the henna, the baraat, the rukhsati — captured with the patience and grain of an old film print.",
      "Designed for multi-day celebrations across Lahore, Karachi and beyond, this package is shaped for families that want every chapter held with equal care.",
    ],
    highlights: [
      "Multi-day coverage",
      "Documentary edit",
      "35mm grain finish",
      "Director's cut",
    ],
    imageLeft: {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
      alt: "Henna ceremony",
    },
    imageRight: {
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
      alt: "Couple portrait",
    },
  },
];
