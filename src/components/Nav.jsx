import React, { useState, useEffect } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl shadow-lg">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            <a href="#home">
              <img src="/img/logo.png" alt="MF Criativos" className="h-16" />
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {["Início", "Sobre", "Serviços", "Projetos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative rounded-xl px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contato"
              className="hidden md:inline-block rounded-xl px-6 py-3 font-bold text-white transition hover:scale-105"
              style={{
                background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
              }}
            >
              Solicitar Orçamento
            </a>

            {/* Mobile */}
            <button onClick={() => setMenuOpen(true)} className="p-2 md:hidden">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu */}
      <aside
        className={`fixed right-0 top-0 z-[90] h-full w-80 bg-white transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">
          <span className="text-xl font-black text-[var(--color-primary)]">Menu</span>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          {["home", "sobre", "servicos", "projetos", "contato"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold hover:bg-gray-50"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full py-3 text-center font-bold text-white"
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
