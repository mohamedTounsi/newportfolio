"use client";
import { useState } from "react";
import Image from "next/image";

const freelanceProjects = [
  {
    client: "nafha.tn",
    description: "A comprehensive digital platform built from the ground up to handle high traffic and provide a seamless user experience.",
    link: "https://www.nafha.tn/",
    screenshot: "/websites/nafha.png",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    client: "Sakitna",
    description: "A custom e-commerce storefront designed for high conversion, extremely fast page loads, and modern aesthetics.",
    link: "https://sakitna-three.vercel.app/",
    screenshot: "/websites/sakitna.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    client: "El Kesa",
    description: "A sleek, responsive portfolio and landing page optimized for SEO and modern web accessibility standards.",
    link: "https://elkesa.vercel.app/",
    screenshot: "/websites/elkesa.png",
    tags: ["React", "Framer Motion"],
  },
  {
    client: "MTC-isims",
    description: "An internal dashboard application for tracking metrics, managing data, and streamlining daily operations.",
    link: "https://mtcisims.tn/",
    screenshot: "/websites/mtc.png",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
  {
    client: "Moda Serena",
    description: "An internal dashboard application for tracking metrics, managing data, and streamlining daily operations.",
    link: "https://modaserena.vercel.app/",
    screenshot: "/websites/modaserena.png",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
];

export default function FreelanceShowcase() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? freelanceProjects : freelanceProjects.slice(0, 3);

  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
        {visible.map((project, i) => (
          <div key={i} className="group flex flex-col gap-5">
            {/* Image Container with Cinematic Hover */}
            <div className="relative w-full aspect-video bg-gray-100 overflow-hidden rounded-sm border border-solid border-gray-200 shadow-sm">
              <Image
                src={project.screenshot}
                alt={project.client}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded-full font-medium text-[14px] transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-2xl flex items-center gap-2 hover:scale-105"
                >
                  Visit Live Site
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1C1F] font-medium text-[20px] tracking-tight hover:underline underline-offset-4 decoration-2 decoration-gray-300 w-fit transition-all hover:text-black"
              >
                {project.client}
              </a>
              <p className="text-[#646468] text-[14px] font-light leading-relaxed min-h-[60px]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[12px] font-medium text-[#646468] bg-gray-100 border border-solid border-gray-200 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {freelanceProjects.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 border border-solid border-gray-300 px-6 py-3 text-[14px] font-medium text-[#1C1C1F] hover:bg-gray-50 transition-colors"
          >
            {showAll ? "Show Less" : `See All ${freelanceProjects.length} Projects`}
            <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
