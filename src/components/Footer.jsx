import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-24 opacity-80" />
        </div>

        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Mauro Felix. Todos os direitos reservados.
        </p>

        <div className="flex gap-3">
          {[
            { icon: 'fab fa-github', href: 'https://github.com/mauro-fe' },
            { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/mauro-felix-846a08268/' },
            { icon: 'fab fa-whatsapp', href: 'https://wa.me/5544999506302' },
          ].map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition-all duration-300 hover:border-gray-200 hover:text-gray-600 hover:bg-gray-50"
            >
              <i className={`${s.icon} text-sm`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
