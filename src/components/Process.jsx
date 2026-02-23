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
    // Only run GSAP lateral pin on desktop (≥1024px)
    const mm = gsap.matchMedia();

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

      // Main scroll-driven timeline
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

      // For each transition between steps
      for (let i = 0; i < totalSteps - 1; i++) {
        const stepLabel = `step${i}`;

        tl.addLabel(stepLabel)
          // --- Card: rotate out current number, rotate in next ---
          .to(
            cardEls[i],
            {
              rotateY: -90,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            },
            stepLabel,
          )
          .fromTo(
            cardEls[i + 1],
            { rotateY: 90, opacity: 0 },
            { rotateY: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            `${stepLabel}+=0.35`,
          )

          // --- Icon swap ---
          .to(iconEls[i], { scale: 0, opacity: 0, duration: 0.3 }, stepLabel)
          .fromTo(
            iconEls[i + 1],
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3 },
            `${stepLabel}+=0.35`,
          )

          // --- Number swap ---
          .to(
            numEls[i],
            { yPercent: -100, opacity: 0, duration: 0.3 },
            stepLabel,
          )
          .fromTo(
            numEls[i + 1],
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.3 },
            `${stepLabel}+=0.35`,
          )

          // --- Title: slide out old, slide in new ---
          .to(
            titleEls[i],
            { yPercent: -100, opacity: 0, duration: 0.35 },
            stepLabel,
          )
          .fromTo(
            titleEls[i + 1],
            { yPercent: 60, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.35 },
            `${stepLabel}+=0.3`,
          )

          // --- Desc: fade out old, fade in new ---
          .to(descEls[i], { y: -20, opacity: 0, duration: 0.3 }, stepLabel)
          .fromTo(
            descEls[i + 1],
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3 },
            `${stepLabel}+=0.3`,
          )

          // --- Border color transition ---
          .to(
            borderEl,
            {
              borderColor: steps[i + 1].color,
              boxShadow: `0 0 40px ${steps[i + 1].color}20, inset 0 0 40px ${steps[i + 1].color}08`,
              duration: 0.6,
            },
            stepLabel,
          )

          // --- Labels color ---
          .to(
            [labelTop, labelBottom],
            { color: steps[i + 1].color, duration: 0.5 },
            stepLabel,
          )

          // --- Progress bar ---
          .to(
            progressFill,
            {
              scaleX: (i + 2) / totalSteps,
              backgroundColor: steps[i + 1].color,
              duration: 0.6,
            },
            stepLabel,
          )

          // Hold on each step
          .to({}, { duration: 0.3 });
      }

      // Set initial states
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
        const scrollTo = st.start + progress * (st.end - st.start);
        gsap.to(window, {
          scrollTo: { y: scrollTo },
          duration: 0.8,
          ease: "power2.inOut",
        });
      };

      const getCurrentStep = () => {
        if (!triggerRef.current) return 0;
        return Math.round(triggerRef.current.progress * (totalSteps - 1));
      };

      const onPrev = () => {
        const cur = getCurrentStep();
        if (cur > 0) goToStep(cur - 1);
      };
      const onNext = () => {
        const cur = getCurrentStep();
        if (cur < totalSteps - 1) goToStep(cur + 1);
      };

      prevBtn?.addEventListener("click", onPrev);
      nextBtn?.addEventListener("click", onNext);

      return () => {
        prevBtn?.removeEventListener("click", onPrev);
        nextBtn?.removeEventListener("click", onNext);
      };
    });

    // Mobile: simple stagger (no pin)
    mm.add("(max-width: 1023px)", () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.from(section.querySelectorAll(".process-mobile-card"), {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="processo" ref={sectionRef} className={`relative ${className}`}>
      {/* ─── DESKTOP: Lateral Pin Layout (header inside pin) ─── */}
      <div className="process-pin-wrap hidden lg:block">
        <div className="relative min-h-screen flex flex-col justify-center py-16">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

          {/* Header — inside pin so it stays on screen */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6">
              &#x25C8; {PROCESS.badge}
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight">
              {PROCESS.title}{" "}
              <span className="gradient-text block mt-2">
                {PROCESS.titleHighlight}
              </span>
            </h2>

            <p className="body-lg text-gray-400">{PROCESS.subtitle}</p>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center gap-16 xl:gap-24">
            {/* LEFT — Text side */}
            <div className="flex-1 min-w-0">
              {/* Step indicator line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 max-w-[60px] bg-primary/40" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                  Etapa
                </span>
              </div>

              {/* Title stack */}
              <div className="relative h-[80px] md:h-[96px] overflow-hidden mb-6">
                {steps.map((s, i) => (
                  <h3
                    key={i}
                    className="process-title absolute inset-0 text-4xl md:text-5xl xl:text-6xl font-extrabold text-text-primary leading-tight"
                  >
                    {s.title}
                  </h3>
                ))}
              </div>

              {/* Description stack */}
              <div className="relative h-[80px] overflow-hidden mb-10">
                {steps.map((s, i) => (
                  <p
                    key={i}
                    className="process-desc absolute inset-0 text-lg text-gray-400 leading-relaxed max-w-md"
                  >
                    {s.desc}
                  </p>
                ))}
              </div>

              {/* Progress bar */}
              <div className="max-w-xs">
                <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2">
                  <span>01</span>
                  <span>04</span>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="process-progress-fill h-full rounded-full"
                    style={{ backgroundColor: steps[0].color }}
                  />
                </div>
              </div>

              {/* Nav arrows */}
              <div className="flex gap-3 mt-8">
                <button className="process-prev flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-text-primary/60 transition-all duration-300 hover:bg-white/10 hover:text-text-primary hover:border-white/20">
                  <ChevronLeft size={20} />
                </button>
                <button className="process-next flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-text-primary/60 transition-all duration-300 hover:bg-white/10 hover:text-text-primary hover:border-white/20">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* RIGHT — Card side */}
            <div className="flex-shrink-0" style={{ perspective: "800px" }}>
              <div
                className="process-card-border relative w-[300px] h-[420px] xl:w-[340px] xl:h-[460px] rounded-3xl border-2 overflow-hidden"
                style={{
                  borderColor: steps[0].color,
                  boxShadow: `0 0 40px ${steps[0].color}20, inset 0 0 40px ${steps[0].color}08`,
                }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-grid opacity-10" />

                {/* Top label */}
                <div className="absolute top-6 left-0 right-0 text-center">
                  <span
                    className="process-label-top text-sm font-bold tracking-wider"
                    style={{ color: steps[0].color }}
                  >
                    {steps[0].title}
                  </span>
                </div>

                {/* Center: Icon + Number */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className="relative h-20 w-20 mb-4">
                    {steps.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={i}
                          className="process-icon absolute inset-0 flex items-center justify-center"
                        >
                          <Icon
                            size={48}
                            style={{ color: s.color }}
                            strokeWidth={1.5}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Step number */}
                  <div className="relative h-[100px] w-full overflow-hidden">
                    {steps.map((s, i) => (
                      <div
                        key={i}
                        className="process-num absolute inset-0 flex items-center justify-center"
                      >
                        <span
                          className="text-8xl xl:text-9xl font-black"
                          style={{
                            WebkitTextStroke: `2px ${s.color}`,
                            color: "transparent",
                          }}
                        >
                          {s.num}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Rotating cards (for 3D flip) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ perspective: "600px" }}
                  >
                    {steps.map((s, i) => (
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

                {/* Bottom label (upside down like the demo) */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span
                    className="process-label-bottom text-sm font-bold tracking-wider"
                    style={{
                      color: steps[0].color,
                      display: "inline-block",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {steps[0].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE: Original card grid ─── */}
      <div className="lg:hidden relative z-10 px-5 sm:px-8 pt-32 pb-28 md:py-32">
        {/* Mobile header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6">
            &#x25C8; {PROCESS.badge}
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight">
            {PROCESS.title}{" "}
            <span className="gradient-text">{PROCESS.titleHighlight}</span>
          </h2>

          <p className="body-lg text-gray-400">{PROCESS.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="process-mobile-card group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 transition-all duration-400 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] card-glow-border overflow-visible"
              >
                <span className="absolute -top-3 -right-2 text-6xl font-extrabold text-text-primary/[0.03] select-none transition-colors duration-300 group-hover:text-primary/10">
                  {s.num}
                </span>
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon size={20} className="text-primary-light" />
                  </div>
                  <h3 className="font-bold text-text-primary text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
