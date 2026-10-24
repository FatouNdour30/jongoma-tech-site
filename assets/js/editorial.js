/* ==========================================================================
   Jongoma Tech — interactions de la page d'accueil éditoriale :
   mots qui défilent, bandeau, quiz d'orientation, curseur avant/avec, carrousels.
   ========================================================================== */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const services = window.JONGOMA_SERVICES || [];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const toPlatform = (path) => `${JONGOMA_CONFIG.platformUrl}/${JONGOMA_CONFIG.lang}${path}`;

  /* --- Mots qui défilent dans le titre --- */
  function rotator() {
    const el = document.querySelector("[data-rotator]");
    if (!el) return;
    const words = [...el.children];
    let i = 0;
    words[0].classList.add("on");
    if (reduceMotion) return;
    setInterval(() => {
      const prev = words[i];
      i = (i + 1) % words.length;
      prev.classList.replace("on", "off");
      setTimeout(() => prev.classList.remove("off"), 600);
      words[i].classList.add("on");
    }, 2200);
  }

  /* --- Bandeau défilant : les noms des services, doublés pour une boucle continue --- */
  function marquee() {
    const track = document.querySelector("[data-marquee]");
    if (!track || !services.length) return;
    const items = services.map((s) => `<span>${esc(s.name)}</span>`).join("");
    track.innerHTML = items + items;
  }

  /* --- Quiz : 2 questions, puis les services adaptés --- */
  const PROFILES = [
    { id: "women", icon: "bi-people", label: "Une femme, une famille ou une communauté", branch: "impact" },
    { id: "diaspora", icon: "bi-globe-europe-africa", label: "Je vis à l'étranger (diaspora)", branch: "any", prefer: ["diaspora"] },
    { id: "orgs", icon: "bi-buildings", label: "Une entreprise, une ONG, un bailleur ou une institution", branch: "pro" },
    { id: "tech", icon: "bi-laptop", label: "Une femme dans le numérique (ou qui veut s'y lancer)", branch: "any", theme: "digital" },
  ];
  const TOPICS = [
    { id: "health", icon: "bi-heart-pulse", label: "Santé, grossesse" },
    { id: "protection", icon: "bi-shield-check", label: "Protection, papiers, terres" },
    { id: "education", icon: "bi-mortarboard", label: "École, formation" },
    { id: "work", icon: "bi-briefcase", label: "Emploi, revenus" },
    { id: "finance", icon: "bi-wallet2", label: "Argent, épargne, paiements" },
    { id: "agriculture", icon: "bi-flower1", label: "Agriculture" },
    { id: "transparency", icon: "bi-search", label: "Suivi, preuves, évaluation" },
    { id: "digital", icon: "bi-phone", label: "Numérique" },
  ];

  function quiz() {
    const box = document.getElementById("quiz");
    if (!box) return;
    const answer = {};
    const progress = (n) => `<div class="quiz-progress mb-4" aria-hidden="true"><span style="width:${n}%"></span></div>`;
    const question = (step, title, options) => `
      ${progress(step === 1 ? 33 : 66)}
      <p class="small text-soft mb-1">Question ${step} sur 2</p>
      <h3 class="font-display h4 mb-4 text-cream">${title}</h3>
      <div class="d-grid gap-2" role="list">
        ${options.map((o) => `<button type="button" class="quiz-option" data-answer="${o.id}" role="listitem"><span class="emo" aria-hidden="true"><i class="bi ${o.icon}"></i></span><span class="flex-grow-1">${esc(o.label)}</span><i class="bi bi-arrow-right quiz-go" aria-hidden="true"></i></button>`).join("")}
      </div>`;

    const step1 = () => {
      box.innerHTML = question(1, "Vous êtes…", PROFILES);
      box.onclick = (e) => {
        const b = e.target.closest("[data-answer]");
        if (!b) return;
        answer.profile = PROFILES.find((p) => p.id === b.dataset.answer);
        step2();
      };
    };
    const step2 = () => {
      box.innerHTML = question(2, "Quel sujet vous préoccupe ?", TOPICS) +
        '<button type="button" class="btn btn-link text-soft mt-3 px-0" data-back>← Revenir</button>';
      box.onclick = (e) => {
        if (e.target.closest("[data-back]")) return step1();
        const b = e.target.closest("[data-answer]");
        if (!b) return;
        answer.topic = b.dataset.answer;
        results();
      };
    };
    const results = () => {
      const p = answer.profile;
      const score = (s) =>
        (s.themes.includes(answer.topic) ? 3 : 0) +
        (p.branch === "any" || s.branch === p.branch ? 2 : 0) +
        (p.prefer?.includes(s.id) ? 4 : 0) +
        (p.theme && s.themes.includes(p.theme) ? 2 : 0) +
        (s.status === "flagship" ? 1 : 0) -
        (s.status === "soon" ? 1 : 0);
      const best = services
        .map((s) => ({ s, n: score(s) }))
        .filter((x) => x.n >= 3)
        .sort((a, b) => b.n - a.n)
        .slice(0, 3)
        .map((x) => x.s);
      box.innerHTML = `
        ${progress(100)}
        <p class="kicker mb-2">Nos suggestions</p>
        <h3 class="font-display h4 text-cream mb-4">${best.length ? "Voici ce que Jongoma peut faire pour vous" : "Parlons-en directement"}</h3>
        <div class="d-grid gap-2">
          ${best.map((s) => `
            <div class="result-card">
              ${s.photo ? `<img src="assets/img/${s.photo}" alt="">` : '<span class="d-grid place-items-center rounded-4" style="width:4.5rem;height:4.5rem;background:var(--jg-magenta)"></span>'}
              <div class="flex-grow-1">
                <p class="fw-bold text-cream mb-0">${esc(s.name)}${s.status === "soon" ? ' <span class="badge text-bg-light ms-1">Bientôt</span>' : ""}</p>
                <p class="small text-soft mb-0">${esc(s.problem)}</p>
              </div>
              <a class="btn btn-sm btn-gold flex-shrink-0" href="${toPlatform(`/demande?service=${s.id}`)}">Demander</a>
            </div>`).join("")}
          ${best.length ? "" : '<p class="text-soft">Décrivez votre situation : une responsable vous oriente vers la bonne solution sous 48 heures.</p>'}
        </div>
        <div class="d-flex flex-wrap gap-2 mt-4">
          <a class="btn btn-primary" href="${toPlatform("/demande")}">Décrire mon besoin</a>
          <button type="button" class="btn btn-ghost" data-restart>Recommencer</button>
        </div>`;
      box.onclick = (e) => e.target.closest("[data-restart]") && step1();
    };
    step1();
  }

  /* --- Curseur « Sans Jongoma / Avec Jongoma » --- */
  function compare() {
    document.querySelectorAll("[data-compare]").forEach((el) => {
      const input = el.querySelector("input[type=range]");
      const set = (v) => el.style.setProperty("--pos", `${v}%`);
      input.addEventListener("input", () => set(input.value));
      set(input.value);
    });
  }

  /* --- Carrousels horizontaux (flèches) --- */
  function carousels() {
    document.querySelectorAll("[data-carousel]").forEach((nav) => {
      const track = document.getElementById(nav.dataset.carousel);
      nav.querySelectorAll("button").forEach((b) =>
        b.addEventListener("click", () => track.scrollBy({ left: (b.dataset.dir === "next" ? 1 : -1) * track.clientWidth * 0.8, behavior: reduceMotion ? "auto" : "smooth" })),
      );
    });
  }

  /* --- Services en carrousel, onglets Impact / Pro --- */
  function serviceCarousel() {
    const track = document.getElementById("svc-track");
    if (!track) return;
    const order = (s) => (s.status === "flagship" ? 0 : s.status === "soon" ? 2 : 1);
    const draw = (branch) => {
      track.innerHTML = services
        .filter((s) => s.branch === branch)
        .sort((a, b) => order(a) - order(b))
        .map(
          (s) => `
        <article class="svc-ed">
          <div class="ph">${s.photo ? `<img src="assets/img/${s.photo}" alt="${esc(s.alt)}" loading="lazy">` : ""}
            ${s.status === "flagship" ? '<span class="badge-status flagship"><i class="bi bi-star-fill me-1"></i>Service phare</span>' : s.status === "soon" ? '<span class="badge-status soon">Bientôt</span>' : ""}</div>
          <div class="p-4 d-flex flex-column flex-grow-1">
            <h3 class="font-display h5 mb-2">${esc(s.name)}</h3>
            <p class="small text-muted flex-grow-1 mb-3">${esc(s.problem)}</p>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-sm btn-plum" data-service="${s.id}">Détails</button>
              <a class="btn btn-sm btn-soft" href="${toPlatform(`/demande?service=${s.id}`)}">Demander</a>
            </div>
          </div>
        </article>`,
        )
        .join("");
      track.scrollLeft = 0;
    };
    document.querySelectorAll("[data-svc-tab]").forEach((t) =>
      t.addEventListener("click", () => {
        document.querySelectorAll("[data-svc-tab]").forEach((x) => x.classList.toggle("active", x === t));
        draw(t.dataset.svcTab);
      }),
    );
    draw("impact");
  }

  document.addEventListener("DOMContentLoaded", () => {
    rotator();
    marquee();
    quiz();
    compare();
    carousels();
    serviceCarousel();
  });
})();
