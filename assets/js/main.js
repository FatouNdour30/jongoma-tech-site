/* ==========================================================================
   Jongoma Tech — site vitrine : en-tête, pied de page, liens vers la plateforme,
   catalogue des services, animations. Aucune dépendance en dehors de Bootstrap.
   ========================================================================== */

/** Adresse de la plateforme (espace client, demandes, communauté). À changer à la mise en ligne. */
const JONGOMA_CONFIG = {
  platformUrl: "http://localhost:3000",
  lang: "fr",
};

const platform = (path) => `${JONGOMA_CONFIG.platformUrl}/${JONGOMA_CONFIG.lang}${path}`;

const THEMES = {
  health: "Santé",
  protection: "Protection",
  education: "Éducation",
  work: "Emploi",
  finance: "Finance",
  agriculture: "Agriculture",
  transparency: "Transparence",
  digital: "Numérique",
};

const NAV = [
  { href: "index.html", label: "Accueil", key: "home" },
  { href: "qui-sommes-nous.html", label: "Qui sommes-nous", key: "about" },
  { href: "services.html", label: "Services", key: "services" },
  { href: "portfolio.html", label: "Portfolio", key: "portfolio" },
  { href: "ressources.html", label: "Ressources", key: "resources" },
  { href: "blog.html", label: "Blog", key: "blog" },
];

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/* ---------- En-tête ---------- */
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const active = document.body.dataset.page;
  // Thème éditorial (fond sombre) : logotype en texte clair à la place de l'image prune.
  const brand = document.body.classList.contains("ed")
    ? '<span class="brand-text">JONGOMA<small>TECH</small></span>'
    : '<img src="assets/img/logo-wordmark.png" alt="Jongoma Tech" class="brand-word">';
  el.innerHTML = `
  <nav class="navbar navbar-expand-xl navbar-jg fixed-top py-2">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="index.html" aria-label="Jongoma Tech">
        <img src="assets/img/logo-mark.png" alt="" class="brand-logo">
        ${brand}
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
        aria-controls="mainNav" aria-expanded="false" aria-label="Ouvrir le menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto gap-lg-1">
          ${NAV.map(
            (n) => `<li class="nav-item"><a class="nav-link ${n.key === active ? "active" : ""}" ${n.key === active ? 'aria-current="page"' : ""} href="${n.href}">${n.label}</a></li>`,
          ).join("")}
        </ul>
        <div class="d-flex flex-wrap align-items-center gap-2 py-3 py-xl-0">
          <a class="btn btn-sm btn-gold px-3 fw-semibold ${active === "project" ? "active" : ""}" href="projet.html"><i class="bi bi-lightning-charge-fill me-1"></i>J'ai un projet</a>
        </div>
      </div>
    </div>
  </nav>`;
}

/* ---------- Pied de page ---------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
  <footer class="footer-jg mt-5">
    <div class="ribbon"></div>
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-5">
          <a href="index.html" class="d-inline-flex align-items-center gap-2 mb-3">
            <img src="assets/img/logo-mark.png" alt="" style="height:52px">
            <img src="assets/img/logo-wordmark.png" alt="Jongoma Tech" class="brand-word-img" style="height:32px">
          </a>
          <p><span class="pill"><span class="dot"></span> Startup africaine · 100 % féminine</span></p>
          <p class="text-muted" style="max-width:26rem">Dirigée par des femmes, Jongoma Tech met la technologie au service des femmes et d'un monde meilleur, avec des solutions concrètes aux maux de notre société.</p>
          <p class="fst-italic fw-semibold border-start border-3 ps-3" style="border-color:var(--jg-gold)!important">Ce que Jongoma promet, Jongoma le prouve.</p>
          <p class="eyebrow mb-0">Innover | Connecter | Impacter</p>
        </div>
        <div class="col-md-6 col-lg-3">
          <p class="eyebrow text-muted mb-3">Explorer</p>
          <ul class="list-unstyled footer-links fw-semibold">
            ${[...NAV, { href: "plateforme.html", label: "La plateforme" }, { href: "projet.html", label: "J'ai un projet" }, { href: "index.html#partenaire", label: "Devenir partenaire" }].map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
          </ul>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="rounded-xl p-4 text-white" style="background:linear-gradient(135deg,var(--jg-plum-2),var(--jg-plum))">
            <p class="font-display fs-5 mb-2">Quel problème voulez-vous résoudre ?</p>
            <p class="small text-white-50">Une responsable Jongoma vous répond en 48 heures.</p>
            <a class="btn btn-primary btn-sm mb-2" href="${platform("/demande")}">Décrire mon besoin</a>
            <a class="btn btn-light-outline btn-sm mb-2" href="${platform("/connexion")}">Espace client</a>
          </div>
        </div>
      </div>
    </div>
    <div class="border-top">
      <div class="container py-3 d-flex flex-column flex-md-row justify-content-between gap-2 small text-muted">
        <span><i class="bi bi-shield-check text-gold me-1"></i> Vos données sont protégées conformément à la loi sénégalaise (CDP) et au RGPD.</span>
        <span>© <span data-year></span> Jongoma Tech · Tous droits réservés · Photos d'illustration (Unsplash)</span>
      </div>
    </div>
  </footer>
  <button class="to-top" type="button" aria-label="Revenir en haut"><i class="bi bi-arrow-up"></i></button>`;
  el.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
}

/* ---------- Liens vers la plateforme ---------- */
function wirePlatformLinks() {
  document.querySelectorAll("[data-platform]").forEach((a) => (a.href = platform(a.dataset.platform)));
  // Formulaires « Quel problème voulez-vous résoudre ? » : la demande se termine sur la plateforme.
  document.querySelectorAll("form[data-ask]").forEach((form) =>
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const params = new URLSearchParams();
      for (const key of ["besoin", "service"]) if (data.get(key)) params.set(key, String(data.get(key)).trim());
      window.location.href = platform(`/demande${params.toString() ? `?${params}` : ""}`);
    }),
  );
}

/* ---------- Cartes de services ---------- */
function serviceCard(s) {
  const status =
    s.status === "flagship"
      ? '<span class="badge-status flagship"><i class="bi bi-star-fill me-1"></i>Service phare</span>'
      : s.status === "soon"
        ? '<span class="badge-status soon"><i class="bi bi-clock me-1"></i>Bientôt</span>'
        : "";
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
      <p class="label-sm text-magenta mb-1">Le problème</p>
      <p class="fw-semibold mb-3">${escapeHtml(s.problem)}</p>
      <p class="label-sm text-gold mb-1">Notre réponse</p>
      <p class="small text-muted flex-grow-1">${escapeHtml(s.solution)}</p>
      <div class="d-flex flex-wrap gap-2 pt-3 border-top mt-2">
        <button type="button" class="btn btn-sm btn-plum" data-service="${s.id}">En savoir plus</button>
        <a class="btn btn-sm btn-soft" href="${platform(`/demande?service=${s.id}`)}">${s.status === "soon" ? "Être informée" : "Faire une demande"}</a>
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
      <h2 class="modal-title h3 mt-2">${escapeHtml(s.name)}</h2>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
  </div>
  <div class="modal-body">
    <p class="label-sm text-magenta small fw-bold text-uppercase mb-1">Le problème</p>
    <p class="fw-semibold">${escapeHtml(s.problem)}</p>
    <p class="text-muted">${escapeHtml(s.solution)}</p>
    <p class="small"><strong>${s.branch === "pro" ? "Clients" : "Financement"} :</strong> ${escapeHtml(s.audience)}</p>
    ${s.does.length ? `<h3 class="h6 mt-4">Ce que nous faisons</h3><ul class="list-unstyled small">${list(s.does, "bi-check-circle-fill", "text-magenta")}</ul>` : ""}
    ${s.delivers.length ? `<h3 class="h6 mt-3">Ce que vous recevez</h3><ul class="list-unstyled small">${list(s.delivers, "bi-gift-fill", "text-gold")}</ul>` : ""}
    ${s.sensitive ? '<p class="small rounded-4 p-3 bg-plum mt-3 mb-0"><i class="bi bi-lock-fill text-gold-light me-2"></i>Ce service traite des situations sensibles. Vos informations sont isolées, leur accès est limité et tracé.</p>' : ""}
  </div>
  <div class="modal-footer border-0">
    <a class="btn btn-primary" href="${platform(`/demande?service=${s.id}`)}">${s.status === "soon" ? "Être informée du lancement" : "Faire une demande"} <i class="bi bi-arrow-right ms-1"></i></a>
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

const statusOrder = (s) => (s.status === "flagship" ? 0 : s.status === "soon" ? 2 : 1);

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
  themesEl.innerHTML = [["", "Tous les thèmes"], ...Object.entries(THEMES)]
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
    grid.innerHTML = list.length
      ? list.map((s) => `<div class="col-md-6 col-xl-4">${serviceCard(s)}</div>`).join("")
      : '<div class="col-12"><p class="card-jg p-5 text-center text-muted">Aucun service ne correspond à votre recherche.</p></div>';
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
