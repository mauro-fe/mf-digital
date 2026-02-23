import React from "react";

export default function Logo({ className = "h-12 md:h-14", style }) {
  return (
    <img
      src="/img/logo4.png"
      alt="MF Digital - Mauro Felix"
      className={className}
      style={{ objectFit: "contain", ...style }}
    />
  );
}
