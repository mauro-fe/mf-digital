import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQ as FAQ_CONTENT } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const faqs = FAQ_CONTENT.items;

export default function FAQ({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    try {
      ctx = gsap.context(() => {
        /* ── Initial states ── */
        gsap.set(".faq-badge", { opacity: 0, y: -20, visibility: "hidden" });
        gsap.set(".faq-title", { opacity: 0, y: 30, visibility: "hidden" });
        gsap.set(".faq-subtitle", { opacity: 0, y: 20, visibility: "hidden" });
        gsap.set(".faq-item", { opacity: 0, y: 24, visibility: "hidden" });

        /* ── Header ── */
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ".faq-header", start: "top 85%" },
        });

        tl.to(".faq-badge", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.5)",
          visibility: "visible",
        })
          .to(
            ".faq-title",
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
            ".faq-subtitle",
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              visibility: "visible",
            },
            "-=0.5",
          );

        /* ── Items stagger ── */
        gsap.to(".faq-item", {
          opacity: 1,
          y: 0,
          visibility: "visible",
          stagger: 0.07,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ".faq-list", start: "top 88%" },
        });
      }, sectionRef);
    } catch (err) {
      console.error("[FAQ GSAP]", err);
    }

    return () => {
      try {
        ctx?.revert();
      } catch (e) {}
    };
  }, []);

  const toggle = (i) => {
    const isOpening = openIndex !== i;
    const prevIndex = openIndex;

    setOpenIndex(isOpening ? i : null);

    // Animate close of previous
    if (prevIndex !== null && prevIndex !== i) {
      const prevEl = answerRefs.current[prevIndex];
      if (prevEl) {
        gsap.to(prevEl, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => gsap.set(prevEl, { display: "none" }),
        });
      }
    }

    // Animate open/close of current
    const el = answerRefs.current[i];
    if (!el) return;

    if (isOpening) {
      gsap.set(el, { display: "block", height: "auto" });
      const autoHeight = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: autoHeight, opacity: 1, duration: 0.4, ease: "power3.out" },
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
    }
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      ref={sectionRef}
      className={`relative py-16 sm:py-24 md:py-32 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-subtle)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-primary/5 blur-[130px]" />
        <div className="absolute -bottom-20 -right-20 h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      {/* Dot texture */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-25" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="faq-header text-center mb-14 max-w-2xl mx-auto">
          <span className="faq-badge inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-primary))",
              }}
            />
            {FAQ_CONTENT.badge}
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />
          </span>

          <h2
            id="faq-title"
            className="faq-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.08] tracking-tight"
          >
            {FAQ_CONTENT.title}{" "}
            <span className="gradient-text">{FAQ_CONTENT.titleHighlight}</span>
          </h2>

          <p className="faq-subtitle body-lg text-gray-400 max-w-xl mx-auto">
            {FAQ_CONTENT.subtitle}
          </p>
        </div>

        {/* Items */}
        <div className="faq-list space-y-2.5">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="faq-item rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen
                    ? "rgba(0,242,255,0.05)"
                    : "var(--surface-card)",
                  border: isOpen
                    ? "1px solid rgba(0,242,255,0.25)"
                    : "1px solid var(--border-subtle)",
                  boxShadow: isOpen
                    ? "0 0 30px rgba(0,242,255,0.07), 0 8px 32px rgba(0,0,0,0.2)"
                    : "var(--card-shadow)",
                }}
              >
                {/* Question button */}
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left group"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  {/* Number + question */}
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className="flex-shrink-0 text-[11px] font-bold tabular-nums"
                      style={{
                        color: isOpen
                          ? "var(--color-primary)"
                          : "var(--text-ultra-faint)",
                        transition: "color 0.3s",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-semibold text-sm sm:text-base leading-snug transition-colors duration-300 pr-2"
                      style={{
                        color: isOpen
                          ? "var(--text-heading)"
                          : "var(--text-body)",
                      }}
                    >
                      {f.q}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <span
                    className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                        : "var(--surface-pill)",
                      border: isOpen
                        ? "none"
                        : "1px solid var(--border-subtle)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      boxShadow: isOpen
                        ? "0 0 12px rgba(0,242,255,0.35)"
                        : "none",
                    }}
                  >
                    <Plus
                      size={12}
                      className={isOpen ? "text-white" : "text-gray-400"}
                    />
                  </span>
                </button>

                {/* Answer — height animated by GSAP */}
                <div
                  ref={(el) => (answerRefs.current[i] = el)}
                  style={{
                    height: 0,
                    overflow: "hidden",
                    display: "none",
                    opacity: 0,
                  }}
                >
                  <div className="px-6 pb-6 pl-10 sm:pl-[4.5rem]">
                    <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
