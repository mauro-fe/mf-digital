import React, { useState } from 'react'

const faqs = [
  {
    q: 'Qual o prazo médio de entrega de um projeto?',
    a: 'Depende da complexidade. Sites simples levam de 1 a 2 semanas, landing pages de 5 a 7 dias, e sistemas mais complexos de 3 a 6 semanas. Sempre defino prazos claros antes de iniciar.'
  },
  {
    q: 'Como funciona o processo de pagamento?',
    a: 'Trabalho com um sinal de 50% na contratação e os 50% restantes na entrega final. Para projetos maiores, posso parcelar conforme marcos de entrega.'
  },
  {
    q: 'Você oferece suporte após a entrega?',
    a: 'Sim. Todo projeto inclui 30 dias de suporte gratuito para correções. Além disso, ofereço planos de manutenção mensal para atualizações contínuas.'
  },
  {
    q: 'Preciso fornecer o conteúdo ou você cuida disso?',
    a: 'Idealmente, o conteúdo (textos e imagens) é fornecido por você. Mas posso ajudar com sugestões de texto e indicar bancos de imagens profissionais.'
  },
  {
    q: 'Qual a diferença entre um site e uma landing page?',
    a: 'Um site tem múltiplas páginas e funcionalidades variadas. Uma landing page é uma página única, estratégica, focada em uma ação específica — como captar leads ou vender um produto.'
  },
]

export default function FAQ({ className = '' }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
            <i className="fas fa-circle-question text-[10px]" />
            FAQ
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-gray-900 mb-6">
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-500">
            Respostas rápidas para as dúvidas mais comuns antes de começar.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? 'border-indigo-200 bg-indigo-50/30 shadow-sm'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  openIndex === i
                    ? 'bg-indigo-600 text-white rotate-45'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  <i className="fas fa-plus text-xs" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 pb-6' : 'max-h-0'
                }`}
              >
                <p className="px-6 text-[15px] text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
