import React from 'react'

const techs = [
  { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", bg: "bg-orange-50 border-orange-100" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500", bg: "bg-blue-50 border-blue-100" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500", bg: "bg-yellow-50 border-yellow-100" },
  { name: "React", icon: "fab fa-react", color: "text-sky-500", bg: "bg-sky-50 border-sky-100" },
  { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-cyan-500", bg: "bg-cyan-50 border-cyan-100" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-violet-500", bg: "bg-violet-50 border-violet-100" },
  { name: "PHP", icon: "fab fa-php", color: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100" },
  { name: "MySQL", icon: "fas fa-database", color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-100" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-red-500", bg: "bg-red-50 border-red-100" },
  { name: "GitHub", icon: "fab fa-github", color: "text-gray-700", bg: "bg-gray-50 border-gray-200" },
]

export default function Technologies({ className = '' }) {
  return (
    <section id="tecnologias" className={`relative py-24 md:py-32 px-5 sm:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
            <i className="fas fa-layer-group text-[10px]" />
            Tech Stack
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-lg text-gray-900 mb-6">
            Tecnologias que{" "}
            <span className="gradient-text">domino</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="body-lg text-gray-500">
            Ferramentas modernas para criar soluções robustas, escaláveis e de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {techs.map((tech, index) => (
            <div
              key={tech.name}
              data-aos="flip-up"
              data-aos-delay={index * 60}
              className={`group flex flex-col items-center gap-3 rounded-2xl border ${tech.bg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <i className={`${tech.icon} text-3xl ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
              <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
