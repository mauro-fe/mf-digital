import React, { useState } from 'react'

const faqs = [
  { q: 'Qual o prazo médio para um site simples?', a: 'Normalmente 1–3 semanas, dependendo das funcionalidades e aprovação de conteúdo.' },
  { q: 'Você fornece manutenção pós-entrega?', a: 'Sim — ofereço pacotes de suporte e manutenção conforme necessidade.' },
  { q: 'Como é o processo de pagamento?', a: 'Geralmente um sinal na contratação e o restante dividido conforme marco de entrega.' }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">❓ FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-gray-600 text-lg">Respostas práticas para dúvidas comuns antes de contratar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <button className="w-full text-left flex items-center justify-between p-6 hover:bg-gray-50 rounded-2xl transition-all" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <div className="font-bold text-gray-900 text-lg pr-4">{f.q}</div>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</div>
              </button>
              {openIndex === i && <div className="px-6 pb-6 text-gray-700 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
