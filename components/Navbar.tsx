"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];

const Navbar = ({ activeTab, setActiveTab }: {
    activeTab: string,
    setActiveTab: (val: string) => void
}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Menu එක විවෘත කිරීමේ function එක
    const toggleMenu = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        e.preventDefault(); // Browser එකේ අනවශ්‍ය scroll වැළැක්වීමට
        console.log("Menu Toggle Triggered!");
        setMenuOpen(true);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-end justify-center w-full px-12 relative h-16">
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5 z-0" />
                {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveTab(item)}
                        className={`relative px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors
                        ${activeTab === item ? "text-white" : "text-[#5B646E] hover:text-white/70"}`}
                    >
                        {activeTab === item && (
                            <motion.div
                                layoutId="activeTabOutline"
                                className="absolute inset-0 z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
            <div className="flex md:hidden justify-between items-center px-6 py-4 w-full relative z-[150]">
                <button
                    // ෆෝන් එකේ ක්ලික් එක අහුවෙන්න touchStart පාවිච්චි කරමු
                    onTouchStart={toggleMenu}
                    onClick={toggleMenu}
                    className="p-5 -m-5 bg-transparent border-none outline-none cursor-pointer relative z-[160] active:scale-95 transition-transform"
                    style={{ touchAction: "manipulation" }}
                >
                    <div className="space-y-1.5 pointer-events-none">
                        <span className="block w-6 h-[2.5px] bg-white rounded-full"></span>
                        <span className="block w-6 h-[2.5px] bg-white rounded-full"></span>
                        <span className="block w-6 h-[2.5px] bg-white rounded-full"></span>
                    </div>
                </button>
            </div>

            {/* Slide Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <div className="fixed inset-0 z-[1000] overflow-hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-72 h-full bg-[#080808] p-8 border-r border-white/10 shadow-2xl flex flex-col"
                        >
                            <button
                                className="text-white text-2xl self-end mb-10 p-2 hover:text-[#A47148] transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                ✕
                            </button>

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
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;