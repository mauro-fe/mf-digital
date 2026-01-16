import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={`relative min-h-[95vh] flex items-center justify-center overflow-hidden ${styles.hero}`}
    >
      {/* Camada de Fundo Animada */}
      <div className={`absolute inset-0 z-0 ${styles["hero-bg"]}`} />

      {/* Partículas flutuantes */}
      <div className={styles["hero-particles"]}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles["hero-particle"]}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Conteúdo - Entrada da Esquerda */}
          <div className="text-center lg:text-left lg:max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 animate-in zoom-in duration-700 delay-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white text-sm font-semibold tracking-wide">
                Disponível para novos projetos
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Design que{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-200">
                conecta
              </span>
              ,<br />
              Sistemas que <span className="text-blue-300">escalam</span>.
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Especialista em criar experiências digitais de alto padrão que
              transformam visitantes em clientes fiéis.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a
                href="#contato"
                className="group relative overflow-hidden px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="#projetos"
                className="group px-10 py-5 bg-white/5 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all"
              >
                Ver Portfólio
                <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          {/* Lado Direito - Imagem Glassmorphism */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-500">
            <div className={`${styles["hero-image-wrapper"]} relative z-10`}>
              <img
                src="/img/perfil.png"
                alt="Seu Nome"
                className={styles["hero-image"]}
              />

              {/* Overlay de Brilho Dinâmico */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-2xl p-5 rounded-3xl border border-white/20 shadow-2xl animate-in slide-in-from-bottom-10 delay-700 duration-1000">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">5+</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-200 font-bold">
                  Anos de XP
                </span>
              </div>
            </div>

            {/* Success Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-[2.5rem] shadow-2xl animate-bounce hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <div className="pr-4">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter leading-none">
                  Status
                </p>
                <p className="text-lg font-black text-gray-900 leading-none">
                  100% On-line
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
