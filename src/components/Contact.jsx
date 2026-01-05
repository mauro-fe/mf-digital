import React from 'react'
import '../styles/contact.css'

export default function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 gradient-bg relative overflow-hidden">
      <div className="particles pointer-events-none">
        <div className="particle" style={{ left: '15%', width: 5, height: 5 }}></div>
        <div className="particle" style={{ left: '35%', width: 4, height: 4 }}></div>
        <div className="particle" style={{ left: '55%', width: 6, height: 6 }}></div>
        <div className="particle" style={{ left: '75%', width: 4, height: 4 }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">Vamos conversar?</h2>
        <p className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed">Estou disponível para novos projetos freelance e parcerias de longo prazo.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          <a href="https://www.linkedin.com/in/mauro-felix-846a08268/" target="_blank" rel="noreferrer" className="glass-dark rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white hover:scale-105 transition-all duration-300 group">
            <i className="fab fa-linkedin text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-blue-700 mb-4 sm:mb-5 md:mb-6 transition-colors"></i>
            <h3 className="font-black text-lg sm:text-xl mb-1 sm:mb-2 text-white group-hover:text-gray-900 transition-colors">LinkedIn</h3>
            <p className="text-white/80 group-hover:text-gray-600 transition-colors text-sm sm:text-base">Conecte-se comigo</p>
          </a>

          <a href="https://wa.me/5544999506302" target="_blank" rel="noreferrer" className="glass-dark rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white hover:scale-105 transition-all duration-300 group">
            <i className="fab fa-whatsapp text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-green-500 mb-4 sm:mb-5 md:mb-6 transition-colors"></i>
            <h3 className="font-black text-lg sm:text-xl mb-1 sm:mb-2 text-white group-hover:text-gray-900 transition-colors">WhatsApp</h3>
            <p className="text-white/80 group-hover:text-gray-600 transition-colors text-sm sm:text-base">Envie uma mensagem</p>
          </a>

          <a href="mailto:devmaurofelix@gmail.com" target="_blank" rel="noreferrer" className="glass-dark rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white hover:scale-105 transition-all duration-300 group sm:col-span-2 md:col-span-1">
            <i className="fas fa-envelope text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-red-500 mb-4 sm:mb-5 md:mb-6 transition-colors"></i>
            <h3 className="font-black text-lg sm:text-xl mb-1 sm:mb-2 text-white group-hover:text-gray-900 transition-colors">E-mail</h3>
            <p className="text-white/80 group-hover:text-gray-600 transition-colors text-sm sm:text-base">Envie um e-mail</p>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://github.com/mauro-fe" target="_blank" rel="noreferrer" className="w-14 h-14 glass-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all hover:scale-110">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/mauro-felix-846a08268/" target="_blank" rel="noreferrer" className="w-14 h-14 glass-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-700 transition-all hover:scale-110">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://wa.me/5544999506302" target="_blank" rel="noreferrer" className="w-14 h-14 glass-dark rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-500 transition-all hover:scale-110">
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
