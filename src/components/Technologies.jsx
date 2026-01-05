import React from 'react'
import '../styles/technologies.css'

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-2 rounded-full text-sm font-bold">Tech Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"><span className="gradient-text">Tecnologias</span></h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Stack que utilizo para criar soluções modernas e eficientes</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fab fa-html5 text-4xl sm:text-5xl md:text-6xl text-orange-600 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">HTML5</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fab fa-css3-alt text-4xl sm:text-5xl md:text-6xl text-blue-600 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">CSS3</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fab fa-js text-4xl sm:text-5xl md:text-6xl text-yellow-600 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">JavaScript</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fas fa-wind text-4xl sm:text-5xl md:text-6xl text-cyan-600 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">Tailwind</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fab fa-php text-4xl sm:text-5xl md:text-6xl text-indigo-600 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">PHP</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fas fa-database text-4xl sm:text-5xl md:text-6xl text-green-600 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">MySQL</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fab fa-git-alt text-4xl sm:text-5xl md:text-6xl text-red-600 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">Git</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105">
            <i className="fab fa-github text-4xl sm:text-5xl md:text-6xl text-gray-800 mb-2 sm:mb-3 md:mb-4"></i>
            <p className="font-bold text-gray-900 text-sm sm:text-base">GitHub</p>
          </div>
        </div>
      </div>
    </section>
  )
}
