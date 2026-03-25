import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "BACKEND & DATABASE",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "MySQL / Hibernate", level: 80 },
        { name: "Microservices", level: 75 },
      ]
    },
    {
      title: "FRONTEND & MOBILE",
      skills: [
        { name: "React / Next.js", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Angular", level: 70 },
        { name: "Tailwind CSS", level: 90 },
      ]
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto px-4 md:px-10 py-8 md:py-16  animate-in fade-in duration-700 custom-scrollbar">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-6 md:mb-8 italic uppercase text-center md:text-left">
          MY <span className="text-white/20">SKILLS.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-[#CF541E] text-[9px] md:text-[10px] font-bold tracking-widest uppercase border-l-2 border-[#CF541E] pl-3">
                {category.title}
              </h2>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-white text-xs md:text-sm font-medium">{skill.name}</span>
                      <span className="text-[#5B646E] text-[10px] font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] md:h-[4px] w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-gradient-to-r from-[#CF541E] to-[#A47148]" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;