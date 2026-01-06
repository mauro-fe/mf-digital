import React, { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao apertar ESC
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
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="shrink-0 transition hover:opacity-80">
              <img src="/img/logo.png" alt="MF Criativos" className="h-12 md:h-16" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contato"
              className="hidden md:inline-block rounded-xl px-6 py-3 font-bold text-white transition hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
              }}
            >
              Solicitar Orçamento
            </a>

            {/* Botão Mobile */}
            <button 
              onClick={() => setMenuOpen(true)} 
              className="p-2 md:hidden text-2xl"
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - Z-index abaixo do Aside */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu Lateral */}
      <aside
        className={`fixed right-0 top-0 z-[90] h-full w-[280px] bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">
          <span className="text-xl font-black text-[var(--color-primary)]">Menu</span>
          <button 
            onClick={() => setMenuOpen(false)}
            className="p-2 text-xl"
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 active:bg-gray-100"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-xl py-4 text-center font-bold text-white shadow-lg transition active:scale-95"
            style={{
              background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
            }}
          >
            Solicitar Orçamento
          </a>
        </nav>
      </aside>
    </>
  );
}