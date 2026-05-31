// Comportamentos client-side, portados de site.js.
// - estado de idioma (localStorage 'bs-lang')
// - toggle PT/EN: troca textos i18n + visibilidade de itens por idioma + botão ativo
// - reveal-on-scroll (IntersectionObserver)
// - menu mobile (burger)
// - fade de fontes prontas (.fonts-ready)

type Lang = "pt" | "en";

function getLang(): Lang {
  try {
    return (localStorage.getItem("bs-lang") as Lang) || "pt";
  } catch {
    return "pt";
  }
}
function setLang(l: Lang) {
  try {
    localStorage.setItem("bs-lang", l);
  } catch {
    /* ignore */
  }
}

// Aplica o idioma: textos bilíngues, visibilidade por data-lang, html[lang], botões.
function applyLang(lang: Lang) {
  document.documentElement.lang = lang;

  // 1) trocar textos do chrome bilíngue
  document.querySelectorAll<HTMLElement>(".i18n").forEach((el) => {
    const v = el.getAttribute(lang === "en" ? "data-en" : "data-pt");
    if (v !== null) el.textContent = v;
  });

  // 2) mostrar/ocultar conteúdo marcado por idioma (artigos/projetos)
  //    elementos com [data-lang] só aparecem no idioma correspondente
  document.querySelectorAll<HTMLElement>("[data-lang]").forEach((el) => {
    el.hidden = el.getAttribute("data-lang") !== lang;
  });

  // 3) avisar listas que podem precisar reagir (ex.: estado "vazio")
  document.querySelectorAll<HTMLElement>("[data-lang-empty]").forEach((el) => {
    const list = el.previousElementSibling as HTMLElement | null;
    const anyVisible =
      !!list && Array.from(list.children).some((c) => !(c as HTMLElement).hidden);
    el.hidden = anyVisible;
  });

  // 4) botões de idioma ativos
  document.querySelectorAll<HTMLButtonElement>(".lang button[data-lang-btn]").forEach((b) => {
    b.classList.toggle("on", b.getAttribute("data-lang-btn") === lang);
  });
}

function wireLangButtons() {
  document.querySelectorAll<HTMLButtonElement>(".lang button[data-lang-btn]").forEach((b) => {
    b.addEventListener("click", () => {
      const l = b.getAttribute("data-lang-btn") as Lang;
      if (l !== getLang()) {
        setLang(l);
        applyLang(l);
      }
    });
  });
}

function wireMobileMenu() {
  const burger = document.querySelector<HTMLElement>("[data-burger]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  if (!burger || !menu) return;
  burger.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
  });
}

function wireRevealObserver() {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => io.observe(el));
}

function markFontsReady() {
  const mark = () => document.documentElement.classList.add("fonts-ready");
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(mark);
  setTimeout(mark, 1600);
}

function init() {
  applyLang(getLang());
  wireLangButtons();
  wireMobileMenu();
  wireRevealObserver();
  markFontsReady();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
