import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import styles from "./Testimonials.module.css";

// CSS do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const samples = [
  {
    name: "Ricardo Silva",
    role: "Diretor de Tecnologia",
    company: "TechFlow Solutions",
    quote:
      "A entrega superou todas as expectativas. O sistema é extremamente rápido e o código é muito limpo. Um nível de profissionalismo raro de encontrar.",
  },
  {
    name: "Ana Beatriz",
    role: "Fundadora",
    company: "Studio Criativo",
    quote:
      "Transformou nossa visão em realidade. A atenção aos detalhes na interface e a performance do site trouxeram resultados imediatos em vendas.",
  },
  {
    name: "Marcos Oliveira",
    role: "Gerente de Marketing",
    company: "Global Ops",
    quote:
      "Comunicação impecável durante todo o processo. O dashboard personalizado que foi desenvolvido economiza horas da nossa equipe semanalmente.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className={`py-24 lg:py-40 bg-gray-50/50 overflow-hidden ${styles.testimonialsContainer}`}
    >
      <div className="container mx-auto px-4">
        {/* Header Master */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6">
            Histórias de <span className="text-blue-600">sucesso</span>.
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            A melhor prova da qualidade do meu trabalho é a satisfação de quem
            confiou seus projetos a mim.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-20"
        >
          {samples.map((s, i) => (
            <SwiperSlide key={i} className="max-w-xl">
              <div
                className={`${styles.quoteCard} p-10 md:p-14 rounded-[3rem] h-full flex flex-col`}
              >
                {/* Estrelas e Ícone de Quote */}
                <div className="flex justify-between items-start mb-8">
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star mr-1" />
                    ))}
                  </div>
                  <i className="fas fa-quote-right text-4xl text-blue-600/20" />
                </div>

                <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-10 italic">
                  "{s.quote}"
                </p>

                <div className="mt-auto flex items-center gap-5 pt-8 border-t border-gray-100">
                  {/* Avatar Minimalista */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-200">
                    {s.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-black text-gray-900 text-lg leading-none mb-1">
                      {s.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">
                      {s.role}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {s.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prova Social de Rodapé */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 font-bold text-sm">
            PROJETOS ENTREGUES EM 5 PAÍSES DIFERENTES
          </p>
        </div>
      </div>
    </section>
  );
}
