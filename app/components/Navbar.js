"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#techstack"  },
  { label: "Education",  href: "#education"  },
  { label: "Experience", href: "#experience" },
  { label: "Freelance",  href: "#freelance"  },
  { label: "IEEE",       href: "#ieee"       },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          // Sort by intersection ratio to get the most prominent one
          visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div 
        className={`w-full border-b border-solid border-gray-300 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <header 
          className={`w-[95%] md:w-[80%] mx-auto flex items-center justify-between px-4 sm:px-8 border-x border-solid border-gray-300 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <a href="#" onClick={(e) => handleNav(e, "#")} className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7M21 21h-6v-6M3 3h6v6M21 21l-7-7M3 3l7 7" />
            </svg>
            <span className="font-semibold text-lg tracking-tight">Mohamed Tounsi</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`transition-all duration-300 relative ${
                  activeSection === link.href 
                    ? "text-black" 
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="bg-[#1C1C1F] text-white px-5 py-2.5 rounded-sm font-medium text-sm hover:bg-black transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M4 15h16" />
              </svg>
            )}
          </button>
        </header>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full border-b border-solid border-gray-300 bg-white sticky top-[57px] z-40">
          <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 flex flex-col divide-y divide-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-6 py-4 text-[15px] font-medium text-[#646468] hover:text-black hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="px-6 py-4 text-[15px] font-medium text-white bg-[#1C1C1F] hover:bg-black transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
}
