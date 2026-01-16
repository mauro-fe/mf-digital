import React from "react";
import styles from "./Services.module.css";

export default function Card({ iconClass, title, description }) {
  return (
    <div className={styles.cardContainer}>
      <div className="group relative h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-10 transition-all duration-500 hover:border-transparent shadow-xl">
        {/* Efeito de Brilho que "passa" pelo card */}
        <div className={styles.shineEffect} />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Ícone com gradiente e animação */}
          <div
            className={`${styles.iconWrapper} mb-8 flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-gray-900 text-white shadow-2xl group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500`}
          >
            <i className={`${iconClass} text-4xl`} />
          </div>

          <h3 className="mb-4 text-2xl font-black text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-lg font-medium leading-relaxed text-gray-500 group-hover:text-gray-700">
            {description}
          </p>

          {/* Rodapé do Card: Link sutil */}
          <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            Saber mais <i className="fas fa-arrow-right text-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
