/* Page Location : cartes d'équipement, filtres par saison et formulaire de demande. */

(function () {
  const options = window.LOCATION || [];
  const grille = document.getElementById("options");
  const select = document.getElementById("f-option");

  grille.innerHTML = options.map((o) => `
<article class="rental" data-saison="${o.saison}">
  <div class="rental-top">
    <span class="rental-season">${o.saison}</span>
    <svg class="i" aria-hidden="true"><use href="#i-${o.icone}"/></svg>
  </div>
  <div class="rental-body">
    <h3>${o.titre}</h3>
    <p>${o.description}</p>
    <ul class="prices">${o.tarifs.map((t) => `<li>${t}</li>`).join("")}</ul>
    <a class="btn" href="#reserver" data-choisir="${o.id}">Réserver <svg class="i"><use href="#i-arrow"/></svg></a>
  </div>
</article>`).join("");

  select.innerHTML = `<option value="">Choisir…</option>` +
    options.map((o) => `<option value="${o.titre}" data-id="${o.id}">${o.titre}</option>`).join("");

  // Le bouton « Réserver » présélectionne l'option dans le formulaire.
  grille.addEventListener("click", (e) => {
    const b = e.target.closest("[data-choisir]");
    if (!b) return;
    const opt = select.querySelector(`[data-id="${b.dataset.choisir}"]`);
    if (opt) select.value = opt.value;
    setTimeout(() => document.getElementById("f-nom").focus({ preventScroll: true }), 400);
  });

  // Filtres par saison
  const chips = document.querySelectorAll("[data-filtre]");
  chips.forEach((c) => c.addEventListener("click", () => {
    chips.forEach((x) => x.setAttribute("aria-pressed", x === c));
    grille.querySelectorAll(".rental").forEach((r) => {
      r.hidden = c.dataset.filtre !== "tout" && r.dataset.saison !== c.dataset.filtre;
    });
  }));

  // Date minimale : aujourd'hui
  document.getElementById("f-date").min = new Date().toISOString().slice(0, 10);

  // Envoi du formulaire
  const form = document.getElementById("form-location");
  const statut = form.querySelector(".form-status");
  const message = (txt, ok) => { statut.hidden = false; statut.className = `form-status ${ok ? "ok" : "err"}`; statut.textContent = txt; };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      message("Veuillez remplir les champs obligatoires (nom, courriel, équipement et date).", false);
      form.querySelector(":invalid").focus();
      return;
    }
    const data = new FormData(form);

    // Sans service d'envoi configuré : on ouvre le logiciel de courriel du visiteur.
    if (!SITE.formulaire) {
      const corps = [...data].map(([k, v]) => `${k} : ${v}`).join("\n");
      location.href = `mailto:${SITE.courriel}?subject=${encodeURIComponent("Demande de location : " + data.get("option"))}&body=${encodeURIComponent(corps)}`;
      return;
    }

    try {
      const r = await fetch(SITE.formulaire, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error();
      form.reset();
      message("Merci! Votre demande a bien été envoyée. Nous vous répondrons par courriel sous peu.", true);
    } catch {
      message(`Oups, l'envoi n'a pas fonctionné. Écrivez-nous directement à ${SITE.courriel}.`, false);
    }
  });
})();
