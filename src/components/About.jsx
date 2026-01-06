import React from "react";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      {/* Background */}
      <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-[var(--color-secondary)]/30 blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-6 inline-block rounded-full bg-[var(--color-primary)]/10 px-8 py-3 text-sm font-bold text-[var(--color-primary)] shadow-lg">
            👋 Sobre Mim
          </span>

          <h2 className="mb-6 text-5xl font-black sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Quem sou eu
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 rounded-full bg-[var(--color-primary)]" />
            <div className="h-4 w-4 rounded-full bg-[var(--color-primary)]" />
            <div className="h-1 w-16 rounded-full bg-[var(--color-secondary)]" />
          </div>
        </div>

        {/* Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Cards */}
          <div className="order-2 space-y-4 lg:order-1">
            {[
              {
                title: "Clean Code",
                desc: "Código organizado e escalável",
                icon: "check",
                bg: "from-emerald-400 to-emerald-600",
              },
              {
                title: "Performance",
                desc: "Otimização em cada detalhe",
                icon: "rocket",
                bg: "from-[var(--color-primary)] to-[var(--color-secondary)]",
              },
              {
                title: "Qualidade",
                desc: "Excelência em cada projeto",
                icon: "star",
                bg: "from-purple-400 to-purple-600",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex items-center gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} shadow-lg transition-transform duration-500 group-hover:rotate-6`}
                >
                  <i className={`fas fa-${item.icon} text-2xl text-white`} />
                </div>

                <div>
                  <div className="mb-1 text-xl font-black text-gray-900">
                    {item.title}
                  </div>
                  <div className="text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="order-1 space-y-5 text-gray-700 lg:order-2">
            <p className="text-base leading-relaxed sm:text-lg">
              Sou um{" "}
              <strong className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text font-bold text-transparent">
                Desenvolvedor Web Freelancer
              </strong>{" "}
              apaixonado por criar experiências digitais que fazem a diferença.
            </p>

            <p className="text-base leading-relaxed sm:text-lg">
              Acredito em{" "}
              <strong className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text font-bold text-transparent">
                código limpo
              </strong>
              , arquiteturas bem pensadas e soluções prontas para escalar.
            </p>

            <p className="text-base leading-relaxed sm:text-lg">
              Meu compromisso é com{" "}
              <strong className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text font-bold text-transparent">
                qualidade, prazos e comunicação transparente
              </strong>
              .
            </p>

            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-8 py-4 font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
            >

              Vamos começar seu projeto
              <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
