import React, { useRef, useLayoutEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = ABOUT.highlights;

/* ─── Tilt 3D Card ─── */
function TiltCard({ children, glowColor, className = "" }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12; // max 12deg
    const rotateY = ((x - centerX) / centerX) * 12;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });

    // Move glow to follow cursor
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 1,
        duration: 0.3,
      });
    }
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`about-tilt-card gsap-hidden relative ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[50px]"
        style={{ background: glowColor }}
      />
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </div>
  );
}

export default function About({ className = "" }) {
  const sectionRef = useRef(null);

  /* ─── GSAP Entrance Timeline ─── */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Prevent FOUC
      gsap.set(
        [
          ".about-badge",
          ".about-title",
          ".about-subtitle",
          ".about-text-block > *",
          ".about-tilt-card",
        ],
        { visibility: "visible" },
      );

      // Header animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".about-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
      )
        .fromTo(
          ".about-title",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".about-subtitle",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        );

      // Left text: slide in with stagger
      gsap.fromTo(
        ".about-text-block > *",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text-block",
            start: "top 85%",
          },
        },
      );

      // Cards: wave stagger with elastic ease
      gsap.fromTo(
        ".about-tilt-card",
        {
          scale: 0.8,
          opacity: 0,
          rotateY: 30,
          rotateX: -15,
          y: 60,
        },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          y: 0,
          stagger: {
            amount: 0.6,
            from: "start",
          },
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: ".about-cards-grid",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className={`relative overflow-hidden py-24 md:py-32 px-5 sm:px-8 ${className}`}
    >
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="about-badge gsap-hidden inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6">
            &#x25C8; {ABOUT.badge}
          </span>

          <h2 className="about-title gsap-hidden text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight">
            {ABOUT.title}{" "}
            <span className="gradient-text">{ABOUT.titleHighlight}</span>
          </h2>

          <p className="about-subtitle gsap-hidden body-lg text-gray-400">
            {ABOUT.subtitle}
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left - Text + CTA */}
          <div className="about-text-block space-y-6 order-2 lg:order-1">
            <p className="gsap-hidden text-gray-400 leading-relaxed text-lg">
              {ABOUT.paragraph1.prefix}
              <strong className="">{ABOUT.paragraph1.strong}</strong>
              {ABOUT.paragraph1.suffix}
            </p>

            <p className="gsap-hidden text-gray-400 leading-relaxed text-lg">
              {ABOUT.paragraph2.prefix}
              <strong className="">{ABOUT.paragraph2.strong1}</strong>
              {ABOUT.paragraph2.connector}
              <strong className="">{ABOUT.paragraph2.strong2}</strong>
              {ABOUT.paragraph2.suffix}
            </p>

            <p className="gsap-hidden text-gray-400 leading-relaxed text-lg">
              {ABOUT.paragraph3}
            </p>

            <div className="gsap-hidden flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={ABOUT.cta1Href}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-text-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {ABOUT.cta1}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={ABOUT.cta2Href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/5"
              >
                {ABOUT.cta2}
              </a>
            </div>
          </div>

          {/* Right - Feature cards with Tilt 3D */}
          <div className="relative order-1 lg:order-2">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="about-cards-grid relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <TiltCard
                    key={item.title}
                    glowColor={item.glowColor}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-colors duration-400 hover:bg-white/[0.06] hover:border-primary/30 card-glow-border cursor-default"
                  >
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} mb-4 transition-transform duration-300`}
                    >
                      <Icon size={18} className={item.color} />
                    </div>
                    <h3 className="font-bold text-text-primary mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
