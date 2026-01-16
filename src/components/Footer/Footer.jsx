import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f1a] text-white pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Coluna 1: Branding */}
          <div className="md:col-span-2">
            <img
              src="/img/logo.png"
              alt="Mauro Felix"
              className="h-10 mb-8 opacity-90 brightness-0 invert"
            />
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              Transformando desafios complexos em experiências digitais
              elegantes, rápidas e lucrativas.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-500 mb-8">
              Navegação
            </h4>
            <ul className="space-y-4">
              {["Início", "Serviços", "Projetos", "FAQ", "Contato"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={styles.footerLink}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Coluna 3: Social & Tech */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-500 mb-8">
              Social
            </h4>
            <div className="flex gap-4">
              {[
                { icon: "fab fa-github", url: "https://github.com/mauro-fe" },
                {
                  icon: "fab fa-linkedin-in",
                  url: "https://www.linkedin.com/in/mauro-felix-846a08268/",
                },
                {
                  icon: "fab fa-instagram",
                  url: "https://www.instagram.com/mauroo_felix/",
                },
                { icon: "fab fa-whatsapp", url: "https://wa.me/5544999506302" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-500"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs text-slate-500 font-medium">
              Disponível para freelas em todo o mundo.
            </p>
          </div>
        </div>

        {/* Linha Final com Copyright */}
        <div className={styles.footerBorder} />
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium tracking-tight">
            © {currentYear}{" "}
            <span className="text-white font-bold">Mauro Felix</span>. Todos os
            direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>Built with</span>
            <i className="fab fa-react text-blue-400 text-sm animate-spin-slow" />
            <span>&</span>
            <i className="fas fa-bolt text-yellow-400 text-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
