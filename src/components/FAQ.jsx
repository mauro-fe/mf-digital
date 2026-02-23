import React, { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ as FAQ_CONTENT } from "../siteContent";

const faqs = FAQ_CONTENT.items;

export default function FAQ({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span
            data-aos="fade-down"
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-6"
          >
            &#x25C8; {FAQ_CONTENT.badge}
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight"
          >
            {FAQ_CONTENT.title}{" "}
            <span className="gradient-text">{FAQ_CONTENT.titleHighlight}</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="body-lg text-gray-400"
          >
            {FAQ_CONTENT.subtitle}
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-primary/30 bg-primary/5 shadow-sm shadow-primary/5"
                  : "border-white/[0.06] bg-white/[0.03] hover:border-white/10"
              }`}
            >
              <button
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-text-primary pr-4">
                  {f.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === i
                      ? "bg-primary text-text-primary rotate-45"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  <Plus size={12} />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-[15px] text-gray-400 leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
