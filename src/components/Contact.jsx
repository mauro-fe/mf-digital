import React from 'react'

const channels = [
  {
    icon: 'fab fa-whatsapp',
    label: 'WhatsApp',
    desc: 'Resposta rápida',
    href: 'https://wa.me/5544999506302',
    hoverColor: 'hover:border-emerald-200 hover:bg-emerald-50',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    desc: 'Vamos conectar',
    href: 'https://www.linkedin.com/in/mauro-felix-846a08268/',
    hoverColor: 'hover:border-blue-200 hover:bg-blue-50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: 'fas fa-envelope',
    label: 'E-mail',
    desc: 'devmaurofelix@gmail.com',
    href: 'mailto:devmaurofelix@gmail.com',
    hoverColor: 'hover:border-red-200 hover:bg-red-50',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
  },
]

export default function Contact({ className = '' }) {
  return (
    <section id="contato" className={`relative py-24 md:py-32 px-5 sm:px-8 overflow-hidden ${className}`} style={{ background: "var(--gradient-dark)" }}>
      {/* BG elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-20 h-[400px] w-[400px] rounded-full bg-indigo-600/15 blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 -right-20 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[100px] animate-blob animation-delay-2000" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-xl mb-8">
          <i className="fas fa-paper-plane text-[10px]" />
          Contato
        </span>

        <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-white mb-6">
          Pronto para transformar sua{" "}
          <span className="gradient-text">presença digital</span>?
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-400 mb-14 max-w-2xl mx-auto">
          Vamos conversar sobre o seu projeto. Escolha o canal que preferir — 
          respondo em até 2 horas durante horário comercial.
        </p>

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {channels.map((ch, i) => (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noreferrer"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className={`group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${ch.hoverColor}`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${ch.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <i className={`${ch.icon} text-2xl ${ch.iconColor}`} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-gray-900 transition-colors">{ch.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">{ch.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social links */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4">
          {[
            { icon: 'fab fa-github', href: 'https://github.com/mauro-fe' },
            { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/mauro-felix-846a08268/' },
            { icon: 'fab fa-whatsapp', href: 'https://wa.me/5544999506302' },
            { icon: 'fab fa-instagram', href: 'https://www.instagram.com/mauroo_felix/' },
          ].map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110 hover:shadow-lg"
            >
              <i className={`${s.icon} text-lg`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
