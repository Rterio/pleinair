# Site Web du Centre de plein air de la Haute-Gaspésie

Site statique (HTML, CSS, JavaScript) hébergé sur GitHub Pages. Aucun outil à installer.

## Mettre à jour le contenu

| Quoi | Où |
|---|---|
| Activités du calendrier | `assets/donnees.js` → `ACTIVITES` |
| Équipement en location (description, tarifs) | `assets/donnees.js` → `LOCATION` |
| Commanditaires (logos dans `images/commanditaires/`) | `assets/donnees.js` → `COMMANDITAIRES` |
| Heures d'ouverture, saison | `assets/site.js` → `SITE.heures`, `SITE.saison` |
| Coordonnées, menu, réseaux sociaux | `assets/site.js` → `SITE` |
| Calendrier Outlook intégré | `assets/site.js` → `SITE.calendrier` |
| Envoi du formulaire de location | `assets/site.js` → `SITE.formulaire` |

Les activités passées disparaissent automatiquement du site.

## Formulaire de location

GitHub Pages ne peut pas envoyer de courriels. Deux options :

1. **Formspree** (recommandé, gratuit jusqu'à 50 envois/mois) : créer un formulaire sur formspree.io,
   puis coller l'adresse `https://formspree.io/f/xxxx` dans `SITE.formulaire`.
2. **Rien de configuré** : le bouton ouvre le logiciel de courriel du visiteur avec la demande pré-remplie.

## Mise en ligne

Settings → Pages → Deploy from a branch → `main` / racine.

## Tester sur son ordinateur

Ouvrir `index.html` directement fonctionne, mais pour un rendu fidèle : `python3 -m http.server` puis http://localhost:8000
