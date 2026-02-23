import React from "react";
import { TECHNOLOGIES } from "../siteContent";

const techs = TECHNOLOGIES.items;

export default function Technologies({ className = "" }) {
  return (
    <section
      id="tecnologias"
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span
            data-aos="fade-down"
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6"
          >
            &#x25C8; {TECHNOLOGIES.badge}
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
          >
            {TECHNOLOGIES.title}{" "}
            <span className="gradient-text">{TECHNOLOGIES.titleHighlight}</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="body-lg text-gray-400"
          >
            {TECHNOLOGIES.subtitle}
          </p>
        </div>
      </div>

      <div
        className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]"
        style={{ animationDuration: "35s" }}
      >
        {[...techs, ...techs].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className={`group flex-shrink-0 flex flex-col items-center gap-3 rounded-2xl border ${tech.bg} p-8 w-[140px] md:w-[160px] transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1`}
            >
              <Icon
                size={32}
                color="currentColor"
                className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}
              />
              <span className="text-sm font-semibold text-gray-300">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
