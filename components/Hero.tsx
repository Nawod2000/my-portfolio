"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    subTitle: "HELLO",
    title: "DESIGNING IMMERSIVE DIGITAL EXPERIENCES",
    description: "Passionate about crafting high-performance web and cross-platform mobile applications, focusing on intuitive user interfaces, seamless navigation, and modern design aesthetics.",
    image: "/assets/hero1.png",
  },
  {
    subTitle: "HELLO",
    title: "ARCHITECTING ROBUST BACKEND EXPERIENCES",
    description: "Deeply committed to building high-performance server-side applications using Microservices architecture, focusing on scalable system design and complex problem-solving.",
    image: "/assets/hero2.png",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 pointer-events-auto flex flex-col items-center justify-center pt-5 md:p-5  min-h-[500px] md:h-[85vh] w-full bg-[#080808]">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          
          className={`
            flex flex-col md:items-center justify-between w-full max-w-7xl gap-8 md:gap-10
            ${currentSlide % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
          `}
        >

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center pt-4">
            <div className="
              w-full max-w-[260px] md:max-w-sm 
              aspect-square 
              rounded-2xl md:rounded-3xl 
              overflow-hidden 
              shadow-xl md:shadow-2xl 
              border border-white/10 
              bg-[#111111]
            ">
              <motion.img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                initial={{ scale: 1.1, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left px-2">
            
            <motion.span 
              initial={{ opacity: 1, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#A47148] text-[10px] md:text-sm font-bold uppercase mb-3 block tracking-widest"
            >
              {slides[currentSlide].subTitle}
            </motion.span>

            <h1 className="
              text-white 
              text-2xl sm:text-3xl md:text-6xl 
              font-black italic 
              tracking-tight 
              leading-tight 
              mb-4 
              uppercase
            ">
              {slides[currentSlide].title.split(" ")[0]} <br />
              <span className="text-[#A47148]">
                {slides[currentSlide].title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="
              text-[#5B646E] 
              text-sm md:text-lg 
              max-w-md md:max-w-xl 
              mx-auto md:mx-0 
              leading-relaxed
            ">
              {slides[currentSlide].description}
            </p>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-10 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-[#A47148]" : "w-2 bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;