import Image from "next/image";

export default function Education() {
  const education = [
    {
      institution: "Lycée Fadhel Ben Achour",
      degree: "Tunisian Baccalaureate — Mathematics",
      date: "Jun. 2023",
      location: "Sfax, Tunisia",
      details: "Graduated with Honors",
      logo: null,
    },
    {
      institution: "ISIMS — Higher Institute of Computer Science and Multimedia of Sfax",
      degree: "License in Computer Science, Big Data & Data Analysis",
      date: "Jun. 2026",
      location: "Sfax, Tunisia",
      details: "Graduated with Fair Honors",
      logo: "/logoisims.png",
    },
    {
      institution: "IIT — International Institute of Technologies",
      degree: "First Year Engineering",
      date: "2026 – Present",
      location: "Sfax, Tunisia",
      details: "Currently studying",
      logo: "/logoiit.png",
    },
  ];

  return (
    <div className="flex flex-col gap-0 divide-y divide-solid divide-gray-300">
      {education.map((edu, i) => (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-10 py-8 sm:py-10">
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-medium text-[#646468] uppercase tracking-widest">{edu.date}</span>
            <span className="text-[13px] text-gray-400 font-light">{edu.location}</span>
          </div>
          <div className="flex flex-col gap-3">
            {/* Header row: institution name + logo */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[#1C1C1F] font-medium text-[15px] sm:text-[21px]">{edu.institution}</h3>
                <p className="text-[#1C1C1F] font-medium text-[13px] sm:text-[16px] mt-1">{edu.degree}</p>
              </div>
              {edu.logo && (
                <div className="relative h-8 w-16 sm:h-10 sm:w-20 shrink-0">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    fill
                    className="object-contain object-right"
                    sizes="80px"
                  />
                </div>
              )}
            </div>
            <p className="text-[#646468] text-[13px] sm:text-[16px] font-light leading-relaxed flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {edu.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
