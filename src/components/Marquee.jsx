import React from "react";

export default function Marquee({
  items = [],
  reverse = false,
  speed = 30,
  size = "lg",
  className = "",
}) {
  const animationClass = reverse
    ? "animate-marquee-reverse"
    : "animate-marquee";

  const sizeClasses = {
    sm: "py-3 text-sm tracking-widest",
    md: "py-3 sm:py-4 text-sm sm:text-base tracking-wider",
    lg: "py-4 sm:py-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide",
    xl: "py-5 sm:py-7 text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight",
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        /* Force same background used by the page so edge fades mask correctly */
        background: "var(--marquee-bg)",
        borderTop: "1px solid var(--marquee-border)",
        borderBottom: "1px solid var(--marquee-border)",
      }}
    >
      {/* Edge fades — solid bg → transparent so items fade into parent bg */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
        style={{
          background:
            "linear-gradient(to right, var(--marquee-bg) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
        style={{
          background:
            "linear-gradient(to left, var(--marquee-bg) 0%, transparent 100%)",
        }}
      />

      {/* Glow line top */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 right-1/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,242,255,0.3), transparent)",
        }}
      />

      <div
        className={`flex w-max ${animationClass} ${sizeClasses[size] || sizeClasses.lg} hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="group flex items-center gap-6 md:gap-10 px-6 md:px-10 whitespace-nowrap font-extrabold uppercase select-none"
            style={{ color: "var(--marquee-text)" }}
          >
            <span className="transition-colors duration-300 group-hover:text-white">
              {item}
            </span>
            <span
              className="flex-shrink-0 text-xs"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              aria-hidden="true"
            >
              ◈
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
