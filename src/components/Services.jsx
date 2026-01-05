import React from 'react'
import Card from './Card'
import '../styles/services.css'

const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Sites Profissionais',
    description: 'Criação de sites modernos, responsivos e otimizados para conversão e performance.'
  },
  {
    icon: 'fas fa-cogs',
    title: 'Sistemas Personalizados',
    description: 'Desenvolvimento de sistemas web sob medida para atender necessidades específicas do seu negócio.'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Landing Pages',
    description: 'Landing pages estratégicas focadas em conversão e captação de leads para seu negócio.'
  },
  {
    icon: 'fas fa-wrench',
    title: 'Manutenção',
    description: 'Otimização, correções e implementação de novas funcionalidades em sistemas existentes.'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-2 rounded-full text-sm font-bold">Serviços</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"><span className="gradient-text">O que eu faço</span></h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s) => (
            <Card key={s.title} iconClass={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
