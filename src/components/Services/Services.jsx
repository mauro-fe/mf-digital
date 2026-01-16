import React from "react";
import Card from "./Card";
import styles from "./Services.module.css";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Sites de Elite",
    description:
      "Interfaces premium que posicionam sua marca no topo do mercado digital.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Sistemas Robustos",
    description:
      "Automação de processos e sistemas escaláveis para empresas em crescimento.",
  },
  {
    icon: "fas fa-bullseye",
    title: "Landing Pages",
    description:
      "Foco total em conversão com estratégias de copy e design persuasivo.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Manutenção & Evolução",
    description:
      "Suporte técnico contínuo para manter sua plataforma sempre segura e rápida.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 lg:py-40 bg-white relative overflow-hidden"
    >
      {/* Decoração Master de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-8">
            Soluções que <span className="text-blue-600">vendem</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium">
            Não entrego apenas código. Entrego o motor que vai impulsionar o seu
            faturamento digital.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${styles.serviceGrid}`}
        >
          {services.map((s) => (
            <Card
              key={s.title}
              iconClass={s.icon}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
