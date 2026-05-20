"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, ArrowRight, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. LIQUIFIED TYPOGRAPHY DISTORTION
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity() / 100);
          setVelocity(v);
          gsap.to(".liquid-contact", {
            skewX: v * 2,
            scaleY: 1 + v * 0.05,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });

      // 2. MAGNETIC SOCIAL LINKS
      const magneticLinks = document.querySelectorAll(".magnetic-link");
      magneticLinks.forEach((link) => {
        link.addEventListener("mousemove", (e: any) => {
          const rect = link.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(link, {
            x: x * 0.5,
            y: y * 0.5,
            duration: 0.6,
            ease: "power2.out"
          });
        });
        
        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });

      // 3. BACKGROUND COLOR SHIFT
      gsap.to("main", {
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play reverse play reverse"
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="bg-bg-primary text-text-primary py-32 transition-colors duration-1000">
      <div className="max-w-[90vw] mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex justify-between items-end mb-24 border-b border-text-primary/10 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-text-primary flex items-center justify-center text-xs font-bold">04</div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-40">GET IN TOUCH</span>
            </div>
            <h2 className="liquid-contact text-[12vw] font-display leading-[0.8] tracking-tighter uppercase select-none">
              LET&apos;S <br/> <span className="italic" style={{ WebkitTextStroke: "1px black", color: "transparent" }}>CONNECT</span>
            </h2>
          </div>
          <div className="hidden md:block pb-4">
            <p className="text-sm font-bold tracking-widest opacity-40 uppercase">AVAILABLE FOR COLLABORATION</p>
          </div>
        </div>

        {/* MAIN CONTACT AREA */}
        <div className="grid grid-cols-12 gap-12">
          
          {/* High-Impact Contact Form */}
          <div className="col-span-12 lg:col-span-8 bg-text-primary text-bg-primary rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
            <form className="relative z-10 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Name Field */}
                <div className="group relative">
                  <label className="block text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 transition-colors group-focus-within:text-accent">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-display text-2xl uppercase placeholder:opacity-20"
                  />
                </div>
                {/* Email Field */}
                <div className="group relative">
                  <label className="block text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 transition-colors group-focus-within:text-accent">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-display text-2xl uppercase placeholder:opacity-20"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="group relative">
                <label className="block text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 transition-colors group-focus-within:text-accent">
                  Your Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project" 
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-display text-2xl uppercase placeholder:opacity-20 resize-none"
                />
              </div>

              {/* Submit Button - Magnetic */}
              <button 
                type="submit"
                className="magnetic-link group flex items-center gap-8 py-6 px-12 bg-accent text-text-primary rounded-full hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <span className="text-xl font-bold tracking-[0.2em] uppercase">Send Message</span>
                <div className="w-12 h-12 rounded-full bg-text-primary flex items-center justify-center text-accent group-hover:rotate-45 transition-transform duration-500">
                  <ArrowRight size={24} />
                </div>
              </button>
            </form>
          </div>

          {/* Socials & Info */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-widest opacity-40 uppercase">SOCIALS</p>
                <div className="flex flex-col gap-4">
                  {[
                    { name: "LINKEDIN", url: "https://www.linkedin.com/in/dineshkumar-k-j-95257a261/" },
                    { name: "GITHUB", url: "https://github.com/Dineshkumar-18" },
                    { name: "INSTAGRAM", url: "https://www.instagram.com/dineshk.18_/" }
                  ].map(social => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      className="magnetic-link text-3xl font-display hover:text-accent transition-colors flex items-center gap-4"
                    >
                      {social.name} <ArrowUp size={24} className="rotate-45 opacity-20" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-widest opacity-40 uppercase">LOCATION</p>
                <p className="text-2xl font-display uppercase tracking-tight">TAMIL NADU, INDIA <br/> 10.8505° N, 76.2711° E</p>
              </div>
            </div>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-12 group flex items-center gap-6 text-sm font-bold tracking-[0.3em] uppercase hover:text-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-text-primary flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <ArrowUp />
              </div>
              BACK TO TOP
            </button>
          </div>

        </div>

        {/* FOOTER BAR */}
        <div className="mt-32 pt-8 border-t border-text-primary/10 flex justify-between items-center text-[10px] font-bold tracking-widest opacity-40 uppercase">
          <p>© 2024 DINESHKUMAR — V3.0</p>
          <p>DESIGNED & BUILT IN INDIA</p>
        </div>
      </div>
    </section>
  );
}
