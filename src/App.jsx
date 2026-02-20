import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    })
  }, [])

  return (
    <div className="selection:bg-indigo-100 selection:text-indigo-600">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Technologies />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}
