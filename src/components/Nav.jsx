import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, X, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "../siteContent";
import { useTheme } from "../ThemeContext";

const NAV_LINKS = NAV.links;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const indicatorRef = useRef(null);
  const navLinksRef = useRef({});
  const { theme, toggleTheme } = useTheme();

  /* ── Scroll tracking ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (y / totalHeight) * 100 : 0);

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Keyboard: close on Escape ── */
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

  /* ── Smooth scroll ── */
  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Main nav ── */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500`}
        style={{
          background: scrolled ? "var(--surface-nav)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          boxShadow: scrolled
            ? "0 1px 0 var(--border-subtle), 0 8px 32px var(--hover-shadow-subtle)"
            : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className="flex items-center justify-between transition-all duration-500"
            style={{ height: scrolled ? "56px" : "68px" }}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => smoothScroll(e, "#home")}
              className="shrink-0 flex items-center gap-2.5 transition-all duration-300 hover:opacity-80"
              aria-label="Ir para o início"
            >
              <Logo
                className="transition-all duration-500"
                style={{ height: scrolled ? "32px" : "44px" }}
              />
              <span
                className="text-sm font-bold uppercase tracking-[0.15em] transition-all duration-500"
                style={{
                  fontSize: scrolled ? "0.8rem" : "0.9rem",
                  background:
                    "linear-gradient(135deg, var(--text-heading) 0%, var(--color-primary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                digital
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    ref={(el) => (navLinksRef.current[sectionId] = el)}
                    onClick={(e) => smoothScroll(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className="relative px-4 py-2 text-[12px] font-semibold uppercase tracking-widest transition-colors duration-300 group"
                    style={{
                      color: isActive
                        ? "var(--text-heading)"
                        : "var(--text-body)",
                    }}
                  >
                    {link.label}

                    {/* Active / hover underline */}
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] rounded-full transition-all duration-300 ease-out"
                      style={{
                        width: isActive ? "70%" : "0%",
                        background:
                          "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                    {/* Hover underline (only when not active) */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 rounded-full bg-white/40 transition-all duration-300 group-hover:w-[60%]" />
                    )}

                    {/* Hover background pill */}
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: "var(--hover-bg)" }}
                    />
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="group flex items-center justify-center h-9 w-9 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    theme === "dark"
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)",
                  border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                }}
                aria-label={
                  theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
                }
              >
                {theme === "dark" ? (
                  <Sun
                    size={15}
                    className="text-amber-400 transition-transform duration-300 group-hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={15}
                    className="text-indigo-500 transition-transform duration-300 group-hover:-rotate-12"
                  />
                )}
              </button>

              <a
                href="#contato"
                onClick={(e) => smoothScroll(e, "#contato")}
                className="group hidden lg:inline-flex items-center gap-2.5 relative overflow-hidden rounded-full px-6 py-2.5 text-[13px] font-semibold text-dark-900 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)",
                  boxShadow:
                    "0 0 0 1px rgba(0,242,255,0.15), 0 4px 16px rgba(0,242,255,0.1)",
                }}
              >
                {/* Shine sweep on hover */}
                <span className="absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/15 transition-transform duration-600 group-hover:translate-x-[200%]" />
                <span className="relative">{NAV.cta}</span>
                <ArrowRight
                  size={13}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-2.5 rounded-lg transition-colors hover:bg-white/5"
              aria-label="Abrir menu de navegação"
              aria-expanded={menuOpen}
            >
              <span
                className="block h-[1.5px] w-6 rounded-full transition-all duration-300"
                style={{ background: "var(--text-body)" }}
              />
              <span
                className="block h-[1.5px] w-4 rounded-full transition-all duration-300"
                style={{ background: "var(--text-body)" }}
              />
              <span
                className="block h-[1.5px] w-5 rounded-full transition-all duration-300"
                style={{ background: "var(--text-body)" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Scroll progress bar ── */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] w-full"
        style={{ background: "var(--hover-bg)" }}
      >
        <div
          className="h-full transition-[width] duration-100"
          style={{
            width: `${scrollProgress}%`,
            background:
              "linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent))",
            boxShadow: "0 0 8px rgba(0,242,255,0.6)",
          }}
        />
      </div>

      {/* ── Overlay ── */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className="fixed inset-0 z-[80] transition-all duration-400"
        style={{
          background: "var(--surface-overlay)",
          backdropFilter: menuOpen ? "blur(4px)" : "none",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* ── Mobile drawer ── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="fixed right-0 top-0 z-[90] h-full w-[300px] transition-transform duration-500"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          background: "var(--surface-drawer)",
          borderLeft: "1px solid var(--border-subtle)",
          boxShadow: "-20px 0 60px var(--hover-shadow-subtle)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid var(--border-subtle)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
              }}
            />
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Menu
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-all hover:bg-white/10"
            style={{ border: "1px solid var(--border-medium)" }}
            aria-label="Fechar menu"
          >
            <X size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col gap-1 p-4 pt-6">
          {NAV_LINKS.map((link, i) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  smoothScroll(e, link.href);
                  setMenuOpen(false);
                }}
                aria-current={isActive ? "page" : undefined}
                className="group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "var(--text-heading)" : "var(--text-body)",
                  background: isActive ? "rgba(0,242,255,0.08)" : "transparent",
                  border: isActive
                    ? "1px solid rgba(0,242,255,0.15)"
                    : "1px solid transparent",
                  animationDelay: `${i * 40}ms`,
                }}
              >
                {/* Active indicator dot */}
                <span
                  className="h-1 w-1 rounded-full flex-shrink-0 transition-all duration-300"
                  style={{
                    background: isActive
                      ? "var(--color-primary)"
                      : "var(--border-strong)",
                    boxShadow: isActive
                      ? "0 0 6px var(--color-primary)"
                      : "none",
                  }}
                />
                <span>{link.label}</span>

                {/* Hover bg */}
                {!isActive && (
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ background: "var(--hover-bg)" }}
                  />
                )}
              </a>
            );
          })}

          {/* Drawer CTA */}
          <div className="flex items-center gap-3 mt-6">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-300 flex-shrink-0"
              style={{
                background:
                  theme === "dark"
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
                border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              }}
              aria-label={
                theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
              }
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-indigo-500" />
              )}
            </button>

            <a
              href="#contato"
              onClick={(e) => {
                smoothScroll(e, "#contato");
                setMenuOpen(false);
              }}
              className="group relative mt-0 flex-1 flex items-center justify-center gap-2.5 overflow-hidden rounded-xl py-4 text-center text-sm font-semibold text-dark-900 transition-all duration-300 active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)",
                boxShadow: "0 4px 20px rgba(0,242,255,0.12)",
              }}
            >
              <span className="absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/15 transition-transform duration-600 group-hover:translate-x-[200%]" />
              <span className="relative">{NAV.cta}</span>
              <ArrowRight
                size={14}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Decorative footer inside drawer */}
          <p className="mt-8 text-center text-[11px] font-medium uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()}
          </p>
        </nav>

        {/* Ambient glow inside drawer */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-64"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(0,242,255,0.06) 0%, transparent 70%)",
          }}
        />
      </aside>
    </>
  );
}
