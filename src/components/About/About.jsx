import React from "react";
import styles from "./About.module.css";

export default function About() {
  const cards = [
    {
      title: "Clean Code",
      desc: "Arquiteturas escaláveis e fáceis de manter.",
      icon: "code",
      bg: "from-emerald-400 to-teal-500",
    },
    {
      title: "Performance",
      desc: "Velocidade extrema para o melhor SEO.",
      icon: "bolt",
      bg: "from-blue-500 to-indigo-600",
    },
    {
      title: "Experiência",
      desc: "Interfaces intuitivas focadas no usuário.",
      icon: "user-check",
      bg: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="sobre"
      className={`relative py-24 lg:py-32 overflow-hidden bg-gray-50/50 ${styles.aboutContainer}`}
    >
      {/* Elementos Visuais de Fundo */}
      <div
        className={`${styles.blob} top-0 -left-20 w-96 h-96 bg-blue-200/40`}
      />
      <div
        className={`${styles.blob} bottom-0 -right-20 w-[500px] h-[500px] bg-purple-200/30`}
        style={{ animationDelay: "-5s" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header com Animação Sequencial */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full bg-white border border-gray-200 text-blue-600 text-sm font-bold shadow-sm mb-6 uppercase tracking-widest">
            Expertise Técnica
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Transformando complexidade em{" "}
            <span className="text-blue-600">simplicidade</span>.
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lado Esquerdo: Cards Interativos */}
          <div className="grid gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`${styles.glassCard} group p-8 rounded-[2.5rem] flex items-center gap-6`}
              >
                <div
                  className={`${styles.iconBox} w-20 h-20 rounded-2xl bg-gradient-to-br ${item.bg} shadow-xl text-white`}
                >
                  <i className={`fas fa-${item.icon} text-3xl`} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lado Direito: Texto de Autoridade */}
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-gray-900">
              Soluções sob medida para quem busca{" "}
              <span className="italic">excelência digital</span>.
            </h3>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Como{" "}
                <strong className="text-gray-900 font-bold">
                  Freelancer Fullstack
                </strong>
                , não entrego apenas sites. Eu projeto ferramentas de vendas e
                sistemas que otimizam sua operação diária.
              </p>
              <p>
                Minha metodologia foca em remover o atrito entre sua marca e seu
                cliente, utilizando o que há de mais moderno no ecossistema{" "}
                <span className="font-bold text-blue-600">React & Node</span>.
              </p>
            </div>

            {/* Lista de Diferenciais */}
            <ul className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Design Responsivo",
                "SEO Avançado",
                "Suporte Contínuo",
                "Criptografia SSL",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-3 font-bold text-gray-800"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px]">
                    <i className="fas fa-check" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <a
                href="#contato"
                className="inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                Iniciar minha jornada digital
                <i className="fas fa-arrow-right text-sm opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
