import React, { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (heroRef.current) {
            heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
      style={{
        background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
      }}
    >
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-[var(--color-primary)]/40 blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-[var(--color-secondary)]/40 blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 h-96 w-96 rounded-full bg-[var(--color-primary-light)]/40 blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Text */}
          <div className="max-w-3xl flex-1 space-y-6 text-center lg:text-left">
            <span className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl shadow-2xl">
               Disponível para novos projetos
            </span>

            <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Desenvolvedor Web <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent">
                focado em criar experiências digitais
              </span>
            </h1>

            <p className="text-base text-white/90 sm:text-lg md:text-xl">
              Transformo ideias em <strong className="text-white">soluções digitais inovadoras</strong>,
              rápidas e escaláveis.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contato"
                className="rounded-2xl bg-white px-8 py-4 font-bold text-[var(--color-primary)] transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                Solicitar Orçamento
              </a>

              <a
                href="#projetos"
                className="rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:bg-white hover:text-[var(--color-primary)]"
              >
                Ver Projetos
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:flex">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] blur-2xl opacity-50" />
              <img
                src="/img/dev-mauro.jpeg"
                alt="Foto do desenvolvedor"
                className="relative h-96 w-72 rounded-3xl border-4 border-white/20 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
