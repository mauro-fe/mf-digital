import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import { MARQUEE_WORDS, MARQUEE_TESTIMONIALS } from "./siteContent";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      delay: 0,
    });
  }, []);

  return (
    <div className="selection:bg-primary/20 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Marquee items={MARQUEE_WORDS} speed={35} size="xl" />
        <About />
        <Services />
        <Process />
        <Technologies />
        <Marquee items={MARQUEE_TESTIMONIALS} reverse speed={30} size="lg" />
        <Projects />
        <Testimonials />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
