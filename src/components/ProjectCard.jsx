import React from 'react'
import '../styles/projects.css'

export default function ProjectCard({ iconClass, title, description, tags = [] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden glow-card group">
      <div className="h-56 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
        <i className={`${iconClass} text-white text-7xl group-hover:scale-110 transition-transform`}></i>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(t => (
            <span key={t} className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">{t}</span>
          ))}
        </div>
        <a href="#contato" className="text-primary font-bold hover:gap-2 inline-flex items-center gap-1 transition-all">Ver detalhes <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  )
}
