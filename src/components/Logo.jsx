import React from 'react'

export default function Logo({ className = 'h-10' }) {
  return (
    <img
      src="/img/logo.png"
      alt="MF Digital - Mauro Felix"
      className={className}
    />
  )
}
