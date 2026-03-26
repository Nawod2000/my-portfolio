import Image from 'next/image';
import { Code2, Server, Smartphone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
    const services = [
        { icon: <Server size={18} />, text: "Scalable Backend Systems (Java & Spring Boot)" },
        { icon: <Code2 size={18} />, text: "Modern Web Applications (React & Next.js)" },
        { icon: <Smartphone size={18} />, text: "Cross-Platform Mobile Apps (Flutter)" },
    ];

    const socials = [
        { icon: <FaGithub size={22} />, link: "https://github.com/Nawod2000", label: "Github" },
        { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/nawod-bandara-1398062ab/", label: "LinkedIn" },
        { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/____s.n._____x___", label: "Instagram" },
    ];

    return (
        <div className="w-full h-full min-h-full overflow-y-auto flex items-center justify-center px-4 md:px-10 py-10 md:py-16 animate-in fade-in duration-700 custom-scrollbar">
            
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
                
                {/* Image & Socials */}
                <div className="w-full md:w-1/3 flex flex-col items-center gap-6 md:gap-8 mt-25 md:mt-0">
                    
                    {/* Image */}
                    <div className="w-40 h-40 md:w-64 md:h-64 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#CF541E]/20 to-transparent border border-white/10 flex items-center justify-center relative group overflow-hidden shadow-xl md:shadow-2xl">
                        <Image 
                            src="/assets/abotimage.png"
                            alt="Profile"
                            fill
                            className="object-cover transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-[#CF541E]/20 rounded-2xl md:rounded-3xl -m-1 md:-m-2 opacity-50 pointer-events-none"></div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 md:gap-5">
                        {socials.map((social, index) => (
                            <a 
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 md:p-3 rounded-full bg-white/5 border border-white/10 text-[#5B646E] hover:text-[#CF541E] hover:border-[#CF541E]/50 hover:bg-[#CF541E]/10 transition-all duration-300 shadow-md md:shadow-lg"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight md:tracking-tighter mb-4 md:mb-6 italic">
                        ABOUT <span className="text-white/20">ME.</span>
                    </h1>
                    
                    <p className="text-[#5B646E] text-sm md:text-lg leading-relaxed font-medium mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
                        I'm a <span className="text-white">Full Stack Developer</span> with a passion for building scalable, high-performance applications. 
                        I thrive on solving complex problems and am dedicated to delivering high-quality software solutions.
                    </p>

                    {/* Services */}
                    <div className="space-y-3 md:space-y-4">
                        <h2 className="text-[#CF541E] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-4">
                            What I Do
                        </h2>

                        {services.map((service, index) => (
                            <div key={index} className="flex items-center justify-center md:justify-start gap-3 md:gap-4 group">
                                <div className="text-[#CF541E] group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <span className="text-white/70 text-sm md:text-base group-hover:text-white transition-colors font-medium text-center md:text-left">
                                    {service.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;