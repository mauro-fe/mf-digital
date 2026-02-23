import React from "react";
import { Send } from "lucide-react";
import { CONTACT, AUTHOR } from "../siteContent";

const channels = CONTACT.channels;

export default function Contact({ className = "" }) {
  return (
    <section
      id="contato"
      className={`relative py-24 md:py-32 px-5 sm:px-8 overflow-hidden ${className}`}
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* BG elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-20 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 -right-20 h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[100px] animate-blob animation-delay-2000" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span
          data-aos="fade-down"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-xl mb-8"
        >
          <Send size={10} />
          {CONTACT.badge}
        </span>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="heading-lg text-text-secondary mb-6"
        >
          {CONTACT.title}{" "}
          <span className="gradient-text">{CONTACT.titleHighlight}</span>?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="body-lg text-text-secondary mb-14 max-w-2xl mx-auto"
        >
          {CONTACT.subtitle}
        </p>

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className={`group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${ch.hoverColor}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${ch.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon
                    size={24}
                    color="currentColor"
                    className={ch.iconColor}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-text-secondary text-lg mb-1 transition-colors">
                    {ch.label}
                  </h3>
                  <p className="text-sm text-text-secondary transition-colors">
                    {ch.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social links */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center gap-4"
        >
          {AUTHOR.socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary transition-all duration-300 hover:bg-white/15 hover:text-text-secondary hover:scale-110 hover:shadow-lg hover:border-white/20"
              >
                <Icon size={18} color="currentColor" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
