import React from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../siteContent";

const projects = PROJECTS.items;

export default function Projects({ className = "" }) {
  return (
    <section
      id="projetos"
      className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span
            data-aos="fade-down"
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6"
          >
            &#x25C8; {PROJECTS.badge}
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
          >
            {PROJECTS.title}{" "}
            <span className="gradient-text">{PROJECTS.titleHighlight}</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="body-lg text-gray-400"
          >
            {PROJECTS.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              aosDelay={i * 100}
            />
          ))}
        </div>

        {/* CTA below projects */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-12"
        >
          <a
            href={PROJECTS.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-all duration-300 hover:gap-3"
          >
            {PROJECTS.cta}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
