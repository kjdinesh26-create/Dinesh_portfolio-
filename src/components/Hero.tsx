"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Plus, Sparkles, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const ctx = gsap.context(() => {
      // 1. PINNING THE CANVAS
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          // 2. LIQUID DISTORTION BASED ON VELOCITY
          const velocity = Math.abs(self.getVelocity());
          const distortion = gsap.utils.clamp(0, 100, velocity / 20);
          gsap.to("#liquid-filter feDisplacementMap", {
            attr: { scale: distortion },
            duration: 0.5,
            ease: "power2.out"
          });
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // 3. ATMOSPHERIC PARTICLES FLY-THROUGH
      tl.to(".hero-particle", {
        z: 1000,
        opacity: 0,
        stagger: {
          amount: 1,
          from: "random"
        }
      }, 0);

      // 4. KINETIC TYPOGRAPHY & RECURSIVE ZOOM
      tl.to(".hero-title-main", {
        scale: 6,
        opacity: 0,
        filter: "blur(20px)",
        ease: "power2.in",
      }, 0);

      // 5. THE BENTO EXPLOSION (Assembly)
      tl.from(".bento-item-1", { xPercent: -150, yPercent: 50, rotation: -20, opacity: 0 }, 0.1);
      tl.from(".bento-item-2", { xPercent: 150, yPercent: -50, rotation: 20, opacity: 0 }, 0.15);
      tl.from(".bento-item-3", { scale: 0.1, yPercent: 100, opacity: 0 }, 0.2);
      tl.from(".bento-item-4", { xPercent: 100, opacity: 0 }, 0.25);

      // 6. THE RECURSIVE IMAGE ZOOM
      tl.fromTo(".hero-main-image", 
        { scale: 0.1, borderRadius: "200px", filter: "brightness(0.5) blur(10px)" },
        { scale: 1, borderRadius: "24px", filter: "brightness(1) blur(0px)", ease: "power3.out" }, 
        0.1
      );

      // 7. LENS BLUR & DEPTH SHIFT
      tl.to(".grid-lines", {
        opacity: 0.1,
        scale: 1.5,
        filter: "blur(8px)",
      }, 0.3);

      // 8. FINAL CTA APPEARANCE
      tl.from(".hero-cta", {
        y: 100,
        opacity: 0,
        ease: "back.out(1.7)",
      }, 0.6);

      // 9. MAGNETIC INTERACTION
      const magneticItems = document.querySelectorAll(".magnetic-item");
      magneticItems.forEach((item) => {
        item.addEventListener("mousemove", (e: any) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(item, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: "power2.out" });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        });
      });

      // Intro animation
      gsap.from(".hero-title-main span", {
        y: 200,
        skewY: 10,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-bg-primary" style={{ height: "500vh" }}>
      {/* LIQUID DISTORTION SVG FILTER */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
          </filter>
        </defs>
      </svg>

      <div 
        ref={contentRef} 
        className="h-screen w-full flex flex-col items-center justify-center overflow-hidden sticky top-0 bg-bg-primary"
      >
        {/* ATMOSPHERIC PARTICLES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" style={{ perspective: "1000px" }}>
          {hasMounted && [...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="hero-particle absolute w-1 h-1 bg-accent rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translateZ(${Math.random() * -1000}px)`
              }}
            />
          ))}
        </div>

        {/* ATMOSPHERIC BACKGROUND GRID */}
        <div className="grid-lines absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none opacity-20 transition-transform">
          {[...Array(72)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-text-primary/10" />
          ))}
        </div>

        {/* LAYER 1: KINETIC TYPOGRAPHY */}
        <div className="hero-title-main absolute z-0 pointer-events-none text-center select-none transform-gpu">
          <h1 className="text-[25vw] leading-none font-display tracking-tighter opacity-5 flex flex-col">
            <span className="inline-block">DINESH</span>
            <span className="inline-block -mt-[5vw]">KUMAR</span>
          </h1>
        </div>

        {/* LAYER 2: THE BENTO GRID */}
        <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-12 gap-4 h-[70vh]">
          
          {/* Main Showcase Item with Liquid Filter */}
          <div className="bento-item-3 col-span-12 md:col-span-6 row-span-2 relative overflow-hidden group">
            <div 
              className="hero-main-image w-full h-full relative overflow-hidden bg-accent/20 border border-text-primary"
              style={{ filter: "url(#liquid-filter)" }}
            >
              <img 
                src="/profile_black.png" 
                alt="Profile" 
                className="w-full h-full object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <span className="px-4 py-2 bg-text-primary text-bg-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <Globe size={14} /> BASED IN INDIA
                </span>
              </div>
            </div>
          </div>

          {/* Bio Card */}
          <div className="bento-item-1 col-span-12 md:col-span-3 bg-white border border-text-primary p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center border border-text-primary">
                <Sparkles size={20} />
              </div>
              <p className="text-sm font-bold leading-relaxed uppercase tracking-tight">
                ENGINEERING HIGH-PERFORMANCE WEB APPLICATIONS AT THE INTERSECTION OF DESIGN, CODE, AND INTELLIGENCE.
              </p>
            </div>
            <div className="text-4xl font-display uppercase opacity-20">01</div>
          </div>

          {/* Stats/Services Card */}
          <div className="bento-item-2 col-span-12 md:col-span-3 bg-text-primary text-bg-primary p-8 flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between items-start">
              <Plus className="text-accent" />
              <div className="magnetic-item w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center bg-accent/10 cursor-pointer">
                <div className="w-1 h-1 bg-accent rounded-full animate-ping" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] tracking-[0.2em] font-bold text-accent">SERVICES</p>
              <h3 className="text-xl font-display">FULL-STACK</h3>
              <h3 className="text-xl font-display">AI & ML</h3>
              <h3 className="text-xl font-display">UI ARCHITECT</h3>
            </div>
          </div>

          {/* Small Feature Card - Magnetic */}
          <div className="magnetic-item bento-item-4 col-span-12 md:col-span-6 bg-accent/30 border border-text-primary p-8 backdrop-blur-md flex items-center justify-between group cursor-pointer hover:bg-accent/50 transition-colors shadow-xl">
            <div>
              <h2 className="text-2xl font-display uppercase tracking-tight">Available for <br/>new opportunities</h2>
              <p className="text-xs font-bold mt-2 opacity-60">2024 PORTFOLIO — V3.0</p>
            </div>
            <div className="w-16 h-16 border border-text-primary rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform bg-white shadow-xl">
              <ArrowDownRight size={32} />
            </div>
          </div>

        </div>

        {/* LAYER 3: VELOCITY CTA */}
        <div className="hero-cta absolute bottom-12 flex flex-col items-center gap-4 z-30">
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.6em] uppercase opacity-40">
            <div className="w-8 h-px bg-text-primary" />
            Scroll to Unveil
            <div className="w-8 h-px bg-text-primary" />
          </div>
          
          <div className="w-48 h-1 bg-text-primary/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-text-primary transition-all duration-300 ease-out" 
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
