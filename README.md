# mf-digital — Migração para React (Vite)

Este repositório contém o site estático original e um scaffold inicial para migrar para React usando Vite.

Rápido guia para começar:

1. Instalar dependências

```bash
npm install
```

2. Rodar em desenvolvimento

```bash
npm run dev
```

3. Build de produção

```bash
npm run build
```

O que foi feito:

- `index.html` atualizado para montar o `#root` do React (mantive links para fonts/Tailwind e `style.css`).
- `package.json` criado com scripts `dev`, `build`, `preview`.
- `src/main.jsx` e `src/App.jsx` adicionados como ponto de partida.

Observação: o comportamento do antigo `script.js` foi migrado para componentes React e hooks; o arquivo original foi removido.

Próximos passos recomendados:

- Converter a navegação (`<nav>`) em componente `Nav.jsx`.
- Migrar seções (Hero, Sobre, Serviços, Projetos, Contato) para componentes React reutilizáveis.
- Integrar o comportamento de `script.js` usando `useEffect` em componentes quando necessário.

Se quiser, eu já começo migrando a `nav` e o `hero` para React — confirme quais seções você prefere primeiro.
