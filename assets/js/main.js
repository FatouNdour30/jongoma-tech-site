/* ==========================================================================
   Jongoma Tech — site vitrine : en-tête, pied de page, liens vers la plateforme,
   catalogue des services, animations. Aucune dépendance en dehors de Bootstrap.
   Bilingue : les pages anglaises portent lang="en" et un nom en « -en.html ».
   ========================================================================== */

/** Langue de la page : <html lang="en"> pour les pages anglaises. */
const LANG = document.documentElement.lang === "en" ? "en" : "fr";
/** Choisit le texte dans la langue de la page. */
const tr = (fr, en) => (LANG === "en" ? en : fr);
/** Lien vers une page du site dans la langue courante : « services.html » devient « services-en.html » en anglais. */
const page = (href) => (LANG === "en" ? href.replace(/^([\w-]+)\.html/, "$1-en.html") : href);

/** Adresse de la plateforme (espace client, demandes, communauté). À changer à la mise en ligne. */
const JONGOMA_CONFIG = {
  platformUrl: "http://localhost:3000",
  lang: LANG,
  // false tant que la plateforme n'est pas en ligne : les liens « Espace client », « Créer mon compte »… sont masqués.
  platformOnline: false,
  // Adresse qui reçoit les formulaires (projet, partenariat). Vide : le message est affiché pour être copié.
  contactEmail: "",
};

const platform = (path) => `${JONGOMA_CONFIG.platformUrl}/${JONGOMA_CONFIG.lang}${path}`;

const THEMES = tr(
  { health: "Santé", protection: "Protection", education: "Éducation", work: "Emploi", finance: "Finance", agriculture: "Agriculture", transparency: "Transparence", digital: "Numérique" },
  { health: "Health", protection: "Protection", education: "Education", work: "Jobs", finance: "Finance", agriculture: "Agriculture", transparency: "Transparency", digital: "Digital" },
);

const NAV = [
  { href: "index.html", label: tr("Accueil", "Home"), key: "home" },
  { href: "qui-sommes-nous.html", label: tr("Qui sommes-nous", "About us"), key: "about" },
  { href: "services.html", label: "Services", key: "services" },
  { href: "portfolio.html", label: "Portfolio", key: "portfolio" },
  { href: "ressources.html", label: tr("Ressources", "Resources"), key: "resources" },
  { href: "blog.html", label: "Blog", key: "blog" },
];

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/** Adresse de la même page dans l'autre langue (paramètres et ancre conservés). */
function otherLangUrl() {
  let file = location.pathname.split("/").pop() || "index.html";
  if (!file.endsWith(".html")) file = "index.html";
  const target = LANG === "en" ? file.replace(/-en\.html$/, ".html") : file.replace(/\.html$/, "-en.html");
  return target + location.search + location.hash;
}

/* ---------- En-tête ---------- */
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const active = document.body.dataset.page;
  // Thème éditorial (fond sombre) : logotype en texte clair à la place de l'image prune.
  const brand = document.body.classList.contains("ed")
    ? '<span class="brand-text">JONGOMA<small>TECH</small></span>'
    : '<img src="assets/img/logo-wordmark.png" alt="Jongoma Tech" class="brand-word">';
  const langSwitch = `
    <div class="lang-toggle" role="group" aria-label="${tr("Langue", "Language")}">
      ${LANG === "fr" ? '<span class="on" aria-current="true">FR</span>' : `<a href="${otherLangUrl()}" hreflang="fr" lang="fr" title="Version française">FR</a>`}
      ${LANG === "en" ? '<span class="on" aria-current="true">EN</span>' : `<a href="${otherLangUrl()}" hreflang="en" lang="en" title="English version">EN</a>`}
    </div>`;
  el.innerHTML = `
  <nav class="navbar navbar-expand-xl navbar-jg fixed-top py-2">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="${page("index.html")}" aria-label="Jongoma Tech">
        <img src="assets/img/logo-mark.png" alt="" class="brand-logo">
        ${brand}
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
        aria-controls="mainNav" aria-expanded="false" aria-label="${tr("Ouvrir le menu", "Open the menu")}">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto gap-lg-1">
          ${NAV.map(
            (n) => `<li class="nav-item"><a class="nav-link ${n.key === active ? "active" : ""}" ${n.key === active ? 'aria-current="page"' : ""} href="${page(n.href)}">${n.label}</a></li>`,
          ).join("")}
        </ul>
        <div class="d-flex flex-wrap align-items-center gap-2 py-3 py-xl-0">
          ${langSwitch}
          <a class="btn btn-sm btn-gold px-3 fw-semibold ${active === "project" ? "active" : ""}" href="${page("projet.html")}"><i class="bi bi-lightning-charge-fill me-1"></i>${tr("J'ai un projet", "Start a project")}</a>
        </div>
      </div>
    </div>
  </nav>`;
}

/* ---------- Pied de page ---------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const links = [
    ...NAV,
    { href: "projet.html", label: tr("J'ai un projet", "Start a project") },
    { href: "index.html#partenaire", label: tr("Devenir partenaire", "Become a partner") },
    { href: "mentions-legales.html", label: tr("Mentions légales", "Legal notice") },
  ];
  el.innerHTML = `
  <footer class="footer-jg mt-5">
    <div class="ribbon"></div>
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-5">
          <a href="${page("index.html")}" class="d-inline-flex align-items-center gap-2 mb-3">
            <img src="assets/img/logo-mark.png" alt="" style="height:52px">
            <img src="assets/img/logo-wordmark.png" alt="Jongoma Tech" class="brand-word-img" style="height:32px">
          </a>
          <p><span class="pill"><span class="dot"></span> ${tr("Startup africaine · fondée et dirigée par des femmes", "African startup · founded and led by women")}</span></p>
          <p class="text-muted" style="max-width:26rem">${tr(
            "Dirigée par des femmes, Jongoma Tech met la technologie au service des femmes et d'un monde meilleur, avec des solutions concrètes aux maux de notre société.",
            "Led by women, Jongoma Tech puts technology to work for women and a better world, with practical solutions to the problems our society faces.",
          )}</p>
          <p class="fst-italic fw-semibold border-start border-3 ps-3" style="border-color:var(--jg-gold)!important">${tr("Ce que Jongoma promet, Jongoma le prouve.", "What Jongoma promises, Jongoma proves.")}</p>
          <p class="eyebrow mb-0">${tr("Innover | Connecter | Impacter", "Innovate | Connect | Impact")}</p>
        </div>
        <div class="col-md-6 col-lg-3">
          <p class="eyebrow text-muted mb-3">${tr("Explorer", "Explore")}</p>
          <ul class="list-unstyled footer-links fw-semibold">
            ${links.map((n) => `<li><a href="${page(n.href)}">${n.label}</a></li>`).join("")}
          </ul>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="rounded-xl p-4 text-white" style="background:linear-gradient(135deg,var(--jg-plum-2),var(--jg-plum))">
            <p class="font-display fs-5 mb-2">${tr("Quel problème voulez-vous résoudre ?", "What problem do you want to solve?")}</p>
            <p class="small text-white-50">${tr("Nous visons une première réponse sous 48 heures ouvrées, selon la disponibilité de notre équipe.", "We aim to send a first reply within 48 working hours, depending on our team's availability.")}</p>
            <a class="btn btn-primary btn-sm mb-2" href="${page("projet.html")}">${tr("Décrire mon besoin", "Describe my need")}</a>
            <a class="btn btn-light-outline btn-sm mb-2" data-platform="/connexion" href="#">${tr("Espace client", "Client area")}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="border-top">
      <div class="container py-3 d-flex flex-column flex-md-row justify-content-between gap-2 small text-muted">
        <span><i class="bi bi-geo-alt text-gold me-1"></i> ${tr(
          "Basée à Dakar, Sénégal · Photos d'illustration : Unsplash.",
          "Based in Dakar, Senegal · Illustrative photos: Unsplash.",
        )}</span>
        <span>© <span data-year></span> Jongoma Tech · ${tr("Tous droits réservés · Photos d'illustration (Unsplash)", "All rights reserved · Illustrative photos (Unsplash)")}</span>
      </div>
    </div>
  </footer>
  <button class="to-top" type="button" aria-label="${tr("Revenir en haut", "Back to top")}"><i class="bi bi-arrow-up"></i></button>`;
  el.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
}

/* ---------- Liens vers la plateforme ---------- */
function wirePlatformLinks() {
  document.querySelectorAll("[data-platform]").forEach((a) => (a.href = platform(a.dataset.platform)));
  // Plateforme pas encore en ligne : on retire les accès au compte (et les blocs qui ne servent qu'à ça).
  if (!JONGOMA_CONFIG.platformOnline) document.querySelectorAll("[data-platform], [data-platform-only]").forEach((n) => n.remove());
  // Formulaires « Quel problème voulez-vous résoudre ? » : ils ouvrent le formulaire « J'ai un projet », pré-rempli.
  document.querySelectorAll("form[data-ask]").forEach((form) =>
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const params = new URLSearchParams();
      for (const key of ["besoin", "service"]) if (data.get(key)) params.set(key, String(data.get(key)).trim());
      window.location.href = `${page("projet.html")}${params.toString() ? `?${params}` : ""}`;
    }),
  );
}

/**
 * Envoi d'un formulaire : par e-mail si une adresse de contact est configurée,
 * sinon le message est affiché dans une fenêtre pour être copié (aucune donnée n'est perdue).
 */
function sendMessage(subject, lines) {
  const body = lines.filter(Boolean).join("\n");
  if (JONGOMA_CONFIG.contactEmail) {
    window.location.href = `mailto:${JONGOMA_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }
  let modalEl = document.getElementById("sendModal");
  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.className = "modal fade";
    modalEl.id = "sendModal";
    modalEl.tabIndex = -1;
    modalEl.innerHTML = `<div class="modal-dialog modal-dialog-centered"><div class="modal-content rounded-xl"></div></div>`;
    document.body.append(modalEl);
  }
  modalEl.querySelector(".modal-content").innerHTML = `
    <div class="modal-header border-0 pb-0">
      <h2 class="modal-title h4 font-display">${tr("Votre message est prêt", "Your message is ready")}</h2>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="${tr("Fermer", "Close")}"></button>
    </div>
    <div class="modal-body">
      <p class="small">${tr(
        "L'envoi en ligne est en cours d'activation. Copiez votre message pour le garder : nous publierons très bientôt notre adresse de contact.",
        "Online sending is being activated. Copy your message to keep it: we will publish our contact address very soon.",
      )}</p>
      <textarea class="form-control small" rows="8" readonly>${escapeHtml(`${subject}\n\n${body}`)}</textarea>
    </div>
    <div class="modal-footer border-0">
      <button type="button" class="btn btn-primary" data-copy-msg><i class="bi bi-clipboard me-1"></i>${tr("Copier le message", "Copy the message")}</button>
    </div>`;
  modalEl.querySelector("[data-copy-msg]").addEventListener("click", (e) => {
    navigator.clipboard?.writeText(modalEl.querySelector("textarea").value);
    e.currentTarget.innerHTML = `<i class="bi bi-check-lg me-1"></i>${tr("Copié", "Copied")}`;
  });
  bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

/** État d'avancement affiché sur chaque service (transparence sur ce qui est prêt). */
// Disponible : prestations numériques que l'équipe réalise dès maintenant. Sur demande : expertise ou partenaire à mobiliser.
const AVAILABLE_NOW = ["lab", "ai"];
function serviceState(s) {
  if (s.branch === "impact") return { key: "prep", cls: "prep", icon: "bi-hourglass-split", label: tr("En préparation", "In preparation") };
  return AVAILABLE_NOW.includes(s.id)
    ? { key: "ok", cls: "ok", icon: "bi-check-circle", label: tr("Disponible", "Available") }
    : { key: "req", cls: "req", icon: "bi-people", label: tr("Sur demande", "On request") };
}
/** Action proposée : un devis pour Pro, un soutien pour les programmes Impact (pas encore lancés). */
function serviceAction(s) {
  return s.branch === "impact"
    ? { href: `${page("index.html")}#partenaire`, label: tr("Soutenir ce programme", "Support this programme") }
    : { href: `${page("projet.html")}?service=${s.id}`, label: tr("Demander un devis", "Request a quote") };
}

/* ---------- Cartes de services ---------- */
function serviceCard(s) {
  const st = serviceState(s);
  const status = `<span class="badge-status state-${st.cls}"><i class="bi ${st.icon} me-1"></i>${st.label}</span>`;
  const photo = s.photo
    ? `<img src="assets/img/${s.photo}" alt="${escapeHtml(s.alt)}" loading="lazy">`
    : '<div class="w-100 h-100 d-flex align-items-center justify-content-center"><i class="bi bi-patch-check text-white" style="font-size:4rem;opacity:.85"></i></div>';
  return `
  <article class="card-jg service-card ${s.status === "flagship" ? "flagship" : ""} reveal">
    <div class="photo">
      ${photo}
      <span class="badge-branch ${s.branch}">${s.branch === "pro" ? "Pro" : "Impact"}</span>
      ${status}
      <h3>${escapeHtml(s.name)}</h3>
    </div>
    <div class="p-4 d-flex flex-column flex-grow-1">
      <p class="label-sm text-magenta mb-1">${tr("Le problème", "The problem")}</p>
      <p class="fw-semibold mb-3">${escapeHtml(s.problem)}</p>
      <p class="label-sm text-gold mb-1">${tr("Notre réponse", "Our answer")}</p>
      <p class="small text-muted flex-grow-1">${escapeHtml(s.solution)}</p>
      <div class="d-flex flex-wrap gap-2 pt-3 border-top mt-2">
        <button type="button" class="btn btn-sm btn-plum" data-service="${s.id}">${tr("En savoir plus", "Learn more")}</button>
        <a class="btn btn-sm btn-soft" href="${serviceAction(s).href}">${serviceAction(s).label}</a>
      </div>
    </div>
  </article>`;
}

function serviceModal(s) {
  const list = (items, icon, color) =>
    items.map((i) => `<li class="d-flex gap-2 mb-2"><i class="bi ${icon} ${color}"></i><span>${escapeHtml(i)}</span></li>`).join("");
  return `
  <div class="modal-header border-0 pb-0">
    <div>
      <span class="badge rounded-pill ${s.branch === "pro" ? "bg-plum" : "text-bg-primary"}">${s.branch === "pro" ? "Jongoma Pro" : "Jongoma Impact"}</span>
      <span class="badge rounded-pill text-bg-light border ms-1">${serviceState(s).label}</span>
      <h2 class="modal-title h3 mt-2">${escapeHtml(s.name)}</h2>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="${tr("Fermer", "Close")}"></button>
  </div>
  <div class="modal-body">
    <p class="label-sm text-magenta small fw-bold text-uppercase mb-1">${tr("Le problème", "The problem")}</p>
    <p class="fw-semibold">${escapeHtml(s.problem)}</p>
    <p class="text-muted">${escapeHtml(s.solution)}</p>
    <p class="small"><strong>${s.branch === "pro" ? tr("Clients", "Clients") : tr("Financement recherché", "Funding sought")}${tr(" :", ":")}</strong> ${escapeHtml(s.audience)}</p>
    ${s.branch === "impact" ? `<p class="small rounded-4 p-3 mb-3" style="background:#fdf4f8"><i class="bi bi-hourglass-split me-2"></i>${tr(
      "Ce programme est conçu mais pas encore déployé. Nous recherchons des bailleurs et des partenaires pour lancer un premier pilote.",
      "This programme is designed but not yet deployed. We are looking for donors and partners to launch a first pilot.",
    )}</p>` : ""}
    ${s.does.length ? `<h3 class="h6 mt-4">${s.branch === "impact" ? tr("Ce que le programme prévoit", "What the programme plans") : tr("Ce que nous faisons", "What we do")}</h3><ul class="list-unstyled small">${list(s.does, "bi-check-circle-fill", "text-magenta")}</ul>` : ""}
    ${s.delivers.length ? `<h3 class="h6 mt-3">${s.branch === "impact" ? tr("Ce que les bénéficiaires recevront", "What beneficiaries will receive") : tr("Ce que vous recevez", "What you receive")}</h3><ul class="list-unstyled small">${list(s.delivers, "bi-gift-fill", "text-gold")}</ul>` : ""}
    ${s.sensitive ? `<p class="small rounded-4 p-3 bg-plum mt-3 mb-0"><i class="bi bi-lock-fill text-gold-light me-2"></i>${tr(
      "Ce programme concerne des situations sensibles : la confidentialité des personnes sera une condition de son déploiement.",
      "This programme deals with sensitive situations: people's confidentiality will be a condition of its deployment.",
    )}</p>` : ""}
  </div>
  <div class="modal-footer border-0">
    <a class="btn btn-primary" href="${serviceAction(s).href}">${serviceAction(s).label} <i class="bi bi-arrow-right ms-1"></i></a>
  </div>`;
}

function wireServiceModal() {
  const modalEl = document.getElementById("serviceModal");
  if (!modalEl || !window.bootstrap) return;
  const modal = new bootstrap.Modal(modalEl);
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-service]");
    if (!btn) return;
    const s = window.JONGOMA_SERVICES.find((x) => x.id === btn.dataset.service);
    if (!s) return;
    modalEl.querySelector(".modal-content").innerHTML = serviceModal(s);
    modal.show();
  });
}

const statusOrder = (s) => ({ ok: 0, req: 1, prep: 2 })[serviceState(s).key];

/** Accueil : les services phares. */
function renderFlagships() {
  const el = document.getElementById("flagships");
  if (!el) return;
  el.innerHTML = window.JONGOMA_SERVICES.filter((s) => s.status === "flagship")
    .map((s) => `<div class="col-md-6 col-lg-4">${serviceCard(s)}</div>`)
    .join("");
}

/** Page Services : filtres par pôle, thème et recherche. */
function renderCatalog() {
  const grid = document.getElementById("catalog");
  if (!grid) return;
  const state = { branch: new URLSearchParams(location.search).get("pole") || "all", theme: null, q: "" };
  const themesEl = document.getElementById("themes");
  themesEl.innerHTML = [["", tr("Tous les thèmes", "All themes")], ...Object.entries(THEMES)]
    .map(([id, label]) => `<button type="button" class="chip ${id === "" ? "active" : ""}" data-theme="${id}">${label}</button>`)
    .join("");

  const draw = () => {
    const q = state.q.toLowerCase();
    const list = window.JONGOMA_SERVICES.filter(
      (s) =>
        (state.branch === "all" || s.branch === state.branch) &&
        (!state.theme || s.themes.includes(state.theme)) &&
        (!q || [s.name, s.problem, s.solution, s.audience].some((v) => v.toLowerCase().includes(q))),
    ).sort((a, b) => statusOrder(a) - statusOrder(b));
    document.getElementById("catalog-count").textContent = `${list.length} service${list.length > 1 ? "s" : ""}`;
    const GROUPS = [
      ["ok", tr("Disponible", "Available"), tr("Prestations que nous pouvons réaliser et livrer dès maintenant.", "Services we can deliver right now.")],
      ["req", tr("Sur demande", "On request"), tr("Prestations qui nécessitent de mobiliser une expertise, une partenaire ou des ressources.", "Services that require mobilising expertise, a partner or resources.")],
      ["prep", tr("En préparation", "In preparation"), tr("Programmes dont le financement, les partenaires ou les pilotes restent à organiser. Ils ne sont pas encore disponibles.", "Programmes whose funding, partners or pilots are still to be organised. They are not available yet.")],
    ];
    grid.innerHTML = list.length
      ? GROUPS.map(([key, title, sub]) => {
          const items = list.filter((s) => serviceState(s).key === key);
          return items.length
            ? `<div class="col-12 catalog-group"><h3 class="h4 font-display mb-1">${title} <span class="text-soft fs-6">· ${items.length}</span></h3><p class="small text-soft mb-0">${sub}</p></div>` +
                items.map((s) => `<div class="col-md-6 col-xl-4">${serviceCard(s)}</div>`).join("")
            : "";
        }).join("")
      : `<div class="col-12"><p class="card-jg p-5 text-center text-muted">${tr("Aucun service ne correspond à votre recherche.", "No service matches your search.")}</p></div>`;
    observeReveals();
    document.querySelectorAll("[data-branch]").forEach((b) => b.classList.toggle("active", b.dataset.branch === state.branch));
  };

  document.querySelectorAll("[data-branch]").forEach((b) =>
    b.addEventListener("click", () => {
      state.branch = b.dataset.branch;
      draw();
    }),
  );
  themesEl.addEventListener("click", (e) => {
    const b = e.target.closest("[data-theme]");
    if (!b) return;
    state.theme = b.dataset.theme || null;
    themesEl.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
    draw();
  });
  document.getElementById("catalog-search").addEventListener("input", (e) => {
    state.q = e.target.value.trim();
    draw();
  });
  draw();
  if (state.branch !== "all") document.getElementById("catalogue")?.scrollIntoView();
}

/** Compteurs calculés depuis le catalogue : jamais de chiffre inventé. */
function fillCounts() {
  const all = window.JONGOMA_SERVICES || [];
  if (all.length === 0) return;
  const counts = { total: all.length, pro: all.filter((s) => s.branch === "pro").length, impact: all.filter((s) => s.branch === "impact").length };
  document.querySelectorAll("[data-count]").forEach((n) => (n.textContent = counts[n.dataset.count]));
}

/* ---------- Animations et confort ---------- */
let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((n) => n.classList.add("visible"));
    return;
  }
  revealObserver ??= new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach((n) => revealObserver.observe(n));
}

function wireScroll() {
  const toTop = document.querySelector(".to-top");
  const nav = document.querySelector(".navbar-jg");
  const onScroll = () => {
    toTop?.classList.toggle("show", window.scrollY > 600);
    nav?.classList.toggle("shadow-sm", window.scrollY > 10);
    nav?.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0 }));
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  fillCounts();
  renderFlagships();
  renderCatalog();
  wirePlatformLinks();
  wireServiceModal();
  observeReveals();
  wireScroll();
});
