import React from 'react'
import Card from './Card'

const services = [
  {
    icon: 'fas fa-globe',
    title: 'Sites Profissionais',
    description: 'Sites modernos, rápidos e responsivos que transmitem credibilidade e convertem visitantes em clientes.'
  },
  {
    icon: 'fas fa-cogs',
    title: 'Sistemas Web',
    description: 'Sistemas personalizados para automatizar processos e gerenciar seu negócio de forma eficiente.'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Landing Pages',
    description: 'Páginas estratégicas de alta conversão, focadas em captar leads e gerar vendas para o seu negócio.'
  },
  {
    icon: 'fas fa-wrench',
    title: 'Manutenção & Suporte',
    description: 'Atualizações, correções de bugs e novas funcionalidades para manter seu projeto sempre no ar.'
  }
]

export default function Services({ className = '' }) {
  return (
    <section id="servicos" className={`relative py-24 md:py-32 px-5 sm:px-8 bg-gray-50/50 ${className}`}>
      <div className="absolute inset-0 bg-grid-light" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
            <i className="fas fa-shapes text-[10px]" />
            Serviços
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-gray-900 mb-6">
            Soluções sob medida para{" "}
            <span className="gradient-text">cada necessidade</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-500">
            Do planejamento à entrega final — desenvolvimento completo com foco em qualidade e resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Card key={s.title} iconClass={s.icon} title={s.title} description={s.description} aosDelay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
