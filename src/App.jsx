import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App() {
  useEffect(() => {
    // Fade-in observer for sections
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('fade-in') })
    }, observerOptions)

    document.querySelectorAll('section').forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scrollTopBtn = document.getElementById('scrollTop')
    if (!scrollTopBtn) return

    function onScroll() {
      if (window.pageYOffset > 300) scrollTopBtn.classList.remove('hidden')
      else scrollTopBtn.classList.add('hidden')
    }

    function onClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('scroll', onScroll)
    scrollTopBtn.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      scrollTopBtn.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}
