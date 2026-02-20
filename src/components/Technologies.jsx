import React from 'react'

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-html5 text-4xl text-orange-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">HTML5</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-css3-alt text-4xl text-blue-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">CSS3</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-js text-4xl text-yellow-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">JavaScript</p>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-react text-4xl text-sky-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">React</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fas fa-wind text-4xl text-cyan-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">Tailwind</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-bootstrap text-4xl text-indigo-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">Bootstrap</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-php text-4xl text-purple-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">PHP</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fas fa-database text-4xl text-green-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">MySQL</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-git-alt text-4xl text-red-600 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">Git</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <i className="fab fa-github text-4xl text-gray-800 mb-3"></i>
            <p className="font-bold text-gray-900 text-sm">GitHub</p>
          </div>
        </div>
      </div>
    </section>  
  )
}
