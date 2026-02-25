export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  imageAlt: string;
  type: string[];
  website?: string;
}

export const projects: Project[] = [
  {
    id: "dna-lions-tax-pro",
    title: "DNA LIONS Tax Pro Software",
    description: "Professional tax software solution with modern UI/UX design.",
    images: ["/DNA LIONS Tax Pro Software.png", "/projects/DNA Lions.png"],
    imageAlt: "DNA LIONS Tax Pro Software",
    type: ["Web Development"],
    website: "https://example.com/dna-lions",
  },
  {
    id: "logic-truecare",
    title: "Logic TrueCare",
    description: "Healthcare management platform with intuitive branding and UI.",
    images: ["/Logic TrueCare.png"],
    imageAlt: "Logic TrueCare",
    type: ["Branding", "Web Development"],
    website: "https://example.com/logic-truecare",
  },
  {
    id: "tnt-security-services",
    title: "T&T Security Services LLC",
    description: "Security services company branding and professional web presence.",
    images: ["/T&T Security Services LLC.png"],
    imageAlt: "T&T Security Services LLC",
    type: ["Branding", "Web Development"],
  },
  {
    id: "abol-buna",
    title: "Abol Buna Coffee Brand",
    description: "Brand identity and packaging visuals for a modern coffee brand.",
    images: [
      "/projects/Abol Buna 1.png",
      "/projects/Abol Buna 2.png",
      "/projects/Abol Buna 3.png",
    ],
    imageAlt: "Abol Buna Coffee Brand",
    type: ["Branding"],
  },
  {
    id: "egk-health",
    title: "EGK Health Services",
    description: "Visual identity and web presence for a healthcare provider.",
    images: ["/projects/EGK 1.png", "/projects/EGK 2.png", "/projects/EGK 3.png"],
    imageAlt: "EGK Health Services",
    type: ["Branding", "Web Development"],
  },
  {
    id: "kbs-car-wash",
    title: "KBS Car Wash",
    description:
      "Branding and digital visuals for a car wash and auto-care service.",
    images: [
      "/projects/KBS Car Wash 1.png",
      "/projects/KBS Car Wash 2.png",
      "/projects/KBS Car Wash 3.png",
    ],
    imageAlt: "KBS Car Wash",
    type: ["Branding"],
  },
  {
    id: "ontime-logistics",
    title: "ONTIME Logistics",
    description: "Minimal, bold logo and branding for a logistics company.",
    images: ["/projects/ONTIME.png"],
    imageAlt: "ONTIME Logistics",
    type: ["Branding"],
  },
  {
    id: "rudo-pharmacy",
    title: "Rudo Pharmacy",
    description: "Clean, trustworthy visual identity for a modern pharmacy.",
    images: ["/projects/Rudo Pharmacy.png"],
    imageAlt: "Rudo Pharmacy",
    type: ["Branding"],
  },
];
