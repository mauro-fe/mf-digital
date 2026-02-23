import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, X } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "../siteContent";

const NAV_LINKS = NAV.links;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0,
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, handleKeyDown]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-dark-900/80 backdrop-blur-2xl shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)] border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[56px]" : "h-[68px]"}`}
          >
            {/* Logo */}
            <a
              href="#home"
              className="shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Logo
                className={`transition-all duration-500 ${scrolled ? "h-10 md:h-12" : "h-16 md:h-16"}`}
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => smoothScroll(e, link.href)}
                  className={`group relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? "text-gray-400 hover:text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {/* Animated underline below text */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full ${
                        scrolled ? "bg-primary" : "bg-white"
                      }`}
                    />
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <a
              href="#contato"
              onClick={(e) => smoothScroll(e, "#contato")}
              className="group hidden lg:inline-flex items-center gap-2.5 relative overflow-hidden rounded-full px-7 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* Gradient background with animated shift */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] transition-all duration-500 group-hover:bg-[position:100%_0]" />
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_20px_rgba(244,63,94,0.5)]" />
              <span className="relative">{NAV.cta}</span>
              <ArrowRight
                size={14}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Botão Mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 ${
                scrolled ? "text-gray-300" : ""
              }`}
              aria-label="Abrir menu"
            >
              <span className="block h-0.5 w-6 bg-current rounded-full transition-all" />
              <span className="block h-0.5 w-4 bg-current rounded-full transition-all" />
              <span className="block h-0.5 w-6 bg-current rounded-full transition-all" />
            </button>
          </div>
        </div>
      </nav>

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 z-[60] h-[3px] w-full">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu Lateral */}
      <aside
        className={`fixed right-0 top-0 z-[90] h-full w-[300px] bg-dark-800 border-l border-white/[0.06] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
          <span className="text-lg font-bold text-white">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-white/15"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                smoothScroll(e, link.href);
                setMenuOpen(false);
              }}
              className="rounded-xl px-4 py-3.5 text-[15px] font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            onClick={(e) => {
              smoothScroll(e, "#contato");
              setMenuOpen(false);
            }}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] py-4 text-center font-semibold text-white shadow-lg shadow-primary/25 transition-all active:scale-[0.98]"
          >
            {NAV.cta}
            <ArrowRight size={16} />
          </a>
        </nav>
      </aside>
    </>
  );
}
