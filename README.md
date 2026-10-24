# My Portfolio — Jephte Iniki

Portfolio professionnel bilingue de Jephte Iniki, développeur web full stack basé à Kinshasa. Il présente son profil, son parcours, ses compétences, ses projets et ses coordonnées.

- **Site en ligne :** [jephteiniki-portfolio.vercel.app](https://jephteiniki-portfolio.vercel.app/#accueil)
- **Maquette Figma :** [My Portfolio — frame 16:3834](https://www.figma.com/design/MpakKa3NzoL5ljg8xure0M/My-Porfolio-design?node-id=16-3834&t=wudM3eHtj6S6TheM-1)

## Aperçu

Le site est disponible en français et en anglais. La navigation permet d’accéder au profil, à la formation, aux certifications, à l’expérience, aux compétences, aux projets, aux recommandations, aux loisirs et au contact. Le changement de langue met à jour les contenus et les métadonnées de la page.

## Technologies et choix du framework

| Technologie | Rôle et raison du choix |
| --- | --- |
| React 19 | Composer les sections en composants réutilisables et gérer l’état de l’interface, notamment la langue et les commandes de navigation. |
| TypeScript 6 | Définir les types des contenus et composants, et détecter des erreurs de code avant exécution. |
| Vite 8 | Fournir un serveur de développement rapide et compiler le site en fichiers statiques adaptés à Vercel. |
| CSS | Adapter la présentation aux différentes tailles d’écran et réaliser l’identité visuelle sans dépendance de composants supplémentaire. |
| Oxlint | Repérer les problèmes courants de code avec `npm run lint`. |

React a été retenu pour séparer clairement les sections et réutiliser les mêmes composants dans les deux langues. Vite convient à ce portfolio statique : il offre un cycle de développement court et une compilation de production directe, sans serveur applicatif dédié.

## Défi personnel : construire une expérience bilingue

Le défi principal a été de rendre le portfolio accessible en français et en anglais sans maintenir deux interfaces distinctes. Les textes sont centralisés dans `src/i18n.ts` et transmis aux composants selon la langue choisie. Le sélecteur actualise aussi la langue du document et les métadonnées. Cela demande de garder les libellés, la navigation et les descriptions cohérents dans les deux versions.

## Comparaison visuelle maquette / site

Les visuels de gauche reproduisent les écrans de la maquette Figma ; ceux de droite montrent le portfolio dans sa version locale en français, capturée le 24 octobre 2026 à une largeur de 960 px. Cette comparaison documente l’état de l’interface à cette date. La version publique est accessible via le lien du projet en tête de ce document. Les références Figma disponibles sont au format desktop ; aucune capture mobile de la maquette n’est incluse.

| Section | Maquette Figma | Site — capture locale |
| --- | --- | --- |
| Accueil | ![Maquette — accueil](docs/screenshots/figma/home-portfolio-jim.png) | ![Site — accueil](docs/screenshots/site/home-portfolio-jim.png) |
| À propos | ![Maquette — à propos](docs/screenshots/figma/about-section.png) | ![Site — à propos](docs/screenshots/site/about-section.png) |
| Formation | ![Maquette — formation](docs/screenshots/figma/education.png) | ![Site — formation](docs/screenshots/site/education.png) |
| Certifications | ![Maquette — certifications](docs/screenshots/figma/certifications.png) | ![Site — certifications](docs/screenshots/site/certifications.png) |
| Expérience | ![Maquette — expérience](docs/screenshots/figma/experience.png) | ![Site — expérience](docs/screenshots/site/experience.png) |
| Compétences | ![Maquette — compétences](docs/screenshots/figma/skills.png) | ![Site — compétences](docs/screenshots/site/skills.png) |
| Projets | ![Maquette — projets](docs/screenshots/figma/projects.png) | ![Site — projets](docs/screenshots/site/projects.png) |
| Recommandations et loisirs | ![Maquette — recommandations et loisirs](docs/screenshots/figma/recommendations-hobbies.png) | ![Site — recommandations et loisirs](docs/screenshots/site/recommendations-hobbies.png) |
| Contact | ![Maquette — contact](docs/screenshots/figma/contact.png) | ![Site — contact](docs/screenshots/site/contact.png) |
| Pied de page | ![Maquette — pied de page](docs/screenshots/figma/footer.png) | ![Site — pied de page](docs/screenshots/site/footer.png) |

### Écarts entre la maquette et le site

La maquette constitue le point de départ du portfolio. Le site publié reprend son univers clair et ses sections principales, tout en faisant évoluer la typographie, les contenus et certaines interactions pour refléter le profil actuel et fonctionner sur différents écrans.

| Section | Différence observée | Justification du choix |
| --- | --- | --- |
| Identité visuelle | La palette claire et les accents verts restent proches de la maquette. Les titres du site utilisent une police à empattements, tandis que la référence emploie des titres sans empattements. | La combinaison d’une typographie éditoriale pour les titres et d’une police sans empattements pour les textes distingue les niveaux de lecture et donne au portfolio une identité visuelle propre. |
| Accueil | Le site présente un portrait réel, une navigation réorganisée et des libellés adaptés à la langue choisie ; la maquette montre un emplacement de portrait et une navigation différente. | Le portrait rend la présentation personnelle et la navigation bilingue permet de parcourir l’ensemble du portfolio en français ou en anglais. |
| À propos | La maquette associe la biographie à quatre cartes de domaines. Le site met en avant la biographie et la philosophie, puis détaille les compétences dans leur propre section. | Cette organisation évite de répéter les mêmes informations et distingue la présentation personnelle de l’inventaire des compétences. |
| Formation | La maquette ajoute des descriptions et des informations de lieu aux quatre entrées. Le site présente un résumé du parcours sous forme de liste d’établissements et de périodes. | Le format synthétique facilite le repérage du parcours. Les intitulés et périodes affichés sur le site constituent la référence pour les informations publiées. |
| Certifications | La maquette sélectionne quatre cartes avec description et référence de vérification ; le site présente une liste plus étendue avec organisme et date. | La liste du site reflète le catalogue de certifications actuellement présenté. Les liens de vérification sont affichés lorsqu’une référence publique est disponible. |
| Expérience | La maquette détaille les postes dans trois cartes à deux colonnes avec lieux et réalisations chiffrées. Le site utilise une chronologie avec des descriptions plus courtes. | La chronologie rend l’enchaînement des rôles immédiatement lisible. Le site privilégie des descriptions concises et n’affiche que les informations communiquées pour chaque expérience. |
| Compétences | Les deux versions répartissent les compétences en groupes, mais les intitulés et les technologies listées ne sont pas identiques. | Le site met en avant une sélection de compétences et d’outils adaptée au profil présenté, organisée par domaines pour faciliter la lecture. |
| Projets | La maquette présente trois cartes simultanément. Le site propose une liste défilante et inclut SmartResto, projet ajouté après la création de la maquette. Le descriptif de Quizzy diffère de la plateforme EdTech illustrée dans la référence. | Le défilement conserve des cartes lisibles sur les écrans étroits et donne accès aux quatre projets. SmartResto est signalé comme étant en cours. Le contenu de Quizzy décrit le périmètre présenté dans la version actuelle du portfolio. |
| Recommandations et loisirs | La maquette affiche un accès LinkedIn compact et les six loisirs sur une seule rangée. Le site présente un message éditorial pour les recommandations et une liste de loisirs défilante. | Les recommandations ne sont attribuées à aucune personne sans témoignage publiable avec son accord. Le défilement permet d’afficher les loisirs sans réduire excessivement la largeur de chaque élément sur mobile. |
| Contact | La maquette juxtapose les coordonnées et un panneau de formulaire en conception. Le site privilégie une présentation différente centrée sur les moyens de contact publiés. | Le portfolio met en avant des moyens de contact directs. Aucun formulaire n’est présenté comme opérationnel sans traitement de soumission configuré. |
| Pied de page | Le site actualise l’année du copyright et réorganise les liens par rapport à la maquette. | L’année correspond à l’édition actuelle du portfolio et les liens reprennent les rubriques disponibles dans la navigation du site. |
| Version mobile | Les captures de référence disponibles montrent la version desktop. Le site adapte les cartes projets à une largeur mobile de 390 px. | La mise en page mobile conserve le contenu et permet de parcourir les cartes horizontalement. La comparaison avec la maquette mobile n’est pas incluse, car aucune capture mobile de référence n’a été fournie. |

La capture mobile des projets est disponible dans `docs/screenshots/site/projects-mobile.png`.

## Qualité Lighthouse — mobile

Les objectifs qualité retenus pour l’audit Lighthouse mobile du site déployé sont les suivants :

| Catégorie | Objectif minimum | Résultat |
| --- | ---: | --- |
| Performance | 85 | Non mesuré |
| Accessibilité | 90 | Non mesuré |
| Bonnes pratiques | 90 | Non mesuré |
| SEO | 90 | Non mesuré |

### Améliorations qualité intégrées

- Les métadonnées HTML initiales reprennent la description française du portfolio et son titre. L’URL canonique et l’URL Open Graph pointent vers le site déployé.
- Le favicon est fourni au format SVG et déclaré avec le type MIME correspondant.
- Un lien d’accès direct au contenu principal permet de contourner la navigation au clavier, avec un libellé traduit selon la langue sélectionnée.
- L’image du portrait, élément principal de la première vue, conserve ses dimensions déclarées et son chargement prioritaire. Les animations respectent la préférence système de réduction des mouvements.

Les scores Lighthouse mobiles ne sont pas mesurés dans cette version du dépôt et aucun rapport n’est inclus. Les valeurs restent indiquées comme non mesurées afin de ne pas présenter de résultats non vérifiés. Une future mesure pourra compléter ce tableau avec le rapport du site déployé et les explications associées aux scores inférieurs aux objectifs.

La compilation de production (`npm run build`) et l’analyse statique (`npm run lint`) ont été exécutées avec succès le 24 octobre 2026. Ces vérifications du code source sont distinctes de l’audit Lighthouse du site en ligne.

## Lancer le projet en local

Prérequis : Node.js et npm.

```sh
git clone https://github.com/JimDev1-c/My-Porfolio.git
cd My-Porfolio
npm install
npm run dev
```

Pour contrôler le code et préparer la version de production :

```sh
npm run lint
npm run build
npm run preview
```

Vite affiche l’adresse locale dans le terminal. La compilation de production est écrite dans `dist/`.

## Organisation du code

- `src/App.tsx` assemble les sections et gère la langue active.
- `src/i18n.ts` contient les textes français et anglais.
- `src/components/` contient les composants de navigation, profil, parcours, projets, loisirs et contact.
- `src/App.css` et `src/index.css` définissent la présentation et les règles responsive.
- `src/assets/` contient les ressources graphiques importées.
- `docs/screenshots/figma/` et `docs/screenshots/site/` regroupent les captures utilisées pour la comparaison.
- `index.html` définit le document et ses métadonnées initiales.
