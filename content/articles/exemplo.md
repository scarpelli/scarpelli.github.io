---
title: "Artigo de exemplo (rascunho)"
slug: "exemplo"
summary: "Um rascunho de exemplo. Como draft é true, ele aparece em desenvolvimento (npm run dev) mas NÃO é publicado em produção. Apague este arquivo quando tiver seu primeiro artigo de verdade."
date: 2026-01-01
language: "pt"
category: "Meta · Exemplo"
tags: ["exemplo"]
featured: false
draft: true
seoTitle: "Artigo de exemplo"
seoDescription: "Rascunho de demonstração."
---

Este é o corpo do artigo, escrito em **Markdown**. Você pode usar tudo que o
Markdown oferece — parágrafos, listas, código, citações.

## Um subtítulo

Aqui vai mais um parágrafo de exemplo, só para mostrar o estilo de leitura.

```python
df = spark.read.format("delta").load(path)
df.groupBy("user_id").count().explain(mode="formatted")
```

> Uma citação fica assim.

- Item de lista um
- Item de lista dois
- Item de lista três

Para publicar um artigo de verdade: crie um novo arquivo `.md` em
`content/articles/`, preencha o frontmatter e troque `draft` para `false`.
