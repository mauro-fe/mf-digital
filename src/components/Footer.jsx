import React from "react";
import Logo from "./Logo";
import Marquee from "./Marquee";
import { FOOTER, AUTHOR } from "../siteContent";

const footerPhrases = FOOTER.phrases;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "var(--color-dark-900)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Ambient glow top */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,242,255,0.35), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[500px] rounded-full blur-[80px]"
        style={{ background: "rgba(0,242,255,0.04)" }}
      />

      {/* Marquee */}
      <Marquee items={footerPhrases} speed={25} size="md" />

      {/* Main footer row */}
      <div className="relative z-10 py-8 px-5 sm:px-8">
        <div
          className="max-w-7xl mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "2rem",
          }}
        >
          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 opacity-70 transition-opacity duration-300 hover:opacity-100" />
              <span
                className="text-xs font-bold uppercase tracking-[0.15em]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--text-heading) 0%, var(--color-primary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.7,
                }}
              >
                digital
              </span>
            </div>
            {FOOTER.tagline && (
              <p className="text-[11px] font-medium uppercase tracking-widest text-gray-600">
                {FOOTER.tagline}
              </p>
            )}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center order-last sm:order-none">
            © {currentYear} {AUTHOR.name}. Todos os direitos reservados.
          </p>

          {/* Social icons */}
          <div className="flex gap-2.5">
            {FOOTER.socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label || s.href}
                  className="group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: "var(--surface-pill)",
                    border: "1px solid var(--border-subtle)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,242,255,0.08)";
                    e.currentTarget.style.borderColor = "rgba(0,242,255,0.25)";
                    e.currentTarget.style.boxShadow =
                      "0 0 12px rgba(0,242,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--surface-pill)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon
                    size={13}
                    color="currentColor"
                    className="text-gray-500 transition-colors duration-300 group-hover:text-primary-light"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
