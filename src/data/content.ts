// Helpers compartilhados para ler as content collections.
import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;
export type Project = CollectionEntry<"projects">;

// Em dev (astro dev) drafts aparecem; em build de produção, ficam de fora.
const showDrafts = import.meta.env.DEV;

/** slug efetivo: frontmatter.slug ou o id do arquivo. */
export const articleSlug = (a: Article) => a.data.slug ?? a.id;
export const projectSlug = (p: Project) => p.data.slug ?? p.id;

/** Artigos publicáveis, ordenados por data desc. Drafts ocultos em prod. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection("articles", (e) => showDrafts || !e.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Todos os projetos, mais recentes (year) primeiro. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection("projects");
  return all.sort((a, b) => b.data.year - a.data.year);
}

/** Tempo de leitura: usa frontmatter se houver, senão estima por contagem de palavras. */
export function readingTime(a: Article): number {
  if (a.data.readingTime) return a.data.readingTime;
  const words = (a.body ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Um projeto tem página própria só se tiver corpo Markdown; senão é link-only. */
export const projectHasPage = (p: Project) => !!(p.body && p.body.trim().length > 0);
