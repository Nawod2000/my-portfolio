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
            <div className="flex md:hidden justify-between items-center px-6 py-4 w-full relative z-[99999]">
                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle navigation menu"
                    type="button"
                    className="relative z-[99999] bg-transparent border-none outline-none select-none"
                    style={{
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                        cursor: "pointer",
                        padding: "16px",
                        margin: "-16px",
                        minWidth: "44px",
                        minHeight: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ pointerEvents: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <span style={{ display: "block", width: "24px", height: "2.5px", background: "white", borderRadius: "9999px" }}></span>
                        <span style={{ display: "block", width: "24px", height: "2.5px", background: "white", borderRadius: "9999px" }}></span>
                        <span style={{ display: "block", width: "24px", height: "2.5px", background: "white", borderRadius: "9999px" }}></span>
                    </div>
                </button>
            </div>

            {/* Slide Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <div
                        className="fixed inset-0 z-[99999]"
                        style={{ touchAction: "none" }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                            style={{ cursor: "pointer", touchAction: "manipulation" }}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-72 h-full bg-[#080808] p-8 border-r border-white/10 shadow-2xl flex flex-col"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-2xl self-end mb-10 hover:text-[#A47148] transition-colors"
                                style={{
                                    touchAction: "manipulation",
                                    WebkitTapHighlightColor: "transparent",
                                    cursor: "pointer",
                                    padding: "12px",
                                    minWidth: "44px",
                                    minHeight: "44px",
                                    background: "none",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
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
                                        style={{
                                            touchAction: "manipulation",
                                            WebkitTapHighlightColor: "transparent",
                                            cursor: "pointer",
                                            minHeight: "44px",
                                            background: "none",
                                            border: "none",
                                            padding: "4px 0",
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