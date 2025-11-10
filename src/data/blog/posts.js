export const blogPosts = [
  {
    slug: "aws-operacoes-saas",
    date: "2025-01-15",
    heroImage: "/assets/imgs/blog/m1.jpg",
    coverImage: "/assets/imgs/blog/1.jpg",
    translations: {
      en: {
        title: "Scaling SaaS Operations with AWS",
        excerpt:
          "Lessons from migrating legacy workloads to a modern, observable stack on AWS with ECS, RDS and CloudWatch dashboards.",
        readTime: "7 min read",
        tags: ["AWS", "DevOps", "Scalability"],
        sections: [
          {
            heading: "From monolith to managed services",
            body: [
              "We moved from a single EC2 instance to a cluster orchestrated with ECS Fargate. This reduced our maintenance overhead and opened the door for zero-downtime deployments.",
              "RDS with automatic backups covered compliance requirements without the team writing custom scripts every week.",
            ],
          },
          {
            heading: "Observability matters",
            body: [
              "CloudWatch dashboards and alarms were the missing piece for proactive support. By defining SLOs per workload we anticipate incidents before users feel them.",
              "For deeper traces, AWS X-Ray combined with structured logging gives the product team visibility of slow API paths.",
            ],
          },
          {
            heading: "Cost visibility",
            body: [
              "Tagging resources and using AWS Cost Explorer allowed the finance team to allocate budgets per client cluster. That was key for new pricing experiments in 2025.",
            ],
          },
        ],
      },
      pt: {
        title: "Escalando Operações SaaS na AWS",
        excerpt:
          "O que aprendi migrando workloads legados para uma stack moderna e observável com ECS, RDS e dashboards no CloudWatch.",
        readTime: "Leitura de 7 min",
        tags: ["AWS", "DevOps", "Escalabilidade"],
        sections: [
          {
            heading: "Do monolito aos serviços gerenciados",
            body: [
              "Saímos de uma única instância EC2 para um cluster orquestrado com ECS Fargate. Isso reduziu manutenção e habilitou deploys sem downtime.",
              "O RDS com backups automáticos cobriu exigências de compliance sem que o time precisasse escrever scripts semanais.",
            ],
          },
          {
            heading: "Observabilidade como diferencial",
            body: [
              "Dashboards e alarmes no CloudWatch foram a peça que faltava para suporte proativo. Definindo SLOs por serviço, antecipamos incidentes antes do usuário perceber.",
              "Para rastros mais profundos, o AWS X-Ray com logs estruturados dá visibilidade para gargalos na API.",
            ],
          },
          {
            heading: "Visão de custos",
            body: [
              "Taguear recursos e usar o Cost Explorer permitiu que o time financeiro alocasse orçamento por cluster de cliente. Isso foi chave para testes de pricing em 2025.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "nextjs-experiencias-produto",
    date: "2024-12-02",
    heroImage: "/assets/imgs/blog/m2.jpg",
    coverImage: "/assets/imgs/blog/2.jpg",
    translations: {
      en: {
        title: "Designing Product Experiences with Next.js 14",
        excerpt:
          "Routing, caching and server actions that helped us launch new customer dashboards with real-time feeling and excellent Core Web Vitals.",
        readTime: "6 min read",
        tags: ["Next.js", "UX", "TypeScript"],
        sections: [
          {
            heading: "Why the App Router matters",
            body: [
              "Server Components keep bundles light and open the door for streaming responses. It is a big win for dashboards consumed on mobile networks.",
              "Parallel routes made it straightforward to build contextual sidebars without complex state machines on the client.",
            ],
          },
          {
            heading: "Shared layouts and performance",
            body: [
              "With shared layouts we prefetch critical data at the route level. Combined with Suspense boundaries, the UI keeps responsive even under high latency.",
              "We also embraced the Image component with AVIF format to cut hero images by 45%.",
            ],
          },
          {
            heading: "Developer experience",
            body: [
              "Type-safe APIs with tRPC and Zod inside the Next.js environment gave the team fast feedback cycles. No more mismatched payloads or guesswork between FE/BE.",
            ],
          },
        ],
      },
      pt: {
        title: "Construindo experiências de produto com Next.js 14",
        excerpt:
          "Como roteamento, cache e server actions ajudaram a lançar dashboards com sensação de tempo real e ótimo desempenho em Core Web Vitals.",
        readTime: "Leitura de 6 min",
        tags: ["Next.js", "UX", "TypeScript"],
        sections: [
          {
            heading: "App Router na prática",
            body: [
              "Server Components mantêm o bundle leve e permitem streaming de respostas, perfeito para dashboards em redes móveis.",
              "Rotas paralelas facilitaram a criação de sidebars contextuais sem state machines complexas no client.",
            ],
          },
          {
            heading: "Layouts compartilhados + performance",
            body: [
              "Layout compartilhado permite pré-buscar dados críticos no nível da rota. Com limites de Suspense, a UI segue responsiva mesmo em alta latência.",
              "Aproveitamos o componente Image com formato AVIF para reduzir em 45% as imagens de destaque.",
            ],
          },
          {
            heading: "Experiência do time",
            body: [
              "APIs tipadas com tRPC e Zod dentro do Next.js deram ciclos de feedback rápidos. Adeus payload quebrado entre frontend e backend.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "plataformas-banco-integracoes",
    date: "2024-11-10",
    heroImage: "/assets/imgs/blog/m3.jpg",
    coverImage: "/assets/imgs/blog/3.jpg",
    translations: {
      en: {
        title: "Integrating Banking Platforms with Modern APIs",
        excerpt:
          "What it takes to connect legacy ERPs, Open Finance providers and new payout flows while keeping compliance happy.",
        readTime: "8 min read",
        tags: ["Banking", "Integrations", "Security"],
        sections: [
          {
            heading: "Mapping the ecosystem",
            body: [
              "A typical accounts receivable product touches ERP, core banking, anti-fraud and notification services. Draw this flow first, then automate.",
              "The golden rule: each integration must have retry logic and idempotency keys. Banking APIs will eventually time out.",
            ],
          },
          {
            heading: "Security and compliance",
            body: [
              "Centralize secrets with AWS Secrets Manager and rotate credentials automatically. Auditors love seeing rotation evidence.",
              "LGPD and PCI demand explicit consent flows. We embedded audit trails directly in the Prisma schema to keep data lineage visible.",
            ],
          },
          {
            heading: "Monitoring operations",
            body: [
              "Grafana dashboards over Kafka topics helped business teams understand settlement timelines. Most escalations were solved without engineering.",
            ],
          },
        ],
      },
      pt: {
        title: "Integrações bancárias sem sustos",
        excerpt:
          "O que é necessário para conectar ERPs legados, provedores de Open Finance e fluxos de pagamento mantendo compliance tranquilo.",
        readTime: "Leitura de 8 min",
        tags: ["Bancos", "Integrações", "Segurança"],
        sections: [
          {
            heading: "Desenhando o ecossistema",
            body: [
              "Um produto de contas a receber toca ERP, core bancário, antifraude e notificações. Desenhe esse fluxo primeiro e só depois automatize.",
              "Regra de ouro: toda integração precisa de retentativas e chaves idempotentes. APIs bancárias vão falhar em algum momento.",
            ],
          },
          {
            heading: "Segurança e compliance",
            body: [
              "Centralize segredos com AWS Secrets Manager e faça rotação automática. Auditor gosta de ver evidência de rotação.",
              "LGPD e PCI exigem fluxo de consentimento explícito. Incorporamos trilhas de auditoria diretamente no schema do Prisma para manter a linhagem de dados visível.",
            ],
          },
          {
            heading: "Operações sob monitoramento",
            body: [
              "Dashboards Grafana sobre tópicos Kafka ajudam o time de negócios a entender prazos de liquidação. Muitas escalonamentos são resolvidos sem engenharia.",
            ],
          },
        ],
      },
    },
  },
];
