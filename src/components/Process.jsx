import React from 'react'

const steps = [
  { title: 'Brief', desc: 'Entendimento dos objetivos, escopo e requisitos do projeto.' },
  { title: 'Design', desc: 'Wireframes, layout e prototipação interativa.' },
  { title: 'Desenvolvimento', desc: 'Implementação, testes e integração.' },
  { title: 'Entrega', desc: 'Deploy, documentação e suporte pós-lançamento.' }
]

export default function Process() {
  return (
    <section id="processo" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">Processo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text">Como trabalho</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Fluxo transparente em etapas claras para garantir prazos e qualidade.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">{i+1}</div>
              <h3 className="font-black text-gray-900 text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
