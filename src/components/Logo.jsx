import React from "react";

export default function Logo({ className = "h-12 md:h-14", style }) {
  return (
    <img
      src="/img/logo4.png"
      alt="MF Digital – Mauro Felix"
      width={160}
      height={40}
      loading="eager"
      decoding="async"
      draggable={false}
      className={className}
      style={{ objectFit: "contain", ...style }}
    />
  );
}