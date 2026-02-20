import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-commerce Completo',
    description: 'Sistema de vendas online com carrinho, checkout e painel administrativo completo.',
    tags: ['PHP', 'MySQL', 'JS']
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Dashboard Gerencial',
    description: 'Painel de controle com gráficos, relatórios e análise de dados em tempo real.',
    tags: ['JavaScript', 'PHP', 'Chart.js']
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Landing Page Alto Impacto',
    description: 'Página de alta conversão para captação de leads com formulários integrados.',
    tags: ['HTML', 'Tailwind', 'JS']
  }
]

export default function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-8 py-3 rounded-full text-sm font-bold shadow-lg">💼 Portfolio</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text">Projetos</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Alguns dos trabalhos que desenvolvi com paixão e dedicação</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <ProjectCard key={p.title} iconClass={p.icon} title={p.title} description={p.description} tags={p.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}
