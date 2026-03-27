"use client";
import { motion } from "framer-motion"; // only used for desktop tab indicator
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

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center px-6 py-4 w-full">
                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle navigation menu"
                    type="button"
                    style={{
                        // touch-action:none tells iOS not to intercept this tap as a scroll gesture
                        touchAction: "none",
                        WebkitTapHighlightColor: "transparent",
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        outline: "none",
                        // Generous tap target — no negative margins which can confuse iOS hit testing
                        padding: "12px",
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

            {/*
              Mobile Drawer — pure CSS transitions, no framer-motion.
              Framer-motion AnimatePresence + backdrop-filter:blur + position:fixed
              has known rendering failures on iOS Safari/Chrome (WKWebView).
              Always in DOM, shown/hidden via opacity + pointer-events + transform.
            */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 99999,
                    // Visible when open, invisible + non-interactive when closed
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition: "opacity 0.25s ease",
                }}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                />

                {/* Drawer Panel */}
                <div
                    style={{
                        position: "relative",
                        width: "288px",
                        height: "100%",
                        background: "#080808",
                        borderRight: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        padding: "32px",
                        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
                        transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        style={{
                            alignSelf: "flex-end",
                            marginBottom: "40px",
                            padding: "12px",
                            background: "none",
                            border: "none",
                            color: "white",
                            fontSize: "20px",
                            cursor: "pointer",
                            touchAction: "manipulation",
                            WebkitTapHighlightColor: "transparent",
                            minWidth: "44px",
                            minHeight: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        ✕
                    </button>

                    {/* Nav Items */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setActiveTab(item);
                                    setMenuOpen(false);
                                }}
                                style={{
                                    textAlign: "left",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.2em",
                                    color: activeTab === item ? "#A47148" : "#5B646E",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    minHeight: "44px",
                                    touchAction: "manipulation",
                                    WebkitTapHighlightColor: "transparent",
                                    padding: "8px 0",
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;