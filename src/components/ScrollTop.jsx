import React, { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Usamos scrollY que é mais moderno que pageYOffset
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right- md:bottom-10 md:right-10 z-[90] 
        flex items-center justify-center w-14 h-14 
        rounded-2xl text-white shadow-primary transition-all duration-500
        ${
          visible
            ? "opacity-100 translate-y-0 visible scale-100"
            : "opacity-0 translate-y-10 invisible scale-50"
        }
        hover:scale-110 active:scale-95 group
      `}
      style={{
        background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
      }}
    >
      {/* Efeito de brilho interno no hover */}
      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />

      <i className="fas fa-chevron-up text-xl group-hover:-translate-y-1 transition-transform"></i>
    </button>
  );
}
