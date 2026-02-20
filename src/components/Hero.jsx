import React, { useEffect, useRef } from "react";

const STATS = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "3+", label: "Anos de Experiência" },
  { value: "100%", label: "Satisfação" },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (heroRef.current) {
            const y = window.scrollY;
            heroRef.current.style.setProperty("--scroll", y * 0.15 + "px");
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Animated bg elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-violet-600/15 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="max-w-2xl flex-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div data-aos="fade-down" data-aos-delay="100" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-white/80">Disponível para novos projetos</span>
            </div>

            <h1 data-aos="fade-up" data-aos-delay="200" className="heading-xl text-white text-balance">
              Transformo ideias em{" "}
              <span className="gradient-text">experiências digitais</span>{" "}
              que geram resultados
            </h1>

            <p data-aos="fade-up" data-aos-delay="300" className="body-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
              Desenvolvimento de sites profissionais, sistemas web e landing pages 
              de alta conversão. Código limpo, design moderno e foco em{" "}
              <strong className="text-white font-semibold">resultados reais</strong> para o seu negócio.
            </p>

            {/* CTAs */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Solicitar Orçamento
                <i className="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/25"
              >
                <i className="fas fa-play text-xs" />
                Ver Projetos
              </a>
            </div>

            {/* Stats */}
            <div data-aos="fade-up" data-aos-delay="500" className="flex items-center justify-center gap-10 pt-8 lg:justify-start lg:gap-14">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-indigo-600/30 to-violet-600/20 blur-3xl" />
              
              {/* Image container */}
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <img
                  src="/img/dev-mauro.jpeg"
                  alt="Mauro Felix - Desenvolvedor Web"
                  className="h-[420px] w-[320px] rounded-[1.5rem] object-cover"
                />
                
                {/* Floating card */}
                <div className="absolute -left-12 bottom-12 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-2xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
                    <i className="fas fa-code text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Full Stack</div>
                    <div className="text-xs text-gray-400">React · PHP · MySQL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
