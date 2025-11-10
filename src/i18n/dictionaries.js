export const dictionaries = {
  en: {
    meta: {
      siteName: "Ryan Figueredo",
      description:
        "Full-stack developer building scalable SaaS platforms, dashboards, and mobile apps with Next.js, Node.js, Prisma, and AWS.",
    },
    nav: {
      links: [
        { label: "Services", scroll: 1, href: "#services" },
        { label: "About", scroll: 2, href: "#about" },
        { label: "Portfolio", scroll: 3, href: "#portfolio" },
        { label: "Pricing", scroll: 4, href: "#pricing" },
        { label: "Contact", scroll: 5, href: "#contact" },
        { label: "Blog", scroll: 6, href: "/dark/blogs" },
      ],
      cta: "Contact Me",
    },
    navTop: {
      name: "Ryan Figueredo",
      email: "ryan@dmtn.com.br",
      socials: {
        github: "https://github.com/ryanfigueredo",
        linkedin: "https://www.linkedin.com/in/ryanfig/",
        whatsapp: "https://wa.me/5521997624873",
        instagram: "https://www.instagram.com/ryanfiguered0/",
      },
    },
    hero: {
      heading: "Hi, I'm",
      name: "Ryan Figueredo",
      description:
        "Full-stack developer focused on scalable web products, SaaS platforms, and integrations.",
      highlight: "Next.js & Node.js",
      location: "Currently living in Curitiba, Paraná (Brazil).",
      availability: "Full-Stack Developer",
      stats: [
        { value: "4+", line1: "Years of", line2: "Experience" },
        { value: "15+", line1: "Delivered", line2: "Projects" },
      ],
      cv: {
        label: "Download CV",
        pt: "Portuguese Version",
        en: "English Version",
      },
    },
    services: {
      subtitle: "My Services",
      title: "Transforming ideas into digital products",
      items: [
        {
          title: "Full-Stack Development",
          description:
            "End-to-end development of web applications with Next.js, React, Node.js, and Prisma, including API design and database modelling.",
        },
        {
          title: "SaaS Platforms",
          description:
            "Building multi-tenant SaaS products with authentication, billing flows, role-based access, dashboards, and third-party integrations.",
        },
        {
          title: "Infrastructure & DevOps",
          description:
            "Deployments on AWS and Vercel, Docker setup, CI/CD pipelines, monitoring, and automation for reliable software delivery.",
        },
        {
          title: "Mobile Development",
          description:
            "Native iOS apps using Swift, UIKit, and SwiftUI with integrations to Firebase, analytics, and custom REST APIs.",
        },
      ],
    },
    skills: {
      subtitle: "My Skills",
      title: "Technologies & Training",
      bars: [
        { title: "Next.js / React", percent: "95%" },
        { title: "Node.js / Express", percent: "90%" },
        { title: "TypeScript", percent: "88%" },
        { title: "AWS / Docker", percent: "80%" },
      ],
      certifications: [
        { year: "2024", title: "Full Stack Club — Advanced Next.js Training" },
        { year: "2024", title: "Santander Bootcamp — Java & Spring" },
        {
          year: "2023",
          title:
            "Pontifícia Universidade Católica do Paraná — Information Systems",
        },
      ],
    },
    portfolio: {
      subtitle: "Portfolio",
      title: "Selected Projects",
      cta: "View All Projects",
      items: [
        {
          title: "Elias Document Management",
          description:
            "Contract-compliant system with secure uploads to AWS S3, client onboarding flows, and admin dashboards with document tracking.",
          category: "SaaS",
          link: "https://github.com/ryanfigueredo/eliasmvp",
        },
        {
          title: "Receivables Platform — Quero Parcelado",
          description:
            "FinTech platform for issuing duplicates, calculating rates, and generating PDFs with hierarchical access (Master > Assignor > Debtor).",
          category: "FinTech",
          link: "#",
        },
        {
          title: "Stockly Inventory Control",
          description:
            "Inventory management system with product catalogue, stock movements, and reporting for small and mid-sized retailers.",
          category: "Operations",
          link: "https://github.com/ryanfigueredo/stockly",
        },
        {
          title: "Finance Dashboard",
          description:
            "Financial dashboard for tracking revenue, expenses, and projections with interactive charts and exportable reports.",
          category: "Dashboard",
          link: "https://github.com/ryanfigueredo/finance-pedro",
        },
        {
          title: "Admin SaaS Dashboard",
          description:
            "White-label back office with role management, contract uploads, activity tracking, and PostgreSQL integration.",
          category: "SaaS",
          link: "#",
        },
        {
          title: "Swift Native App",
          description:
            "iOS native application using Swift and SwiftUI with Firebase authentication, push notifications, and REST integrations.",
          category: "Mobile",
          link: "#",
        },
      ],
    },
    testimonials: {
      subtitle: "Testimonials",
      title: "Trusted by happy clients",
      items: [
        {
          quote:
            "Ryan supported our team with end-to-end delivery, from architecture to launch. The handoff was impeccable and the product is ready for scale.",
          name: "Leonardo Silva",
          role: "CEO — Quero Parcelado",
        },
        {
          quote:
            "He led the development of the Elias platform integrating Supabase, NextAuth, and AWS flawlessly. We hit all milestones without delays.",
          name: "Ana Beatriz Martins",
          role: "Product Lead — Elias Gestão",
        },
      ],
    },
    pricing: {
      subtitle: "Engagement Models",
      title: "Flexible collaboration options",
      plans: [
        {
          name: "Sprint Pack",
          price: "$1,200",
          period: "per sprint",
          features: [
            "1 week discovery and planning",
            "Delivery of prioritized features",
            "Review meeting and handoff",
            "Support during sprint week",
          ],
        },
        {
          name: "Fractional CTO",
          price: "$2,800",
          period: "per month",
          features: [
            "Roadmap definition and tech leadership",
            "Team rituals and code reviews",
            "Prioritised backlog and delivery management",
            "Up to 3 concurrent initiatives",
          ],
        },
        {
          name: "Full Project",
          price: "On demand",
          period: "project",
          features: [
            "Scope estimation and milestones",
            "Design system and component library",
            "Infrastructure setup (AWS / Vercel)",
            "Launch and hypercare period",
          ],
        },
      ],
      cta: "Discuss your project",
    },
    contact: {
      subtitle: "Get in touch",
      title: "Let’s build something great",
      description:
        "If you want to work together or simply start a conversation, feel free to reach out via email or social networks.",
      phone: "+55 (22) 99802-5040",
      socials: [
        { label: "GitHub", url: "https://github.com/ryanfigueredo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/ryanfig/" },
        { label: "WhatsApp", url: "https://wa.me/5521997624873" },
        { label: "Instagram", url: "https://www.instagram.com/ryanfiguered0/" },
      ],
      form: {
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Message",
        button: "Send message",
      },
    },
    blog: {
      subtitle: "Insights",
      title: "Latest articles & updates",
      cta: "View all posts",
      readMore: "Read more",
      posts: [
        {
          title: "Scaling SaaS Operations with AWS",
          date: "Jan 15, 2025",
          link: "/dark/blogs/aws-operacoes-saas",
          comments: "",
          image: "/assets/imgs/blog/1.jpg",
        },
        {
          title: "Designing Product Experiences with Next.js 14",
          date: "Dec 02, 2024",
          link: "/dark/blogs/nextjs-experiencias-produto",
          comments: "",
          image: "/assets/imgs/blog/2.jpg",
        },
        {
          title: "Integrating Banking Platforms with Modern APIs",
          date: "Nov 10, 2024",
          link: "/dark/blogs/plataformas-banco-integracoes",
          comments: "",
          image: "/assets/imgs/blog/3.jpg",
        },
      ],
    },
    footer: {
      text: "© {year} Ryan Figueredo. Built with dedication and a love for shipping products.",
    },
    buttons: {
      viewProject: "View project",
      download: "Download",
    },
    blogPage: {
      heroSubtitle: "Blog",
      heroTitle: "Articles on scalable products, cloud and finance tech",
      heroDescription:
        "Notes from real projects I delivered with teams in Brazil — architecture decisions, what went well and what to avoid next time.",
      latestLabel: "Latest article",
      readMore: "Read article",
      tagsLabel: "Topics",
      moreTitle: "More posts",
    },
  },
  pt: {
    meta: {
      siteName: "Ryan Figueredo",
      description:
        "Desenvolvedor full-stack construindo plataformas SaaS, dashboards e apps mobile com Next.js, Node.js, Prisma e AWS.",
    },
    nav: {
      links: [
        { label: "Serviços", scroll: 1, href: "#services" },
        { label: "Sobre", scroll: 2, href: "#about" },
        { label: "Portfólio", scroll: 3, href: "#portfolio" },
        { label: "Investimento", scroll: 4, href: "#pricing" },
        { label: "Contato", scroll: 5, href: "#contact" },
        { label: "Blog", scroll: 6, href: "/dark/blogs" },
      ],
      cta: "Fale Comigo",
    },
    navTop: {
      name: "Ryan Figueredo",
      email: "ryan@dmtn.com.br",
      socials: {
        github: "https://github.com/ryanfigueredo",
        linkedin: "https://www.linkedin.com/in/ryanfig/",
        whatsapp: "https://wa.me/5521997624873",
        instagram: "https://www.instagram.com/ryanfiguered0/",
      },
    },
    hero: {
      heading: "Olá, eu sou",
      name: "Ryan Figueredo",
      description:
        "Desenvolvedor full-stack focado em produtos digitais escaláveis, plataformas SaaS e integrações.",
      highlight: "Next.js & Node.js",
      location: "Resido em Curitiba (PR), Brasil.",
      availability: "Desenvolvedor Full-Stack",
      stats: [
        { value: "4+", line1: "Anos de", line2: "Experiência" },
        { value: "15+", line1: "Projetos", line2: "Entregues" },
      ],
      cv: {
        label: "Download CV",
        pt: "Versão em Português",
        en: "Versão em Inglês",
      },
    },
    services: {
      subtitle: "Meus Serviços",
      title: "Transformando ideias em produtos digitais",
      items: [
        {
          title: "Desenvolvimento Full-Stack",
          description:
            "Construção completa de aplicações web com Next.js, React, Node.js e Prisma, incluindo APIs e modelagem de dados.",
        },
        {
          title: "Plataformas SaaS",
          description:
            "Criação de produtos SaaS multi-tenant com autenticação, billing, permissões, dashboards e integrações de terceiros.",
        },
        {
          title: "Infraestrutura & DevOps",
          description:
            "Deploy em AWS e Vercel, configuração de Docker, pipelines CI/CD, monitoramento e automações.",
        },
        {
          title: "Desenvolvimento Mobile",
          description:
            "Aplicativos iOS nativos com Swift, UIKit e SwiftUI integrados a Firebase, analytics e APIs REST personalizadas.",
        },
      ],
    },
    skills: {
      subtitle: "Minhas Skills",
      title: "Tecnologias & Formação",
      bars: [
        { title: "Next.js / React", percent: "95%" },
        { title: "Node.js / Express", percent: "90%" },
        { title: "TypeScript", percent: "88%" },
        { title: "AWS / Docker", percent: "80%" },
      ],
      certifications: [
        {
          year: "2024",
          title: "Full Stack Club — Formação Avançada em Next.js",
        },
        { year: "2024", title: "Santander Bootcamp — Java & Spring" },
        {
          year: "2023",
          title:
            "Pontifícia Universidade Católica do Paraná — Sistemas de Informação",
        },
      ],
    },
    portfolio: {
      subtitle: "Portfólio",
      title: "Projetos em destaque",
      cta: "Ver todos os projetos",
      items: [
        {
          title: "Elias — Gestão de Documentos",
          description:
            "Sistema contratual com uploads seguros na AWS S3, onboarding de clientes e painéis administrativos com controle de documentos.",
          category: "SaaS",
          link: "https://github.com/ryanfigueredo/eliasmvp",
        },
        {
          title: "Plataforma de Duplicatas — Quero Parcelado",
          description:
            "FinTech para emissão de duplicatas, cálculo de taxas e geração de PDFs com hierarquia Master > Cedente > Sacado.",
          category: "FinTech",
          link: "#",
        },
        {
          title: "Stockly — Controle de Estoque",
          description:
            "Sistema de estoque com cadastro de produtos, movimentações e relatórios para varejo e PMEs.",
          category: "Operações",
          link: "https://github.com/ryanfigueredo/stockly",
        },
        {
          title: "Finance Dashboard",
          description:
            "Dashboard financeiro para acompanhar receitas, despesas e projeções com gráficos interativos e exports.",
          category: "Dashboard",
          link: "https://github.com/ryanfigueredo/finance-pedro",
        },
        {
          title: "Admin SaaS Dashboard",
          description:
            "Back office white-label com gestão de acessos, upload de contratos, trilha de atividades e PostgreSQL.",
          category: "SaaS",
          link: "#",
        },
        {
          title: "App Nativo em Swift",
          description:
            "Aplicativo iOS com Swift e SwiftUI integrado a Firebase, push notifications e APIs REST personalizadas.",
          category: "Mobile",
          link: "#",
        },
      ],
    },
    testimonials: {
      subtitle: "Depoimentos",
      title: "Clientes e parceiros satisfeitos",
      items: [
        {
          quote:
            "O Ryan conduziu nosso time do planejamento ao lançamento. A entrega foi impecável e o produto está pronto para escalar.",
          name: "Leonardo Silva",
          role: "CEO — Quero Parcelado",
        },
        {
          quote:
            "Ele liderou o desenvolvimento da plataforma Elias integrando Supabase, NextAuth e AWS sem atrasos. Cumprimos todos os marcos.",
          name: "Ana Beatriz Martins",
          role: "Product Lead — Elias Gestão",
        },
      ],
    },
    pricing: {
      subtitle: "Modelos de contratação",
      title: "Opções flexíveis de colaboração",
      plans: [
        {
          name: "Pacote Sprint",
          price: "R$ 5.800",
          period: "por sprint",
          features: [
            "1 semana de discovery e planejamento",
            "Entrega de features priorizadas",
            "Reunião de revisão e handoff técnico",
            "Suporte durante a semana do sprint",
          ],
        },
        {
          name: "CTO Fracionado",
          price: "R$ 12.000",
          period: "por mês",
          features: [
            "Definição de roadmap e liderança técnica",
            "Rituais de time e code reviews",
            "Backlog priorizado e acompanhamento",
            "Até 3 iniciativas simultâneas",
          ],
        },
        {
          name: "Projeto Completo",
          price: "Sob demanda",
          period: "projeto",
          features: [
            "Estimativa de escopo e marcos",
            "Design system e biblioteca de componentes",
            "Setup de infraestrutura (AWS / Vercel)",
            "Lançamento e período de hypercare",
          ],
        },
      ],
      cta: "Converse sobre seu projeto",
    },
    contact: {
      subtitle: "Entre em contato",
      title: "Vamos construir algo incrível",
      description:
        "Quer trabalhar comigo ou trocar uma ideia sobre o seu projeto? Mande um e-mail ou chame nas redes.",
      phone: "+55 21 99762-4873",
      socials: [
        { label: "GitHub", url: "https://github.com/ryanfigueredo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/ryanfig/" },
        { label: "WhatsApp", url: "https://wa.me/5521997624873" },
        { label: "Instagram", url: "https://www.instagram.com/ryanfiguered0/" },
      ],
      form: {
        namePlaceholder: "Nome",
        emailPlaceholder: "E-mail",
        subjectPlaceholder: "Assunto",
        messagePlaceholder: "Mensagem",
        button: "Enviar mensagem",
      },
    },
    blog: {
      subtitle: "Insights",
      title: "Últimos artigos & notícias",
      cta: "Ver todos os posts",
      readMore: "Ler mais",
      posts: [
        {
          title: "Escalando Operações SaaS na AWS",
          date: "15 Jan 2025",
          link: "/dark/blogs/aws-operacoes-saas",
          comments: "",
          image: "/light/assets/imgs/blog/1.jpg",
        },
        {
          title: "Construindo experiências de produto com Next.js 14",
          date: "02 Dez 2024",
          link: "/dark/blogs/nextjs-experiencias-produto",
          comments: "",
          image: "/light/assets/imgs/blog/2.jpg",
        },
        {
          title: "Integrações bancárias sem sustos",
          date: "10 Nov 2024",
          link: "/dark/blogs/plataformas-banco-integracoes",
          comments: "",
          image: "/light/assets/imgs/blog/3.jpg",
        },
      ],
    },
    footer: {
      text: "© {year} Ryan Figueredo. Criado com dedicação e foco em entregar produtos.",
    },
    buttons: {
      viewProject: "Ver projeto",
      download: "Download",
    },
    blogPage: {
      heroSubtitle: "Blog",
      heroTitle: "Artigos sobre produtos escaláveis, cloud e finanças",
      heroDescription:
        "Anotações de projetos que liderei no Brasil — decisões de arquitetura, lições aprendidas e como evitar armadilhas.",
      latestLabel: "Último artigo",
      readMore: "Ler artigo",
      tagsLabel: "Tópicos",
      moreTitle: "Mais posts",
    },
  },
};
