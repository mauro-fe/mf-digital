import React, { useRef, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const services = SERVICES.items;

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div
      className="group relative flex-shrink-0 w-[300px] md:w-[360px] rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-default"
      style={{
        background: "rgba(10,15,30,0.8)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,242,255,0.22)";
        e.currentTarget.style.boxShadow =
          "0 0 40px rgba(0,242,255,0.08), 0 16px 48px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top glow on hover */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,242,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Header row */}
      <div className="relative z-10 flex items-start justify-between mb-5">
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{
            background: "rgba(0,242,255,0.1)",
            border: "1px solid rgba(0,242,255,0.15)",
          }}
        >
          <Icon size={20} className="text-primary-light" strokeWidth={1.75} />
        </div>
        <ArrowRight
          size={16}
          className="transition-all duration-300 group-hover:translate-x-1"
          style={{ color: "rgba(0,242,255,0.25)" }}
        />
      </div>

      <h3 className="relative z-10 text-base font-bold text-white mb-2.5 transition-colors duration-300 group-hover:text-primary-light">
        {title}
      </h3>
      <p className="relative z-10 text-sm leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary), var(--color-secondary), transparent)",
        }}
      />
    </div>
  );
}

export default function Services({ className = "" }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Initial states ── */
      gsap.set(".services-badge", { opacity: 0, y: -20, visibility: "hidden" });
      gsap.set(".services-title", { opacity: 0, y: 30, visibility: "hidden" });
      gsap.set(".services-row", { opacity: 0, y: 30, visibility: "hidden" });

      /* ── Header ── */
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".services-header", start: "top 85%" },
      });

      tl.to(".services-badge", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.5)",
        visibility: "visible",
      }).to(
        ".services-title",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          visibility: "visible",
        },
        "-=0.4",
      );

      /* ── Rows stagger ── */
      gsap.to(".services-row", {
        opacity: 1,
        y: 0,
        visibility: "visible",
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-rows", start: "top 88%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[130px]" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-14 max-w-3xl mx-auto px-5 sm:px-8">
          <span className="services-badge inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-primary))",
              }}
            />
            {SERVICES.badge}
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />
          </span>

          <h2 className="services-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
            {SERVICES.title}
            <br />
            <span className="gradient-text">{SERVICES.titleHighlight}</span>
          </h2>
        </div>

        {/* Marquee rows */}
        <div className="services-rows flex flex-col gap-5">
          {/* Row 1 */}
          <div className="services-row relative overflow-hidden">
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-dark-900), transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10"
              style={{
                background:
                  "linear-gradient(-90deg, var(--color-dark-900), transparent)",
              }}
            />
            <div
              className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]"
              style={{ animationDuration: "40s" }}
            >
              {[...services, ...services].map((s, i) => (
                <ServiceCard key={i} {...s} />
              ))}
            </div>
          </div>

          {/* Row 2 — reversed + offset */}
          <div className="services-row relative overflow-hidden">
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-dark-900), transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10"
              style={{
                background:
                  "linear-gradient(-90deg, var(--color-dark-900), transparent)",
              }}
            />
            <div
              className="flex w-max animate-marquee-reverse gap-5 hover:[animation-play-state:paused]"
              style={{ animationDuration: "45s" }}
            >
              {[
                ...services.slice(Math.floor(services.length / 2)),
                ...services.slice(0, Math.floor(services.length / 2)),
                ...services.slice(Math.floor(services.length / 2)),
                ...services.slice(0, Math.floor(services.length / 2)),
              ].map((s, i) => (
                <ServiceCard key={i} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
