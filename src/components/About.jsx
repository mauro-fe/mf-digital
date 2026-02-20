import React from "react";

const HIGHLIGHTS = [
  {
    icon: "fas fa-bolt",
    title: "Performance",
    desc: "Sites rápidos que carregam em menos de 2 segundos",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: "fas fa-code",
    title: "Código Limpo",
    desc: "Código organizado, documentado e fácil de manter",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: "fas fa-mobile-screen",
    title: "Responsivo",
    desc: "Design que funciona perfeitamente em qualquer dispositivo",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: "fas fa-shield-halved",
    title: "Segurança",
    desc: "Proteção contra vulnerabilidades e ataques comuns",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

export default function About({ className = '' }) {
  return (
    <section id="sobre" className={`relative overflow-hidden py-24 md:py-32 px-5 sm:px-8 ${className}`}>
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
            <i className="fas fa-user text-[10px]" />
            Sobre mim
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-gray-900 mb-6">
            Desenvolvedor focado em{" "}
            <span className="gradient-text">resultados reais</span> para o seu negócio
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-500">
            Combino habilidade técnica com visão estratégica para entregar 
            soluções digitais que realmente fazem diferença no faturamento dos meus clientes.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left - Text + CTA */}
          <div data-aos="fade-right" data-aos-delay="100" className="space-y-6 order-2 lg:order-1">
            <p className="text-gray-600 leading-relaxed text-lg">
              Sou um <strong className="text-gray-900">Desenvolvedor Web Freelancer</strong> com experiência 
              em criar sites profissionais, sistemas web personalizados e landing pages de alta conversão.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Meu diferencial é a combinação de <strong className="text-gray-900">design moderno</strong> com 
              <strong className="text-gray-900"> código de qualidade</strong> — entrego projetos que não 
              apenas ficam bonitos, mas que performam e convertem visitantes em clientes.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Trabalho com comunicação transparente, prazos definidos e 
              acompanhamento em cada etapa do projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Vamos conversar
                <i className="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50"
              >
                Ver portfólio
              </a>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, index) => (
              <div
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={150 * index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <i className={`${item.icon} text-lg ${item.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
