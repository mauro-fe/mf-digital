import React from 'react'


export default function Card({ iconClass, title, description, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-secondary)]/5 to-[var(--color-primary)]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
          <i className={`${iconClass} text-3xl text-white`} />
        </div>

        <h3 className="mb-4 text-xl font-black text-gray-900 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
          {title}
        </h3>

        <p className="leading-relaxed text-gray-600">{description}</p>
      </div>

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  )
}
