import React from 'react'
import '../styles/about.css'

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden tech-grid">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-2 rounded-full text-sm font-bold">Sobre Mim</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"><span className="gradient-text">Quem sou eu</span></h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="glass rounded-3xl p-8 glow-card">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">Clean Code</div>
                    <div className="text-sm text-gray-600">Código organizado e escalável</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-rocket text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">Performance</div>
                    <div className="text-sm text-gray-600">Otimização em cada detalhe</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-star text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">Qualidade</div>
                    <div className="text-sm text-gray-600">Excelência em cada projeto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">Sou um <strong className="text-primary font-bold">Desenvolvedor Web Freelancer</strong> apaixonado por criar experiências digitais que fazem a diferença. Trabalho transformando ideias dos meus <strong className="text-primary font-bold">clientes</strong> em <strong className="text-primary font-bold">sistemas personalizados</strong> e <strong className="text-primary font-bold">sites profissionais</strong> que entregam resultados reais.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Acredito em <strong className="text-primary font-bold">código limpo</strong>, arquiteturas bem pensadas e na importância de entender as necessidades de cada cliente e projeto. Não entrego apenas linhas de código — entrego soluções completas, testadas e prontas para escalar.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Estou em constante evolução, sempre aprendendo novas tecnologias e aprimorando minhas habilidades. Meu compromisso é com a <strong className="text-primary font-bold">qualidade</strong>, <strong className="text-primary font-bold">prazos</strong> e <strong className="text-primary font-bold">comunicação transparente</strong> com meus clientes em cada etapa do desenvolvimento.</p>

            <div className="pt-4">
              <a href="#contato" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all">Vamos começar seu projeto <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
