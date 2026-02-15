import Image from "next/image";

function Footer() {
  return (
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
            A creative and technology-driven agency providing branding,
            design, and web development services for businesses seeking a
            modern and professional digital presence.
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
  )
}

export default Footer;