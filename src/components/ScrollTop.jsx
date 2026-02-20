import React, { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      id="scrollTop"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 hover:text-indigo-600 hover:border-indigo-200 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <i className="fas fa-arrow-up text-sm" />
    </button>
  )
}
