import React, { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);
  const progressRef = useRef(null);

  /* ── Show/hide on scroll + progress ring ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? scrollY / totalHeight : 0;

      setVisible(scrollY > 400);

      // Update SVG circle dashoffset for progress ring
      if (progressRef.current) {
        const circumference = 2 * Math.PI * 20; // r=20
        progressRef.current.style.strokeDashoffset =
          circumference - progress * circumference;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── GSAP enter/exit ── */
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    if (visible) {
      gsap.to(btn, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(btn, {
        opacity: 0,
        y: 16,
        scale: 0.85,
        duration: 0.35,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [visible]);

  const handleClick = () => {
    // Bounce animation on click
    gsap.to(btnRef.current, {
      scale: 0.88,
      duration: 0.1,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(btnRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
        });
      },
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    gsap.to(btnRef.current, {
      y: -3,
      scale: 1.08,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(".scroll-top-arrow", {
      y: -2,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "elastic.out(1, 0.6)",
    });
    gsap.to(".scroll-top-arrow", {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const circumference = 2 * Math.PI * 20;

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      style={{
        width: 48,
        height: 48,
        opacity: 0,
        transform: "translateY(16px) scale(0.85)",
        pointerEvents: "none",
      }}
    >
      {/* Progress ring SVG */}
      <svg
        className="absolute inset-0 -rotate-90"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="var(--border-subtle)"
          strokeWidth="1.5"
        />
        {/* Progress */}
        <circle
          ref={progressRef}
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="url(#scrollGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
        <defs>
          <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Button core */}
      <div
        className="relative flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-xl"
        style={{
          background: "var(--surface-card-solid)",
          border: "1px solid var(--border-subtle)",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,242,255,0.1) inset",
        }}
      >
        <ArrowUp
          size={15}
          className="scroll-top-arrow text-gray-400 transition-colors duration-300"
        />
      </div>
    </button>
  );
}
