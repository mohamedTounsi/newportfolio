"use client";
import { useState } from "react";
import Image from "next/image";

const websites = [
  {
    name: "IEEE ISIMS Student Branch",
    description:
      "The official website of IEEE ISIMS SB. Built to showcase the branch's identity, executive committee, subunits, events, awards, and community contact — all in one clean, modern platform.",
    link: "https://ieee-isims.org",
    screenshot: "/websites/sb.png",
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    name: "IEEE WIE ISIMS SAG",
    description: "The official website for the Women in Engineering Affinity Group at IEEE ISIMS SB. Designed to highlight women in tech, their events, and achievements.",
    link: "https://wie-isims.ieee.tn/",
    screenshot: "/websites/wie.png",
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "IEEE CS ISIMS SBC",
    description: "The official platform for the Computer Society Chapter at IEEE ISIMS SB, featuring their technical workshops, members, and news.",
    link: "https://cs-isims.ieee.tn/",
    screenshot: "/websites/cs.png",
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "IEEE IAS ISIMS SBC",
    description: "The dedicated website for the Industry Applications Society Chapter at IEEE ISIMS SB.",
    link: "https://ias-isims.ieee.tn/",
    screenshot: "/websites/ias.png",
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "TechResolve Challenge 3.0",
    description:
      "The event website for TRC 3.0 — Campus Guardians, a 24-hour AI & IoT hackathon. Managed the full website from development to deployment throughout the event lifecycle.",
    link: "https://techresolve-challenge.com",
    screenshot: "/websites/trc.png",
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "CHAOS Tournament",
    description: "E-sports tournament event website featuring Valorant, EA FC, and eFootball competitions. Includes brackets, schedules, and live updates.",
    link: "https://www.chaos-tournament.com/",
    screenshot: "/websites/chaos.png",
    stack: ["Next.js", "Tailwind CSS"],
  }
];

export default function WebsitesShowcase() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? websites : websites.slice(0, 3);

  return (
    <div className="flex flex-col gap-0">
      <div className="flex flex-col divide-y divide-solid divide-gray-300">
        {visible.map((site, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-8 sm:py-10"
          >
            {/* Screenshot */}
            <div className="relative w-full aspect-video bg-gray-100 overflow-hidden border border-solid border-gray-200 group">
              <Image
                src={site.screenshot}
                alt={site.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                quality={100}
                sizes="(max-width: 1024px) 95vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                >
                  View Live Demo
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-4 sm:gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-medium text-[#646468] uppercase tracking-widest">
                  Website {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[#1C1C1F] font-medium text-[17px] sm:text-[24px] leading-tight">
                  {site.name}
                </h3>
              </div>

              <p className="text-[#646468] text-[13px] sm:text-[16px] font-light leading-relaxed">
                {site.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {site.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] font-medium text-[#1C1C1F] border border-solid border-gray-300 px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#1C1C1F] border border-solid border-gray-300 px-4 sm:px-5 py-2 sm:py-2.5 w-fit hover:bg-gray-50 transition-colors"
              >
                Visit Website
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {websites.length > 3 && (
        <div className="flex justify-center pt-8 border-t border-solid border-gray-300">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 border border-solid border-gray-300 px-6 py-3 text-[14px] font-medium text-[#1C1C1F] hover:bg-gray-50 transition-colors"
          >
            {showAll ? "Show Less" : `See All ${websites.length} Websites`}
            <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
