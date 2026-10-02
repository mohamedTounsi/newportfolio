"use client";
import Image from "next/image";

// Marquee items: logo + label
// slug maps to https://cdn.simpleicons.org/{slug}
const marqueeItems = [
  { label: "JavaScript", slug: "javascript" },
  { label: "TypeScript", slug: "typescript" },
  { label: "Python",     slug: "python" },
  { label: "PHP",        slug: "php" },
  { label: "HTML5",      slug: "html5" },
  { label: "CSS",        slug: "css" },
  { label: "Next.js",    slug: "nextdotjs" },
  { label: "React",      slug: "react" },
  { label: "Angular",    slug: "angular" },
  { label: "Laravel",    slug: "laravel" },
  { label: "Express",    slug: "express" },
  { label: "Tailwind",   slug: "tailwindcss" },
  { label: "Three.js",   slug: "threedotjs" },
  { label: "PostgreSQL", slug: "postgresql" },
  { label: "MySQL",      slug: "mysql" },
  { label: "MongoDB",    slug: "mongodb" },
  { label: "Firebase",   slug: "firebase" },
  { label: "Git",        slug: "git" },
  { label: "GitHub",     slug: "github" },
  { label: "Figma",      slug: "figma" },
  { label: "Vercel",     slug: "vercel" },
  { label: "Docker",     slug: "docker" },
  { label: "Postman",    slug: "postman" },
  { label: "VS Code",    slug: "visualstudiocode" },
];

const categories = [
  {
    label: "Languages",
    color: "bg-blue-500",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    color: "bg-violet-500",
    items: ["Next.js", "React", "Angular", "Laravel", "Express.js", "Tailwind CSS", "Three.js"],
  },
  {
    label: "Databases",
    color: "bg-emerald-500",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    label: "Tools & Platforms",
    color: "bg-orange-400",
    items: ["Git", "GitHub", "Figma", "VS Code", "Postman", "Vercel", "Docker"],
  },
];

export default function TechStack() {
  const row1 = marqueeItems.slice(0, 12);
  const row2 = marqueeItems.slice(12, 24);
  const looped1 = [...row1, ...row1, ...row1, ...row1];
  const looped2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className="flex flex-col gap-0">
      {/* ── Infinite marquee ticker with logos ── */}
      <div className="w-full overflow-hidden border-b border-solid border-gray-300 py-6 select-none flex flex-col gap-6">
        <div className="animate-marquee gap-6">
          {looped1.map((tech, i) => (
            <div
              key={`r1-${i}`}
              className="inline-flex flex-col items-center gap-2 mx-5 group"
            >
              <div className="w-10 h-10 relative transition-all duration-300">
                <Image src={`https://cdn.simpleicons.org/${tech.slug}`} alt={tech.label} fill className="object-contain" sizes="40px" unoptimized />
              </div>
              <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">{tech.label}</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee-reverse gap-6">
          {looped2.map((tech, i) => (
            <div
              key={`r2-${i}`}
              className="inline-flex flex-col items-center gap-2 mx-5 group"
            >
              <div className="w-10 h-10 relative transition-all duration-300">
                <Image src={`https://cdn.simpleicons.org/${tech.slug}`} alt={tech.label} fill className="object-contain" sizes="40px" unoptimized />
              </div>
              <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">{tech.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Categorized grid (unchanged) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-solid divide-gray-300">
        {categories.map((cat, ci) => (
          <div
            key={ci}
            className={`flex flex-col gap-4 px-6 sm:px-10 py-8 sm:py-10 ${
              ci >= 2 ? "border-t border-solid border-gray-300" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${cat.color}`}></span>
              <span className="text-[12px] font-medium text-[#646468] uppercase tracking-widest">
                {cat.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-[13px] font-medium text-[#1C1C1F] border border-solid border-gray-200 px-3 py-1.5 rounded-sm hover:bg-gray-50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
