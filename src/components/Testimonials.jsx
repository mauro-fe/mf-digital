import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Ricardo Oliveira',
    role: 'Empresário — Loja Virtual',
    quote: 'O Mauro entregou um e-commerce incrível, muito acima do que eu esperava. As vendas online aumentaram 40% no primeiro mês!',
    rating: 5,
  },
  {
    name: 'Ana Carolina',
    role: 'Marketing Digital',
    quote: 'Profissional excepcional. A landing page que ele criou trouxe o triplo de leads que tínhamos antes. Comunicação impecável.',
    rating: 5,
  },
  {
    name: 'Pedro Santos',
    role: 'Fundador — Startup Tech',
    quote: 'Código limpo, entregas no prazo e sempre disponível. O sistema que desenvolveu economiza horas do nosso time todo dia.',
    rating: 5,
  },
]

export default function Testimonials({ className = '' }) {
  return (
    <section id="depoimentos" className={`relative py-24 md:py-32 px-5 sm:px-8 bg-gray-50/50 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
            <i className="fas fa-star text-[10px]" />
            Depoimentos
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-gray-900 mb-6">
            O que meus clientes{" "}
            <span className="gradient-text">dizem sobre mim</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-500">
            Feedback real de quem confiou no meu trabalho.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="pb-14"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
                {/* Stars */}
                <div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <i key={j} className="fas fa-star text-amber-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[15px] mb-6">"{t.quote}"</p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
