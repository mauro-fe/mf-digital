import React from 'react'

const steps = [
  {
    num: "01",
    title: "Briefing",
    desc: "Entendemos seus objetivos, público-alvo e requisitos para planejar a solução ideal.",
    icon: "fas fa-comments",
  },
  {
    num: "02",
    title: "Design & Protótipo",
    desc: "Criação do layout visual e protótipo interativo para validação antes do desenvolvimento.",
    icon: "fas fa-pen-ruler",
  },
  {
    num: "03",
    title: "Desenvolvimento",
    desc: "Codificação com tecnologias modernas, testes e acompanhamento em cada etapa.",
    icon: "fas fa-code",
  },
  {
    num: "04",
    title: "Entrega & Suporte",
    desc: "Deploy, documentação e suporte pós-lançamento para garantir tudo funcionando.",
    icon: "fas fa-rocket",
  },
]

export default function Process({ className = '' }) {
  return (
    <section id="processo" className={`relative py-24 md:py-32 px-5 sm:px-8 bg-gray-50/50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
            <i className="fas fa-diagram-project text-[10px]" />
            Processo
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-gray-900 mb-6">
            Como transformo sua{" "}
            <span className="gradient-text">ideia em realidade</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-500">
            Processo transparente em 4 etapas simples — do briefing à entrega com suporte contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="group relative rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100"
            >
              {/* Step number */}
              <span className="absolute -top-3 -right-2 text-6xl font-extrabold text-gray-100 select-none transition-colors duration-300 group-hover:text-indigo-50">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100 group-hover:scale-110">
                  <i className={`${s.icon} text-indigo-600`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
