"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI CHATBOT",
    category: "MACHINE LEARNING",
    description:
      "AN INTELLIGENT CONVERSATIONAL AGENT BUILT WITH NLP TECHNIQUES AND DEEP LEARNING ARCHITECTURES.",
    year: "2024",
    image: "/project_thumbnail_1_1777914174106.png",
    tags: ["PYTHON", "NLP", "ML", "FASTAPI"],
    color: "#BDD6BF",
  },
  {
    title: "PORTFOLIO V3",
    category: "WEB ARCHITECTURE",
    description:
      "A MINIMALIST EDITORIAL PORTFOLIO BUILT WITH NEXT.JS, GSAP ANIMATIONS, AND LIQUID MOTION.",
    year: "2024",
    image: "/project_thumbnail_2_1777914187316.png",
    tags: ["NEXT.JS", "GSAP", "TAILWIND"],
    color: "#E2E2E2",
  },
  {
    title: "MERN EXPENSE",
    category: "FULL STACK APP",
    description:
      "A HIGH-PERFORMANCE FINANCIAL TRACKER WITH REAL-TIME ANALYTICS AND SECURE AUTHENTICATION.",
    year: "2024",
    image: "/project_thumbnail_1_1777914174106.png",
    tags: ["REACT", "NODE.JS", "MONGODB"],
    color: "#D6BDD6",
  },
  {
    title: "VOICE ASSISTANT",
    category: "AI INTERFACE",
    description:
      "A NEXT-GEN VOICE RECOGNITION SYSTEM INTEGRATED WITH LARGE LANGUAGE MODELS FOR NATURAL INTERACTION.",
    year: "2025",
    image: "/project_thumbnail_2_1777914187316.png",
    tags: ["PYTHON", "OPENAI", "REACT"],
    color: "#BDBDD6",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-stack-card");

      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          gsap.to(card, {
            scale: 0.85,
            xPercent: -5,
            yPercent: -5,
            rotation: -1,
            opacity: 0.3,
            transformOrigin: "top left",
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: "bottom top",
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          });
        } else {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
          });
        }
      });

      gsap.from(".stack-label", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="projects" className="bg-bg-primary relative">
      
      {/* SECTION HEADER */}
      <div className="relative pt-12 pb-12 left-12 z-50 mix-blend-difference pointer-events-none px-12 flex items-center gap-6 stack-label">
        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-xs font-bold">
          03
        </div>

        <span className="text-white text-[10px] font-bold tracking-[0.6em] uppercase">
          SELECTED WORKS
        </span>
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <section
            key={i}
            className="project-stack-card h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden"
          >
            <div className="w-[90vw] h-[85vh] bg-text-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/5">
              
              {/* Background Glow */}
              <div
                className="absolute top-0 right-0 w-[60%] h-[60%] opacity-20 blur-[120px] rounded-full pointer-events-none"
                style={{ backgroundColor: project.color }}
              />

              {/* Header */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-accent">
                    <Sparkles size={16} />

                    <span className="text-xs font-bold tracking-[0.4em] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-6xl md:text-8xl font-display text-bg-primary leading-none uppercase tracking-tighter">
                    {project.title}
                  </h3>
                </div>

                <div className="flex gap-4">
                  
                  {/* GitHub Button */}
                  <a
                    href="#"
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-text-primary transition-all"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>

                  {/* External Link */}
                  <a
                    href="#"
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-text-primary transition-all"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 grid grid-cols-12 gap-12 items-end">
                
                {/* Left */}
                <div className="col-span-12 lg:col-span-5 space-y-8">
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed uppercase tracking-wide max-w-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 border border-white/10 text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] group cursor-pointer border border-white/10">
                    
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-text-primary/90 to-transparent opacity-40 group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>
              </div>

              {/* Year */}
              <div className="absolute bottom-12 right-20 pointer-events-none">
                <span className="text-[12vw] font-display text-white/5 leading-none">
                  {project.year}
                </span>
              </div>
            </div>
          </section>
        ))}

        {/* Outro */}
        <section className="h-screen w-full flex flex-col items-center justify-center bg-bg-primary text-center p-20 relative">
          
          <h4 className="text-6xl md:text-8xl font-display uppercase leading-none mb-12">
            YOUR NEXT <br />
            <span
              className="italic"
              style={{
                WebkitTextStroke: "1px black",
                color: "transparent",
              }}
            >
              SUCCESS STORY
            </span>
          </h4>

          <a
            href="#contact"
            className="group relative flex items-center gap-8 py-4 px-12 border border-text-primary rounded-full hover:bg-text-primary hover:text-bg-primary transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-xl font-bold tracking-widest">
              START A PROJECT
            </span>

            <div className="relative z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-text-primary group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight size={24} />
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}