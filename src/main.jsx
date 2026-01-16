import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css"; // Aponte para o arquivo que realmente existe

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
