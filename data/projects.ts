export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  imageAlt: string;
  type: string[];
  website?: string;
  overview?: string;
}

export const projects: Project[] = [
  {
    id: "egk-aircargo",
    title: "EGK Aircargo Services",
    description: "Visual identity and brand presence for an air cargo provider.",
    images: [
      "/projects/EGK 1.png",
      "/projects/EGK 2.png",
      "/projects/EGK 3.png",
      "/projects/EGK 4.png",
      "/projects/EGK 5.png",
      "/projects/EGK 6.png",
      "/projects/EGK 7.png",
      "/projects/1-07.png",
      "/projects/1-08.png"
    ],
    imageAlt: "EGK Aircargo Services",
    type: ["Branding"],
    overview: `EGK Air Cargo is named after the initials of the company founders:

E – Eskender

G – Getahew

K – Kebede

The logo icon is inspired by an airplane wing viewed from an upward angle, symbolizing movement, speed, elevation, and global connectivity.

The visual identity incorporates aviation-related elements and clean, professional styling to represent reliability, efficiency, and strength within the air cargo and logistics industry.
`
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
      "/projects/Abol Buna 6.png",
      "/projects/Abol Buna 7.png",
      "/projects/Abol Buna 8.png"
    ],
    imageAlt: "Abol Buna Coffee Brand",
    type: ["Branding"],
    overview: `Brand Concept & Inspiration

The coffee house brand identity and logo design are inspired by the Ethiopian traditional coffee ceremony, one of the most meaningful and cultural coffee experiences in Ethiopia.

In Ethiopian coffee culture, coffee is traditionally served in three stages, and the third stage is called “Abol.” This stage represents warmth, community, and togetherness.

The coffee house name is derived from this tradition, honoring the deep cultural roots of Ethiopian coffee.

The logo and overall visual identity follow a traditional design direction, reflecting heritage, authenticity, and respect for Ethiopian coffee culture, while presenting it in a refined and recognizable way.
`
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
      "/projects/3-05.png",
      "/projects/3-06.png",
      "/projects/3-07.png"
    ],
    imageAlt: "KBS Car Wash",
    type: ["Branding"],
    overview: `KBS Car Wash is named after the founder’s initials.

The logo concept is based on the story of two partners who were excited to open a car wash business together. This idea is represented by two friendly character forms shown as happy and energetic, symbolizing teamwork, partnership, and positive service.

The two figures are visually connected and share a single head shape, representing unity, cooperation, and equal partnership.

A star element is included in the logo to symbolize a clean, polished, and high-quality finishing result after every wash.

The color orange is used as a primary brand color to attract attention, create visibility, and communicate energy, enthusiasm, and friendliness. Supporting colors are selected to maintain balance and clarity across all brand materials.

The overall visual identity is playful yet professional, making the brand approachable while still appearing reliable and trustworthy.
`
  },
  {
    id: "ontime-logistics",
    title: "ONTIME Logistics",
    description: "Minimal, bold logo and branding for a logistics company.",
    images: [
      "/projects/ONTIME.png",
      "/projects/4-01.png",
      "/projects/4-02.png",
      "/projects/4-03.png",
      "/projects/4-04.png"
    ],
    imageAlt: "ONTIME Logistics",
    type: ["Branding"],
    overview: `On Time is a newly established import and export company focused on providing fast, reliable, and precise services for clients who want to import goods from any country.

The company name, “On Time,” reflects its commitment to punctuality, reliability, and efficiency — ensuring that goods arrive exactly when promised.

The logo design is inspired by the concept of time. It features a vintage 19th-century clock style, symbolizing precision, trust, and timeless professionalism. The circular shape incorporates classic time markings, while the letter “T” is placed inside the circle to represent “Time.” An arrow integrated with the T symbolizes movement, progress, and the seamless import/export of goods to clients around the world.

The primary color is a dark orange tone, chosen to communicate warmth, friendliness, and approachability while attracting attention and conveying positive energy.
`
  },
  {
    id: "rudo-pharmacy",
    title: "Rudo Pharmacy",
    description: "Clean, trustworthy visual identity for a modern pharmacy.",
    images: [
      "/projects/Rudo Pharmacy.png",
      "/projects/6-02.png",
      "/projects/6-03.png",
      "/projects/6-04.png",
      "/projects/6-05.png",
      "/projects/6-06.png"
    ],
    imageAlt: "Rudo Pharmacy",
    type: ["Branding"],
    overview: `Rudo Pharmacy is a well-known pharmacy located in Addis Ababa, Ethiopia.

The logo design is inspired by the letter “R”, which is combined with a leaf element to symbolize health, care, and medicine. This approach visually communicates the pharmacy’s focus on wellness while maintaining a professional and recognizable form.

The branding style is modern and professional, designed to build trust and credibility. The primary color palette consists of:

Light Green

Dark Green

Black (for typography)

These colors represent health, growth, cleanliness, and reliability, forming a strong and consistent visual identity across all brand materials.
`
  },
  {
    id: "kerchanshe-coffee",
    title: "Kerchanshe Coffee",
    description: "A coffee export website built using Next.js for the frontend and Strapi as the backend.",
    images: [
      "/projects/Kerchanshe.png",
      "/projects/Kerchanshe Logo.png"
    ],
    imageAlt: "Kerchanshe Coffee",
    type: ["Branding", "Web Development"],
    website: "https://kerchanshecoffee.com/",
    overview: `Kerchanshe Coffee's website was designed and developed with a focus on international trade and showcasing the brand's dedication to Ethiopian coffee excellence. The project utilized Next.js for a performant, modern frontend and Strapi CMS for scalable and flexible backend management. The result is a visually appealing, content-driven web experience tailored for coffee exporters and global buyers.`
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
];
