"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );

    let lastScrollY = 0;
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const currentScrollY = self.scroll();
        if (navRef.current) {
          if (currentScrollY > lastScrollY && currentScrollY > 200) {
            gsap.to(navRef.current, { y: -100, duration: 0.4, ease: "power2.in" });
          } else {
            gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
          }
        }
        lastScrollY = currentScrollY;
      }
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#F4F3EF] border-b border-black"
    >
      <div className="grid-container h-16 items-center">
        <div className="col-span-4 grid-item flex items-center h-full border-b-0">
          <a href="#" className="font-display text-xl tracking-tighter">
            &lt;DINESH /&gt;
          </a>
        </div>

        <div className="col-span-4 grid-item flex items-center justify-center h-full border-b-0">
          <a href="https://www.linkedin.com/in/dineshkumar-k-j-95257a261/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:line-through transition-all">
            LinkedIn
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-45deg]">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="col-span-4 grid-item flex items-center justify-end h-full border-b-0 border-r-0 space-x-8">
          <a href="#about" className="hover:line-through transition-all uppercase text-sm font-medium">About</a>
          <a href="#projects" className="hover:line-through transition-all uppercase text-sm font-medium">Projects</a>
          <a href="#contact" className="hover:line-through transition-all uppercase text-sm font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}
