import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// Feed único com PT + EN. Drafts ficam de fora em produção (não são carregados
// no build). Ordenado por data desc.
export async function GET(context) {
  const all = await getCollection("articles", (e) => import.meta.env.DEV || !e.data.draft);
  const items = all
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((a) => ({
      title: a.data.title,
      pubDate: a.data.date,
      description: a.data.seoDescription ?? a.data.summary,
      link: `/articles/${a.data.slug ?? a.id}/`,
    }));

  return rss({
    title: "Bruna Scarpelli · Artigos",
    description: "Lições de pipelines reais, Spark e Delta sem jargão, e reflexões de arquitetura.",
    site: context.site,
    items,
  });
}
