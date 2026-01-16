import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Trava o scroll e evita bugs de layout quando o menu abre
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Evita "pulo" da scrollbar
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* Header Principal */}
      <header className="fixed top-0 left-0 z-[100] w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl md:px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/img/logo.png"
                alt="Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 font-semibold text-gray-700 transition-colors hover:text-blue-600 ${styles["nav-link"]}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Botão Call to Action Desktop */}
            <a
              href="#contato"
              className="hidden md:inline-block rounded-xl px-6 py-3 font-bold text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
              }}
            >
              Solicitar Orçamento
            </a>

            {/* Hambúrguer Mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1.5 p-2 md:hidden"
              aria-label="Abrir menu"
            >
              <span className="h-0.5 w-6 bg-gray-800 rounded-full"></span>
              <span className="h-0.5 w-6 bg-gray-800 rounded-full"></span>
              <span className="h-0.5 w-4 bg-gray-800 rounded-full self-end"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay (Background escuro) */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Aside Menu Lateral Mobile */}
      <aside
        className={`fixed right-0 top-0 z-[120] h-full w-[280px] max-w-[85vw] bg-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          styles.asideMenu
        } ${menuOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Navegação
          </span>
          <button
            className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-xl px-4 py-4 text-lg font-semibold text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-6 rounded-2xl py-4 text-center font-bold text-white shadow-md transition-transform active:scale-95"
            style={{
              background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
            }}
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Info adicional no rodapé do menu mobile */}
        <div className="absolute bottom-8 left-0 w-60px px-8 text-center">
          <div className="flex justify-center gap-4 text-gray-400 text-xl">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </aside>
    </>
  );
}
