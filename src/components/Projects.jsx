import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../siteContent";

const projects = PROJECTS.items;

function chunkArray(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

export default function Projects({ className = "" }) {
  const [cols, setCols] = useState(() => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w >= 1280) return 4;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  });

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w >= 1280 && cols !== 4) setCols(4);
      else if (w >= 1024 && w < 1280 && cols !== 3) setCols(3);
      else if (w >= 640 && w < 1024 && cols !== 2) setCols(2);
      else if (w < 640 && cols !== 1) setCols(1);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [cols]);

  const rows = chunkArray(projects, cols);

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
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
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-primary))",
              }}
            />
            {PROJECTS.badge}
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />
          </span>

          <h2 id="projetos-title"
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

        {/* Cards grid (show all) grouped into rows so last row can be centered */}
        <div className="space-y-5">
          {rows.map((row, rowIndex) => {
            const isFull = row.length === cols;
            if (isFull) {
              return (
                <div
                  key={rowIndex}
                  style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}
                  className="grid gap-5 sm:gap-6"
                >
                  {row.map((p, i) => (
                    <ProjectCard
                      key={p.title}
                      icon={p.icon}
                      image={p.image}
                      title={p.title}
                      description={p.description}
                      tags={p.tags}
                      link={p.link}
                      gradient={p.gradient}
                      aosDelay={(rowIndex * cols + i) * 80}
                    />
                  ))}
                </div>
              );
            }

            // Incomplete last row — center the items
            return (
              <div key={rowIndex} className="flex justify-center gap-5 sm:gap-6">
                {row.map((p, i) => (
                  <div
                    key={p.title}
                    style={{ flex: `0 0 calc(${100 / cols}% )`, maxWidth: `calc(${100 / cols}% )` }}
                  >
                    <ProjectCard
                      icon={p.icon}
                      image={p.image}
                      title={p.title}
                      description={p.description}
                      tags={p.tags}
                      link={p.link}
                      gradient={p.gradient}
                      aosDelay={(rowIndex * cols + i) * 80}
                    />
                  </div>
                ))}
              </div>
            );
          })}
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
              e.currentTarget.style.borderColor = "rgba(0,242,255,0.3)";
              e.currentTarget.style.background = "rgba(0,242,255,0.06)";
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
