"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];

const Navbar = ({ activeTab, setActiveTab }: { 
  activeTab: string, 
  setActiveTab: (val: string) => void 
}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-end justify-center w-full px-12 relative">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/2 z-0" />

        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`relative px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]
            ${activeTab === item ? "text-white" : "text-[#5B646E] hover:text-white/70"}`}
          >
            {activeTab === item && (
              <motion.div
                layoutId="activeTabOutline"
                className="absolute inset-0 z-10"
              >
                <div className="absolute inset-0 bg-[#080808] border-t border-l border-r border-white/10 rounded-t-[25px]" />
                <div className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#080808]" />
              </motion.div>
            )}
            <span className="relative z-30">{item}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-3 w-full">
        
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(true)}>
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </div>
        </button>
      </div>

      {/* Slide Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="w-64 h-full bg-[#080808] p-6"
          >
            {/* Close Button */}
            <button 
              className="text-white mb-6"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {/* Menu Items */}
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setMenuOpen(false);
                  }}
                  className={`text-left text-sm uppercase
                  ${activeTab === item ? "text-white" : "text-gray-400"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;