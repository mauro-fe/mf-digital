import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Import existing global stylesheet (keeps legacy styles for now)
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
