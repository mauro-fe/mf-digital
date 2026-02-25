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
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 800,
    });

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
      className={`about-tilt-card relative ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[48px]"
        style={{ background: glowColor }}
      />
      <div style={{ transform: "translateZ(28px)" }}>{children}</div>
    </div>
  );
}

export default function About({ className = "" }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Initial states via GSAP (no FOUC) ── */
      gsap.set(
        [
          ".about-badge",
          ".about-title",
          ".about-subtitle",
          ".about-text-block > *",
          ".about-tilt-card",
        ],
        { opacity: 0, visibility: "hidden" },
      );

      /* ── Header ── */
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      tl.to(".about-badge", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.5)",
        visibility: "visible",
      })
        .to(
          ".about-title",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            visibility: "visible",
          },
          "-=0.4",
        )
        .to(
          ".about-subtitle",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            visibility: "visible",
          },
          "-=0.5",
        );

      /* Initial offsets for header elements */
      gsap.set(".about-badge", { y: -20 });
      gsap.set(".about-title", { y: 30 });
      gsap.set(".about-subtitle", { y: 20 });

      /* ── Left text stagger ── */
      gsap.set(".about-text-block > *", { x: -40 });
      gsap.to(".about-text-block > *", {
        x: 0,
        opacity: 1,
        visibility: "visible",
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-text-block", start: "top 85%" },
      });

      /* ── Cards wave ── */
      gsap.set(".about-tilt-card", {
        scale: 0.85,
        y: 50,
        rotateY: 25,
        rotateX: -12,
      });
      gsap.to(".about-tilt-card", {
        scale: 1,
        opacity: 1,
        visibility: "visible",
        rotateY: 0,
        rotateX: 0,
        y: 0,
        stagger: { amount: 0.5, from: "start" },
        duration: 1.1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: { trigger: ".about-cards-grid", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      ref={sectionRef}
      className={`relative overflow-hidden py-24 md:py-32 ${className}`}
      style={{ background: "var(--gradient-subtle)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-secondary/6 blur-[120px]" />
      </div>

      {/* Dot texture */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="about-badge inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-primary))",
              }}
            />
            {ABOUT.badge}
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />
          </span>

          <h2 id="sobre-title" className="about-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.08] tracking-tight">
            {ABOUT.title}{" "}
            <span className="gradient-text">{ABOUT.titleHighlight}</span>
          </h2>

          <p className="about-subtitle body-lg text-gray-400 max-w-xl mx-auto">
            {ABOUT.subtitle}
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left — Text + CTAs */}
          <div className="about-text-block space-y-6 order-2 lg:order-1">
            <p className="text-gray-400 leading-relaxed text-lg">
              {ABOUT.paragraph1.prefix}
              <strong className="text-white font-semibold">
                {ABOUT.paragraph1.strong}
              </strong>
              {ABOUT.paragraph1.suffix}
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              {ABOUT.paragraph2.prefix}
              <strong className="text-white font-semibold">
                {ABOUT.paragraph2.strong1}
              </strong>
              {ABOUT.paragraph2.connector}
              <strong className="text-white font-semibold">
                {ABOUT.paragraph2.strong2}
              </strong>
              {ABOUT.paragraph2.suffix}
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              {ABOUT.paragraph3}
            </p>

            {/* Divider */}
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={ABOUT.cta1Href}
                aria-label={ABOUT.cta1AriaLabel || ABOUT.cta1}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  boxShadow:
                    "0 0 0 1px rgba(0,242,255,0.3), 0 8px 24px rgba(0,242,255,0.2)",
                }}
              >
                <span className="absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/15 transition-transform duration-600 group-hover:translate-x-[200%]" />
                <span className="relative">{ABOUT.cta1}</span>
                <ArrowRight
                  size={15}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={ABOUT.cta2Href}
                aria-label={ABOUT.cta2AriaLabel || ABOUT.cta2}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {ABOUT.cta2}
              </a>
            </div>
          </div>

          {/* Right — Feature cards */}
          <div className="relative order-1 lg:order-2">
            {/* Ambient glow behind cards */}
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full blur-[100px]"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(0,242,255,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="about-cards-grid relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <TiltCard
                    key={item.title}
                    glowColor={item.glowColor}
                    className="rounded-2xl p-6 cursor-default transition-all duration-300"
                    style={{
                      background: "rgba(10,15,30,0.7)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.bg} mb-4 transition-all duration-300`}
                      style={{
                        border: `1px solid ${item.borderColor || "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      <Icon size={17} className={item.color} />
                    </div>

                    <h3 className="font-bold text-white mb-1.5 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Bottom accent line on hover */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                      style={{
                        background: `linear-gradient(90deg, ${item.glowColor || "var(--color-primary)"}, transparent)`,
                      }}
                    />
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
