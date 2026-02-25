import React, { useRef, useLayoutEffect } from "react";
import { Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT, AUTHOR } from "../siteContent";

gsap.registerPlugin(ScrollTrigger);

const channels = CONTACT.channels;

export default function Contact({ className = "" }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Initial states ── */
      gsap.set(".contact-badge", {
        opacity: 0,
        y: -20,
        scale: 0.9,
        visibility: "hidden",
      });
      gsap.set(".contact-title", { opacity: 0, y: 40, visibility: "hidden" });
      gsap.set(".contact-subtitle", {
        opacity: 0,
        y: 20,
        visibility: "hidden",
      });
      gsap.set(".contact-card", {
        opacity: 0,
        y: 40,
        scale: 0.93,
        visibility: "hidden",
      });
      gsap.set(".contact-social", { opacity: 0, y: 16, scale: 0.85 });

      /* ── Header ── */
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".contact-header", start: "top 85%" },
      });

      tl.to(".contact-badge", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        visibility: "visible",
      })
        .to(
          ".contact-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            visibility: "visible",
          },
          "-=0.4",
        )
        .to(
          ".contact-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            visibility: "visible",
          },
          "-=0.6",
        );

      /* ── Channel cards: fan-in from bottom ── */
      gsap.to(".contact-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        visibility: "visible",
        stagger: { amount: 0.35, from: "center" },
        duration: 0.8,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".contact-cards", start: "top 88%" },
      });

      /* ── Social icons ── */
      gsap.to(".contact-social", {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.06,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".contact-socials", start: "top 92%" },
      });

      /* ── Blob slow drift ── */
      gsap.to(".contact-blob-1", {
        x: 30,
        y: -20,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".contact-blob-2", {
        x: -25,
        y: 20,
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      ref={sectionRef}
      className={`relative py-16 sm:py-24 md:py-32 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="contact-blob-1 absolute top-1/4 -left-24 h-[450px] w-[450px] rounded-full bg-primary/12 blur-[120px]" />
        <div className="contact-blob-2 absolute bottom-1/4 -right-24 h-[380px] w-[380px] rounded-full bg-secondary/10 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[500px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

      {/* Glow line top */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 right-1/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,242,255,0.35), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Header */}
        <div className="contact-header mb-14">
          {/* Badge */}
          <div
            className="contact-badge inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 backdrop-blur-xl mb-8"
            style={{
              background: "rgba(0,242,255,0.08)",
              border: "1px solid rgba(0,242,255,0.2)",
              boxShadow: "0 0 20px rgba(0,242,255,0.08) inset",
            }}
          >
            <Send size={11} className="text-primary-light" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">
              {CONTACT.badge}
            </span>
          </div>

          <h2
            id="contato-title"
            className="contact-title heading-lg text-white mb-6"
          >
            {CONTACT.title}{" "}
            <span className="gradient-text">{CONTACT.titleHighlight}</span>?
          </h2>

          <p className="contact-subtitle body-lg text-gray-400 max-w-2xl mx-auto">
            {CONTACT.subtitle}
          </p>
        </div>

        {/* Channel cards */}
        <div className="contact-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Entrar em contato via ${ch.label}`}
                className="contact-card group relative flex flex-col items-center gap-4 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "var(--card-shadow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    ch.hoverBorderColor || "rgba(0,242,255,0.3)";
                  e.currentTarget.style.boxShadow = `0 0 40px ${ch.glowColor || "rgba(0,242,255,0.1)"}, 0 16px 48px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "var(--card-shadow)";
                }}
              >
                {/* Card inner glow on hover */}
                <div
                  className="pointer-events-none absolute top-0 left-0 right-0 h-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${ch.glowColor || "rgba(0,242,255,0.15)"} 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl ${ch.iconBg} transition-all duration-300 group-hover:scale-110`}
                  style={{
                    border: `1px solid ${ch.iconBorderColor || "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  <Icon
                    size={24}
                    color="currentColor"
                    className={ch.iconColor}
                  />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="font-bold text-white text-base mb-1 transition-colors duration-300">
                    {ch.label}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                    {ch.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: `linear-gradient(90deg, ${ch.accentColor || "var(--color-primary)"}, transparent)`,
                  }}
                />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8 max-w-xs mx-auto">
          <div
            className="h-px flex-1"
            style={{ background: "var(--border-subtle)" }}
          />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-600">
            Redes sociais
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--border-subtle)" }}
          />
        </div>

        {/* Social icons */}
        <div className="contact-socials flex justify-center gap-3">
          {AUTHOR.socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label || s.href}
                className="contact-social group flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: "var(--surface-pill)",
                  border: "1px solid var(--border-subtle)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,242,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(0,242,255,0.3)";
                  e.currentTarget.style.boxShadow =
                    "0 0 16px rgba(0,242,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--surface-pill)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon
                  size={16}
                  color="currentColor"
                  className="text-gray-400 transition-colors duration-300 group-hover:text-primary-light"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
