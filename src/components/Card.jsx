import React from "react";

export default function Card({
  icon: Icon,
  title,
  description,
  iconColor = "text-primary-light",
  iconBg = "bg-primary/10 group-hover:bg-primary/20",
  className = "",
  aosDelay = 0,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-400 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] card-glow-border h-full ${className}`}
    >
      <div
        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} transition-all duration-300 group-hover:scale-110`}
      >
        <Icon size={20} className={iconColor} />
      </div>

      <h3 className="mb-3 text-lg font-bold text-text-primary">{title}</h3>
      <p className="text-[15px] leading-relaxed text-gray-400">{description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-b-2xl scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
    </div>
  );
}
