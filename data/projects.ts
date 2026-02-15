export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "DNA LIONS Tax Pro Software",
    description: "Professional tax software solution with modern UI/UX design",
    image: "/DNA LIONS Tax Pro Software.png",
    imageAlt: "DNA LIONS Tax Pro Software",
  },
  {
    id: "2",
    title: "Logic TrueCare",
    description: "Healthcare management platform with intuitive design",
    image: "/Logic TrueCare.png",
    imageAlt: "Logic TrueCare",
  },
  {
    id: "3",
    title: "T&T Security Services LLC",
    description: "Security services company branding and web presence",
    image: "/T&T Security Services LLC.png",
    imageAlt: "T&T Security Services LLC",
  },
];
