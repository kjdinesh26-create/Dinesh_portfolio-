"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GsapCodepenClone() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // 1. Scattering Title Effect
      const letters = gsap.utils.toArray(".scatter-letter");
      letters.forEach((letter: any, i) => {
        const center = letters.length / 2;
        const distance = i - center;
        gsap.to(letter, {
          x: distance * 80,
          y: Math.random() * 200 - 100,
          rotation: Math.random() * 90 - 45,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "+=100%",
            scrub: true,
          }
        });
      });

      // 2. Zoom & Assemble Grid
      const gridContainer = document.querySelector(".grid-container");
      const gridItems = gsap.utils.toArray(".grid-item");
      
      const gridTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".grid-section",
          start: "top bottom",
          end: "center center",
          scrub: 1.5,
        }
      });

      gridTl.from(gridContainer, {
        scale: 3,
        ease: "power2.inOut"
      }, 0);

      gridItems.forEach((item: any) => {
        const randomX = (Math.random() - 0.5) * window.innerWidth * 2;
        const randomY = (Math.random() - 0.5) * window.innerHeight * 2;
        gridTl.from(item, {
          x: randomX,
          y: randomY,
          rotation: Math.random() * 360 - 180,
          opacity: 0,
          ease: "power2.inOut"
        }, 0);
      });

      // 3. Simple Parallax
      gsap.to(".parallax-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitTitleText = "SmoothScroll".split("").map((char, i) => (
    <span 
      key={i} 
      className="scatter-letter inline-block font-black text-6xl sm:text-8xl md:text-[9rem] text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-700"
    >
      {char}
    </span>
  ));

  return (
    <div ref={containerRef} className="w-full bg-[#111] overflow-hidden relative text-white">
      
      <section className="hero-section h-screen flex flex-col items-center justify-center relative bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="flex z-10 text-center font-outfit perspective-1000">
          {splitTitleText}
        </div>
        <div className="absolute bottom-16 text-emerald-500/50 uppercase tracking-[0.5em] text-sm animate-pulse">
          Scroll to scatter
        </div>
      </section>

      <section className="grid-section min-h-screen py-32 px-4 bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
        <h2 className="text-4xl text-white font-bold mb-20 z-10 mix-blend-difference">Grid Assembles on Scroll</h2>
        <div className="grid-container grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl z-0">
          {[1,2,3,4,5,6].map((i) => (
             <div key={i} className="grid-item aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-white/5 relative bg-zinc-800">
               <img 
                 src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop&sig=${i}`} 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                 alt="grid content" 
               />
               <div className="absolute bottom-4 right-4 text-white/50 font-black text-4xl">
                 0{i}
               </div>
            </div>
          ))}
        </div>
      </section>

      <section className="parallax-section h-[80vh] relative overflow-hidden flex items-center justify-center bg-black">
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
          alt="Parallax"
          className="parallax-bg absolute top-[-20%] left-0 w-full h-[140%] object-cover opacity-50"
        />
        <div className="relative z-10 text-center bg-black/40 backdrop-blur-md p-12 rounded-3xl border border-white/10">
          <h2 className="text-6xl font-black text-white mb-4">Deep Parallax</h2>
          <p className="text-xl text-gray-300">Using standard ScrollTrigger</p>
        </div>
      </section>
    </div>
  );
}
