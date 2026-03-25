import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // මෙය මුලින්ම install කරගන්න
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactInfoProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.1634863953!2d79.98031265!3d6.84122395!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x5555555555555555!2sHomagama!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk";

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        if (formRef.current) {
            emailjs.sendForm(
                'service_7r81r7i',   // පියවර 1 හි ලබාගත් Service ID
                'template_s3hnebd',  // පියවර 1 හි ලබාගත් Template ID
                formRef.current,
                'RM_m8rcd_Rs9JxTVP'    // පියවර 1 හි ලබාගත් Public Key
            )
            .then(() => {
                setStatus('success');
                formRef.current?.reset();
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
        }
    };

    return (
        <div className="w-full h-full overflow-y-auto px-4 md:px-10 py-8 md:py-0 flex items-start md:items-center justify-center animate-in fade-in duration-700">
            <div className="w-full max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-5xl text-center md:text-left font-black text-white tracking-tighter mb-8 italic uppercase select-none outline-none">
                    Get in <span className="text-white/20">Touch.</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    {/* වම් පැත්ත - Info & Map */}
                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 gap-3">
                            <ContactInfo icon={<Phone size={18} />} label="Phone" value="+94 72 019 0018" />
                            <ContactInfo icon={<Mail size={18} />} label="Email" value="sanithunawod2323@gmail.com" />
                            <ContactInfo icon={<MapPin size={18} />} label="Location" value="Homagama, Western Province, Sri Lanka" />
                        </div>

                        <div className="flex-grow min-h-[200px] md:min-h-[250px] rounded-[32px] overflow-hidden border border-white/10 relative shadow-2xl group bg-[#050505]">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) brightness(50%) contrast(100%)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="absolute inset-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none bg-[#050505]/20"></div>
                        </div>
                    </div>

                    {/* දකුණු පැත්ත - Form */}
                    <div className="bg-white/5 border border-white/10 rounded-[24px] md:min-h-[250px] p-5 md:p-8 shadow-2xl flex flex-col justify-center">
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 md:space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-[#CF541E] tracking-widest uppercase ml-2 select-none">Name</label>
                                    <input 
                                        name="from_name" // Template එකේ ඇති variable name එකට සමාන විය යුතුය
                                        required
                                        type="text" 
                                        placeholder="Enter name" 
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-[#CF541E]/50 transition-all" 
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-[#CF541E] tracking-widest uppercase ml-2 select-none">Email</label>
                                    <input 
                                        name="from_email" // Template එකේ ඇති variable name එකට සමාන විය යුතුය
                                        required
                                        type="email" 
                                        placeholder="Enter email Address" 
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-[#CF541E]/50 transition-all" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-[#CF541E] tracking-widest uppercase ml-2 select-none">Message</label>
                                <textarea 
                                    name="message" // Template එකේ ඇති variable name එකට සමාන විය යුතුය
                                    required
                                    rows={3} 
                                    placeholder="Enter your Massage " 
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-sm text-white focus:outline-none focus:border-[#CF541E]/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full ${status === 'success' ? 'bg-green-600' : 'bg-[#CF541E]'} hover:opacity-90 text-white font-black py-3 md:py-4 text-xs md:text-sm rounded-xl flex items-center justify-center gap-3 transition-all group shadow-[0_0_20px_rgba(207,84,30,0.3)] uppercase tracking-widest outline-none focus:outline-none`}
                            >
                                {status === 'idle' && (
                                    <>
                                        Send Message
                                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                                {status === 'sending' && (
                                    <>
                                        Sending...
                                        <Loader2 size={16} className="animate-spin" />
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        Message Sent!
                                        <CheckCircle size={16} />
                                    </>
                                )}
                                {status === 'error' && "Error! Try Again."}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactInfo = ({ icon, label, value }: ContactInfoProps) => (
    <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/5 rounded-2xl hover:border-[#CF541E]/20 transition-all group select-none">
        <div className="p-2.5 bg-black/40 rounded-xl text-[#CF541E] group-hover:scale-110 transition-transform shadow-lg border border-white/5">
            {icon}
        </div>
        <div>
            <p className="text-[9px] font-black text-[#5B646E] uppercase tracking-widest">{label}</p>
            <p className="text-white text-sm font-medium group-hover:text-white transition-colors">{value}</p>
        </div>
    </div>
);

export default Contact;