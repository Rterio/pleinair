/* Centre de plein air — en-tête, pied de page et icônes partagés.
   Modifiez les coordonnées, le menu et les liens ICI :
   le changement s'applique à toutes les pages. */

const SITE = {
  nom: "Centre de plein air de la Haute-Gaspésie",
  slogan: "Ski familial géré par des bénévoles",
  courriel: "cpahg@hotmail.com",
  telephone: "418 763-5527",
  adresse: ["295, route Bellevue", "Sainte-Anne-des-Monts (Québec) G4V 2S5"],
  // Heures d'ouverture affichées sur l'accueil (À CONFIRMER chaque saison).
  heures: [
    { jours: "Vendredi", heures: "18 h 30 à 21 h 30", note: "Ski de soirée" },
    { jours: "Samedi et dimanche", heures: "10 h à 15 h 30" },
  ],
  saison: "Janvier à avril, selon les conditions",
  // Calendrier Outlook publié (comme le club de natation) : collez le lien « HTML » ici.
  calendrier: "",
  // Formulaire de location : point de terminaison Formspree (https://formspree.io), ex. "https://formspree.io/f/abcdwxyz".
  // Laissé vide, le formulaire ouvre plutôt le logiciel de courriel du visiteur.
  formulaire: "",
  facebook: "https://www.facebook.com/cpahg",
  instagram: "https://www.instagram.com/mont_bellevue/",
  menu: [
    { label: "Accueil", href: "" },
    { label: "Calendrier", href: "calendrier/" },
    { label: "Location", href: "location/" },
  ],
};

// Racine du site, déduite de l'emplacement de ce fichier (assets/site.js).
const ROOT_URL = new URL("../", document.currentScript.src);

/* Icônes (trait 24×24, couleur = currentColor). Utilisation : <svg class="i"><use href="#i-canoe"/></svg> */
const ICONS = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="i-canoe" viewBox="0 0 24 24"><path d="M2 13c3 3 17 3 20 0"/><path d="M2 13c0 2 4 4 10 4s10-2 10-4"/><path d="M15 4 9 16"/><path d="M8.2 17.6 7 20"/></symbol>
  <symbol id="i-kayak" viewBox="0 0 24 24"><path d="M2 14c4-3 16-3 20 0-4 3-16 3-20 0Z"/><circle cx="12" cy="9" r="1.6"/><path d="M5 5l14 12"/><path d="M4 4l2 2M18 16l2 2"/></symbol>
  <symbol id="i-sup" viewBox="0 0 24 24"><path d="M3 18c3 1.5 15 1.5 18 0"/><path d="M5 16h14"/><circle cx="12" cy="4" r="1.6"/><path d="M12 6v6l-2 4M12 12l2 4M12 8l3-1"/><path d="M15 3v13"/></symbol>
  <symbol id="i-tent" viewBox="0 0 24 24"><path d="M12 4 3 20h18L12 4Z"/><path d="M12 4v16M9 20l3-6 3 6"/><path d="M10 3l2 1 2-1"/></symbol>
  <symbol id="i-snowshoe" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="5" ry="9"/><path d="M12 3v18M7.5 9h9M7.3 14h9.4"/></symbol>
  <symbol id="i-ski" viewBox="0 0 24 24"><circle cx="14" cy="4" r="1.6"/><path d="M13 7l-3 5 4 2-1 5"/><path d="M10 12 7 15"/><path d="M13 7l4 3"/><path d="M3 20h18M17 10l2 8"/></symbol>
  <symbol id="i-hike" viewBox="0 0 24 24"><circle cx="11" cy="4" r="1.6"/><path d="M10 7l-2 6 3 3v5M8 13l-2 8M10 7l4 3 3-1"/><path d="M18 8v13"/></symbol>
  <symbol id="i-bike" viewBox="0 0 24 24"><circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="M5.5 16 9 9h7l2.5 7M9 9l3 7h-6.5M15 6h2l-1 3"/></symbol>
  <symbol id="i-fire" viewBox="0 0 24 24"><path d="M12 3c1 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-8Z"/><path d="M4 21l16-3M4 18l16 3"/></symbol>
  <symbol id="i-cabin" viewBox="0 0 24 24"><path d="M3 11 12 4l9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/><path d="M16 6V3h2v4.5"/></symbol>
  <symbol id="i-tree" viewBox="0 0 24 24"><path d="M12 2 6 10h3l-4 6h14l-4-6h3L12 2Z"/><path d="M12 16v6"/></symbol>
  <symbol id="i-snow" viewBox="0 0 24 24"><path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/><path d="m9 3 3 2 3-2M9 21l3-2 3 2"/></symbol>
  <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></symbol>
  <symbol id="i-board" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="20" rx="3" transform="rotate(35 12 12)"/><path d="M9.6 9.2l3.2 2.2M11.2 12.6l3.2 2.2"/></symbol>
  <symbol id="i-lift" viewBox="0 0 24 24"><path d="M2 5l20-3"/><path d="M8 4.1V11M16 2.9V9"/><path d="M5 11h6M13 9h6"/><circle cx="8" cy="15" r="1.5"/><path d="M8 16.5 7 20l-2 1M8 17l3 2"/></symbol>
  <symbol id="i-mountain" viewBox="0 0 24 24"><path d="m2 20 7-12 4 6 3-4 6 10Z"/><path d="m7.3 11 1.7 1.5 1.6-1.4"/></symbol>
  <symbol id="i-moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></symbol>
  <symbol id="i-cup" viewBox="0 0 24 24"><path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6V8Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2c0 2 2 2 2 4M12 2c0 2 2 2 2 4"/></symbol>
  <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
  <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 15c2.5.6 4 2.6 4 6"/></symbol>
</svg>`;

/* Crête de montagnes : séparateur décoratif entre sections. */
const RIDGE = `<svg class="ridge" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
  <path class="ridge-back" d="M0 90V52l90-28 70 20 110-38 90 34 80-18 120 40 100-30 70 14 130-46 110 40 90-22 120 34 80-20 90 26 L1440 40V90Z"/>
  <path class="ridge-front" d="M0 90V70l120-24 90 18 140-30 110 28 90-12 150 26 120-30 100 20 140-24 120 22 110-16 110 20L1440 66V90Z"/>
</svg>`;

(function () {
  document.body.insertAdjacentHTML("afterbegin", ICONS);

  const clean = (p) => p.replace(/index\.html$/, "");
  const here = clean(location.pathname);
  const isCurrent = (href) => {
    const target = clean(new URL(href, ROOT_URL).pathname);
    return href === "" ? here === target : here.startsWith(target);
  };
  const url = (p) => new URL(p, ROOT_URL).href;

  const navLinks = SITE.menu
    .map((item) => `<a href="${url(item.href)}"${isCurrent(item.href) ? ' aria-current="page"' : ""}>${item.label}</a>`)
    .join("");

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.outerHTML = `
<a class="skip" href="#contenu">Aller au contenu</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${ROOT_URL.href}">
      <img src="${url("images/logo.png")}" alt="" width="40" height="40">
      <span>Centre de plein air<small>de la Haute-Gaspésie</small></span>
    </a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="nav-principale">Menu</button>
    <nav class="nav" id="nav-principale" aria-label="Navigation principale">
      ${navLinks}
      <a class="btn" href="#joindre">Nous joindre</a>
    </nav>
  </div>
</header>`;
  }

  const social = [
    SITE.facebook && `<a href="${SITE.facebook}">Facebook</a>`,
    SITE.instagram && `<a href="${SITE.instagram}">Instagram</a>`,
  ].filter(Boolean).join(" · ");

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.outerHTML = `
<footer class="site-footer" id="joindre">
  ${RIDGE}
  <div class="footer-body">
    <div class="wrap footer-grid">
      <div>
        <p class="footer-name">${SITE.nom}</p>
        <p class="footer-slogan">${SITE.slogan}</p>
        <p class="footer-full">Au pied du mont Bellevue, Sainte-Anne-des-Monts</p>
      </div>
      <ul class="footer-contact">
        <li><svg class="i"><use href="#i-pin"/></svg><span>${SITE.adresse.join("<br>")}</span></li>
        <li><svg class="i"><use href="#i-phone"/></svg><a href="tel:${SITE.telephone.replace(/\D/g, "")}">${SITE.telephone}</a></li>
        <li><svg class="i"><use href="#i-mail"/></svg><a href="mailto:${SITE.courriel}">${SITE.courriel}</a></li>
      </ul>
      <nav aria-label="Pied de page" class="footer-nav">
        ${SITE.menu.map((m) => `<a href="${url(m.href)}">${m.label}</a>`).join("")}
        ${social ? `<p>${social}</p>` : ""}
      </nav>
    </div>
    <div class="wrap footer-legal">© ${new Date().getFullYear()} ${SITE.nom} · Organisme à but non lucratif</div>
  </div>
</footer>`;
  }

  // Séparateurs de crête placés à la main : <div data-ridge></div>
  document.querySelectorAll("[data-ridge]").forEach((el) => (el.outerHTML = RIDGE));

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav-principale");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }
})();

/* ---------- Outils partagés pour les activités ---------- */

const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juill.", "août", "sept.", "oct.", "nov.", "déc."];
const MOIS_LONG = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const JOURS = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];

function parseDate(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function activitesAVenir() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return (window.ACTIVITES || [])
    .filter((a) => parseDate(a.fin || a.date) >= today)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

function carteActivite(a) {
  const d = parseDate(a.date);
  return `
<article class="event">
  <div class="event-date" aria-hidden="true">
    <span class="m">${MOIS[d.getMonth()]}</span>
    <span class="d">${d.getDate()}</span>
    <span class="w">${JOURS[d.getDay()]}</span>
  </div>
  <div class="event-body">
    <h3><svg class="i"><use href="#i-${a.icone || "tree"}"/></svg>${a.titre}</h3>
    <p class="event-meta">
      <span class="sr-only">${d.getDate()} ${MOIS_LONG[d.getMonth()]} ${d.getFullYear()} · </span>
      ${a.heure ? `<span><svg class="i"><use href="#i-clock"/></svg>${a.heure}</span>` : ""}
      ${a.lieu ? `<span><svg class="i"><use href="#i-pin"/></svg>${a.lieu}</span>` : ""}
      ${a.prix ? `<span class="tag">${a.prix}</span>` : ""}
    </p>
    <p>${a.description}</p>
  </div>
</article>`;
}

/* Prochaines activités : <div data-prochaines="3"></div> */
document.querySelectorAll("[data-prochaines]").forEach((el) => {
  const liste = activitesAVenir().slice(0, Number(el.dataset.prochaines) || 3);
  el.innerHTML = liste.length
    ? liste.map(carteActivite).join("")
    : `<p class="empty">Aucune activité annoncée pour le moment. Revenez bientôt!</p>`;
  el.querySelectorAll(".event").forEach((e) => e.classList.add("reveal"));
});

/* Commanditaires : <div data-commanditaires></div> */
document.querySelectorAll("[data-commanditaires]").forEach((el) => {
  const tuile = (c) => {
    const contenu = c.logo
      ? `<img src="${new URL(c.logo, ROOT_URL).href}" alt="${c.nom}" loading="lazy">`
      : `<span class="sponsor-name">${c.nom}</span>`;
    const extra = `${c.type ? `<span class="sponsor-type">${c.type}</span>` : ""}${c.note ? `<span class="sponsor-note">${c.note}</span>` : ""}`;
    const cls = `sponsor${c.niveau === "majeur" ? " sponsor-major" : ""}`;
    return c.lien
      ? `<a class="${cls}" href="${c.lien}" rel="noopener">${contenu}${extra}</a>`
      : `<div class="${cls}">${contenu}${extra}</div>`;
  };
  const liste = window.COMMANDITAIRES || [];
  const majeurs = liste.filter((c) => c.niveau === "majeur");
  const autres = liste.filter((c) => c.niveau !== "majeur");
  el.innerHTML =
    (majeurs.length ? `<div class="sponsors-row sponsors-majors">${majeurs.map(tuile).join("")}</div>` : "") +
    `<div class="sponsors-row">${autres.map(tuile).join("")}</div>`;
});

/* Heures d'ouverture : <ul data-heures></ul> */
document.querySelectorAll("[data-heures]").forEach((el) => {
  el.innerHTML = SITE.heures.map((h) => `
<li><span class="h-jours">${h.jours}</span><span class="h-heures">${h.heures}</span>${h.note ? `<span class="tag">${h.note}</span>` : ""}</li>`).join("");
});
document.querySelectorAll("[data-site-saison]").forEach((el) => (el.textContent = SITE.saison));

/* Apparition douce des éléments .reveal */
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) return items.forEach((i) => i.classList.add("visible"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, n) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add("visible"), n * 70);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((i) => io.observe(i));
})();
