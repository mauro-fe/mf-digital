import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectCard({
  icon: Icon,
  image,
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
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
      style={{
        background: "rgba(10,15,30,0.8)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(244,63,94,0.25)";
        e.currentTarget.style.boxShadow =
          "0 0 40px rgba(244,63,94,0.08), 0 20px 60px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* ── Preview area ── */}
      <div className={`relative h-48 sm:h-52 overflow-hidden flex-shrink-0 bg-gradient-to-br ${gradient}`}>
        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid opacity-25" />

        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-white/8 transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-black/10 blur-2xl" />

        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* No-image: icon + domain */}
        {!image && Icon && (
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2.5">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Icon size={32} className="text-white/90" />
            </div>
            {link && (
              <span className="text-xs font-medium text-white/50 tracking-wide">
                {link.replace(/https?:\/\//, "").replace(/\/$/, "")}
              </span>
            )}
          </div>
        )}

        {/* Hover overlay */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver projeto ${title}`}
            className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{ background: "rgba(3,7,18,0.65)", backdropFilter: "blur(4px)" }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <ExternalLink size={13} />
              Ver Projeto
            </span>
          </a>
        )}

        {/* Bottom fade into card body */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(10,15,30,0.8), transparent)" }}
        />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug transition-colors duration-300 group-hover:text-primary-light line-clamp-2">
          {title}
        </h3>

        <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed mb-4 flex-1 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400 transition-colors duration-200 group-hover:text-gray-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTA link */}
        <a
          href="#contato"
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-all duration-300 hover:gap-3 mt-auto"
          aria-label={`Solicitar projeto similar a ${title}`}
        >
          Quero um projeto assim
          <ArrowRight
            size={13}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </a>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 ease-out group-hover:w-full"
        style={{
          background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary), transparent)",
        }}
      />
    </div>
  );
}