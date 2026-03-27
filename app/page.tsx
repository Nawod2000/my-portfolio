"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <main className="min-h-screen w-full bg-[#000000] p-4 md:p-5 flex flex-col items-center pt-2">
        <div className="w-full max-w-7xl flex flex-col min-h-screen">

          {/* Main Content Card — no z-index so it never competes with the navbar */}
          <div className="w-full flex-grow bg-[#080808] mt-20 md:mt-0 border rounded-[30px] md:rounded-[40px] shadow-2xl relative flex items-start justify-center min-h-[80vh] mb-10 overflow-visible border-white/10">
            <div className="w-full h-full p-4 md:p-0">
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

      {/* 
        Navbar is placed at the VERY BOTTOM of the DOM tree.
        This forces iOS WebKit to render its hit-testing area structurally above 
        everything else, bypassing sibling z-index resolution bugs.
        pointer-events-none prevents the full-width invisible wrapper from blocking the page.
      */}
      <div className="fixed top-4 left-0 right-0 z-[99999] w-full px-4 md:px-0 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </>
  );
}