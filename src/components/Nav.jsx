import React, { useEffect, useRef } from 'react'
import '../styles/nav.css'

export default function Nav() {
  const mobileMenuRef = useRef()
  const menuOverlayRef = useRef()
  const menuIconRef = useRef()

  useEffect(() => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn')
    const closeMenuBtn = document.getElementById('closeMenuBtn')
    const mobileMenu = mobileMenuRef.current
    const menuOverlay = menuOverlayRef.current
    const menuIcon = menuIconRef.current

    function openMenu() {
      if (!mobileMenu || !menuOverlay) return
      mobileMenu.style.transform = 'translateX(0)'
      menuOverlay.style.opacity = '1'
      menuOverlay.style.pointerEvents = 'auto'
      document.body.style.overflow = 'hidden'
      if (menuIcon) {
        const path = menuIcon.querySelector('path')
        if (path) path.setAttribute('d', 'M6 18L18 6M6 6l12 12')
      }
    }

    function closeMenu() {
      if (!mobileMenu || !menuOverlay) return
      mobileMenu.style.transform = 'translateX(100%)'
      menuOverlay.style.opacity = '0'
      menuOverlay.style.pointerEvents = 'none'
      document.body.style.overflow = ''
      if (menuIcon) {
        const path = menuIcon.querySelector('path')
        if (path) path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
      }
    }

    function toggleMobileMenu() {
      if (!mobileMenu) return
      const isOpen = mobileMenu.style.transform === 'translateX(0px)' || mobileMenu.style.transform === 'translateX(0)'
      if (isOpen) closeMenu()
      else openMenu()
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu)
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu)
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu)

    return () => {
      if (mobileMenuBtn) mobileMenuBtn.removeEventListener('click', toggleMobileMenu)
      if (closeMenuBtn) closeMenuBtn.removeEventListener('click', closeMenu)
      if (menuOverlay) menuOverlay.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <>
      <nav className="fixed w-full glass shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <a href="#home">
                <img src="/logo.png" alt="MF Criativos" className="h-32 sm:h-28 md:h-32 lg:h-48 w-auto" />
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition font-semibold decorative-line pb-1">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-primary transition font-semibold decorative-line pb-1">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-primary transition font-semibold decorative-line pb-1">Serviços</a>
              <a href="#projetos" className="text-gray-700 hover:text-primary transition font-semibold decorative-line pb-1">Projetos</a>
              <a href="#contato" className="text-gray-700 hover:text-primary transition font-semibold decorative-line pb-1">Contato</a>
            </div>

            <a href="#contato" className="hidden md:inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full hover:shadow-2xl transition-all duration-300 font-bold btn-shine hover:bg-right text-sm lg:text-base">Solicitar Orçamento</a>

            <button id="mobileMenuBtn" type="button" className="md:hidden text-gray-700 hover:text-primary transition-colors relative z-[60] p-2 focus:outline-none">
              <svg id="menuIcon" ref={menuIconRef} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div id="menuOverlay" ref={menuOverlayRef} className="fixed inset-0 bg-black/60 opacity-0 pointer-events-none transition-opacity duration-300 z-[80]"></div>

        <div id="mobileMenu" ref={mobileMenuRef} className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl translate-x-full transition-all duration-500 ease-out z-[90] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
            <div className="text-xl font-black text-primary">Menu</div>
            <button id="closeMenuBtn" type="button" className="text-gray-600 hover:text-primary transition-all p-2 hover:bg-white rounded-full shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col p-6 pb-20 space-y-1">
            <a href="#home" className="mobile-menu-item text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-all">Início</a>
            <a href="#sobre" className="mobile-menu-item text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-all">Sobre</a>
            <a href="#servicos" className="mobile-menu-item text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-all">Serviços</a>
            <a href="#projetos" className="mobile-menu-item text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-all">Projetos</a>
            <a href="#contato" className="mobile-menu-item text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-all">Contato</a>

            <a href="#contato" className="mobile-menu-item bg-gradient-to-r from-primary via-secondary to-primary text-white px-6 py-3 rounded-full font-bold text-center shadow-lg hover:shadow-xl transition-all mt-6">Solicitar Orçamento</a>
          </nav>
        </div>
      </nav>
    </>
  )
}
