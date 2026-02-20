import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const samples = [
  {
    name: 'Cliente A',
    role: 'CEO - Empresa X',
    quote: 'Excelente trabalho, comunicação clara e entrega antes do prazo. Recomendo muito!'
  },
  {
    name: 'Cliente B',
    role: 'Product Owner - Projeto Y',
    quote: 'Profissionalismo e atenção aos detalhes. O projeto superou expectativas.'
  },
  {
    name: 'Cliente C',
    role: 'Marketing - Marca Z',
    quote: 'Ótima experiência — suporte rápido e resultado muito bem executado.'
  }
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">🗣️ Depoimentos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text">O que clientes dizem</span>
          </h2>
          <p className="text-gray-600 text-lg">Feedback real de quem já trabalhou comigo</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {samples.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="p-8 m-3 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col justify-between">
                <div>
                  <div className="text-blue-600 mb-4">
                    <i className="fas fa-quote-left text-3xl"></i>
                  </div>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">{s.quote}</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">{s.name.split(' ')[0][0]}</div>
                  <div>
                    <div className="font-bold text-gray-900">{s.name}</div>
                    <div className="text-sm text-gray-600">{s.role}</div>
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
