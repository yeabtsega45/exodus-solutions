import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#1a1a2e] to-[#2d3748] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-3">
                Project Case Study
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-gray-300 max-w-2xl text-base md:text-lg">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {project.type.map((type, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white border border-white/20"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid gap-6 md:grid-cols-3">
            {project.images.map((src, index) => (
              <div
                key={src}
                className={`relative bg-gray-100 overflow-hidden rounded-xl shadow-lg ${
                  index === 0 ? "md:col-span-2 h-80 md:h-96" : "h-60 md:h-72"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.imageAlt} - Preview ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This project showcases Exodus Solutions&apos; capability to blend
              strategic branding with modern digital experiences. From visual
              identity to web presence, we focus on clarity, consistency, and
              usability to help brands communicate their value effectively.
            </p>

            <div className="flex flex-wrap gap-6 items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Services Provided
                </h3>
                <p className="text-gray-800 text-sm md:text-base">
                  {project.type.join(" • ")}
                </p>
              </div>

              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#6c5ce7] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#5a4fd6] transition-colors"
                >
                  Visit Website
                </Link>
              )}
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link
              href="/projects"
              className="text-sm font-semibold text-[#6c5ce7] hover:text-[#5a4fd6] hover:underline"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

