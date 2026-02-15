"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

type TabType = "All" | "Branding" | "Web Development";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.type.includes(activeTab));

  const tabs: TabType[] = ["All", "Branding", "Web Development"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#1a1a2e] to-[#2d3748] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing our expertise through successful digital solutions and
              branding projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-lg border border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#6c5ce7] text-white shadow-md"
                      : "text-[#1a1a2e] hover:text-[#6c5ce7] hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <Image
                      src={project.image}
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
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
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
    </div>
  );
}
