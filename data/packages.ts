export interface Package {
    name: string;
    price: string;
    services: string[];
    brandIdentity: boolean;
    webDev: "static" | "dynamic";
}

export const packages: Array<Package> = [
    {
      name: "Basic",
      price: "20,000 ETB",
      services: [
        "Logo Design (3 logo options)",
        "Color Palette",
        "Typography",
        "Brand Pattern",
        "Static Website (up to 5 pages)",
        "Responsive Design",
        "Basic SEO Setup",
      ],
      brandIdentity: true,
      webDev: "static",
    },
    {
      name: "Professional",
      price: "30,000 ETB",
      services: [
        "Logo Design (5 logo options)",
        "Color Palette",
        "Typography",
        "Brand Pattern",
        "Stationery Design",
        "Social Media Kit",
        "Dynamic Website (CMS-based)",
        "Up to 8 pages",
        "Responsive Design",
        "SEO Setup",
        "Contact Form Integration",
      ],
      brandIdentity: true,
      webDev: "dynamic",
    },
    {
      name: "Premium",
      price: "40,000 ETB",
      services: [
        "Logo Design (7 logo options)",
        "Color Palette",
        "Typography",
        "Brand Pattern",
        "Full Branding Collateral",
        "Brand Guidelines",
        "Publication Design",
        "Social Media Kit",
        "Dynamic Website (CMS-based)",
        "Unlimited pages",
        "Blog System",
        "Admin Dashboard",
        "Responsive Design",
        "Advanced SEO",
        "Google Maps Integration",
        "Domain & Hosting Setup",
        "Website Maintenance Plan",
      ],
      brandIdentity: true,
      webDev: "dynamic",
    },
];