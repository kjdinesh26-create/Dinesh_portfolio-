"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { title: "Frontend",         icon: "◆", color: "primary",   skills: ["React.js","Next.js","TypeScript","Tailwind CSS","GSAP","Framer Motion","HTML5","CSS3"] },
  { title: "Backend",          icon: "◈", color: "secondary", skills: ["Node.js","Express.js","Python","REST APIs","GraphQL","JWT Auth","Socket.io"] },
  { title: "Database & Cloud", icon: "◇", color: "success",   skills: ["MongoDB","PostgreSQL","Firebase","AWS","Docker","Vercel","Netlify"] },
  { title: "AI & Tools",       icon: "◉", color: "danger",    skills: ["Machine Learning","Prompt Engineering","Gemini AI","TensorFlow","Git","Figma","Postman"] },
];

const colorMap: Record<string, { color: string; muted: string; border: string }> = {
  primary:   { color: "var(--color-primary)",   muted: "var(--color-primary-muted)",   border: "var(--color-border-accent)" },
  secondary: { color: "var(--color-secondary)", muted: "var(--color-secondary-muted)", border: "var(--color-border-cyan)" },
  success:   { color: "var(--color-success)",   muted: "var(--color-success-muted)",   border: "rgba(52,211,153,0.3)" },
  danger:    { color: "var(--color-danger)",    muted: "var(--color-danger-muted)",    border: "rgba(251,113,133,0.3)" },
};

const marqueeItems = ["React","Next.js","Node.js","TypeScript","MongoDB","PostgreSQL","Python","Machine Learning","Docker","GSAP","Tailwind","Figma","AWS","REST API","GraphQL","Firebase"];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skills-heading", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(".bento-card", { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".skills-grid", start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(".marquee-container", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".marquee-container", start: "top 90%", toggleActions: "play none none reverse" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-py" style={{ position: "relative" }}>
      <div style={{ position: "absolute", bottom: 0, left: "33%", width: "500px", height: "500px", background: "var(--color-secondary-muted)", borderRadius: "var(--radii-full)", filter: "blur(150px)", pointerEvents: "none", opacity: 0.3 }} />

      <div className="container-xl">
        <div className="skills-heading" style={{ marginBottom: "var(--space-8)" }}>
          <span className="section-label">03 — Tech Stack</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(var(--fs-4xl), 5vw, var(--fs-5xl))", fontWeight: "var(--fw-bold)", lineHeight: "var(--lh-tight)", color: "var(--color-text-primary)" }}>
            Tools of the <span className="text-gradient-accent">Trade</span>
          </h2>
        </div>

        <div className="skills-grid bento-grid">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color];
            // Mixed grid spans
            const gridSpan = (i === 0 || i === 3) ? "md:col-span-7" : "md:col-span-5";
            
            return (
              <div key={cat.title} className={`bento-card ${gridSpan}`}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "var(--radii-xl)", background: c.muted, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontSize: "var(--fs-2xl)", fontWeight: "var(--fw-bold)" }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-xl)", fontWeight: "var(--fw-bold)", color: "var(--color-text-primary)" }}>{cat.title}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                  {cat.skills.map(skill => (
                    <span key={skill} className="tag"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--color-border-subtle)", color: "var(--color-text-secondary)", cursor: "default", transition: "var(--transition-base)" }}
                      onMouseEnter={e => { e.currentTarget.style.color = c.color; e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = c.muted; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--color-text-secondary)"; e.currentTarget.style.borderColor = "var(--color-border-subtle)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                    >{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Marquee */}
        <div className="marquee-container" style={{ marginTop: "var(--space-10)", overflow: "hidden", padding: "var(--space-5) 0", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "128px", background: "linear-gradient(to right, var(--color-bg), transparent)", zIndex: 10, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "128px", background: "linear-gradient(to left, var(--color-bg), transparent)", zIndex: 10, pointerEvents: "none" }} />
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`} style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-4xl)", fontWeight: "var(--fw-bold)", color: "var(--color-text-muted)", opacity: 0.15, whiteSpace: "nowrap", transition: "var(--transition-colors)", cursor: "default", paddingRight: "var(--space-8)" }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.color = "var(--color-primary-light)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "0.15"; e.currentTarget.style.color = "var(--color-text-muted)"; }}
              >{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
