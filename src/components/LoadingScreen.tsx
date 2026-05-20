"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // SVG Draw animation
      tl.fromTo(pathRef.current, 
        { strokeDasharray: "0 1500" },
        { strokeDasharray: "1500 1500", duration: 1.5, ease: "power3.inOut" }
      )
      .to(textRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")
      .to(textRef.current, { y: -20, opacity: 0, duration: 0.5, delay: 0.5 })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = "none";
        }
      }, "-=0.2");

    }, overlayRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={overlayRef} 
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ position: "relative", width: "128px", height: "128px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", color: "var(--color-primary)" }}>
          <path
            ref={pathRef}
            d="M50 10 L90 50 L50 90 L10 50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div 
          ref={textRef} 
          style={{
            position: "absolute",
            marginTop: "160px",
            color: "var(--color-primary-light)",
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-bold)",
            letterSpacing: "var(--ls-widest)",
            textTransform: "uppercase",
            fontSize: "var(--fs-xs)",
            opacity: 0,
          }}
        >
          Initializing Portfolio
        </div>
      </div>
    </div>
  );
}
