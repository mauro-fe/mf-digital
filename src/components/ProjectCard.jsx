import React from 'react'

export default function ProjectCard({ iconClass, title, description, tags = [] }) {
  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl group transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-64 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <i className={`${iconClass} text-white text-8xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative z-10`}></i>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
      </div>
      
      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(t => (
            <span key={t} className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold border border-blue-100">{t}</span>
          ))}
        </div>
        <a href="#contato" className="group/link inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all duration-300">
          Ver detalhes 
          <i className="fas fa-arrow-right group-hover/link:translate-x-2 transition-transform duration-300"></i>
        </a>
      </div>
    </div>
  )
}
