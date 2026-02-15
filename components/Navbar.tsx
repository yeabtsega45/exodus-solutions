"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
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
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#1a1a2e] font-medium hover:text-[#6c5ce7] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-[#1a1a2e] font-medium hover:text-[#6c5ce7] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-[#1a1a2e] font-medium hover:text-[#6c5ce7] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1a1a2e] p-2"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#1a1a2e] font-medium hover:text-[#6c5ce7] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-[#1a1a2e] font-medium hover:text-[#6c5ce7] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-[#1a1a2e] font-medium hover:text-[#6c5ce7] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;