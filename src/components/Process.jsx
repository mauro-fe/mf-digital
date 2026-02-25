import React, { useRef, useLayoutEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { PROCESS } from "../siteContent";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const steps = PROCESS.steps;

export default function Process({ className = "" }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    /* ── DESKTOP: pinned lateral scroll ── */
    mm.add("(min-width: 1024px)", () => {
      const section = sectionRef.current;
      if (!section) return;

      const totalSteps = steps.length;
      const cardEls = section.querySelectorAll(".process-card");
      const titleEls = section.querySelectorAll(".process-title");
      const descEls = section.querySelectorAll(".process-desc");
      const progressFill = section.querySelector(".process-progress-fill");
      const borderEl = section.querySelector(".process-card-border");
      const iconEls = section.querySelectorAll(".process-icon");
      const numEls = section.querySelectorAll(".process-num");
      const labelTop = section.querySelector(".process-label-top");
      const labelBottom = section.querySelector(".process-label-bottom");
      const dotEls = section.querySelectorAll(".process-dot");
      const stepCounter = section.querySelector(".process-step-counter");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.querySelector(".process-pin-wrap"),
          start: "top top",
          end: `+=${totalSteps * 600}`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            triggerRef.current = self;
          },
        },
      });

      for (let i = 0; i < totalSteps - 1; i++) {
        const lbl = `step${i}`;

        tl.addLabel(lbl)
          .to(
            cardEls[i],
            { rotateY: -90, opacity: 0, duration: 0.4, ease: "power2.in" },
            lbl,
          )
          .fromTo(
            cardEls[i + 1],
            { rotateY: 90, opacity: 0 },
            { rotateY: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            `${lbl}+=0.35`,
          )

          .to(iconEls[i], { scale: 0, opacity: 0, duration: 0.3 }, lbl)
          .fromTo(
            iconEls[i + 1],
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3 },
            `${lbl}+=0.35`,
          )

          .to(numEls[i], { yPercent: -100, opacity: 0, duration: 0.3 }, lbl)
          .fromTo(
            numEls[i + 1],
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.3 },
            `${lbl}+=0.35`,
          )

          .to(titleEls[i], { yPercent: -100, opacity: 0, duration: 0.35 }, lbl)
          .fromTo(
            titleEls[i + 1],
            { yPercent: 60, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.35 },
            `${lbl}+=0.3`,
          )

          .to(descEls[i], { y: -20, opacity: 0, duration: 0.3 }, lbl)
          .fromTo(
            descEls[i + 1],
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3 },
            `${lbl}+=0.3`,
          )

          .to(
            borderEl,
            {
              borderColor: steps[i + 1].color,
              boxShadow: `0 0 60px ${steps[i + 1].color}25, 0 0 120px ${steps[i + 1].color}10, inset 0 0 40px ${steps[i + 1].color}08`,
              duration: 0.6,
            },
            lbl,
          )

          .to(
            [labelTop, labelBottom],
            { color: steps[i + 1].color, duration: 0.5 },
            lbl,
          )

          .to(
            progressFill,
            {
              scaleX: (i + 2) / totalSteps,
              background: `linear-gradient(90deg, ${steps[0].color}, ${steps[i + 1].color})`,
              duration: 0.6,
            },
            lbl,
          )

          // Dot indicators
          .to(dotEls[i], { scale: 1, opacity: 0.3, duration: 0.3 }, lbl)
          .to(
            dotEls[i + 1],
            {
              scale: 1.4,
              opacity: 1,
              duration: 0.3,
              backgroundColor: steps[i + 1].color,
            },
            `${lbl}+=0.3`,
          )

          .to({}, { duration: 0.3 });
      }

      // Initial states
      cardEls.forEach((el, i) => {
        if (i > 0) gsap.set(el, { rotateY: 90, opacity: 0 });
      });
      iconEls.forEach((el, i) => {
        if (i > 0) gsap.set(el, { scale: 0, opacity: 0 });
      });
      numEls.forEach((el, i) => {
        if (i > 0) gsap.set(el, { yPercent: 100, opacity: 0 });
      });
      titleEls.forEach((el, i) => {
        if (i > 0) gsap.set(el, { yPercent: 60, opacity: 0 });
      });
      descEls.forEach((el, i) => {
        if (i > 0) gsap.set(el, { y: 20, opacity: 0 });
      });
      dotEls.forEach((el, i) => {
        gsap.set(el, {
          scale: i === 0 ? 1.4 : 1,
          opacity: i === 0 ? 1 : 0.3,
          backgroundColor: steps[i].color,
        });
      });
      gsap.set(progressFill, {
        scaleX: 1 / totalSteps,
        transformOrigin: "left center",
      });

      // Nav buttons
      const prevBtn = section.querySelector(".process-prev");
      const nextBtn = section.querySelector(".process-next");

      const goToStep = (stepIndex) => {
        if (!triggerRef.current) return;
        const st = triggerRef.current;
        const progress = stepIndex / (totalSteps - 1);
        gsap.to(window, {
          scrollTo: { y: st.start + progress * (st.end - st.start) },
          duration: 0.8,
          ease: "power2.inOut",
        });
      };

      const getCurrentStep = () =>
        triggerRef.current
          ? Math.round(triggerRef.current.progress * (totalSteps - 1))
          : 0;

      const onPrev = () => {
        const c = getCurrentStep();
        if (c > 0) goToStep(c - 1);
      };
      const onNext = () => {
        const c = getCurrentStep();
        if (c < totalSteps - 1) goToStep(c + 1);
      };

      prevBtn?.addEventListener("click", onPrev);
      nextBtn?.addEventListener("click", onNext);
      return () => {
        prevBtn?.removeEventListener("click", onPrev);
        nextBtn?.removeEventListener("click", onNext);
      };
    });

    /* ── MOBILE: stagger reveal ── */
    mm.add("(max-width: 1023px)", () => {
      const section = sectionRef.current;
      if (!section) return;
      gsap.from(section.querySelectorAll(".process-mobile-card"), {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%" },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="processo" ref={sectionRef} className={`relative ${className}`}>
      {/* ─── DESKTOP ─── */}
      <div className="process-pin-wrap hidden lg:block">
        <div
          className="relative min-h-screen flex flex-col justify-center py-20"
          style={{ background: "var(--gradient-dark)" }}
        >
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

          {/* Ambient blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/8 blur-[120px]" />
            <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-secondary/8 blur-[120px]" />
          </div>

          {/* Section header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto px-8 mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5">
              <span
                className="h-px w-8"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--color-primary))",
                }}
              />
              {PROCESS.badge}
              <span
                className="h-px w-8"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-primary), transparent)",
                }}
              />
            </span>
            <h2 className="text-5xl xl:text-6xl font-extrabold text-white mb-4 leading-[1.08] tracking-tight">
              {PROCESS.title}{" "}
              <span className="gradient-text">{PROCESS.titleHighlight}</span>
            </h2>
            <p className="body-lg text-gray-400 max-w-xl mx-auto">
              {PROCESS.subtitle}
            </p>
          </div>

          {/* Main layout */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex items-center gap-20 xl:gap-28">
            {/* LEFT */}
            <div className="flex-1 min-w-0">
              {/* Step label */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="h-px w-12"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-primary), transparent)",
                  }}
                />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Etapa
                </span>
              </div>

              {/* Title stack */}
              <div className="relative h-[76px] md:h-[88px] overflow-hidden mb-5">
                {steps.map((s, i) => (
                  <h3
                    key={i}
                    className="process-title absolute inset-0 text-4xl md:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-tight"
                  >
                    {s.title}
                  </h3>
                ))}
              </div>

              {/* Desc stack */}
              <div className="relative h-[88px] overflow-hidden mb-10">
                {steps.map((s, i) => (
                  <p
                    key={i}
                    className="process-desc absolute inset-0 text-base xl:text-lg text-gray-400 leading-relaxed max-w-sm"
                  >
                    {s.desc}
                  </p>
                ))}
              </div>

              {/* Progress */}
              <div className="max-w-[220px]">
                <div className="flex justify-between text-[11px] font-semibold text-gray-600 mb-2 tracking-widest">
                  <span>01</span>
                  <span>0{steps.length}</span>
                </div>
                <div
                  className="h-[2px] rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="process-progress-fill h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${steps[0].color}, ${steps[0].color})`,
                    }}
                  />
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2 mt-3">
                  {steps.map((s, i) => (
                    <div
                      key={i}
                      className="process-dot h-1.5 w-1.5 rounded-full transition-all duration-300"
                      style={{ backgroundColor: s.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Nav arrows */}
              <div className="flex gap-3 mt-8">
                {[
                  { cls: "process-prev", Icon: ChevronLeft },
                  { cls: "process-next", Icon: ChevronRight },
                ].map(({ cls, Icon }) => (
                  <button
                    key={cls}
                    className={`${cls} group flex items-center justify-center h-11 w-11 rounded-full transition-all duration-300`}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(0,242,255,0.12)";
                      e.currentTarget.style.borderColor = "rgba(0,242,255,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                  >
                    <Icon
                      size={18}
                      className="text-gray-400 group-hover:text-white transition-colors duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — decorative card */}
            <div className="flex-shrink-0" style={{ perspective: "800px" }}>
              {/* Outer glow */}
              <div
                className="absolute -inset-8 rounded-[2.5rem] pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${steps[0].color}20 0%, transparent 70%)`,
                  filter: "blur(20px)",
                  transition: "background 0.6s ease",
                }}
              />

              <div
                className="process-card-border relative w-[280px] h-[400px] xl:w-[320px] xl:h-[440px] rounded-3xl border overflow-hidden"
                style={{
                  borderColor: steps[0].color,
                  borderWidth: "1px",
                  boxShadow: `0 0 60px ${steps[0].color}25, 0 0 120px ${steps[0].color}10, inset 0 0 40px ${steps[0].color}08`,
                  background: "rgba(10,15,30,0.8)",
                }}
              >
                <div className="absolute inset-0 bg-grid opacity-10" />

                {/* Inner glow top */}
                <div
                  className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${steps[0].color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Top label */}
                <div className="absolute top-5 left-0 right-0 flex justify-center">
                  <span
                    className="process-label-top text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                    style={{
                      color: steps[0].color,
                      background: `${steps[0].color}15`,
                      border: `1px solid ${steps[0].color}30`,
                    }}
                  >
                    {steps[0].title}
                  </span>
                </div>

                {/* Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative h-20 w-20 mb-3">
                    {steps.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={i}
                          className="process-icon absolute inset-0 flex items-center justify-center"
                        >
                          <Icon
                            size={44}
                            style={{ color: s.color }}
                            strokeWidth={1.5}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="relative h-[88px] w-full overflow-hidden">
                    {steps.map((s, i) => (
                      <div
                        key={i}
                        className="process-num absolute inset-0 flex items-center justify-center"
                      >
                        <span
                          className="text-8xl xl:text-9xl font-black select-none"
                          style={{
                            WebkitTextStroke: `1.5px ${s.color}`,
                            color: "transparent",
                            opacity: 0.6,
                          }}
                        >
                          {s.num}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 3D flip planes */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ perspective: "600px" }}
                  >
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className="process-card absolute inset-0"
                        style={{
                          backfaceVisibility: "hidden",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                  <span
                    className="process-label-bottom text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                    style={{
                      color: steps[0].color,
                      background: `${steps[0].color}15`,
                      border: `1px solid ${steps[0].color}30`,
                      display: "inline-block",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {steps[0].title}
                  </span>
                </div>
              </div>

              {/* Dot grid decoration */}
              <div
                className="absolute -bottom-4 -right-4 h-20 w-20 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,242,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "7px 7px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE ─── */}
      <div
        className="lg:hidden relative px-4 sm:px-6 pt-24 pb-24"
        style={{ background: "var(--gradient-dark)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        {/* Blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/8 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/8 blur-[100px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center max-w-lg mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-4">
            <span
              className="h-px w-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-primary))",
              }}
            />
            {PROCESS.badge}
            <span
              className="h-px w-6"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
            {PROCESS.title}{" "}
            <span className="gradient-text">{PROCESS.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            {PROCESS.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="process-mobile-card group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(10,15,30,0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${s.color}40`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${s.color}15, 0 10px 40px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Step number watermark */}
                <span
                  className="absolute -top-2 -right-1 text-7xl font-black select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-20"
                  style={{
                    WebkitTextStroke: `1px ${s.color}`,
                    color: "transparent",
                    opacity: 0.07,
                  }}
                >
                  {s.num}
                </span>

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}25`,
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: s.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      color: s.color,
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}20`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.desc}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: `linear-gradient(90deg, ${s.color}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
