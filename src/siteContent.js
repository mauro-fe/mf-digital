/**
 * ============================================================
 * SITE CONTENT — Configuração Central
 * ============================================================
 * Edite aqui para atualizar qualquer texto, dado, link ou
 * array de conteúdo do site. Tudo em um único lugar!
 * ============================================================
 */

import {
    Zap,
    Code,
    Code2,
    Smartphone,
    ShieldCheck,
    MessagesSquare,
    PenTool,
    Rocket,
    Globe,
    Settings,
    Wrench,
    MonitorSmartphone,
    Wind,
    Database,
    PieChart,
    Smile,
    Scissors,
    Gamepad2,
    Link,
    Mail,
    Linkedin,
} from "lucide-react";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiPhp,
    SiGit,
    SiGithub,
    SiWhatsapp,
    SiInstagram,
} from "@icons-pack/react-simple-icons";

/* ─────────────────────────────────────────
   INFORMAÇÕES PESSOAIS / CONTATO
───────────────────────────────────────── */
export const AUTHOR = {
    name: "Mauro Felix",
    email: "devmaurofelix@gmail.com",
    role: "Engenheiro de Software",
    photo: "/img/dev-mauro.jpeg",
    photoAlt: "Mauro Felix - Desenvolvedor Web",
    stackLabel: "Full Stack",
    stackDesc: "React · PHP · MySQL",
    copyright: `© ${new Date().getFullYear()} Mauro Felix. Todos os direitos reservados.`,

    // Links das redes sociais — altere só aqui
    links: {
        whatsapp: "https://wa.me/5544999506302",
        linkedin: "https://www.linkedin.com/in/mauro-felix-846a08268/",
        github: "https://github.com/mauro-fe",
        instagram: "https://www.instagram.com/mauroo_felix/",
    },

    // Ícones + links para o rodapé e seção de contato
    socials: [
        { icon: SiGithub, href: "https://github.com/mauro-fe", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/mauro-felix-846a08268/", label: "LinkedIn" },
        { icon: SiWhatsapp, href: "https://wa.me/5544999506302", label: "WhatsApp" },
        { icon: SiInstagram, href: "https://www.instagram.com/mauroo_felix/", label: "Instagram" },
    ],
};

/* ─────────────────────────────────────────
   NAVEGAÇÃO
───────────────────────────────────────── */
export const NAV = {
    links: [
        { label: "Início", href: "#home" },
        { label: "Sobre", href: "#sobre" },
        { label: "Serviços", href: "#servicos" },
        { label: "Projetos", href: "#projetos" },
        { label: "Planos", href: "#planos" },
        { label: "FAQ", href: "#faq" },
        { label: "Contato", href: "#contato" },
    ],
    cta: "Solicitar Orçamento",
};

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
export const HERO = {
    badge: "Disponível para novos projetos",
    titleLine1: "Transformo ideias em",
    titleHighlight: "experiências digitais",
    titleLine2: "de alto impacto",
    ariaLabel: "Transformo ideias em experiências digitais de alto impacto",
    description:
        "Desenvolvimento de aplicações web de alta performance e design imersivo. Transformo a visão do seu negócio em",
    descriptionHighlight: "código limpo e resultados reais",
    cta1: "Solicitar Orçamento",
    cta1Href: "#contato",
    cta2: "Ver Projetos",
    cta2Href: "#projetos",
    stats: [
        { label: "Projetos Entregues", num: 50, suffix: "+" },
        { label: "Anos de Experiência", num: 3, suffix: "+" },
        { label: "Satisfação", num: 100, suffix: "%" },
    ],
};

/* ─────────────────────────────────────────
   SOBRE (ABOUT)
───────────────────────────────────────── */
export const ABOUT = {
    badge: "Sobre Mim",
    title: "Engenharia de software focada em",
    titleHighlight: "resultados reais",
    subtitle:
        "Combino excelência técnica com visão estratégica para arquitetar soluções digitais que escalam, performam e convertem.",
    // Parágrafos — strong1/strong2 para texto em negrito
    paragraph1: {
        prefix: "Sou um ",
        strong: "Engenheiro de Software",
        suffix:
            " especializado em criar ecossistemas web robustos, desde landing pages de alta conversão até sistemas complexos sob medida.",
    },
    paragraph2: {
        prefix: "Meu diferencial é a união de ",
        strong1: "design imersivo",
        connector: " com",
        strong2: " arquitetura escalável",
        suffix:
            " — garantindo que seu projeto não apenas impressione visualmente, mas entregue performance excepcional.",
    },
    paragraph3:
        "Trabalho com metodologias ágeis, comunicação transparente e foco absoluto no retorno sobre o seu investimento (ROI).",
    cta1: "Iniciar Projeto",
    cta1Href: "#contato",
    cta2: "Ver Portfólio",
    cta2Href: "#projetos",
    highlights: [
        {
            icon: Zap,
            title: "Performance",
            desc: "Aplicações otimizadas que carregam em milissegundos",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            glowColor: "rgba(251,191,36,0.15)",
        },
        {
            icon: Code,
            title: "Arquitetura Limpa",
            desc: "Código escalável, documentado e fácil de manter",
            color: "text-primary-light",
            bg: "bg-primary/10",
            glowColor: "rgba(244,63,94,0.15)",
        },
        {
            icon: Smartphone,
            title: "Design Fluido",
            desc: "Experiência perfeita em qualquer tamanho de tela",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            glowColor: "rgba(52,211,153,0.15)",
        },
        {
            icon: ShieldCheck,
            title: "Segurança",
            desc: "Proteção robusta contra vulnerabilidades modernas",
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            glowColor: "rgba(251,113,133,0.15)",
        },
    ],
};

/* ─────────────────────────────────────────
   SERVIÇOS
───────────────────────────────────────── */
export const SERVICES = {
    badge: "Nossos Serviços",
    title: "Soluções digitais que",
    titleHighlight: "impulsionam seu negócio",
    items: [
        {
            icon: Globe,
            title: "Site Profissional",
            description:
                "Presença digital completa para apresentar sua marca com profundidade.",
        },
        {
            icon: MonitorSmartphone,
            title: "Landing Page",
            description: "Feita para conversão. Ideal para campanhas e lançamentos.",
        },
        {
            icon: Settings,
            title: "Sistema Personalizado",
            description:
                "Desenvolvemos sistemas únicos, feitos para o fluxo do seu negócio.",
        },
        {
            icon: Rocket,
            title: "SaaS & Integrações",
            description:
                "Conectamos automações e serviços em um ecossistema inteligente.",
        },
        {
            icon: Code2,
            title: "Site Single Page",
            description:
                "Tudo em uma única página, direto ao ponto, com design impactante.",
        },
        {
            icon: Wrench,
            title: "Manutenção & Suporte",
            description:
                "Atualizações, correções e novas funcionalidades para manter seu projeto no ar.",
        },
    ],
};

/* ─────────────────────────────────────────
   PROCESSO (PROCESS)
───────────────────────────────────────── */
export const PROCESS = {
    badge: "Metodologia Ágil",
    title: "Como transformo sua",
    titleHighlight: "visão em software",
    subtitle:
        "Um processo de engenharia transparente, focado em previsibilidade, qualidade de código e entrega de valor contínuo.",
    steps: [
        {
            num: "01",
            title: "Descoberta & Estratégia",
            desc: "Mergulho profundo no seu modelo de negócio para mapear requisitos, definir a arquitetura ideal e alinhar expectativas de ROI.",
            icon: MessagesSquare,
            color: "#f43f5e",
        },
        {
            num: "02",
            title: "UX/UI & Prototipagem",
            desc: "Criação de interfaces de alta fidelidade focadas em conversão e usabilidade, validadas antes de escrever a primeira linha de código.",
            icon: PenTool,
            color: "#f97316",
        },
        {
            num: "03",
            title: "Engenharia & Código",
            desc: "Desenvolvimento ágil com stack moderna (React, Node, etc). Código limpo, escalável e otimizado para máxima performance.",
            icon: Code,
            color: "#fbbf24",
        },
        {
            num: "04",
            title: "Deploy & Evolução",
            desc: "Lançamento seguro em infraestrutura cloud, monitoramento de métricas e suporte contínuo para escalar a aplicação.",
            icon: Rocket,
            color: "#fb7185",
        },
    ],
};

/* ─────────────────────────────────────────
   TECNOLOGIAS
───────────────────────────────────────── */
export const TECHNOLOGIES = {
    badge: "Habilidades",
    title: "Tecnologias que",
    titleHighlight: "domino",
    subtitle:
        "Ferramentas modernas para criar soluções robustas, escaláveis e de alta performance.",
    items: [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" },
        { name: "CSS3", icon: SiCss, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
        { name: "React", icon: SiReact, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
        { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
        { name: "PHP", icon: SiPhp, color: "text-blue-300", bg: "bg-blue-500/10 border-blue-500/20" },
        { name: "MySQL", icon: Database, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
        { name: "Git", icon: SiGit, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-300", bg: "bg-white/[0.04] border-white/[0.08]" },
    ],
};

/* ─────────────────────────────────────────
   PROJETOS
───────────────────────────────────────── */
export const PROJECTS = {
    badge: "Nossos Projetos",
    title: "Projetos que",
    titleHighlight: "geram resultados",
    subtitle:
        "Conheça alguns dos trabalhos reais que desenvolvi com dedicação e foco em qualidade.",
    cta: "Quer um projeto personalizado? Fale comigo",
    ctaHref: "#contato",
    items: [
        {
            icon: PieChart,
            title: "Lukrato",
            description:
                "Plataforma SaaS de controle financeiro pessoal com dashboard, relatórios, gamificação, sistema de indicação e planos freemium.",
            tags: ["React", "PHP", "MySQL", "Tailwind", "SaaS"],
            link: "https://lukrato.com.br/",
            image: "/img/lukrato.png",
            gradient: "from-emerald-600 to-teal-700",
        },
        {
            icon: Smile,
            title: "Odontologia Xavier",
            description:
                "Site institucional premium para clínica odontológica estética em Curitiba, com galeria, depoimentos e agendamento via WhatsApp.",
            tags: ["React", "Tailwind", "Vite", "SEO"],
            link: "https://www.odontologiaxavier.com.br",
            image: "/img/xavier.png",
            gradient: "from-sky-600 to-blue-800",
        },
        {
            icon: Scissors,
            title: "Social Barber Shop",
            description:
                "Site para barbearia com catálogo de serviços, tabela de valores, galeria de cortes e localização integrada.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://social-barber-shop.vercel.app",
            image: "/img/social-barber-shop.png",
            gradient: "from-amber-600 to-orange-800",
        },
        {
            icon: Gamepad2,
            title: "Jump Up",
            description:
                "Jogo web interativo de reflexos e inteligência. Plataforma de entretenimento com interface imersiva e desafios progressivos.",
            tags: ["HTML", "CSS", "JavaScript", "Canvas"],
            link: "https://jump-up-phi.vercel.app",
            image: "/img/jumpup.png",
            gradient: "from-purple-600 to-fuchsia-700",
        },

    ],
};

/* ─────────────────────────────────────────
   DEPOIMENTOS (TESTIMONIALS)
───────────────────────────────────────── */
export const TESTIMONIALS = {
    badge: "Depoimentos",
    title: "O que meus clientes",
    titleHighlight: "dizem sobre mim",
    subtitle: "Feedback real de quem confiou no meu trabalho.",
    items: [
        {
            name: "Ricardo Oliveira",
            role: "Empresário — Loja Virtual",
            quote:
                "O Mauro entregou um e-commerce incrível, muito acima do que eu esperava. As vendas online aumentaram 40% no primeiro mês!",
            rating: 5,
        },
        {
            name: "Ana Carolina",
            role: "Marketing Digital",
            quote:
                "Profissional excepcional. A landing page que ele criou trouxe o triplo de leads que tínhamos antes. Comunicação impecável.",
            rating: 5,
        },
        {
            name: "Pedro Santos",
            role: "Fundador — Startup Tech",
            quote:
                "Código limpo, entregas no prazo e sempre disponível. O sistema que desenvolveu economiza horas do nosso time todo dia.",
            rating: 5,
        },
    ],
};

/* ─────────────────────────────────────────
   PLANOS (PLANS)
───────────────────────────────────────── */
export const PLANS = {
    badge: "Nossos Planos",
    title: "Escolha o plano ideal para o",
    titleHighlight: "seu momento",
    subtitle:
        "Soluções transparentes com preço justo. Sem surpresas, sem taxas escondidas.",
    cta: "Quero esse",
    ctaHref: "#contato",
    items: [
        {
            tag: "PRESENÇA DIGITAL",
            name: "Landing Page",
            price: "R$ 997",
            desc: "Foco em conversão e campanhas",
            popular: false,
            features: [
                "Design focado em conversão",
                "Página única otimizada",
                "Integração com WhatsApp",
                "Formulário de contato",
                "SEO básico",
                "Entrega em até 7 dias",
            ],
        },
        {
            tag: "MAIS COMPLETO",
            name: "Site Profissional",
            price: "R$ 1.997",
            desc: "Presença digital completa",
            popular: true,
            features: [
                "Design moderno e responsivo",
                "Até 5 páginas",
                "Painel administrativo",
                "SEO técnico avançado",
                "Integração com redes sociais",
                "Hospedagem + domínio",
                "30 dias de suporte",
            ],
        },
        {
            tag: "SOLUÇÕES INTELIGENTES",
            name: "Sistema Web",
            price: "Sob consulta",
            desc: "Soluções personalizadas",
            popular: false,
            features: [
                "Análise de requisitos",
                "Sistema 100% personalizado",
                "Banco de dados dedicado",
                "API e integrações",
                "Dashboard administrativo",
                "Treinamento incluído",
                "Suporte contínuo",
            ],
        },
    ],
};

/* ─────────────────────────────────────────
   FAQ
───────────────────────────────────────── */
export const FAQ = {
    badge: "Dúvidas Frequentes",
    title: "Perguntas",
    titleHighlight: "frequentes",
    subtitle: "Respostas rápidas para as dúvidas mais comuns antes de começar.",
    items: [
        {
            q: "Qual o prazo médio de entrega de um projeto?",
            a: "Depende da complexidade. Sites simples levam de 1 a 2 semanas, landing pages de 5 a 7 dias, e sistemas mais complexos de 3 a 6 semanas. Sempre defino prazos claros antes de iniciar.",
        },
        {
            q: "Como funciona o processo de pagamento?",
            a: "Trabalho com um sinal de 50% na contratação e os 50% restantes na entrega final. Para projetos maiores, posso parcelar conforme marcos de entrega.",
        },
        {
            q: "Você oferece suporte após a entrega?",
            a: "Sim. Todo projeto inclui 30 dias de suporte gratuito para correções. Além disso, ofereço planos de manutenção mensal para atualizações contínuas.",
        },
        {
            q: "Preciso fornecer o conteúdo ou você cuida disso?",
            a: "Idealmente, o conteúdo (textos e imagens) é fornecido por você. Mas posso ajudar com sugestões de texto e indicar bancos de imagens profissionais.",
        },
        {
            q: "Qual a diferença entre um site e uma landing page?",
            a: "Um site tem múltiplas páginas e funcionalidades variadas. Uma landing page é uma página única, estratégica, focada em uma ação específica — como captar leads ou vender um produto.",
        },
    ],
};

/* ─────────────────────────────────────────
   CONTATO (CONTACT)
───────────────────────────────────────── */
export const CONTACT = {
    badge: "Contato",
    title: "Pronto para transformar sua",
    titleHighlight: "presença digital",
    titleEnd: "?",
    subtitle:
        "Vamos conversar sobre o seu projeto. Escolha o canal que preferir — respondo em até 2 horas durante horário comercial.",
    channels: [
        {
            icon: SiWhatsapp,
            label: "WhatsApp",
            desc: "Resposta rápida",
            href: "https://wa.me/5544999506302",
            hoverColor: "hover:border-emerald-500/30 hover:bg-emerald-500/10",
            iconColor: "text-emerald-400",
            iconBg: "bg-emerald-500/10",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            desc: "Vamos conectar",
            href: "https://www.linkedin.com/in/mauro-felix-846a08268/",
            hoverColor: "hover:border-blue-500/30 hover:bg-blue-500/10",
            iconColor: "text-blue-400",
            iconBg: "bg-blue-500/10",
        },
        {
            icon: Mail,
            label: "E-mail",
            desc: "devmaurofelix@gmail.com",
            href: "mailto:devmaurofelix@gmail.com",
            hoverColor: "hover:border-red-500/30 hover:bg-red-500/10",
            iconColor: "text-red-400",
            iconBg: "bg-red-500/10",
        },
    ],
};

/* ─────────────────────────────────────────
   RODAPÉ (FOOTER)
───────────────────────────────────────── */
export const FOOTER = {
    phrases: [
        "SUA MARCA COM PRESENÇA DIGITAL",
        "DESIGN COM PROPÓSITO",
        "CÓDIGO COM ALMA",
        "FEITO COM SUA IDENTIDADE",
        "RESULTADOS QUE IMPRESSIONAM",
    ],
    // Ícones do rodapé (subconjunto dos socials do AUTHOR)
    socials: [
        { icon: SiGithub, href: "https://github.com/mauro-fe" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/mauro-felix-846a08268/" },
        { icon: SiWhatsapp, href: "https://wa.me/5544999506302" },
    ],
};

/* ─────────────────────────────────────────
   MARQUEE (FAIXAS DE TEXTO ROLANTES)
───────────────────────────────────────── */
export const MARQUEE_WORDS = [
    "Design com propósito",
    "Código com alma",
    "Resultados reais",
    "Presença digital",
    "Alta performance",
    "Experiência única",
];

export const MARQUEE_TESTIMONIALS = [
    "Resultado incrível",
    "Superou expectativas",
    "Profissional de alto nível",
    "Comunicação impecável",
    "Entrega no prazo",
    "Recomendo 100%",
    "Parceiro ideal",
    "Qualidade premium",
];
