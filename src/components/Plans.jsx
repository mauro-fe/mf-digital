import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { PLANS } from "../siteContent";

const plans = PLANS.items;

export default function Plans({ className = "" }) {
  return (
    <section
      id="planos"
      className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 h-[400px] w-[400px] rounded-full bg-secondary/6 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span
            data-aos="fade-down"
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6"
          >
            &#x25C8; {PLANS.badge}
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
          >
            {PLANS.title}{" "}
            <span className="gradient-text">{PLANS.titleHighlight}</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="body-lg text-gray-400"
          >
            {PLANS.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className={`group relative rounded-2xl p-8 transition-all duration-500 card-glow-border ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-transparent border border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              {/* Category tag */}
              <span className="inline-block rounded-full bg-white/[0.06] border border-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-5">
                {plan.tag}
              </span>

              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-text-primary shadow-lg shadow-primary/30">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400">{plan.desc}</p>
              </div>

              <div className="mb-8">
                {plan.price !== "Sob consulta" && (
                  <span className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    A partir de
                  </span>
                )}
                <span className="text-4xl font-extrabold text-text-primary">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-primary-light"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={PLANS.ctaHref}
                className={`group/btn flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-text-primary hover:bg-primary-light shadow-lg shadow-primary/25"
                    : "bg-white/[0.06] text-text-primary hover:bg-white/[0.1] border border-white/[0.08]"
                }`}
              >
                {PLANS.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
