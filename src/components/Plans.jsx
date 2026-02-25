import React, { useRef, useLayoutEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PLANS, AUTHOR } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const plans = PLANS.items;

export default function Plans({ className = "" }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Initial states ── */
      gsap.set(".plans-badge", { opacity: 0, y: -20, visibility: "hidden" });
      gsap.set(".plans-title", { opacity: 0, y: 30, visibility: "hidden" });
      gsap.set(".plans-subtitle", { opacity: 0, y: 20, visibility: "hidden" });
      gsap.set(".plans-card", {
        opacity: 0,
        y: 60,
        scale: 0.94,
        visibility: "hidden",
      });
      gsap.set(".plans-feature-item", { opacity: 0, x: -12 });

      /* ── Header entrance ── */
      const headerTl = gsap.timeline({
        scrollTrigger: { trigger: ".plans-header", start: "top 85%" },
      });

      headerTl
        .to(".plans-badge", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.5)",
          visibility: "visible",
        })
        .to(
          ".plans-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            visibility: "visible",
          },
          "-=0.4",
        )
        .to(
          ".plans-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            visibility: "visible",
          },
          "-=0.5",
        );

      /* ── Cards stagger entrance ── */
      gsap.to(".plans-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        visibility: "visible",
        stagger: { amount: 0.4, from: "center" }, // center-out stagger = popular card last
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".plans-grid", start: "top 85%" },
        onComplete: () => {
          // After cards are visible, stagger in features
          gsap.to(".plans-feature-item", {
            opacity: 1,
            x: 0,
            stagger: 0.025,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });

      /* ── Popular card: continuous subtle glow pulse ── */
      gsap.to(".plans-card-popular .plans-glow", {
        opacity: 0.7,
        scale: 1.08,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openWhatsapp = (e) => {
    e.preventDefault();
    try {
      window.open(AUTHOR.links.whatsapp, "_blank");
    } catch {
      window.location.href = AUTHOR.links.whatsapp;
    }
  };

  return (
    <section
      id="planos"
      ref={sectionRef}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-40 h-[400px] w-[400px] rounded-full bg-secondary/6 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="plans-header text-center mb-16 max-w-3xl mx-auto">
          <span className="plans-badge inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-primary))",
              }}
            />
            {PLANS.badge}
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />
          </span>

          <h2 className="plans-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.08] tracking-tight">
            {PLANS.title}{" "}
            <span className="gradient-text">{PLANS.titleHighlight}</span>
          </h2>

          <p className="plans-subtitle body-lg text-gray-400 max-w-xl mx-auto">
            {PLANS.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="plans-grid grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center">
          {plans.map((plan, i) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.name}
                className={`plans-card ${isPopular ? "plans-card-popular" : ""} relative rounded-2xl ${isPopular ? "overflow-visible" : "overflow-hidden"}`}
                style={
                  isPopular
                    ? {
                        background:
                          "linear-gradient(160deg, rgba(0,242,255,0.14) 0%, rgba(0,119,255,0.06) 50%, rgba(10,15,30,0.9) 100%)",
                        border: "1px solid rgba(0,242,255,0.35)",
                        boxShadow:
                          "0 0 60px rgba(0,242,255,0.12), 0 20px 60px rgba(0,0,0,0.4)",
                        transform: "scale(1.03)",
                        zIndex: 10,
                        padding: "2rem",
                      }
                    : {
                        background: "rgba(10,15,30,0.7)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: "2rem",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isPopular) {
                    e.currentTarget.style.borderColor = "rgba(0,242,255,0.2)";
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(0,242,255,0.06), 0 16px 48px rgba(0,0,0,0.3)";
                  } else {
                    e.currentTarget.style.boxShadow =
                      "0 0 80px rgba(0,242,255,0.2), 0 30px 80px rgba(0,0,0,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isPopular) {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.boxShadow =
                      "0 0 60px rgba(0,242,255,0.12), 0 20px 60px rgba(0,0,0,0.4)";
                  }
                }}
              >
                {/* Popular ambient glow (GSAP animated) */}
                {isPopular && (
                  <div
                    className="plans-glow pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-40 w-64 rounded-full blur-[60px] z-10"
                    style={{ background: "rgba(0,242,255,0.25)", opacity: 0.4 }}
                  />
                )}

                {/* Popular badge (GSAP float) */}
                {isPopular && (
                  <div className="plans-popular-badge absolute -top-3.5 left-1/2 -translate-x-1/2 z-50">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                        boxShadow: "0 4px 16px rgba(0,242,255,0.4)",
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Tag */}
                <span
                  className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {plan.tag}
                </span>

                {/* Name + desc */}
                <div className="mb-7">
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-7">
                  {plan.price !== "Sob consulta" && (
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-1">
                      A partir de
                    </span>
                  )}
                  <span
                    className="text-4xl font-extrabold"
                    style={
                      isPopular
                        ? {
                            background: "var(--gradient-text)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }
                        : { color: "#fff" }
                    }
                  >
                    {plan.price}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="mb-7 h-px w-full"
                  style={{
                    background: isPopular
                      ? "linear-gradient(90deg, rgba(0,242,255,0.3), rgba(0,119,255,0.2), transparent)"
                      : "rgba(255,255,255,0.05)",
                  }}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="plans-feature-item flex items-start gap-3 text-sm text-gray-400"
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full"
                        style={{
                          background: isPopular
                            ? "rgba(0,242,255,0.15)"
                            : "rgba(255,255,255,0.06)",
                          border: isPopular
                            ? "1px solid rgba(0,242,255,0.25)"
                            : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <Check
                          size={9}
                          className={
                            isPopular ? "text-primary-light" : "text-gray-400"
                          }
                        />
                      </span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={AUTHOR.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openWhatsapp}
                  aria-label={`${PLANS.cta} — plano ${plan.name}`}
                  className="group/btn relative z-40 overflow-hidden flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-sm transition-colors duration-300"
                  style={
                    isPopular
                      ? {
                          background:
                            "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                          color: "#fff",
                          boxShadow: "0 4px 20px rgba(0,242,255,0.3)",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(148,163,184,0.9)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isPopular) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.09)";
                      e.currentTarget.style.borderColor =
                        "rgba(0,242,255,0.25)";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isPopular) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "rgba(148,163,184,0.9)";
                    }
                  }}
                >
                  {isPopular && (
                    <span className="absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/15 transition-transform duration-600 group-hover/btn:translate-x-[200%]" />
                  )}
                  <span className="relative">{PLANS.cta}</span>
                  <ArrowRight
                    size={14}
                    className="relative transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
