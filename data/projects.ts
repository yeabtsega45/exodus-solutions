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
    id: "egk-aircargo",
    title: "EGK Aircargo Services",
    description: "Visual identity and brand presence for an air cargo provider.",
    images: ["/projects/EGK 1.png", "/projects/EGK 2.png", "/projects/EGK 3.png", "/projects/EGK 4.png", "/projects/EGK 5.png"],
    imageAlt: "EGK Aircargo Services",
    type: ["Branding"],
  },
  {
    id: "abol-buna",
    title: "Abol Buna Coffee Brand",
    description: "Brand identity and packaging visuals for a modern coffee brand.",
    images: [
      "/projects/Abol Buna 1.png",
      "/projects/Abol Buna 2.png",
      "/projects/Abol Buna 3.png",
      "/projects/Abol Buna 4.png",
      "/projects/Abol Buna 5.png",
    ],
    imageAlt: "Abol Buna Coffee Brand",
    type: ["Branding"],
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
      "/projects/KBS Car Wash 4.png",
      "/projects/KBS Car Wash 5.png",
    ],
    imageAlt: "KBS Car Wash",
    type: ["Branding"],
  },
  {
    id: "dna-lions-tax-pro",
    title: "DNA LIONS Tax Pro Software",
    description: "Professional tax software solution with modern UI/UX design.",
    images: ["/projects/DNA Lions 1.png", "/projects/DNA Lions 2.png"],
    imageAlt: "DNA LIONS Tax Pro Software",
    type: ["Branding", "Web Development"],
    website: "https://dnalions.com/",
  },
  {
    id: "logic-truecare",
    title: "Logic TrueCare",
    description: "Healthcare management platform with intuitive branding and UI.",
    images: ["/projects/Logic TrueCare.png"],
    imageAlt: "Logic TrueCare",
    type: ["Branding", "Web Development"],
    website: "https://logictruecare.com/",
  },
  {
    id: "tnt-security-services",
    title: "T&T Security Services LLC",
    description: "Security services company branding and professional web presence.",
    images: ["/projects/T&T Security Services LLC.png"],
    imageAlt: "T&T Security Services LLC",
    type: ["Branding", "Web Development"],
    website: "https://www.ttsecurityservicesllc.com/",
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
