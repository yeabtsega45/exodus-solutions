import Image from "next/image";
import PackageCard from "@/components/PackageCard";

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
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Image
              src="/exodus-logo.png"
              alt="Exodus Solutions Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#1a1a2e]">
                Exodus <span className="text-[#6c5ce7]">Solution</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#1a1a2e] to-[#2d3748] text-white py-32 md:py-40">
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
            
            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-[#a29bfe] mb-2">40+</div>
                <p className="text-gray-300 text-sm uppercase tracking-wide">Happy Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-[#a29bfe] mb-2">100+</div>
                <p className="text-gray-300 text-sm uppercase tracking-wide">Projects Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-[#a29bfe] mb-2">5+</div>
                <p className="text-gray-300 text-sm uppercase tracking-wide">Years Experience</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <a
                href="#packages"
                className="inline-block bg-[#6c5ce7] hover:bg-[#5a4fd6] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
              >
                View Our Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight">
                Let's build, grow, and
                <br />
                <span className="text-[#6c5ce7]">elevate your brand</span>
                <br />
                together!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a full-service digital agency specializing in web development,
                branding and 360° Marketing. With experience working with over 40
                clients, we have successfully driven revenue growth through innovative
                digital solutions.
              </p>
            </div>

            {/* Right Content Section - Stats */}
            <div className="bg-linear-to-br from-[#1a1a2e] to-[#2d3748] rounded-lg p-8 md:p-12 text-white">
              <div className="space-y-8">
                {/* Experience Section */}
                <div className="flex items-end gap-4">
                  <h3 className="text-7xl md:text-8xl font-extrabold text-white leading-none">
                    5
                  </h3>
                  <div className="pb-2">
                    <p className="uppercase text-sm font-semibold text-gray-300 tracking-wide">
                      years
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-white">
                      Of Experience
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  <div>
                    <p className="text-4xl font-bold text-[#a29bfe] mb-1">40+</p>
                    <p className="text-sm text-gray-300 uppercase tracking-wide">
                      Clients
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#a29bfe] mb-1">100+</p>
                    <p className="text-sm text-gray-300 uppercase tracking-wide">
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1a1a2e] text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brand Identity */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#6c5ce7]">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                Brand Identity
              </h3>
              <p className="text-gray-600 mb-6">
                Delivering a cohesive and recognizable brand system.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#6c5ce7] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Logo Design</strong> – Icons, fonts, color palette,
                    and variations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6c5ce7] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Brand Guidelines</strong> – Usage rules, tone,
                    typography, and color standards.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6c5ce7] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Publication Design</strong> – Banner, flyer,
                    brochure, billboard, business card, and letterhead.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6c5ce7] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Social Media Kit</strong> – Profile icons, cover
                    banners, and post templates.
                  </span>
                </li>
              </ul>
            </div>

            {/* Website Design & Development */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1a1a2e]">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                Website Design & Development
              </h3>
              <p className="text-gray-600 mb-6">
                Building professional and responsive websites tailored to the
                client&apos;s goals.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1a1a2e] mb-2">
                    Website Structure
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Up to X pages (Home, About, Services, Contact, etc.).
                    Additional pages upon request.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a2e] mb-2">Type</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Static Website (Informational, minimal content updates)</li>
                    <li>• Dynamic Website (CMS-based, editable content, blog, admin dashboard, etc.)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a2e] mb-2">Features</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Responsive design (mobile-friendly)</li>
                    <li>• Basic SEO setup</li>
                    <li>• Google Maps and contact form integration</li>
                    <li>• Domain & hosting setup (optional)</li>
                    <li>• Website maintenance (optional plan)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section id="packages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1a1a2e] text-center mb-12">
            Service Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1a1a2e] text-center mb-4">
            Our Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Showcasing our expertise through successful digital solutions and
            branding projects
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Image
                  src="/DNA LIONS Tax Pro Software.png"
                  alt="DNA LIONS Tax Pro Software"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  DNA LIONS Tax Pro Software
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional tax software solution with modern UI/UX design
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Image
                  src="/Logic TrueCare.png"
                  alt="Logic TrueCare"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  Logic TrueCare
                </h3>
                <p className="text-gray-600 text-sm">
                  Healthcare management platform with intuitive design
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Image
                  src="/T&T Security Services LLC.png"
                  alt="T&T Security Services LLC"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  T&T Security Services LLC
                </h3>
                <p className="text-gray-600 text-sm">
                  Security services company branding and web presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">For Any Query:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Email Us:</p>
                  <a
                    href="mailto:matiyassamuel86@gmail.com"
                    className="text-[#a29bfe] hover:text-[#6c5ce7] hover:underline transition-colors"
                  >
                    matiyassamuel86@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Call Us:</p>
                  <a
                    href="tel:0940596262"
                    className="text-[#a29bfe] hover:text-[#6c5ce7] hover:underline transition-colors"
                  >
                    0940596262
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">About Us</h3>
              <p className="text-gray-300 leading-relaxed">
                A creative and technology-driven agency providing branding, design,
                and web development services for businesses seeking a modern and
                professional digital presence.
              </p>
            </div>

            {/* Provided By Section */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2 text-sm">Provided by</p>
              <p className="text-xl font-bold text-white">MATIYAS SAMUEL</p>
              <div className="mt-6 flex justify-center md:justify-end">
                <div className="flex items-center gap-2">
                  <Image
                    src="/exodus-logo.png"
                    alt="Exodus Solutions Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="text-lg font-bold">
                    Exodus <span className="text-[#6c5ce7]">Solution</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Exodus Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
