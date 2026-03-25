import React from 'react';
import Image from 'next/image';
import { ExternalLink, } from 'lucide-react';
import cross from '../public/assets/muvecross.png';
import emp from '../public/assets/empststem.png';
import cloty from '../public/assets/cloty.png';
import polio from '../public/assets/portpolio.png';

const Projects = () => {
  const projects = [
    {
      title: "MUVE MOBILITY APP",
      category: "Cross-Platform Mobile (Flutter)",
      image: cross, 
      github: "#",
      demo: "#",
    },
    {
      title: "EMPLOYEE MANAGEMENT SYSTEM",
      category: "Full-Stack (Java & Spring Boot & Angular)",
      image: emp,
      github: "#",
      demo: "#",
    },
    {
      title: "CLOTHIFY STORE SYSTEM",
      category: "Desktop (JavaFX & Hibernate)",
      image: cloty,
      github: "#",
      demo: "#",
    },
    {
      title: "PERSONAL PORTFOLIO",
      category: "Web (Next.js & Tailwind CSS)",
      image: polio,
      github: "#",
      demo: "#",
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto px-4 md:px-10 py-8 md:py-16 animate-in fade-in duration-700 custom-scrollbar">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl mb-6 md:mb-8 text-center md:text-left font-black text-white tracking-tighter italic uppercase">
          FEATURED <span className="text-white/20">PROJECTS.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  pb-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] overflow-hidden">
              <div className="relative h-40 md:h-64  w-full overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <div className="p-4 md:p-6">
                <span className="text-[#CF541E] text-[8px] md:text-[9px]  font-black tracking-widest uppercase">{project.category}</span>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;