import React, { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.pageYOffset > 300)
    }

    function onClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="scrollTop" className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 z-50">
      <i className="fas fa-arrow-up text-xl"></i>
    </button>
  )
}
