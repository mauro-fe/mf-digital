import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Process from './components/Process'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          observer.unobserve(entry.target) // anima só uma vez
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scrollTopBtn = document.getElementById('scrollTop')
    if (!scrollTopBtn) return

    const onScroll = () => {
      if (window.pageYOffset > 300) scrollTopBtn.classList.remove('hidden')
      else scrollTopBtn.classList.add('hidden')
    }

    const onClick = () => {
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
        {/* ❌ Hero NÃO recebe reveal */}
        <Hero />

        {/* ✅ Só quem precisa anima */}
        <About className="reveal" />
        <Process className="reveal" />
        <Services className="reveal" />
        <Technologies className="reveal" />
        <Projects className="reveal" />
        <FAQ className="reveal" />
        <Contact className="reveal" />
        <Testimonials className="reveal" />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}
