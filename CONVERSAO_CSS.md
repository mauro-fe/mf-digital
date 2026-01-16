# Conversão Tailwind → CSS Customizado

## Arquivos CSS já atualizados:
- ✅ global.css
- ✅ nav.css
- ✅ hero.css
- ✅ about.css
- ✅ services.css
- ✅ projects.css
- ✅ components.css (Card, Process, FAQ, ScrollTop)

## Próximos passos:

### 1. Atualizar os CSS que faltam:

Substitua o conteúdo de cada arquivo:

#### technologies.css
Substituir todo o conteúdo por classes como `.technologies-section`, `.technologies-grid`, `.tech-card`, etc.

#### contact.css
Substituir por classes `.contact-section`, `.contact-grid`, `.contact-card`, etc.

#### footer.css
Substituir por classes `.footer`, `.footer-container`, `.footer-logo`, etc.

### 2. Atualizar componentes React:

Cada componente precisa ter as classes Tailwind substituídas pelas classes CSS customizadas. Exemplo:

**Antes (Tailwind):**
```jsx
<div className="py-24 px-4 bg-white">
```

**Depois (CSS customizado):**
```jsx
<div className="about-section">
```

### 3. Importar os CSS nos componentes:

Adicionar no topo de cada componente:
```jsx
import '../styles/about.css'
```

### 4. Status dos componentes:
- ❌ Nav.jsx
- ❌ Hero.jsx
- ❌ About.jsx
- ❌ Services.jsx
- ❌ Card.jsx
- ❌ ProjectCard.jsx
- ❌ Process.jsx
- ❌ Technologies.jsx
- ❌ Projects.jsx
- ❌ FAQ.jsx
- ❌ Contact.jsx
- ❌ Testimonials.jsx
- ❌ Footer.jsx
- ❌ ScrollTop.jsx

## Você quer que eu:
A) Continue atualizando componente por componente (vai levar muitas mensagens)
B) Te mostro um exemplo de 2-3 componentes e você adapta os outros?
C) Crio um script que faz a conversão automática?

Qual opção prefere?
