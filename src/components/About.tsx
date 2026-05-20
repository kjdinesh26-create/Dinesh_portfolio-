"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Plus, Layout, BarChart, Code, Rocket, FileSearch, Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { num: "STAGE 1", title: "BRIEFING", icon: <FileSearch />, description: "UNDERSTANDING THE VISION, DEFINING THE PROBLEM SPACE, AND ESTABLISHING A SOLID FOUNDATION FOR SUCCESS." },
  { num: "STAGE 2", title: "ANALYTICS", icon: <BarChart />, description: "LEVERAGING DATA-DRIVEN INSIGHTS TO INFORM EVERY DESIGN AND DEVELOPMENT DECISION." },
  { num: "STAGE 3", title: "PROTOTYPING", icon: <Layout />, description: "MAPPING OUT USER JOURNEYS AND ESTABLISHING THE ARCHITECTURE FOR SEAMLESS FLOW." },
  { num: "STAGE 4", title: "DESIGN", icon: <Palette />, description: "CRAFTING THE VISUAL LANGUAGE — TYPOGRAPHY, COLOR SYSTEMS, AND BRAND IDENTITY." },
  { num: "STAGE 5", title: "DEVELOPMENT", icon: <Code />, description: "TRANSLATING DESIGNS INTO HIGH-PERFORMANCE CODE USING REACT, NEXT.JS, AND MERN." },
  { num: "STAGE 6", title: "LAUNCH", icon: <Rocket />, description: "DEPLOYMENT, TESTING, AND ONGOING SUPPORT FOR LONG-TERM SCALABILITY." },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. KINETIC 3D REVEAL
      gsap.fromTo(".kinetic-text span", 
        { rotateX: -90, y: 100, opacity: 0 },
        { 
          rotateX: 0, 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 1.5, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".kinetic-text",
            start: "top 85%",
          }
        }
      );

      // 2. PARALLAX STATS
      gsap.utils.toArray(".parallax-stat").forEach((stat: any, i) => {
        gsap.fromTo(stat,
          { y: 100, opacity: 0 },
          { 
            y: -50 * (i + 1), 
            opacity: 1, 
            scrollTrigger: {
              trigger: stat,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      });

      // 3. STAGES REVEAL
      gsap.fromTo(".about-line",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.5, ease: "power4.inOut", scrollTrigger: { trigger: ".about-line", start: "top 90%" } }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-bg-primary py-24">
      {/* SECTION HEADER */}
      <div className="grid-container border-b-0 px-6">
        <div className="col-span-12 py-10 flex items-center gap-8 border-b border-text-primary/10">
          <div className="w-12 h-12 rounded-full border border-text-primary flex items-center justify-center font-display text-lg">02</div>
          <div className="flex-grow h-px bg-text-primary/20" />
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase">WHO I AM — THE PROCESS</h2>
        </div>
      </div>

      {/* KINETIC INTRO */}
      <div className="grid-container px-6 grid grid-cols-12 gap-8 py-20">
        <div className="col-span-12 md:col-span-7">
          <h3 className="kinetic-text text-[7vw] font-display leading-[0.9] tracking-tighter uppercase overflow-hidden">
            <span className="block italic" style={{ WebkitTextStroke: "1px black", color: "transparent" }}>CRAFTING</span>
            <span className="block">DIGITAL</span>
            <span className="block">INTELLIGENCE</span>
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-col justify-end">
          <p className="text-xl leading-relaxed text-text-primary/70 font-body max-w-sm mb-12">
            A 3RD-YEAR B.TECH IT STUDENT FOCUSED ON BUILDING INTERACTIVE SYSTEMS WHERE DESIGN MEETS MACHINE LEARNING.
          </p>
          <div className="flex gap-12">
            {[
              { val: "10+", lab: "PROJECTS" },
              { val: "3.5", lab: "GPA" },
              { val: "01", lab: "AWARD" }
            ].map((s) => (
              <div key={s.lab} className="parallax-stat">
                <p className="text-4xl font-display">{s.val}</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">{s.lab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STAGES ACCORDION */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="about-line h-[1px] bg-text-primary/20 w-full mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="sticky top-32 h-fit">
            <h4 className="text-sm font-bold tracking-widest text-accent mb-4 uppercase">THE PHASES</h4>
            <h2 className="text-6xl font-display leading-none uppercase">STAGES OF <br/> PRODUCTION</h2>
          </div>
          <div className="space-y-4">
            {stages.map((stage, i) => (
              <div key={i} className="group border-b border-text-primary/10 pb-8">
                <button 
                  onClick={() => setOpenIndex(i)}
                  className="w-full flex items-center justify-between text-left py-4 hover:pl-4 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-bold opacity-30">{stage.num}</span>
                    <span className={`text-4xl font-display transition-colors ${openIndex === i ? 'text-accent' : ''}`}>{stage.title}</span>
                  </div>
                  <Plus className={`transition-transform duration-500 ${openIndex === i ? 'rotate-45' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === i ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="flex gap-8 items-start pl-16">
                    <div className="text-accent p-4 bg-accent/5 border border-accent/20 rounded-2xl">{stage.icon}</div>
                    <p className="text-sm leading-relaxed text-text-primary/60 max-w-sm uppercase tracking-wide">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
