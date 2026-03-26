"use client";
import { motion, AnimatePresence } from "framer-motion";
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
            <div className="flex md:hidden justify-between items-center px-6 py-4 w-full relative z-[100]">

                {/* Hamburger */}
                <button
                    className="p-4 -m-4 bg-transparent border-none outline-none cursor-pointer relative z-[110]"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log("Menu clicked"); // මෙහෙම console එකක් දාලා බලන්න ලැප් එකේ inspect වලදී වැඩද කියලා
                        setMenuOpen(true);
                    }}
                >
                    <div className="space-y-1.5 pointer-events-none"> {/* අයිකනය ඇතුළේ pointer events disable කරන්න */}
                        <span className="block w-6 h-[2.5px] bg-white rounded-full"></span>
                        <span className="block w-6 h-[2.5px] bg-white rounded-full"></span>
                        <span className="block w-6 h-[2.5px] bg-white rounded-full"></span>
                    </div>
                </button>
            </div>

            {/* Slide Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <div className="fixed inset-0 z-[9999] flex justify-start">

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-72 h-full bg-[#080808] p-8 border-r border-white/10 shadow-2xl flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                className="text-white text-2xl self-end mb-10 p-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                ✕
                            </button>

                            {/* Menu Items */}
                            <div className="flex flex-col gap-8">
                                {navItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setActiveTab(item);
                                            setMenuOpen(false);
                                        }}
                                        className={`text-left text-sm font-bold uppercase tracking-[0.2em] transition-colors
              ${activeTab === item ? "text-[#A47148]" : "text-[#5B646E] hover:text-white"}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                        {/* Backdrop එක ක්ලික් කළ විට menu එක වැසීමට */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setMenuOpen(false)}
                        />
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;