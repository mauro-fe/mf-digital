import React, { useEffect, useRef } from 'react'
import '../styles/hero.css'

export default function Hero() {
  const heroRef = useRef()

  useEffect(() => {
    const hero = heroRef.current
    function onScroll() {
      const scrolled = window.pageYOffset
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 gradient-bg relative">
      <div className="particles pointer-events-none">
        <div className="particle" style={{ left: '10%', width: 4, height: 4 }}></div>
        <div className="particle" style={{ left: '20%', width: 6, height: 6 }}></div>
        <div className="particle" style={{ left: '30%', width: 3, height: 3 }}></div>
        <div className="particle" style={{ left: '40%', width: 5, height: 5 }}></div>
        <div className="particle" style={{ left: '50%', width: 4, height: 4 }}></div>
        <div className="particle" style={{ left: '60%', width: 6, height: 6 }}></div>
        <div className="particle" style={{ left: '70%', width: 3, height: 3 }}></div>
        <div className="particle" style={{ left: '80%', width: 5, height: 5 }}></div>
        <div className="particle" style={{ left: '90%', width: 4, height: 4 }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-8 inline-block animate-bounce">
            <div className="glass-dark px-6 py-3 rounded-full text-white/90 text-sm font-semibold">Disponível para novos projetos</div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 md:mb-8 leading-tight px-4">
            Desenvolvedor Web<br />
            <span className="inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200">focado em criar</span>
            </span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">sites e sistemas modernos</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">Crio <strong>soluções digitais rápidas</strong>, responsivas e sob medida para negócios e produtos digitais.</p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <a href="#contato" className="group bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 btn-shine w-full sm:w-auto text-center">
              <i className="fas fa-comments mr-2 sm:mr-3 group-hover:rotate-12 transition-transform"></i>Solicitar Orçamento
            </a>
            <a href="#projetos" className="group glass-dark border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-110 w-full sm:w-auto text-center">
              <i className="fas fa-folder-open mr-2 sm:mr-3 group-hover:rotate-12 transition-transform"></i>Ver Projetos
            </a>
          </div>

          <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 md:mb-2">3+</div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">Anos<span className="hidden sm:inline"> Experiência</span></div>
            </div>
            <div className="text-center border-l border-r border-white/30">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 md:mb-2">20+</div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 md:mb-2">100%</div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
      </div>
    </section>
  )
}
