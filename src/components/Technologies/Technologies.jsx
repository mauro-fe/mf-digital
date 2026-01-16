import React from "react";
import styles from "./Technologies.module.css";

const techStack = [
  {
    name: "HTML5",
    icon: "fab fa-html5",
    color: "text-orange-600",
    bg: "hover:after:bg-orange-500",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    color: "text-blue-600",
    bg: "hover:after:bg-blue-500",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "text-yellow-500",
    bg: "hover:after:bg-yellow-500",
  },
  {
    name: "React",
    icon: "fab fa-react",
    color: "text-sky-500",
    bg: "hover:after:bg-sky-500",
  },
  {
    name: "Tailwind",
    icon: "fas fa-wind",
    color: "text-cyan-500",
    bg: "hover:after:bg-cyan-500",
  },
  {
    name: "PHP",
    icon: "fab fa-php",
    color: "text-purple-600",
    bg: "hover:after:bg-purple-500",
  },
  {
    name: "MySQL",
    icon: "fas fa-database",
    color: "text-emerald-600",
    bg: "hover:after:bg-emerald-500",
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "text-green-600",
    bg: "hover:after:bg-green-500",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    color: "text-red-600",
    bg: "hover:after:bg-red-500",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    color: "text-gray-900",
    bg: "hover:after:bg-gray-900",
  },
];

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="py-24 lg:py-32 bg-gray-50/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Profissional */}
        <div className="text-center mb-20">
          <span className="text-[var(--color-primary)] font-black text-xs uppercase tracking-[0.3em] bg-[var(--color-primary)]/5 px-4 py-2 rounded-full">
            Stack Tecnológica
          </span>
          <h2 className="mt-6 text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
            Poder de fogo <br className="hidden md:block" />
            para o seu{" "}
            <span className="text-[var(--color-primary)]">projeto</span>.
          </h2>
        </div>

        {/* Grid Master */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className={`${styles.techCard} ${tech.bg} group aspect-square rounded-[2rem] p-8`}
            >
              <div className={`${styles.iconAnim} mb-4`}>
                <i
                  className={`${tech.icon} ${tech.color} text-5xl md:text-6xl drop-shadow-sm`}
                />
              </div>

              <span className="relative z-10 font-black text-gray-800 text-sm md:text-base tracking-tight">
                {tech.name}
              </span>

              {/* Detalhe de acabamento: Mini Tag */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Badge de Confiança Tech */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <p className="text-gray-600 font-bold italic tracking-widest text-sm underline decoration-blue-500 decoration-2">
            FOCO EM ALTA PERFORMANCE E ESCALABILIDADE
          </p>
        </div>
      </div>
    </section>
  );
}
