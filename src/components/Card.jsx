import React from 'react'

export default function Card({ iconClass, title, description, className = '', aosDelay = 0 }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200 ${className}`}
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100 group-hover:scale-110">
        <i className={`${iconClass} text-xl text-indigo-600`} />
      </div>

      <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-500">{description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-b-2xl scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
    </div>
  )
}
