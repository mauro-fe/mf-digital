import React from "react";
import styles from "./Projects.module.css";

export default function ProjectCard({ title, description, tags, link, image }) {
  return (
    <div
      className={`${styles.card} group shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.25)]`}
    >
      {/* Área da Imagem / Link */}
      <div className={styles.imageWrapper}>
        <img
          src={image || "/img/placeholder-project.png"}
          alt={title}
          className={styles.projectImage}
        />

        <div className={styles.overlay}>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Badge de "Live View" */}
        <div className="absolute top-6 right-6 z-20 scale-0 group-hover:scale-100 transition-transform duration-500">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-colors"
          >
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-8">
        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 font-medium leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            className="text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-blue-600 transition-all flex items-center gap-2"
          >
            Explorar Projeto
            <div className="w-8 h-[2px] bg-gray-200 group-hover:w-12 group-hover:bg-blue-600 transition-all"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
