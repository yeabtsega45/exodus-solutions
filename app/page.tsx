import Image from "next/image";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import Link from "next/link";

export default function Home() {
  const packages: Array<{
    name: string;
    price: string;
    services: string[];
    brandIdentity: boolean;
    webDev: "static" | "dynamic";
  }> = [
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#1a1a2e] to-[#2d3748] text-white py-24 md:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Creative Branding & Web Development
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              A creative and technology-driven agency providing branding, design,
              and web development services for businesses seeking a modern and
              professional digital presence.
            </p>

            {/* Call to Action */}
            <div className="mt-12">
              <a
                href="/projects"
                className="inline-block bg-[#6c5ce7] hover:bg-[#5a4fd6] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1a1a2e] text-center mb-4">
            Our Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Showcasing our expertise through successful digital solutions and
            branding projects
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.type.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-[#6c5ce7]/10 text-[#6c5ce7]"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* See more button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-[#6c5ce7] px-8 py-3 text-sm font-semibold text-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white transition-colors"
            >
              See more projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight text-center mb-8">
              Let's build, grow, and
              <br />
              <span className="text-[#6c5ce7]">elevate your brand</span>
              <br />
              together!
            </h2>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1a1a2e] text-center mb-8">
            Our Services
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            We craft complete brand identities and digital experiences for modern
            businesses. From strategic{" "}
            <span className="font-semibold">logo design</span>, cohesive{" "}
            <span className="font-semibold">brand guidelines</span>, publication
            materials, and social media kits, to{" "}
            <span className="font-semibold">website design &amp; development</span>{" "}
            that includes structured multi-page sites, static or CMS-powered
            dynamic websites, responsive layouts, basic SEO setup, Google Maps
            and contact form integration, domain &amp; hosting support, and
            ongoing website maintenance — Exodus Solutions delivers a unified,
            professional presence across every touchpoint.
          </p>

          {/* Service Highlights */}
          <div className="mt-12 bg-[#1a1a2e] text-white rounded-2xl px-6 py-10 md:px-10 shadow-xl">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
                {services.map((service) => (
                  <div key={service.number} className="space-y-3">
                    <h3 className="text-5xl md:text-6xl font-extrabold text-white/90 tracking-tight">
                      {service.number}
                    </h3>
                    <h4 className="text-lg font-semibold text-[#a29bfe] uppercase tracking-wide">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xs mx-auto">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
