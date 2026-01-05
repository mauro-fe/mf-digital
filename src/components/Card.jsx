import React from 'react'
import '../styles/services.css'

export default function Card({ iconClass, title, description, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl p-8 glow-card text-center group ${className}`}>
      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <i className={iconClass + ' text-white text-3xl'}></i>
      </div>
      <h3 className="text-xl font-black mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
