import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import App from "./App";

// Import existing global stylesheet (keeps legacy styles for now)
// Import Tailwind + global styles (processed by PostCSS/Tailwind)
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
