import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/projects.css'

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
    <section id="projetos" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-2 rounded-full text-sm font-bold">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"><span className="gradient-text">Projetos</span></h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Alguns dos trabalhos que desenvolvi</p>
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
