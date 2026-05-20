"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollIndicatorOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    // Scroll animation: Fade and translate upwards
    // Disappears completely by 20% scroll progress
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "20% top",
        scrub: true,
      }
    });

    tl.to(overlayRef.current, {
      y: -60,
      opacity: 0,
      ease: "none"
    });

    // Mouse bounce animation: 5px travel, 2s duration
    gsap.to(".mouse-dot", {
      y: 5,
      duration: 1, // 1s up, 1s down = 2s total cycle
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === document.body) st.kill();
      });
    };
  }, []);

  return (
    <div 
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100, // Above Hero content but below Navbar if needed
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none", // Allow clicking through to Hero content
        background: "transparent",
      }}
    >
      <div 
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-12)",
        }}
      >

      </div>
    </div>
  );
}
