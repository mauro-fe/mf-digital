import React from 'react'
import Card from './Card'

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
    <section id="servicos" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-8 py-3 rounded-full text-sm font-bold shadow-lg">✨ Serviços</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text">O que eu faço</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Soluções completas e personalizadas para o seu negócio digital</p>
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
