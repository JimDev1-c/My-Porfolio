# My Portfolio — Jephte Iniki

Portfolio professionnel bilingue de Jephte Iniki, développeur web full stack basé à Kinshasa. Le site présente mon profil, mon parcours, mes compétences, mes projets et mes moyens de contact.

- **Site en ligne :** [jephteiniki-portfolio.vercel.app](https://jephteiniki-portfolio.vercel.app/#accueil)
- **Maquette Figma :** [My Portfolio — frame 16:3834](https://www.figma.com/design/MpakKa3NzoL5ljg8xure0M/My-Porfolio-design?node-id=16-3834&t=wudM3eHtj6S6TheM-1)

## À propos du projet

Le portfolio est disponible en français et en anglais. Il comprend une navigation par sections, une présentation professionnelle, les formations et expériences, les compétences, des cartes projets défilantes, les loisirs et une section contact.

Les contenus des deux langues sont centralisés dans `src/i18n.ts`. Le changement de langue met également à jour la langue du document, le titre et les descriptions utilisées par les moteurs de recherche et les réseaux sociaux.

## Technologies et choix techniques

| Technologie | Utilisation et raison du choix |
| --- | --- |
| React | Construire l’interface avec des composants réutilisables et gérer l’état du sélecteur de langue. |
| TypeScript | Décrire les contenus et les propriétés des composants, et détecter certaines erreurs avant l’exécution. |
| Vite | Démarrer rapidement le serveur de développement avec rechargement à chaud et produire le bundle statique du site. |
| CSS | Créer une identité visuelle personnalisée, les mises en page adaptatives et les interactions sans bibliothèque de composants supplémentaire. |
| Oxlint | Repérer les problèmes courants dans le code avec `npm run lint`. |

J’ai choisi **React** pour organiser les différentes sections en composants indépendants et réutilisables. **Vite** fournit l’environnement de développement et la chaîne de compilation adaptés à ce site statique, sans ajouter de serveur applicatif.

## Défi personnel : concevoir un portfolio bilingue

Le défi principal a été de proposer une expérience cohérente en français et en anglais sans dupliquer l’interface. Les libellés et contenus sont réunis dans un catalogue de traductions, puis transmis aux composants. Le changement de langue actualise aussi les métadonnées de la page. Cette organisation facilite la cohérence entre les deux versions et les futures mises à jour.

## Comparaison entre la maquette et le site

| Élément | Maquette Figma | Site en ligne |
| --- | --- | --- |
| Structure et hiérarchie des sections | À relever dans le frame partagé. | Profil, parcours, certifications, expérience, compétences, projets, loisirs et contact. |
| Couleurs et typographie | À relever dans le frame partagé. | Palette claire, textes vert foncé, accents verts et titres avec empattement. |
| Présentation des projets | À relever dans le frame partagé. | Cartes avec aperçu illustratif, objectif, description, technologies et liens ou statut. |
| Adaptation mobile | À relever dans le frame partagé. | Mise en page responsive; les projets défilent horizontalement avec accrochage sur chaque carte. |

> **À compléter :** le lien Figma est référencé, mais le frame n’est pas lisible depuis l’environnement utilisé pour préparer ce README. Les cellules « À relever » doivent être remplacées après comparaison visuelle avec le frame 16:3834.

## Écarts entre la maquette et le site

| Écart constaté | Justification |
| --- | --- |
| Comparaison visuelle à effectuer | Aucun écart précis n’est affirmé avant de pouvoir examiner le frame Figma. Compléter ce tableau après comparaison afin de ne pas attribuer de choix ou d’omission non vérifiés. |

## Rapport Lighthouse

La capture du rapport Lighthouse n’est pas encore incluse dans le dépôt. Aucun score n’est donc annoncé ici. Après avoir généré le rapport sur le site en ligne, ajouter la capture au dépôt (par exemple `docs/lighthouse-report.png`) et l’insérer ci-dessous :

```md
![Rapport Lighthouse du portfolio](docs/lighthouse-report.png)
```

## Lancer le projet en local

Prérequis : Node.js et npm installés.

```sh
git clone https://github.com/JimDev1-c/My-Porfolio.git
cd My-Porfolio
npm install
npm run dev
```

Vite affiche l’adresse locale du serveur de développement dans le terminal.

Pour vérifier le code et générer une version de production :

```sh
npm run lint
npm run build
```

La compilation de production est générée dans `dist/`. Pour la prévisualiser localement après compilation :

```sh
npm run preview
```

## Organisation du code

- `src/App.tsx` assemble les sections et gère la langue active.
- `src/i18n.ts` contient les textes français et anglais.
- `src/components/` regroupe les composants de navigation, profil, parcours, projets, loisirs et contact.
- `src/App.css` et `src/index.css` définissent le style et les règles responsive.
- `src/assets/` contient les ressources graphiques importées.
- `index.html` définit le document HTML et ses métadonnées initiales.

Les aperçus des cartes projets sont des illustrations d’interface, pas des captures des applications. Les projets sans lien public sont identifiés comme locaux ou en cours. Les recommandations ne sont publiées qu’avec une attribution vérifiable et l’accord de leur auteur.
