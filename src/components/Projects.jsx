import React from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../siteContent";

const projects = PROJECTS.items;

export default function Projects({ className = "" }) {
  return (
    <section
      id="projetos"
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-subtle)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-secondary/6 blur-[120px]" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span
            data-aos="fade-down"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5"
          >
            <span
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-primary))" }}
            />
            {PROJECTS.badge}
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
            {PROJECTS.title}{" "}
            <span className="gradient-text">{PROJECTS.titleHighlight}</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="body-lg text-gray-400 max-w-xl mx-auto"
          >
            {PROJECTS.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              icon={p.icon}
              image={p.image}
              title={p.title}
              description={p.description}
              tags={p.tags}
              link={p.link}
              gradient={p.gradient}
              aosDelay={i * 80}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center mt-12"
        >
          <a
            href={PROJECTS.ctaHref}
            className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(244,63,94,0.3)";
              e.currentTarget.style.background = "rgba(244,63,94,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            {PROJECTS.cta}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}