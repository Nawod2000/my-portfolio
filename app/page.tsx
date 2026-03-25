"use client";
import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mounted, setMounted] = useState(false);

  // මේකෙන් වෙන්නේ page එක සම්පූර්ණයෙන්ම load වුණාම විතරක් පෙන්වන එක
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    // h-screen වෙනුවට min-h-screen දාන්න, overflow-hidden අයින් කරන්න
    <main className="min-h-screen w-full bg-[#000000] p-4 md:p-5 flex flex-col items-center pt-2 ">
      <div className="w-full max-w-7xl flex flex-col min-h-screen">
        
        {/* Navbar Section */}
        <div className="relative z-30 flex-shrink-0">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Card 
            flex-grow සහ overflow-hidden වෙනුවට ඇතුළත content එකට ඉඩ දෙන්න
        */}
        <div className="w-full flex-grow bg-[#080808] border border-white/10 rounded-[30px] md:rounded-[40px] shadow-2xl relative flex items-start justify-center -mt-[1px] z-20 min-h-[500px] mb-10">
          <div className="w-full h-full animate-in fade-in duration-500 p-4 md:p-0">
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