import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <img src="/img/logo.png" alt="Logo" className="h-12 mx-auto mb-4 opacity-90" />
        </div>
        <p className="text-gray-300 text-lg mb-2">
          &copy; 2025 Desenvolvedor Web. Todos os direitos reservados.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Desenvolvido com � por <a href="https://www.instagram.com/mauroo_felix/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Mauro Felix</a>
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a href="https://github.com/mauro-fe" target="_blank" rel="noreferrer" className="w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mauro-felix-846a08268/" target="_blank" rel="noreferrer" className="w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://wa.me/5544999506302" target="_blank" rel="noreferrer" className="w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
