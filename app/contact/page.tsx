"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#1a1a2e] to-[#2d3748] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your
              vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to help! Reach out to us through any of the
                  following channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#6c5ce7]">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#6c5ce7]/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-[#6c5ce7]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a2e] mb-1">Email Us</h3>
                      <a
                        href="mailto:matiyassamuel86@gmail.com"
                        className="text-[#6c5ce7] hover:text-[#5a4fd6] hover:underline transition-colors"
                      >
                        matiyassamuel86@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#1a1a2e]">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a1a2e]/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-[#1a1a2e]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a2e] mb-1">Call Us</h3>
                      <a
                        href="tel:0940596262"
                        className="text-[#6c5ce7] hover:text-[#5a4fd6] hover:underline transition-colors"
                      >
                        0940596262
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#a29bfe]">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#a29bfe]/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-[#a29bfe]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a2e] mb-2">Office Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600 text-sm">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
                Send Us a Message
              </h2>

              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1a1a2e] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1a1a2e] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#1a1a2e] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent outline-none transition-all"
                    placeholder="+251 9XX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#1a1a2e] mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="branding">Brand Identity & Design</option>
                    <option value="website">Website Development</option>
                    <option value="package">Service Package Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1a1a2e] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6c5ce7] hover:bg-[#5a4fd6] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
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
