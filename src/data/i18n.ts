// Helper de i18n para o chrome bilíngue renderizado estaticamente.
//
// Como o site é estático, renderizamos AMBOS os idiomas no HTML e deixamos o
// script client-side (site-client.ts) escolher qual mostrar, lendo
// localStorage['bs-lang']. Cada string traduzível vira um <span> com os dois
// textos guardados em data-pt / data-en; o idioma inicial é PT (default), e o
// script troca o textContent no load e a cada clique no toggle.
//
// Uso em .astro:  <Fragment set:html={t(pt, en)} />
//   ou               set:html={t(STR.pt.x, STR.en.x)}

const escAttr = (s: string) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string),
  );

/** Span bilíngue. Mostra PT por padrão; o client troca para EN se necessário. */
export function t(pt: string, en: string): string {
  return `<span class="i18n" data-pt="${escAttr(pt)}" data-en="${escAttr(en)}">${escAttr(pt)}</span>`;
}
