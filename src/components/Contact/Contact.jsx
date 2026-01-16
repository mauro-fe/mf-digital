import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      label: "Rede Profissional",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/mauro-felix-846a08268/",
      brandColor: "group-hover:text-blue-600",
      bgIcon: "group-hover:bg-blue-50",
    },
    {
      name: "WhatsApp",
      label: "Resposta Rápida",
      icon: "fab fa-whatsapp",
      url: "https://wa.me/5544999506302",
      brandColor: "group-hover:text-green-500",
      bgIcon: "group-hover:bg-green-50",
    },
    {
      name: "E-mail",
      label: "devmaurofelix@gmail.com",
      icon: "far fa-envelope",
      url: "mailto:devmaurofelix@gmail.com",
      brandColor: "group-hover:text-red-500",
      bgIcon: "group-hover:bg-red-50",
    },
  ];

  return (
    <section id="contato" className={`py-24 lg:py-40 ${styles.contactSection}`}>
      {/* Luzes de Fundo Decorativas */}
      <div
        className={`${styles.orb} w-[500px] h-[500px] bg-blue-600 top-[-10%] left-[-10%]`}
      />
      <div
        className={`${styles.orb} w-[400px] h-[400px] bg-cyan-500 bottom-[-10%] right-[-10%]`}
        style={{ animationDelay: "-5s" }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Header de Impacto */}
        <div className="max-w-4xl mx-auto mb-20">
          <span className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-6 inline-block">
            Let's Build Together
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            Pronto para o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              próximo nível?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100/60 font-medium leading-relaxed">
            Seja um projeto do zero ou uma consultoria técnica, estou pronto
            para transformar sua ideia em realidade digital.
          </p>
        </div>

        {/* Grid de Cards Interativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`${styles.glassCard} group p-10 rounded-[3rem] text-left flex flex-col items-start`}
            >
              <div
                className={`${styles.socialIcon} mb-8 ${link.bgIcon} ${link.brandColor}`}
              >
                <i className={`${link.icon} text-3xl`} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-gray-900 transition-colors mb-2">
                  {link.name}
                </h3>
                <p className="text-blue-100/40 group-hover:text-gray-500 font-bold text-sm tracking-wide">
                  {link.label}
                </p>
              </div>

              {/* Seta de ação que aparece no hover */}
              <div className="mt-8 self-end opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                <i className={`fas fa-arrow-right text-gray-900`} />
              </div>
            </a>
          ))}
        </div>

        {/* Footer Minimalista de Contato */}
        <div className="flex flex-col items-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-12" />

          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/mauro-fe"
              className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-black transition-all"
            >
              <i className="fab fa-github text-xl" />
            </a>
            {/* Outras redes podem ser adicionadas aqui no mesmo estilo */}
          </div>

          <p className="text-blue-100/20 text-xs font-bold uppercase tracking-[0.5em]">
            © 2026 Mauro Felix • Desenvolvedor Fullstack
          </p>
        </div>
      </div>
    </section>
  );
}
