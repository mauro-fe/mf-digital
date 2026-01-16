import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Qual o prazo médio para um site?",
    a: "Para projetos institucionais ou Landing Pages, o prazo médio é de 7 a 15 dias. Sistemas mais complexos dependem do escopo, mas prezo sempre pela agilidade sem comprometer a arquitetura do código.",
  },
  {
    q: "O site será editável por mim?",
    a: "Sim. Desenvolvo as soluções pensando na autonomia do cliente. Você receberá um guia de como atualizar textos, imagens e conteúdos sem precisar mexer em uma linha de código.",
  },
  {
    q: "Como funciona o suporte pós-entrega?",
    a: "Ofereço 30 dias de garantia total para ajustes e bugs. Além disso, disponibilizo planos de manutenção mensal para manter seu servidor atualizado e seguro contra ataques.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Trabalho com 50% de entrada e 50% na entrega, ou parcelamento via cartão de crédito. Para projetos de longo prazo, podemos definir marcos (milestones) de pagamento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 lg:py-40 bg-white relative overflow-hidden"
    >
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header Profissional */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">
            Dúvidas Frequentes
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mt-4">
            Tudo o que você <br />
            precisa <span className="text-gray-300">saber</span>.
          </h2>
        </div>

        {/* Lista de FAQ */}
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.faqCard} ${
                  isOpen ? styles.faqCardActive : ""
                } rounded-[2rem] overflow-hidden`}
              >
                <button
                  className="w-full text-left flex items-center justify-between p-8 md:p-10 group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span
                    className={`text-xl md:text-2xl font-black tracking-tight transition-colors ${
                      isOpen ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {f.q}
                  </span>

                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-45"
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}
                  >
                    <i className="fas fa-plus text-lg" />
                  </div>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    isOpen ? styles.answerWrapperOpen : ""
                  } px-8 md:px-10`}
                >
                  <div className={styles.answerContent}>
                    <p className="border-l-4 border-blue-600 pl-6 py-2">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Sutil */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">
            Ainda tem alguma dúvida?{" "}
            <a
              href="#contato"
              className="text-blue-600 font-black border-b-2 border-blue-600 hover:text-blue-700 transition-colors"
            >
              Me chama no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
