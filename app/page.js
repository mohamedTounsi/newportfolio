import Image from "next/image";
import EventsGallery from "./components/EventsGallery";
import WebsitesShowcase from "./components/WebsitesShowcase";
import CongressesGallery from "./components/CongressesGallery";
import FreelanceShowcase from "./components/FreelanceShowcase";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TechStack from "./components/TechStack";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      
      <Navbar />

      {/* Hero Band */}
      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 pt-10 sm:pt-20 pb-12 relative flex flex-col items-center">
          
          {/* Social Icons - Center Left on Desktop, Bottom on Mobile */}
          <div className="flex sm:absolute sm:left-4 md:left-8 lg:left-12 sm:top-1/2 sm:-translate-y-1/2 flex-row sm:flex-col gap-4 mt-6 sm:mt-0 order-last sm:order-none z-20">
            <a href="https://www.facebook.com/mohamed.tounsi.583" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-solid border-gray-300 rounded-full text-[#646468] hover:text-[#1C1C1F] hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/mohamed__tounsii/" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-solid border-gray-300 rounded-full text-[#646468] hover:text-[#1C1C1F] hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/mohamed-tounsi-541439351/" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-solid border-gray-300 rounded-full text-[#646468] hover:text-[#1C1C1F] hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/mohamedTounsi" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-solid border-gray-300 rounded-full text-[#646468] hover:text-[#1C1C1F] hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>

          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full max-w-[600px] h-[300px] sm:h-[400px] flex items-center justify-center opacity-60 blur-[60px] sm:blur-[80px] -z-10 pointer-events-none">
             <div className="w-1/2 h-full bg-[#f6bdf6] rounded-full mix-blend-multiply"></div>
             <div className="w-1/2 h-full bg-[#def8a4] rounded-full mix-blend-multiply"></div>
          </div>
          
          {/* Image */}
          <div className="relative w-[75vw] sm:w-[60vw] md:w-[50vw] max-w-[500px] aspect-square -mb-[10vw] sm:-mb-14 z-0 pointer-events-none">
             <div 
               className="w-full h-full relative" 
               style={{ 
                 maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', 
                 WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' 
               }}
             >
               <Image 
                 src="/headshot.png" 
                 alt="Mohamed Tounsi" 
                 fill
                 className="object-cover object-center"
                 priority
                 quality={100}
                 sizes="(max-width: 640px) 75vw, (max-width: 1024px) 60vw, 600px"
               />
             </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-bold tracking-tight text-center bg-gradient-to-br from-gray-900 via-black to-gray-600 bg-clip-text text-transparent z-10 relative">
            Hi, I'm Mohamed <br className="block sm:hidden" /> Tounsi
          </h1>
        </div>
      </div>

      {/* Roles Grid Band */}
      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300">
          <div className="grid grid-cols-3 divide-x divide-solid divide-gray-300">
            <div className="py-5 sm:py-6 text-center text-[#1C1C1F] font-medium text-[15px] sm:text-base">
              Full Stack Web Developer
            </div>
            <div className="py-5 sm:py-6 text-center text-[#1C1C1F] font-medium text-[15px] sm:text-base">
              Engineer Student
            </div>
            <div className="py-5 sm:py-6 text-center text-[#1C1C1F] font-medium text-[15px] sm:text-base">
              Freelancer
            </div>
          </div>
        </div>
      </div>

      {/* Bio Band */}
      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-12 sm:py-16 text-center px-4">
          <p className="text-[#646468] text-[17px] sm:text-[19px] max-w-2xl mx-auto font-light leading-relaxed">
            I turn ideas into clean, functional digital experiences
            <br className="hidden sm:block"/> — and this is the exact template I use to do it.
          </p>
        </div>
      </div>

      {/* About Me Title Band */}
      <div id="about" className="w-full border-b border-solid border-gray-300 scroll-mt-[73px]">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-4 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 bg-gray-400"></div>
          <span className="text-[#646468] font-medium text-[15px]">About Me</span>
        </div>
      </div>

      {/* About Me Content Band */}
      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 px-4 sm:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image
                src="/me1.png"
                alt="About Mohamed Tounsi"
                fill
                className="object-cover object-center"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start gap-6">
              <p className="text-[#646468] text-[17px] sm:text-[19px] font-light leading-relaxed">
                I'm <strong className="text-[#1C1C1F] font-medium">Mohamed</strong> — a Full Stack Web Developer and Engineering Student building clean, modern web experiences. I care about the details most people skip: performance, scalable architecture, and how something feels to use — not just how it looks. This portfolio is built the way I build everything: fast, intentional, and easy to scale.
              </p>
              <a href="#contact" className="bg-[#1C1C1F] text-white px-6 py-3 font-medium text-sm hover:bg-black transition-colors mt-2">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Band */}
      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300">
          <div className="grid grid-cols-3 divide-x divide-solid divide-gray-300">
            <div className="py-4 sm:py-10 px-1 text-center flex flex-col gap-1 sm:gap-2">
              <span className="text-4xl sm:text-5xl font-medium text-[#1C1C1F]">3+</span>
              <span className="text-[#646468] font-light mt-1 sm:mt-2 text-[11px] sm:text-[15px]">Years Of Experience</span>
            </div>
            <div className="py-4 sm:py-10 px-1 text-center flex flex-col gap-1 sm:gap-2">
              <span className="text-4xl sm:text-5xl font-medium text-[#1C1C1F]">10+</span>
              <span className="text-[#646468] font-light mt-1 sm:mt-2 text-[11px] sm:text-[15px]">Happy Clients</span>
            </div>
            <div className="py-4 sm:py-10 px-1 text-center flex flex-col gap-1 sm:gap-2">
              <span className="text-4xl sm:text-5xl font-medium text-[#1C1C1F]">20+</span>
              <span className="text-[#646468] font-light mt-1 sm:mt-2 text-[11px] sm:text-[15px]">Completed Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── TECH STACK ───────── */}
      <div id="techstack" className="w-full border-b border-solid border-gray-300 scroll-mt-[73px]">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-10 sm:py-14 px-4 sm:px-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400"></div>
            <span className="text-[#646468] font-medium text-[15px]">What I Work With</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-br from-gray-900 via-[#1C1C1F] to-gray-600 bg-clip-text text-transparent max-w-2xl leading-tight">
            Tech Stack
          </h2>
        </div>
      </div>

      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 overflow-hidden">
          <TechStack />
        </div>
      </div>

      {/* ───────── EDUCATION ───────── */}
      <div id="education" className="w-full border-b border-solid border-gray-300 scroll-mt-[73px]">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-10 sm:py-14 px-4 sm:px-12 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400"></div>
            <span className="text-[#646468] font-medium text-[15px]">Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-br from-gray-900 via-[#1C1C1F] to-gray-600 bg-clip-text text-transparent max-w-2xl leading-tight">
            Education
          </h2>
        </div>
      </div>

      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 px-4 sm:px-12 py-12 sm:py-16">
          <Education />
        </div>
      </div>

      {/* Languages Band */}
      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300">
          <div className="grid grid-cols-3 divide-x divide-solid divide-gray-300">
            <div className="py-4 sm:py-8 text-center flex flex-col gap-1">
              <span className="text-lg sm:text-4xl font-display font-semibold text-[#1C1C1F]">Arabic</span>
              <span className="text-[#646468] font-light mt-0.5 sm:mt-1 text-[11px] sm:text-[15px]">Native</span>
            </div>
            <div className="py-4 sm:py-8 text-center flex flex-col gap-1">
              <span className="text-lg sm:text-4xl font-display font-semibold text-[#1C1C1F]">English</span>
              <span className="text-[#646468] font-light mt-0.5 sm:mt-1 text-[11px] sm:text-[15px]">Fluent</span>
            </div>
            <div className="py-4 sm:py-8 text-center flex flex-col gap-1">
              <span className="text-lg sm:text-4xl font-display font-semibold text-[#1C1C1F]">French</span>
              <span className="text-[#646468] font-light mt-0.5 sm:mt-1 text-[11px] sm:text-[15px]">Basic</span>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── WORK EXPERIENCE ───────── */}
      <div id="experience" className="w-full border-b border-solid border-gray-300 scroll-mt-[73px]">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-10 sm:py-14 px-4 sm:px-12 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400"></div>
            <span className="text-[#646468] font-medium text-[15px]">Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-br from-gray-900 via-[#1C1C1F] to-gray-600 bg-clip-text text-transparent max-w-2xl leading-tight">
            Work Experience
          </h2>
        </div>
      </div>

      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 px-4 sm:px-12 py-12 sm:py-16">
          <Experience />
        </div>
      </div>

      {/* ───────── FREELANCE JOURNEY ───────── */}
      <div id="freelance" className="w-full border-b border-solid border-gray-300 scroll-mt-[73px]">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-10 sm:py-14 px-4 sm:px-12 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-indigo-600"></div>
            <span className="text-[#646468] font-medium text-[15px]">My Journey with</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-br from-gray-900 via-[#1C1C1F] to-gray-600 bg-clip-text text-transparent max-w-2xl leading-tight">
            Freelance & <br className="hidden sm:block"/>Client Work
          </h2>
          <p className="text-[#646468] text-[16px] sm:text-[18px] font-light max-w-xl leading-relaxed">
            Delivering custom digital solutions, scalable architectures, and modern web experiences for clients worldwide.
          </p>
        </div>
      </div>

      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 px-4 sm:px-12 py-12 sm:py-16">
          <FreelanceShowcase />
        </div>
      </div>

      {/* ───────── IEEE JOURNEY ───────── */}
      <div id="ieee" className="w-full border-b border-solid border-gray-300 scroll-mt-[73px]">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-10 sm:py-14 px-4 sm:px-12 flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-400"></div>
              <span className="text-[#646468] font-medium text-[15px]">My Journey with</span>
            </div>
            <div className="relative h-8 sm:h-10 w-36 sm:w-48">
              <Image
                src="/ieeeisimssb.png"
                alt="IEEE ISIMS Student Branch"
                fill
                className="object-contain object-left sm:object-center"
                quality={100}
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-br from-gray-900 via-[#1C1C1F] to-gray-600 bg-clip-text text-transparent max-w-2xl leading-tight">
            From Member to <br className="hidden sm:block"/>WebMaster
          </h2>
          <p className="text-[#646468] text-[16px] sm:text-[18px] font-light max-w-xl leading-relaxed">
            Building the digital identity of a real IEEE organization — websites, events, teams, and technical infrastructure.
          </p>
        </div>
      </div>

      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 px-4 sm:px-12 py-12 sm:py-16">
          <div className="flex flex-col gap-0 divide-y divide-solid divide-gray-300">

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-10 py-8 sm:py-10">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-medium text-[#646468] uppercase tracking-widest">2025</span>
                <span className="text-[13px] text-gray-400 font-light">Member</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#1C1C1F] font-medium text-[17px] sm:text-[19px]">Joined IEEE ISIMS SB</h3>
                <p className="text-[#646468] text-[15px] sm:text-[16px] font-light leading-relaxed">
                  Got involved in the branch's digital and media side. Contributed to the online presence, participated in activities across chapters, and gradually took on more responsibility within the team.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-10 py-8 sm:py-10">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-medium text-[#646468] uppercase tracking-widest">2025 → 2026</span>
                <span className="text-[13px] text-gray-400 font-light">WebMaster</span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[#1C1C1F] font-medium text-[17px] sm:text-[19px]">SB & Chapters Websites</h3>
                <p className="text-[#646468] text-[15px] sm:text-[16px] font-light leading-relaxed">
                  Became WebMaster of the branch and took full ownership of its digital presence. I created the main SB website along with several other subunit websites from scratch.
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Next.js", "React", "Tailwind CSS"].map(tech => (
                    <span key={tech} className="text-[13px] font-medium text-[#1C1C1F] border border-solid border-gray-300 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-10 py-8 sm:py-10">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-medium text-[#646468] uppercase tracking-widest">Events</span>
                <span className="text-[13px] text-gray-400 font-light">2024–2026</span>
              </div>
              <div className="flex flex-col gap-5 min-w-0">
                <h3 className="text-[#1C1C1F] font-medium text-[17px] sm:text-[19px]">Events I Participated In</h3>
                <EventsGallery />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-10 py-8 sm:py-10">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-medium text-[#646468] uppercase tracking-widest">Websites</span>
                <span className="text-[13px] text-gray-400 font-light">Built & Deployed</span>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-[#1C1C1F] font-medium text-[17px] sm:text-[19px]">Websites I Built</h3>
                <WebsitesShowcase />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-10 py-8 sm:py-10">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-medium text-[#646468] uppercase tracking-widest">Congresses</span>
                <span className="text-[13px] text-gray-400 font-light">Attended</span>
              </div>
              <div className="flex flex-col gap-5 min-w-0">
                <h3 className="text-[#1C1C1F] font-medium text-[17px] sm:text-[19px]">Congresses I Attended</h3>
                <CongressesGallery />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Role Summary Band */}
      <div className="w-full border-b border-solid border-gray-300">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300">
          <div className="grid grid-cols-3 divide-x divide-solid divide-gray-300">
            <div className="py-4 px-2 sm:px-6 text-center flex flex-col gap-1 sm:gap-2">
              <span className="text-[13px] sm:text-2xl font-display font-semibold text-[#1C1C1F]">WebMaster</span>
              <span className="text-[#646468] font-light text-[10px] sm:text-[14px]">IEEE ISIMS Student Branch</span>
            </div>
            <div className="py-4 px-2 sm:px-6 text-center flex flex-col gap-1 sm:gap-2">
              <span className="text-[13px] sm:text-2xl font-display font-semibold text-[#1C1C1F]">6 Websites</span>
              <span className="text-[#646468] font-light text-[10px] sm:text-[14px]">Designed & Developed</span>
            </div>
            <div className="py-4 px-2 sm:px-6 text-center flex flex-col gap-1 sm:gap-2">
              <span className="text-[13px] sm:text-2xl font-display font-semibold text-[#1C1C1F]">2+ Years</span>
              <span className="text-[#646468] font-light text-[10px] sm:text-[14px]">Active IEEE Journey</span>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── CONTACT ───────── */}
      <div id="contact" className="w-full border-b border-solid border-gray-300 scroll-mt-[73px]">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 py-10 sm:py-14 px-4 sm:px-12 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400"></div>
            <span className="text-[#646468] font-medium text-[15px]">Let's Talk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-br from-gray-900 via-[#1C1C1F] to-gray-600 bg-clip-text text-transparent max-w-2xl leading-tight">
            Get In Touch
          </h2>
        </div>
      </div>

      <div className="w-full border-b border-solid border-gray-300 flex-1">
        <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 px-4 sm:px-12 py-12 sm:py-16 h-full bg-white">
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}
