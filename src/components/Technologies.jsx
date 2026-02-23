import React from "react";
import { TECHNOLOGIES } from "../siteContent";

const techs = TECHNOLOGIES.items;

export default function Technologies({ className = "" }) {
  return (
    <section
      id="tecnologias"
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[130px]" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-secondary/6 blur-[130px]" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center mb-16">
        <span
          data-aos="fade-down"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5"
        >
          <span
            className="h-px w-8"
            style={{ background: "linear-gradient(90deg, transparent, var(--color-primary))" }}
          />
          {TECHNOLOGIES.badge}
          <span
            className="h-px w-8"
            style={{ background: "linear-gradient(90deg, var(--color-primary), transparent)" }}
          />
        </span>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.08] tracking-tight"
        >
          {TECHNOLOGIES.title}{" "}
          <span className="gradient-text">{TECHNOLOGIES.titleHighlight}</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="body-lg text-gray-400 max-w-xl mx-auto"
        >
          {TECHNOLOGIES.subtitle}
        </p>
      </div>

      {/* Marquee rows */}
      <div className="relative z-10 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="150">

        {/* Row 1 — left to right */}
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(90deg, var(--color-dark-900), transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(-90deg, var(--color-dark-900), transparent)" }} />

          <div
            className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]"
            style={{ animationDuration: "35s" }}
          >
            {[...techs, ...techs].map((tech, i) => (
              <TechCard key={i} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left (reverse), offset slice */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(90deg, var(--color-dark-900), transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(-90deg, var(--color-dark-900), transparent)" }} />

          <div
            className="flex w-max animate-marquee-reverse gap-4 hover:[animation-play-state:paused]"
            style={{ animationDuration: "28s" }}
          >
            {[...[...techs].reverse(), ...[...techs].reverse()].map((tech, i) => (
              <TechCard key={i} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech }) {
  const Icon = tech.icon;
  return (
    <div
      className={`group flex-shrink-0 flex items-center gap-3 rounded-xl px-5 py-3.5 w-auto transition-all duration-300 hover:-translate-y-0.5 cursor-default ${tech.bg}`}
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(244,63,94,0.25)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(244,63,94,0.08), 0 8px 24px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Icon
        size={22}
        color="currentColor"
        className={`${tech.color} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
      />
      <span className="text-sm font-semibold text-gray-300 whitespace-nowrap group-hover:text-white transition-colors duration-300">
        {tech.name}
      </span>
    </div>
  );
}