export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-solid border-gray-300 bg-white">
      <div className="w-[95%] md:w-[80%] mx-auto border-x border-solid border-gray-300 px-4 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[#1C1C1F]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7M21 21h-6v-6M3 3h6v6M21 21l-7-7M3 3l7 7" />
          </svg>
          <span className="font-semibold text-lg tracking-tight">Mohamed Tounsi</span>
        </div>
        
        <p className="text-[#646468] text-[14px] font-medium">
          &copy; {currentYear} All rights reserved. Built by Mohamed Tounsi.
        </p>

        <div className="flex items-center gap-4 text-[#646468]">
          <a href="https://github.com/mohamedTounsi" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-tounsi-541439351/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
