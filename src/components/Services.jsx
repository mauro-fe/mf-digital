import React from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../siteContent";

const services = SERVICES.items;

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.06] hover:border-primary/30 card-glow-border">
      <div className="flex items-start justify-between mb-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          <Icon size={22} className="text-primary-light" />
        </div>
        <ArrowRight
          size={20}
          className="text-text-primary/10 transition-all duration-300 group-hover:text-primary-light group-hover:translate-x-1"
        />
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-400">{description}</p>
    </div>
  );
}

export default function Services({ className = "" }) {
  return (
    <section
      id="servicos"
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-5 sm:px-8">
          <span
            data-aos="fade-down"
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6"
          >
            &#x25C8; {SERVICES.badge}
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
          >
            {SERVICES.title}
            <br />
            <span className="gradient-text">{SERVICES.titleHighlight}</span>
          </h2>
        </div>

        {/* Infinite scroll row 1 */}
        <div className="mb-5">
          <div
            className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]"
            style={{ animationDuration: "40s" }}
          >
            {[...services, ...services].map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>

        {/* Infinite scroll row 2 (reversed) */}
        <div>
          <div
            className="flex w-max animate-marquee-reverse gap-5 hover:[animation-play-state:paused]"
            style={{ animationDuration: "45s" }}
          >
            {[
              ...services.slice(3),
              ...services.slice(0, 3),
              ...services.slice(3),
              ...services.slice(0, 3),
            ].map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
