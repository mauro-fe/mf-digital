import React, { useRef, useLayoutEffect } from "react";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const testimonials = TESTIMONIALS.items;

export default function Testimonials({ className = "" }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Initial states ── */
      gsap.set(".testimonials-badge", {
        opacity: 0,
        y: -20,
        visibility: "hidden",
      });
      gsap.set(".testimonials-title", {
        opacity: 0,
        y: 30,
        visibility: "hidden",
      });
      gsap.set(".testimonials-subtitle", {
        opacity: 0,
        y: 20,
        visibility: "hidden",
      });
      gsap.set(".testimonials-swiper", {
        opacity: 0,
        y: 40,
        visibility: "hidden",
      });
      gsap.set(".testimonials-stat", { opacity: 0, y: 24, scale: 0.9 });

      /* ── Header ── */
      const headerTl = gsap.timeline({
        scrollTrigger: { trigger: ".testimonials-header", start: "top 85%" },
      });

      headerTl
        .to(".testimonials-badge", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.5)",
          visibility: "visible",
        })
        .to(
          ".testimonials-title",
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
          ".testimonials-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            visibility: "visible",
          },
          "-=0.5",
        );

      /* ── Stats row ── */
      gsap.to(".testimonials-stat", {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".testimonials-stats", start: "top 88%" },
        onComplete: () => {
          // Count up numbers
          document.querySelectorAll(".stat-number").forEach((el) => {
            const target = parseFloat(el.dataset.target);
            const suffix = el.dataset.suffix || "";
            const isDecimal = el.dataset.decimal === "true";
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent =
                  (isDecimal ? obj.val.toFixed(1) : Math.round(obj.val)) +
                  suffix;
              },
            });
          });
        },
      });

      /* ── Swiper ── */
      gsap.to(".testimonials-swiper", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        visibility: "visible",
        scrollTrigger: { trigger: ".testimonials-swiper", start: "top 90%" },
      });

      /* ── Ambient quote icon float ── */
      gsap.to(".testimonials-quote-icon", {
        y: -8,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-subtle)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      {/* Dot texture */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-25" />

      {/* Decorative large quote */}
      <div
        className="testimonials-quote-icon pointer-events-none absolute top-16 right-12 opacity-[0.04]"
        aria-hidden="true"
      >
        <Quote size={180} className="text-primary" strokeWidth={1} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="testimonials-header text-center mb-12 max-w-3xl mx-auto">
          <span className="testimonials-badge inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-5">
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-primary))",
              }}
            />
            {TESTIMONIALS.badge}
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), transparent)",
              }}
            />
          </span>

          <h2 className="testimonials-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.08] tracking-tight">
            {TESTIMONIALS.title}{" "}
            <span className="gradient-text">{TESTIMONIALS.titleHighlight}</span>
          </h2>

          <p className="testimonials-subtitle body-lg text-gray-400 max-w-xl mx-auto">
            {TESTIMONIALS.subtitle}
          </p>
        </div>

        {/* Stats row */}
        <div className="testimonials-stats flex items-center justify-center gap-8 sm:gap-14 mb-14">
          {[
            { target: "98", suffix: "%", label: "Satisfação", decimal: false },
            {
              target: "4.9",
              suffix: "★",
              label: "Avaliação média",
              decimal: true,
            },
            {
              target: TESTIMONIALS.items?.length || "50",
              suffix: "+",
              label: "Depoimentos",
              decimal: false,
            },
          ].map((stat, i) => (
            <div key={i} className="testimonials-stat text-center">
              <div
                className="text-2xl sm:text-3xl font-extrabold mb-1"
                style={{
                  background: "var(--gradient-text)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                <span
                  className="stat-number"
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                  data-decimal={stat.decimal}
                >
                  0{stat.suffix}
                </span>
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Swiper */}
        <div className="testimonials-swiper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div
                  className="group relative rounded-2xl p-7 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(10,15,30,0.8)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,242,255,0.2)";
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(0,242,255,0.07), 0 12px 40px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Top: stars + quote icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star
                            key={j}
                            size={13}
                            className="text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                      <Quote
                        size={20}
                        className="text-primary/20 transition-colors duration-300 group-hover:text-primary/40"
                        strokeWidth={1.5}
                      />
                    </div>

                    <p className="text-gray-400 leading-relaxed text-[15px] mb-6 italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Bottom: avatar + info */}
                  <div
                    className="flex items-center gap-3 pt-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    {/* Avatar initials */}
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                        boxShadow: "0 0 12px rgba(0,242,255,0.3)",
                      }}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), var(--color-secondary), transparent)",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
