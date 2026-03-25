"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    // h-screen සහ overflow-hidden මගින් මුළු පිටුවම scroll වීම නවත්වයි (Freeze කරයි)
    <main className="h-screen w-full bg-[#000000] p-4 md:p-5 flex flex-col items-center pt-2 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col h-full">
        
        {/* Navbar Section */}
        <div className="relative z-30 flex-shrink-0">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Card 
            flex-grow සහ overflow-hidden මගින් card එක screen එකට fit කරයි
        */}
        <div className="w-full flex-grow bg-[#080808] border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden flex items-center justify-center -mt-[1px] z-20">
          <div className="w-full h-full animate-in fade-in duration-500 overflow-hidden">
            {activeTab === "Home" && <Hero />}
            {activeTab === "About" && <About />}
            {activeTab === "Resume" && <Resume />}
            {activeTab === "Skills" && <Skills />}
            {activeTab === "Projects" && <Projects />}
            {activeTab === "Contact" && <Contact />}
          </div>
        </div>
      </div>
    </main>
  );
}