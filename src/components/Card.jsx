import React from "react";

export default function Card({
  icon: Icon,
  title,
  description,
  iconColor = "text-primary-light",
  iconBg = "bg-primary/10",
  iconBorderColor = "rgba(0,242,255,0.15)",
  accentColor = "var(--color-primary)",
  className = "",
  aosDelay = 0,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`group relative flex flex-col rounded-2xl p-6 sm:p-7 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${className}`}
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--card-shadow)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--hover-border-glow)";
        e.currentTarget.style.boxShadow =
          "0 0 40px rgba(0,242,255,0.07), 0 16px 48px var(--hover-shadow-subtle)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.boxShadow = "var(--card-shadow)";
      }}
    >
      {/* Subtle top glow on hover */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}18 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative z-10 mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${iconBg} transition-all duration-300 group-hover:scale-110`}
        style={{ border: `1px solid ${iconBorderColor}` }}
      >
        <Icon size={18} className={iconColor} strokeWidth={1.75} />
      </div>

      {/* Text */}
      <h3 className="relative z-10 mb-2.5 text-base sm:text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary-light">
        {title}
      </h3>
      <p className="relative z-10 text-sm sm:text-[15px] leading-relaxed text-gray-400 flex-1">
        {description}
      </p>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 ease-out group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary), transparent)`,
        }}
      />
    </div>
  );
}
