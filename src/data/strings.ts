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
    tagline: "Engenheira de Dados · pipelines · lakehouse",
    navFull: ["Artigos", "Projetos", "Sobre"],
    greet: "Olá, eu sou a Bruna",
    sub: "Transformando eventos bagunçados em pipelines em que você pode confiar.",
    oneliner: ["Gosto de construir sistemas que tornam o ", "trabalho dos outros mais simples", "."],
    homeCards: [
      { to: "articles", n: "01", label: "Artigos", desc: "Lições de pipelines reais, Spark e Delta sem jargão, e reflexões de arquitetura." },
      { to: "projects", n: "02", label: "Projetos", desc: "Ferramentas pequenas que rodam no navegador e resolvem uma coisa bem." },
      { to: "about", n: "03", label: "Sobre", desc: "Quem eu sou, como penso dados confiáveis, e como falar comigo." },
    ],
    latestLabel: "Escrevendo agora",
    seeAll: "Ver todos →",
    secWriting: "Em foco",
    secArticles: "Artigos",
    featLead: "Primeiro da série",
    readMore: "Ler artigo",
    pageIntro: {
      articles: "Escrevo pra entender melhor — e pra deixar registrado o que aprendi quebrando (e consertando) pipelines em produção.",
      projects: "Ferramentas pequenas e de propósito único — daquelas que rodam no navegador e resolvem uma coisa bem. Cada uma com link pra usar e pro código.",
      about: "Engenheira de dados, leitora de planos de execução, escritora ocasional sobre sistemas confiáveis.",
    },
    readingTime: "min de leitura",
    backToArticles: "Voltar para Artigos",
    catsExtra: "Produção",
    catLabelAll: "Todos",
    emptyArticles: "Nada por aqui ainda — em breve.",
    projLive: "Abrir",
    projCode: "Código",
    aboutBio: [
      "Sou engenheira de dados. Passo os dias transformando eventos bagunçados em pipelines em que as pessoas conseguem confiar — e, às vezes à noite, escrevendo sobre isso.",
      "Gosto do tipo de problema que parece chato por fora e é fascinante por dentro: por que esse job ficou lento, por que esse número não bate, por que ninguém confia nesse dashboard. Quase sempre a resposta é menos glamourosa e mais interessante do que parece.",
      "Acredito em sistemas simples, observáveis e honestos sobre os próprios limites. Prefiro uma arquitetura que eu consiga explicar num guardanapo a uma que impressiona no diagrama e assombra na produção.",
      "No fundo, o que me move é simples: gosto de construir sistemas que tornam o trabalho dos outros mais simples.",
    ],
    aboutFactsLabel: "Em resumo",
    aboutFacts: ["Sorocaba, SP · Brasil", "Spark · Delta · Azure", "Escrevendo: série sobre Spark", "Aberta a conversar sobre dados confiáveis"],
    aboutContact: "Fala comigo",
    footCta: "Vamos construir algo confiável.",
    footNote: "Feito com café e logs limpos · Sorocaba, SP",
    ipNote: "O conteúdo publicado neste site — incluindo artigos, trechos de código, diagramas e materiais originais — não pode ser reproduzido, redistribuído ou usado comercialmente sem autorização prévia por escrito.",
    ipShort: "© 2026 Bruna Scarpelli",
    kickerArticles: "Escrita técnica",
    kickerProjects: "Ferramentas pequenas",
    kickerAbout: "Quem está por trás",
  },
  en: {
    tagline: "Data Engineer · pipelines · lakehouse",
    navFull: ["Articles", "Projects", "About"],
    greet: "Hi, I'm Bruna",
    sub: "Turning messy events into pipelines you can trust.",
    oneliner: ["I enjoy building systems that make ", "other people's work simpler", "."],
    homeCards: [
      { to: "articles", n: "01", label: "Articles", desc: "Lessons from real pipelines, Spark and Delta without the jargon, and architecture reflections." },
      { to: "projects", n: "02", label: "Projects", desc: "Small tools that run in the browser and do one thing well." },
      { to: "about", n: "03", label: "About", desc: "Who I am, how I think about reliable data, and how to reach me." },
    ],
    latestLabel: "Writing now",
    seeAll: "See all →",
    secWriting: "In focus",
    secArticles: "Articles",
    featLead: "First in the series",
    readMore: "Read article",
    pageIntro: {
      articles: "I write to understand better — and to keep a record of what I learned breaking (and fixing) pipelines in production.",
      projects: "Small, single-purpose tools — the kind that run in the browser and do one thing well. Each one with a link to use it and to the code.",
      about: "Data engineer, reader of execution plans, occasional writer about reliable systems.",
    },
    readingTime: "min read",
    backToArticles: "Back to Articles",
    catsExtra: "Production",
    catLabelAll: "All",
    emptyArticles: "Nothing here yet — soon.",
    projLive: "Open",
    projCode: "Code",
    aboutBio: [
      "I'm a data engineer. I spend my days turning messy events into pipelines people can trust — and, sometimes at night, writing about it.",
      "I like the kind of problem that looks boring on the outside and is fascinating on the inside: why did this job get slow, why doesn't this number add up, why does no one trust this dashboard. The answer is almost always less glamorous and more interesting than it seems.",
      "I believe in systems that are simple, observable and honest about their limits. I'd rather have an architecture I can explain on a napkin than one that dazzles in a diagram and haunts you in production.",
      "At the core, what drives me is simple: I enjoy building systems that make other people's work simpler.",
    ],
    aboutFactsLabel: "In short",
    aboutFacts: ["Sorocaba, SP · Brazil", "Spark · Delta · Azure", "Writing: a series on Spark", "Open to talk about reliable data"],
    aboutContact: "Get in touch",
    footCta: "Let's build something reliable.",
    footNote: "Made with coffee and clean logs · Sorocaba, SP",
    ipNote: "The content published on this website, including articles, code samples, diagrams and original materials, may not be reproduced, redistributed or used commercially without prior written permission.",
    ipShort: "© 2026 Bruna Scarpelli",
    kickerArticles: "Technical writing",
    kickerProjects: "Small tools",
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
