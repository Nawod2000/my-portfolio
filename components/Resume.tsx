const Resume = () => {
  const education = [
    {
      period: "2026 - Present",
      degree: "Bachelor of Science (Hons) Software Engineering",
      institute: "Canterbury Christ Church University",
      status: "Reading",
    },
    {
      period: "2023 - 2024",
      degree: "Graduate Diploma in Software Engineering (GDSE)",
      institute: "Institute of Computer Engineering Technology (iCET)",
      status: "Completed",
    },
    {
      period: "2022 - 2023",
      degree: "Advance Certificate in IT & English",
      institute: "Sri Lanka International Buddhist Academy (SIBA Campus)",
      status: "Completed",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto px-4 md:px-10 py-6 md:py-10  animate-in fade-in duration-1000 custom-scrollbar">
      <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-6 md:mb-10 italic sticky top-0 bg-[#080808] z-10 py-2">
        RESUME <span className="text-white/20">PAGE.</span>
      </h1>
      <div className="grid grid-cols-1 gap-4 md:gap-6 pb-10">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-6 border-l border-white/10">
            <div className="absolute w-2.5 h-2.5 bg-[#CF541E] rounded-full -left-[5.5px] top-2" />
            <div className="bg-white/5 p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/5 flex flex-col gap-3">
              <span className="text-[#CF541E] font-bold text-[10px] md:text-sm tracking-widest uppercase">{edu.period}</span>
              <h3 className="text-base md:text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
              <p className="text-[#5B646E] text-[10px] md:text-base italic">{edu.institute}</p>
              <div className="mt-2">
                <span className={`px-2 md:px-3 py-1 rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest border ${edu.status === "Reading" ? "border-[#CF541E] text-[#CF541E]" : "border-white/20 text-white/40"}`}>
                  {edu.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;