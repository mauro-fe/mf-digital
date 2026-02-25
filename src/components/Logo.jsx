import React from "react";

export default function Logo({ className = "h-12 md:h-14", style }) {
  return (
    <img
      src="/img/optimized/logo7.avif"
      alt="MF Digital - Mauro Felix"
      className={className}
      width={160}
      height={44}
      loading="eager"
      decoding="async"
      style={{ objectFit: "contain", ...style }}
    />
  );
}
