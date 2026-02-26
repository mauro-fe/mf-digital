import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import App from "./App";

// Import existing global stylesheet (keeps legacy styles for now)
// Import Tailwind + global styles (processed by PostCSS/Tailwind)
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

/* ── Safety net: force GSAP‑hidden content visible after 6 s ── */
setTimeout(() => {
  document.querySelectorAll('[style*="visibility"]').forEach((el) => {
    if (getComputedStyle(el).visibility === "hidden") {
      el.style.visibility = "visible";
      el.style.opacity = "1";
    }
  });
}, 6000);
