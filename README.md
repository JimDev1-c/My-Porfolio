# Portfolio de Jephte Iniki

Portfolio personnel bilingue (français/anglais), construit avec React,
TypeScript et Vite. Il présente le profil, la formation, une timeline
d’expérience, les compétences regroupées par domaine, les projets avec leurs
objectifs et leurs liens publics, les loisirs et le contact.

## Démarrer le projet

```sh
npm install
npm run dev
```

## Vérifier et construire

```sh
npm run lint
npm run build
```

## Organisation

- `src/App.tsx` assemble les sections du portfolio et gère la langue affichée.
- `src/i18n.ts` centralise les libellés et contenus français/anglais.
- `src/components/` contient les composants de navigation, de profil, de
  formation, d’expérience, de compétences, de projets, de loisirs, de contact
  et de pied de page. Les recommandations ne sont pas inventées : ajouter un
  témoignage uniquement avec son auteur, une source vérifiable et son accord.
- `src/assets/` contient les images importées par l’application.
- `src/App.css` et `src/index.css` contiennent les styles de l’interface.

Les projets publics s’ouvrent dans un nouvel onglet. Les illustrations des
cartes projets sont des aperçus UI, pas des captures réelles. Quizzy est
présenté comme un projet local sans lien de démonstration publique.

Les balises SEO de base sont définies dans `index.html`. Ajouter un domaine
public avant de renseigner les URL canonical/Open Graph absolues et une image
de partage social dédiée.
