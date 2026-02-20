import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    icon: 'fas fa-chart-pie',
    title: 'Lukrato',
    description: 'Plataforma SaaS de controle financeiro pessoal com dashboard, relatórios, gamificação, sistema de indicação e planos freemium.',
    tags: ['React', 'PHP', 'MySQL', 'Tailwind', 'SaaS'],
    link: 'https://lukrato.com.br/',
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    icon: 'fas fa-tooth',
    title: 'Odontologia Xavier',
    description: 'Site institucional premium para clínica odontológica estética em Curitiba, com galeria, depoimentos e agendamento via WhatsApp.',
    tags: ['React', 'Tailwind', 'Vite', 'SEO'],
    link: 'https://www.odontologiaxavier.com.br',
    gradient: 'from-sky-600 to-blue-800',
  },
  {
    icon: 'fas fa-scissors',
    title: 'Social Barber Shop',
    description: 'Site para barbearia com catálogo de serviços, tabela de valores, galeria de cortes e localização integrada.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://social-barber-shop.vercel.app',
    gradient: 'from-amber-600 to-orange-800',
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Jump Up',
    description: 'Jogo web interativo de reflexos e inteligência. Plataforma de entretenimento com interface imersiva e desafios progressivos.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
    link: 'https://jump-up-phi.vercel.app',
    gradient: 'from-purple-600 to-fuchsia-700',
  },
  {
    icon: 'fas fa-link',
    title: 'Redes Vizinhas',
    description: 'Página de links personalizada com design moderno, integrando todas as redes sociais e canais de contato em um só lugar.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://redes-vizinhas.vercel.app',
    gradient: 'from-indigo-600 to-violet-800',
  },
]

export default function Projects({ className = '' }) {
  return (
    <section id="projetos" className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
            <i className="fas fa-briefcase text-[10px]" />
            Portfólio
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-gray-900 mb-6">
            Projetos que{" "}
            <span className="gradient-text">geram resultados</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-500">
            Conheça alguns dos trabalhos reais que desenvolvi com dedicação e foco em qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              iconClass={p.icon}
              title={p.title}
              description={p.description}
              tags={p.tags}
              link={p.link}
              gradient={p.gradient}
              aosDelay={i * 100}
            />
          ))}
        </div>

        {/* CTA below projects */}
        <div data-aos="fade-up" data-aos-delay="300" className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:gap-3"
          >
            Quer um projeto personalizado? Fale comigo
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
      </div>
    </section>
  )
}
