import React from 'react'

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block backdrop-blur-xl bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full text-sm font-bold shadow-2xl">💬 Entre em Contato</span>
        </div>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8">Vamos conversar?</h2>
        <p className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed max-w-3xl mx-auto">Estou disponível para novos projetos freelance e parcerias de longo prazo. Vamos criar algo incrível juntos!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <a href="https://www.linkedin.com/in/mauro-felix-846a08268/" target="_blank" rel="noreferrer" className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:bg-white hover:scale-105 transition-all duration-500 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl">
            <i className="fab fa-linkedin text-6xl text-white group-hover:text-blue-600 mb-6 transition-all duration-500 transform group-hover:scale-110"></i>
            <h3 className="font-black text-xl mb-2 text-white group-hover:text-gray-900 transition-colors duration-500">LinkedIn</h3>
            <p className="text-white/80 group-hover:text-gray-600 transition-colors duration-500">Conecte-se comigo</p>
          </a>

          <a href="https://wa.me/5544999506302" target="_blank" rel="noreferrer" className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:bg-white hover:scale-105 transition-all duration-500 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl">
            <i className="fab fa-whatsapp text-6xl text-white group-hover:text-green-500 mb-6 transition-all duration-500 transform group-hover:scale-110"></i>
            <h3 className="font-black text-xl mb-2 text-white group-hover:text-gray-900 transition-colors duration-500">WhatsApp</h3>
            <p className="text-white/80 group-hover:text-gray-600 transition-colors duration-500">Envie uma mensagem</p>
          </a>

          <a href="mailto:devmaurofelix@gmail.com" target="_blank" rel="noreferrer" className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:bg-white hover:scale-105 transition-all duration-500 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl sm:col-span-2 md:col-span-1">
            <i className="fas fa-envelope text-6xl text-white group-hover:text-red-500 mb-6 transition-all duration-500 transform group-hover:scale-110"></i>
            <h3 className="font-black text-xl mb-2 text-white group-hover:text-gray-900 transition-colors duration-500">E-mail</h3>
            <p className="text-white/80 group-hover:text-gray-600 transition-colors duration-500">Envie um e-mail</p>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://github.com/mauro-fe" target="_blank" rel="noreferrer" className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/mauro-felix-846a08268/" target="_blank" rel="noreferrer" className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://wa.me/5544999506302" target="_blank" rel="noreferrer" className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-500 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl">
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
