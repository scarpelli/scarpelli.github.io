import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Loaders apontam para o diretório content/ na RAIZ do projeto (não src/content),
// para honrar o fluxo "é só largar um Markdown em content/articles". O diretório
// content/templates fica FORA das bases abaixo, então nunca vira página/feed.

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/articles" }),
  schema: z.object({
    title: z.string(),
    // slug opcional; se ausente, o id do arquivo (nome sem extensão) é usado
    slug: z.string().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    language: z.enum(["pt", "en"]).default("pt"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    summary: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    status: z.enum(["live", "wip", "archived"]).default("live"),
    stack: z.array(z.string()).default([]),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    cardImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    language: z.enum(["pt", "en"]).default("pt"),
  }),
});

export const collections = { articles, projects };
