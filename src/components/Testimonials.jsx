import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "../siteContent";

const testimonials = TESTIMONIALS.items;

export default function Testimonials({ className = "" }) {
  return (
    <section
      id="depoimentos"
      className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span
            data-aos="fade-down"
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6"
          >
            &#x25C8; {TESTIMONIALS.badge}
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
          >
            {TESTIMONIALS.title}{" "}
            <span className="gradient-text">{TESTIMONIALS.titleHighlight}</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="body-lg text-gray-400"
          >
            {TESTIMONIALS.subtitle}
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
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 h-full flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-primary/5">
                {/* Stars */}
                <div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[15px] mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary-light font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
