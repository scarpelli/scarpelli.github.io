// Strings da interface (chrome) + conteúdo da página "Sobre", em PT e EN.
// Portado verbatim do antigo site.js (objeto STR). Estas são strings de
// INTERFACE — não confundir com artigos/projetos, que vivem em content/ como
// Markdown. O toggle PT/EN client-side troca apenas este texto no DOM.

export type Lang = "pt" | "en";

export interface HomeCard {
  to: string;
  n: string;
  label: string;
  desc: string;
}

export interface Strings {
  tagline: string;
  navFull: [string, string, string];
  greet: string;
  sub: string;
  oneliner: [string, string, string];
  impactLabel: string;
  impact: string[];
  homeCards: HomeCard[];
  latestLabel: string;
  seeAll: string;
  secWriting: string;
  secArticles: string;
  featLead: string;
  readMore: string;
  pageIntro: { articles: string; projects: string; about: string };
  readingTime: string;
  backToArticles: string;
  catsExtra: string;
  catLabelAll: string;
  emptyArticles: string;
  projLive: string;
  projCode: string;
  aboutBio: string[];
  aboutFactsLabel: string;
  aboutFacts: string[];
  aboutContact: string;
  footCta: string;
  footNote: string;
  ipNote: string;
  ipShort: string;
  kickerArticles: string;
  kickerProjects: string;
  kickerAbout: string;
}

export const STR: Record<Lang, Strings> = {
  pt: {
    tagline: "Engenheira de Dados · Databricks · Spark · Azure",
    navFull: ["Artigos", "Projetos", "Sobre"],
    greet: "Olá, eu sou a Bruna",
    sub: "Engenheira de Dados Júnior na KIS Solutions — ~2.5 anos construindo pipelines em produção com Databricks, PySpark, Kafka e Azure.",
    oneliner: ["Gosto de construir sistemas que tornam o ", "trabalho dos outros mais simples", "."],
    impactLabel: "Impacto em produção",
    impact: [
      "Na KIS Solutions, reescrevi a unificação de perfis de um CDP: arquitetura 47× mais rápida e −98% no tempo de processamento.",
      "Integração de audiências de marketing processando +1 milhão de usuários/dia, estável em picos como a Black Friday.",
      "Sistema de alertas de qualidade de dados auditando até 1 milhão de consumidores/dia.",
    ],
    homeCards: [
      { to: "projects", n: "01", label: "Projetos", desc: "Trabalho real com dados: Neo4j + Spark, pipelines e ferramentas pequenas." },
      { to: "about", n: "02", label: "Sobre", desc: "Cargo, stack, formação e como falar comigo." },
      { to: "articles", n: "03", label: "Artigos", desc: "Notas técnicas sobre pipelines e dados." },
    ],
    latestLabel: "Escrevendo agora",
    seeAll: "Ver todos →",
    secWriting: "Em foco",
    secArticles: "Artigos",
    featLead: "Primeiro da série",
    readMore: "Ler artigo",
    pageIntro: {
      articles: "Escrevo pra entender melhor — e pra deixar registrado o que aprendi quebrando (e consertando) pipelines em produção.",
      projects: "Projetos reais — priorizando trabalho com dados (Neo4j, Spark) e ferramentas pequenas de propósito único. Cada um com link pra usar e/ou pro código quando disponível.",
      about: "Engenheira de dados júnior em produção, com base em Ciência da Computação na UFSCar.",
    },
    readingTime: "min de leitura",
    backToArticles: "Voltar para Artigos",
    catsExtra: "Produção",
    catLabelAll: "Todos",
    emptyArticles: "Nada por aqui ainda — em breve.",
    projLive: "Abrir",
    projCode: "Código",
    aboutBio: [
      "Sou engenheira de dados júnior na KIS Solutions, onde trabalho com pipelines em produção sobre Databricks, PySpark e Azure — da ingestão em streaming à arquitetura Medallion no lakehouse.",
      "Cheguei aqui pela Ciência da Computação na UFSCar e por primeiros projetos de dev web; hoje meus dias giram em torno de escala, qualidade e custo de dados.",
      "Prefiro sistemas simples, observáveis e honestos sobre os próprios limites — arquitetura que dá pra explicar num guardanapo.",
    ],
    aboutFactsLabel: "Em resumo",
    aboutFacts: ["Engenheira de Dados Júnior · KIS Solutions", "~2.5 anos em engenharia de dados", "Databricks · PySpark · Kafka · Delta · Azure", "Ciência da Computação · UFSCar", "Sorocaba, SP · Brasil"],
    aboutContact: "Fala comigo",
    footCta: "Vamos construir algo confiável.",
    footNote: "Feito com café e logs limpos · Sorocaba, SP",
    ipNote: "O conteúdo publicado neste site — incluindo artigos, trechos de código, diagramas e materiais originais — não pode ser reproduzido, redistribuído ou usado comercialmente sem autorização prévia por escrito.",
    ipShort: "© 2026 Bruna Scarpelli",
    kickerArticles: "Escrita técnica",
    kickerProjects: "Trabalho com dados",
    kickerAbout: "Quem está por trás",
  },
  en: {
    tagline: "Data Engineer · Databricks · Spark · Azure",
    navFull: ["Articles", "Projects", "About"],
    greet: "Hi, I'm Bruna",
    sub: "Junior Data Engineer at KIS Solutions — ~2.5 years building production pipelines with Databricks, PySpark, Kafka and Azure.",
    oneliner: ["I enjoy building systems that make ", "other people's work simpler", "."],
    impactLabel: "Impact in production",
    impact: [
      "At KIS Solutions, I rewrote a CDP's profile unification: 47× faster architecture and −98% processing time.",
      "Marketing audience integration processing 1M+ users/day, stable through peaks like Black Friday.",
      "Data-quality alerting auditing up to 1M consumers/day.",
    ],
    homeCards: [
      { to: "projects", n: "01", label: "Projects", desc: "Real data work: Neo4j + Spark, pipelines and small tools." },
      { to: "about", n: "02", label: "About", desc: "Role, stack, education and how to reach me." },
      { to: "articles", n: "03", label: "Articles", desc: "Technical notes on pipelines and data." },
    ],
    latestLabel: "Writing now",
    seeAll: "See all →",
    secWriting: "In focus",
    secArticles: "Articles",
    featLead: "First in the series",
    readMore: "Read article",
    pageIntro: {
      articles: "I write to understand better — and to keep a record of what I learned breaking (and fixing) pipelines in production.",
      projects: "Real projects — prioritizing data work (Neo4j, Spark) and small single-purpose tools. Each with a link to use it and/or the code when available.",
      about: "Junior data engineer working in production, grounded in Computer Science at UFSCar.",
    },
    readingTime: "min read",
    backToArticles: "Back to Articles",
    catsExtra: "Production",
    catLabelAll: "All",
    emptyArticles: "Nothing here yet — soon.",
    projLive: "Open",
    projCode: "Code",
    aboutBio: [
      "I'm a junior data engineer at KIS Solutions, where I work on production pipelines over Databricks, PySpark and Azure — from streaming ingestion to a Medallion lakehouse architecture.",
      "I got here through Computer Science at UFSCar and early web-dev projects; these days my work revolves around data scale, quality and cost.",
      "I prefer systems that are simple, observable and honest about their limits — architecture you can explain on a napkin.",
    ],
    aboutFactsLabel: "In short",
    aboutFacts: ["Junior Data Engineer · KIS Solutions", "~2.5 years in data engineering", "Databricks · PySpark · Kafka · Delta · Azure", "Computer Science · UFSCar", "Sorocaba, SP · Brazil"],
    aboutContact: "Get in touch",
    footCta: "Let's build something reliable.",
    footNote: "Made with coffee and clean logs · Sorocaba, SP",
    ipNote: "The content published on this website, including articles, code samples, diagrams and original materials, may not be reproduced, redistributed or used commercially without prior written permission.",
    ipShort: "© 2026 Bruna Scarpelli",
    kickerArticles: "Technical writing",
    kickerProjects: "Data work",
    kickerAbout: "Who's behind this",
  },
};

// Constantes de chrome compartilhadas (portadas de site.js).
export const GH_URL = "https://github.com/scarpelli";
export const LI_URL = "https://linkedin.com/in/brunascarpelli";

// Caminhos de navegação. Prefixados com BASE_URL para funcionar sob qualquer base.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
export const NAV_HREFS = [`${BASE}/articles`, `${BASE}/projects`, `${BASE}/about`];
export const withBase = (p: string) => `${BASE}/${p.replace(/^\//, "")}`;
