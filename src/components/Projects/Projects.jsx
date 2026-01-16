import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Odontologia Xavier",
    description:
      "Landing Page premium focada em conversão para clínica odontológica, com agendamento direto e design humanizado.",
    tags: ["React", "SEO", "UX Design"],
    link: "https://www.odontologiaxavier.com.br/",
    image:
      "https://api.screenshotmachine.com/?key=YOUR_KEY&url=https://www.odontologiaxavier.com.br/&dimension=1024x768", // Exemplo de print automático
  },
  {
    title: "Jump Up",
    description:
      "Plataforma moderna de impulsionamento digital com interface clean e animações fluidas para máxima retenção.",
    tags: ["Next.js", "Tailwind", "High Perf"],
    link: "https://jump-up-phi.vercel.app/",
    image:
      "https://api.screenshotmachine.com/?key=YOUR_KEY&url=https://jump-up-phi.vercel.app/&dimension=1024x768",
  },
  {
    title: "Social Barber Shop",
    description:
      "Sistema completo para barbearias: agendamento, catálogo de serviços e experiência Mobile-First.",
    tags: ["React", "Firebase", "Mobile"],
    link: "https://social-barber-shop.vercel.app/",
    image:
      "https://api.screenshotmachine.com/?key=YOUR_KEY&url=https://social-barber-shop.vercel.app/&dimension=1024x768",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-40 bg-white">
      <div className="container mx-auto px-4">
        {/* Header com estilo "Bold" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black text-sm uppercase tracking-widest">
              Selected Works
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mt-4">
              Meus <span className="text-gray-300">Projetos</span>.
            </h2>
          </div>
          <p className="text-xl text-gray-500 font-medium max-w-xs border-l-4 border-blue-600 pl-6">
            Soluções reais que geram valor real para negócios reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        {/* Banner CTA sutil */}
        <div className="mt-24 p-12 rounded-[3rem] bg-gray-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-3xl font-black text-white mb-6 relative z-10">
            Tem um desafio para mim?
          </h3>
          <a
            href="#contato"
            className="inline-block px-10 py-5 bg-white text-gray-900 font-black rounded-2xl hover:scale-105 transition-transform relative z-10"
          >
            Bora conversar!
          </a>
        </div>
      </div>
    </section>
  );
}
