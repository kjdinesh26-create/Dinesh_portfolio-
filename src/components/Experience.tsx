"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { period: "2022 — Present", role: "B.Tech Information Technology", company: "University Student", description: "Pursuing a Bachelor's degree in IT. Active in hackathons, open-source contributions, and building real-world projects with modern web technologies and AI/ML frameworks.", tags: ["Computer Science","Web Development","Machine Learning"] },
  { period: "2024",           role: "Team Lead & Developer",         company: "HackIndia Spark 4 — Team Vistaraa", description: "Led architectural development and prompt engineering for the team's submission. Built advanced LLM integrations for real-time data parsing, achieving a top-tier finish.", tags: ["Leadership","AI/LLM","Hackathon"] },
  { period: "2023 — Present", role: "Full-Stack Developer",           company: "Freelance & Personal Projects",      description: "Designing and developing end-to-end web applications. Focus on MERN stack, Next.js, and AI-powered features with clean UI/UX.", tags: ["React","Node.js","Next.js","MongoDB"] },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".exp-heading", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(".bento-card", { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".exp-bento", start: "top 80%", toggleActions: "play none none reverse" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-py" style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "33%", right: 0, width: "500px", height: "500px", background: "var(--color-primary-muted)", borderRadius: "var(--radii-full)", filter: "blur(150px)", pointerEvents: "none", opacity: 0.2 }} />

      <div className="container-xl">
        <div className="exp-heading" style={{ marginBottom: "var(--space-8)" }}>
          <span className="section-label">04 — Journey</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(var(--fs-4xl), 5vw, var(--fs-5xl))", fontWeight: "var(--fw-bold)", lineHeight: "var(--lh-tight)", color: "var(--color-text-primary)" }}>
            Experience &amp; <span className="text-gradient-accent">Education</span>
          </h2>
        </div>

        <div className="exp-bento bento-grid">
          {experiences.map((exp, i) => (
            <div key={i} className="bento-card md:col-span-12" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "var(--space-4)", alignItems: "center" }}>
              <div className="md:col-span-3">
                <span style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-bold)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--color-primary-light)" }}>
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9" style={{ borderLeft: "1px solid var(--color-border-subtle)", paddingLeft: "var(--space-6)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-xl)", fontWeight: "var(--fw-bold)", color: "var(--color-text-primary)" }}>{exp.role}</h3>
                <p style={{ fontSize: "var(--fs-base)", color: "var(--color-secondary)", fontWeight: "var(--fw-medium)", marginTop: "var(--space-1)" }}>{exp.company}</p>
                <p style={{ color: "var(--color-text-secondary)", marginTop: "var(--space-3)", lineHeight: "var(--lh-relaxed)" }}>{exp.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
                  {exp.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: "var(--fs-xs)" }}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
