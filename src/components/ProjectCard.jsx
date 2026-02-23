import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectCard({
  icon: Icon,
  title,
  description,
  tags = [],
  link,
  gradient = "from-primary to-secondary-dark",
  aosDelay = 0,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] card-glow-border"
    >
      {/* Preview area with gradient */}
      <div
        className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
          <Icon
            size={48}
            className="text-text-primary/90 transition-all duration-500 group-hover:scale-110 group-hover:text-text-primary"
          />
          <span className="text-sm font-medium text-text-primary/60 tracking-wide">
            {link
              ?.replace("https://", "")
              .replace("http://", "")
              .replace(/\/$/, "")}
          </span>
        </div>

        {/* Hover overlay with link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-text-primary shadow-lg backdrop-blur-xl border border-white/20 transition-transform duration-300 group-hover:scale-105">
              <ExternalLink size={14} />
              Ver Projeto
            </span>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2 transition-colors duration-300 group-hover:text-primary-light">
          {title}
        </h3>
        <p className="text-[15px] text-gray-400 leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-white/[0.06] px-3 py-1 text-xs font-medium text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href="#contato"
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-all duration-300 hover:gap-3"
        >
          Quero um projeto assim
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}
