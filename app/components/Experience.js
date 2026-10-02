"use client";
import { useState } from "react";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      company: "CRNS — Centre de Recherche de Sfax",
      role: "AI Web Demonstrator Intern",
      date: "Jun. 2025",
      location: "Sfax, Tunisia",
      logo: "/logocrns.jpg",
      description: [
        "Built a web demonstrator for AI-powered dental services featuring interactive 3D model visualization using Three.js.",
        "Optimized platform performance and scalability, ensuring smooth in-browser rendering of complex dental 3D models.",
        "Collaborated with AI researchers to translate model outputs into intuitive, user-friendly web interfaces.",
      ],
      tags: ["Three.js", "Web Development", "AI Integration"],
    },
    {
      company: "All Soft Multimedia (ASM)",
      role: "Software Engineering Intern — Final Year Project (PFE)",
      date: "Feb. 2026 – Jun. 2026",
      location: "Sfax, Tunisia",
      logo: "/logoasm.png",
      description: [
        "Designed and developed an AI-Enhanced HR Portal with intelligent candidate screening, automated interview scheduling, and AI-powered resume parsing and job-matching.",
        "Built full-stack with Angular, Laravel, and PostgreSQL; implemented secure REST APIs and role-based authentication for HR managers and applicants.",
        "Delivered end-to-end from requirements analysis through production deployment, receiving strong feedback from company supervisors.",
      ],
      tags: ["Angular", "Laravel", "PostgreSQL", "AI"],
    },
    {
      company: "Freelance Web Developer",
      role: "Full Stack Developer",
      date: "2024 – Present",
      location: "Tunisia",
      logo: null,
      description: [
        "Delivered diverse client projects including e-commerce platforms with product management, cart, and payment integration.",
        "Built full business management systems with dashboards, inventory tracking, and order management for local businesses.",
        "Developed real-time tracking systems and custom web solutions tailored to client workflows and requirements.",
        "Managed client relationships from requirements gathering through delivery, ensuring satisfaction and on-time completion.",
      ],
      tags: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex flex-col gap-0 divide-y divide-solid divide-gray-300">
      {experiences.map((exp, i) => (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-10 py-6 sm:py-10">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] sm:text-[13px] font-medium text-[#646468] uppercase tracking-widest">{exp.date}</span>
            <span className="text-[12px] sm:text-[13px] text-gray-400 font-light">{exp.location}</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[#1C1C1F] font-medium text-[15px] sm:text-[21px]">{exp.company}</h3>
                <p className="text-[#1C1C1F] font-medium text-[13px] sm:text-[16px] mt-1">{exp.role}</p>
              </div>
              {exp.logo && (
                <div className="relative h-8 w-16 sm:h-10 sm:w-20 shrink-0">
                  <Image src={exp.logo} alt={exp.company} fill className="object-contain object-right" sizes="80px" />
                </div>
              )}
            </div>

            <ul className="text-[#646468] text-[13px] sm:text-[16px] font-light leading-relaxed list-disc list-inside flex flex-col gap-2">
              {(expanded[i] ? exp.description : exp.description.slice(0, 1)).map((item, j) => (
                <li key={j} className="pl-1">
                  <span className="-ml-1">{item}</span>
                </li>
              ))}
            </ul>
            
            {exp.description.length > 1 && (
              <button 
                onClick={() => toggleExpand(i)}
                className="text-[#1C1C1F] text-[12px] sm:text-[13px] font-semibold underline underline-offset-2 self-start hover:text-gray-500 transition-colors"
              >
                {expanded[i] ? "See Less" : "See More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mt-1 sm:mt-2">
              {exp.tags.map((tech) => (
                <span key={tech} className="text-[11px] sm:text-[13px] font-medium text-[#1C1C1F] border border-solid border-gray-300 px-2 sm:px-3 py-1 bg-gray-50 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
