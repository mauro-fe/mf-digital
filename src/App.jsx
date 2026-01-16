import React, { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Technologies from "./components/Technologies/Technologies";
import Process from "./components/Process/Process";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Seleciona todos os elementos com a classe reveal
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-body selection:bg-blue-600 selection:text-white">
      <Nav />
      <main>
        <Hero />

        {/* Envolvendo em divs reveal caso os componentes sejam complexos */}
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Process />
        </div>
        <div className="reveal">
          <Services />
        </div>
        <div className="reveal">
          <Technologies />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <FAQ />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
}
