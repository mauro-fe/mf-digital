import React, { useRef, useLayoutEffect, useMemo } from "react";
import { ArrowRight, Play, Code } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO, AUTHOR } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const STATS = HERO.stats;

/* ── helper: split text into <span> wrapped words ── */
function SplitWords({ children, className = "" }) {
  const text = typeof children === "string" ? children : "";
  return useMemo(
    () =>
      text.split(" ").map((word, i) => (
        <span key={i} className="hero-word inline-block overflow-hidden">
          <span className={`hero-word-inner inline-block ${className}`}>
            {word}&nbsp;
          </span>
        </span>
      )),
    [text, className],
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ── 1. Set INITIAL hidden state via GSAP (not CSS toggle) ── */
      gsap.set(
        [
          ".hero-badge",
          ".hero-desc",
          ".hero-cta",
          ".hero-stats .hero-stat",
          ".hero-image-wrap",
          ".hero-floating-card",
          ".hero-noise-line",
        ],
        { opacity: 0, visibility: "hidden" },
      );

      gsap.set(".hero-word-inner", {
        yPercent: 110,
        opacity: 0,
        rotateX: -40,
        visibility: "hidden",
      });

      gsap.set(".hero-blob", { scale: 0, opacity: 0 });

      /* ── 2. Main entrance timeline ── */
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
        onComplete: () => ScrollTrigger.refresh(),
      });

      tl
        // Background blobs
        .to(
          ".hero-blob",
          {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            stagger: 0.25,
            ease: "power2.out",
            visibility: "visible",
          },
          0,
        )

        // Noise lines
        .to(
          ".hero-noise-line",
          {
            opacity: 1,
            visibility: "visible",
            scaleX: 1,
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.inOut",
          },
          0,
        )

        // Badge
        .to(
          ".hero-badge",
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            visibility: "visible",
          },
          0.4,
        )

        // Title words
        .to(
          ".hero-word-inner",
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.055,
            ease: "power4.out",
            visibility: "visible",
          },
          0.6,
        )

        // Gradient text shimmer
        .fromTo(
          ".hero-gradient-text",
          { backgroundSize: "0% 100%" },
          { backgroundSize: "100% 100%", duration: 1, ease: "power2.inOut" },
          1.1,
        )

        // Description
        .to(
          ".hero-desc",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            visibility: "visible",
          },
          1.3,
        )

        // CTA buttons
        .to(
          ".hero-cta",
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.4)",
            visibility: "visible",
          },
          1.6,
        )

        // Stats
        .to(
          ".hero-stats .hero-stat",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            visibility: "visible",
          },
          1.85,
        )

        // Image reveal with clip-path
        .to(
          ".hero-image-wrap",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.3,
            ease: "power3.inOut",
            visibility: "visible",
          },
          1.1,
        )

        // Floating card
        .to(
          ".hero-floating-card",
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.7)",
            visibility: "visible",
          },
          1.95,
        );

      /* ── 3. Stat counters on scroll ── */
      ScrollTrigger.create({
        trigger: ".hero-stats",
        start: "top 90%",
        onEnter: () => {
          document.querySelectorAll(".hero-stat-value").forEach((el) => {
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.val) + suffix;
              },
            });
          });
        },
        once: true,
      });

      /* ── 4. Parallax on bg blobs ── */
      gsap.to(".hero-bg-elements", {
        yPercent: 35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ── 5. Subtle image parallax ── */
      gsap.to(".hero-image-wrap", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Animated bg blobs */}
      <div className="hero-bg-elements pointer-events-none absolute inset-0">
        <div className="hero-blob absolute top-1/4 -left-40 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="hero-blob absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/12 blur-[140px]" />
        <div className="hero-blob absolute -bottom-24 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[120px]" />
        {/* Extra accent blob for depth */}
        <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      {/* Horizontal noise lines for texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="hero-noise-line absolute left-0 h-px w-full origin-left"
            style={{
              top: `${12 + i * 16}%`,
              background: `linear-gradient(90deg, transparent, rgba(0,242,255,${0.03 + i * 0.01}), transparent)`,
              scaleX: 0,
            }}
          />
        ))}
      </div>

      {/* Scanline vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(3,7,18,0.7) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* ── Text column ── */}
          <div className="max-w-2xl flex-1 space-y-9 text-center lg:text-left">
            {/* Badge */}
            <div
              className="hero-badge inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 backdrop-blur-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,242,255,0.2)",
                boxShadow: "0 0 20px rgba(0,242,255,0.08) inset",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                {HERO.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="heading-xl text-text-secondary text-balance"
              style={{ perspective: "600px" }}
              aria-label={HERO.ariaLabel}
            >
              <span aria-hidden="true">
                <SplitWords>{HERO.titleLine1}</SplitWords>
                <span className="hero-word inline-block overflow-hidden">
                  <span className="hero-word-inner hero-gradient-text inline-block gradient-text">
                    {HERO.titleHighlight}&nbsp;
                  </span>
                </span>
                <SplitWords>{HERO.titleLine2}</SplitWords>
              </span>
            </h1>

            {/* Description */}
            <p
              className="hero-desc body-lg text-gray-400 max-w-xl mx-auto lg:mx-0"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              {HERO.description}{" "}
              <strong className="text-text-secondary font-semibold">
                {HERO.descriptionHighlight}
              </strong>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={HERO.cta1Href}
                aria-label={HERO.cta1AriaLabel || HERO.cta1}
                className="hero-cta group relative inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  boxShadow:
                    "0 0 0 1px rgba(0,242,255,0.3), 0 20px 40px rgba(0,242,255,0.25)",
                  opacity: 0,
                  transform: "scale(0.9)",
                }}
              >
                {/* shine sweep */}
                <span className="absolute inset-0 translate-x-[-100%] bg-white/10 skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[200%]" />
                <span className="relative">{HERO.cta1}</span>
                <ArrowRight
                  size={15}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={HERO.cta2Href}
                aria-label={HERO.cta2AriaLabel || HERO.cta2}
                className="hero-cta group inline-flex items-center gap-3 rounded-full border px-8 py-4 font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  opacity: 0,
                  transform: "scale(0.9)",
                }}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300"
                  style={{ background: "rgba(0,242,255,0.15)" }}
                >
                  <Play size={11} className="text-primary ml-0.5" />
                </span>
                {HERO.cta2}
              </a>
            </div>

            {/* Stats */}
            <div
              className="hero-stats flex items-center justify-center gap-10 pt-4 lg:justify-start lg:gap-14"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="hero-stat text-center lg:text-left"
                  style={{ opacity: 0, transform: "translateY(20px)" }}
                >
                  <div
                    className="hero-stat-value text-3xl font-extrabold sm:text-4xl"
                    style={{
                      background: "var(--gradient-text)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                    data-target={stat.num}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              {/* Outer ambient glow */}
              <div
                className="absolute -inset-10 rounded-[2.5rem]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,242,255,0.18) 0%, rgba(0,119,255,0.10) 50%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Image frame */}
              <div
                className="hero-image-wrap relative rounded-[2rem] p-[1px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,242,255,0.4), rgba(0,119,255,0.2), rgba(255,255,255,0.05))",
                  clipPath: "inset(100% 0% 0% 0%)",
                  opacity: 0,
                }}
              >
                <div
                  className="relative rounded-[calc(2rem-1px)] overflow-hidden"
                  style={{ background: "rgba(10,15,30,0.8)" }}
                >
                  <img
                    src="/img/dev-mauro.png"
                    alt={AUTHOR.photoAlt}
                    width={320}
                    height={420}
                    loading="eager"
                    decoding="async"
                    className="h-[420px] w-[320px] object-cover"
                    style={{ display: "block" }}
                  />
                  {/* Color overlay for cohesion */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(3,7,18,0.6) 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Floating card */}
              <div
                className="hero-floating-card absolute -left-14 bottom-14 flex items-center gap-3 rounded-2xl px-5 py-3.5 backdrop-blur-2xl shadow-2xl z-50"
                style={{
                  background: "rgba(17,24,39,0.85)",
                  border: "1px solid rgba(0,242,255,0.2)",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.04) inset, 0 20px 40px rgba(0,0,0,0.4)",
                  opacity: 0,
                  transform: "translateX(-60px) scale(0.8)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,242,255,0.2), rgba(0,119,255,0.1))",
                    border: "1px solid rgba(0,242,255,0.2)",
                  }}
                >
                  <Code size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {AUTHOR.stackLabel}
                  </div>
                  <div className="text-xs text-gray-400">
                    {AUTHOR.stackDesc}
                  </div>
                </div>
              </div>

              {/* Decorative corner dot grid */}
              <div
                className="absolute -bottom-6 -right-6 h-24 w-24 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,242,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-dark-900) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
