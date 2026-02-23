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
  const duration = `${speed}s`;

  const sizeClasses = {
    sm: "py-4 text-sm tracking-widest",
    md: "py-5 text-lg tracking-wider",
    lg: "py-6 text-2xl md:text-3xl lg:text-4xl tracking-wide",
    xl: "py-8 text-3xl md:text-5xl lg:text-6xl tracking-tight",
  };

  return (
    <div
      className={`overflow-hidden border-y border-white/[0.04] bg-white/[0.01] ${className}`}
    >
      <div
        className={`flex w-max ${animationClass} ${sizeClasses[size] || sizeClasses.lg}`}
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 md:gap-10 px-6 md:px-10 whitespace-nowrap font-bold uppercase text-text-secondary select-none"
          >
            <span>{item}</span>
            <span className="text-primary/30">&#x25C8;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
