import React from "react";
import styles from "./Process.module.css";

const steps = [
  {
    title: "Briefing",
    desc: "Imersão total na sua ideia para alinhar objetivos e escopo técnico.",
    icon: "comments",
  },
  {
    title: "Design UX/UI",
    desc: "Protótipos interativos focados na experiência do seu cliente final.",
    icon: "pen-nib",
  },
  {
    title: "Code & Dev",
    desc: "Transformação do design em código limpo, rápido e escalável.",
    icon: "code",
  },
  {
    title: "Launch",
    desc: "Hospedagem, SEO e entrega das chaves do seu novo negócio.",
    icon: "rocket",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="py-24 lg:py-32 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black tracking-tighter uppercase text-sm border-b-2 border-blue-600 pb-1">
            Workflow
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-black text-gray-900">
            Do rascunho ao <span className="text-blue-600">sucesso</span>.
          </h2>
        </div>

        {/* Grid com Linha Conectora */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${styles.processGrid}`}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className={`${styles.stepCard} group relative p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50`}
            >
              {/* Número e Ícone */}
              <div className="relative mb-8">
                <div
                  className={`${styles.stepNumber} w-16 h-16 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-2xl font-black z-10`}
                >
                  0{i + 1}
                </div>
                {/* Ícone flutuante sutil */}
                <div className="absolute -right-2 -top-2 text-gray-100 text-5xl group-hover:text-blue-50 transition-colors duration-500 -z-10">
                  <i className={`fas fa-${s.icon}`} />
                </div>
              </div>

              {/* Conteúdo */}
              <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {s.desc}
              </p>

              {/* Indicador Mobile de Próximo Passo */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce">
                  <i className="fas fa-chevron-down" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action final da seção */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4">
            Tempo médio de entrega: 15 a 30 dias
          </p>
          <div className="h-px w-40 bg-gray-100 mx-auto" />
        </div>
      </div>
    </section>
  );
}
