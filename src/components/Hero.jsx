import React, { useRef, useLayoutEffect } from "react";
import { ArrowRight, Play, Code } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO, AUTHOR } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const STATS = HERO.stats;

/* ── helper: split text into <span> wrapped words ── */
function SplitWords({ children, className = "" }) {
  const text = typeof children === "string" ? children : "";
  return text.split(" ").map((word, i) => (
    <span key={i} className="hero-word inline-block overflow-hidden">
      <span className={`hero-word-inner inline-block ${className}`}>
        {word}&nbsp;
      </span>
    </span>
  ));
}

export default function Hero() {
  const heroRef = useRef(null);
  const tlRef = useRef(null);

  /* ── GSAP entrance timeline & ScrollTriggers ── */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial invisible states so nothing flashes before animation
      gsap.set(
        [
          ".hero-badge",
          ".hero-word-inner",
          ".hero-desc",
          ".hero-cta",
          ".hero-stats .hero-stat",
          ".hero-image-wrap",
          ".hero-floating-card",
        ],
        { visibility: "visible" },
      );

      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl
        // 1) Background blobs scale in
        .fromTo(
          ".hero-blob",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            stagger: 0.2,
            ease: "power2.out",
          },
          0,
        )

        // 2) Badge drops in with elastic bounce
        .fromTo(
          ".hero-badge",
          { y: -40, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          0.3,
        )

        // 3) Title words cascade up (the hero moment!)
        .fromTo(
          ".hero-word-inner",
          { yPercent: 110, opacity: 0, rotateX: -40 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
          },
          0.5,
        )

        // 4) Gradient text gets a shimmer
        .fromTo(
          ".hero-gradient-text",
          { backgroundSize: "0% 100%" },
          { backgroundSize: "100% 100%", duration: 0.8, ease: "power2.inOut" },
          1.0,
        )

        // 5) Description fades in + slides up
        .fromTo(
          ".hero-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          1.2,
        )

        // 6) CTA buttons pop in one by one
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.4)",
          },
          1.5,
        )

        // 7) Stats count up + fade in
        .fromTo(
          ".hero-stats .hero-stat",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
          1.7,
        )

        // 8) Image reveal with clip-path
        .fromTo(
          ".hero-image-wrap",
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.inOut",
          },
          1.0,
        )

        // 9) Floating card slides in from left
        .fromTo(
          ".hero-floating-card",
          { x: -60, opacity: 0, scale: 0.8 },
          { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          1.8,
        );

      tlRef.current = tl;

      // 10) Animate stat numbers counting up ONLY when they enter the viewport
      ScrollTrigger.create({
        trigger: ".hero-stats",
        start: "top 90%", // Starts when the top of the stats hits 90% of the viewport height
        onEnter: () => {
          document.querySelectorAll(".hero-stat-value").forEach((el) => {
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.val) + suffix;
              },
            });
          });
        },
        once: true, // Only run once
      });

      // 11) Parallax effect on background blobs
      gsap.to(".hero-bg-elements", {
        yPercent: 30,
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
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Animated bg elements with Parallax */}
      <div className="hero-bg-elements pointer-events-none absolute inset-0">
        <div className="hero-blob absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="hero-blob absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-secondary/15 blur-[120px]" />
        <div className="hero-blob absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="max-w-2xl flex-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="hero-badge gsap-hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-text-secondary/80">
                {HERO.badge}
              </span>
            </div>

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

            <p className="hero-desc gsap-hidden body-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
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
                className="hero-cta gsap-hidden group inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-semibold text-text-primary shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                {HERO.cta1}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={HERO.cta2Href}
                className="hero-cta gsap-hidden inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-text-secondary backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/25"
              >
                <Play size={14} />
                {HERO.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats flex items-center justify-center gap-10 pt-8 lg:justify-start lg:gap-14">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="hero-stat gsap-hidden text-center lg:text-left"
                >
                  <div
                    className="hero-stat-value text-3xl font-extrabold text-text-secondary sm:text-4xl"
                    data-target={stat.num}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl" />

              {/* Image container */}
              <div className="hero-image-wrap gsap-hidden relative rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <img
                  src="/img/dev-mauro.png"
                  alt={AUTHOR.photoAlt}
                  className="h-[420px] w-[320px] rounded-[1.5rem] object-cover"
                />
              </div>
              {/* Floating card */}

              <div className="hero-floating-card gsap-hidden absolute -left-12 bottom-12 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-2xl z-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
                  <Code size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">
                    {AUTHOR.stackLabel}
                  </div>
                  <div className="text-xs text-gray-400 text-text-primary">
                    {AUTHOR.stackDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--color-dark-900)] to-transparent" />
    </section>
  );
}
