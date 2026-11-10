/* Page Calendrier : liste groupée par mois + calendrier Outlook intégré. */

(function () {
  // Liste par mois
  const liste = activitesAVenir();
  const pListe = document.getElementById("p-liste");
  if (!liste.length) {
    pListe.innerHTML = `<p class="empty">Aucune activité annoncée pour le moment. Revenez bientôt!</p>`;
  } else {
    let html = "", mois = "";
    liste.forEach((a) => {
      const d = parseDate(a.date);
      const cle = `${MOIS_LONG[d.getMonth()]} ${d.getFullYear()}`;
      if (cle !== mois) {
        if (mois) html += `</div>`;
        html += `<h2 class="month-title">${cle}</h2><div class="events events-grid">`;
        mois = cle;
      }
      html += carteActivite(a);
    });
    pListe.innerHTML = html + `</div>`;
  }

  // Calendrier Outlook (comme celui du club de natation)
  const pMois = document.getElementById("p-mois");
  pMois.innerHTML = SITE.calendrier
    ? `<div class="cal-embed"><iframe src="${SITE.calendrier}" title="Calendrier des activités" loading="lazy"></iframe></div>`
    : `<p class="empty">Le calendrier Outlook apparaîtra ici.<br><small>Collez le lien de publication dans <code>assets/site.js</code> → <code>calendrier</code>.</small></p>`;

  // Onglets accessibles
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const show = (tab) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => show(t));
    t.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus(); show(next);
    });
  });
})();
