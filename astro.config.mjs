// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Hosting: domínio próprio / user page (scarpelli.github.io).
//   site:  URL absoluta do site — necessária para RSS e sitemap.
//   base:  '/' porque é user page. Se algum dia virar GitHub Pages de PROJETO
//          (servido em /scarpelli-site/), troque para base: '/scarpelli-site'
//          e os links internos já se ajustam via import.meta.env.BASE_URL.
export default defineConfig({
  site: "https://scarpelli.github.io",
  base: "/",
  output: "static",
  integrations: [mdx(), sitemap()],
  markdown: {
    // Sem tema do Shiki: deixa o CSS (.article-body pre, fundo navy) estilizar
    // os blocos de código, preservando o visual original do site.
    syntaxHighlight: false,
  },
});
