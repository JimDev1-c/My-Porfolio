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

Les visuels de gauche sont les captures de référence fournies avec le brief. Ceux de droite sont des captures du site local, en français, prises le 24 octobre 2026 à une largeur de 960 px. Les captures illustrent l’état du code audité ; l’URL publiée est indiquée plus haut. Les captures de référence fournies sont des écrans desktop. Aucun visuel mobile Figma n’a été fourni, donc la fidélité mobile ne peut pas être comparée pixel à pixel.

| Section | Maquette Figma | Site audité |
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

### Écarts constatés et justifications

| Section / écart | Observation | Justification ou suite |
| --- | --- | --- |
| Identité visuelle | Les tons clairs, surfaces blanches et accents verts du site restent proches de la palette neutre de la maquette. En revanche, les titres du site utilisent une police à empattements, alors que les titres de la maquette sont sans empattements. | Écart visuel à corriger si la fidélité stricte à la maquette est attendue. |
| Accueil | La hiérarchie générale est comparable, mais les libellés et l’ordre de navigation diffèrent. Le site utilise un portrait réel là où la maquette montre un emplacement d’image neutre. | Le portrait réel est un contenu personnalisé. Le site bilingue est un objectif explicite du projet ; la capture de référence mélange des libellés français et anglais. |
| À propos | La maquette comprend quatre cartes de domaines sous la biographie et la philosophie ; elles ne figurent pas dans le site actuel. | Le texte et la philosophie ont été réécrits à la demande du propriétaire. Les cartes d’expertise n’ont pas été reprises dans cette version. |
| Formation | La maquette montre quatre entrées détaillées (UNIKIN, PrimeTek Academy, secondaire et primaire). Le site affiche quatre entrées, mais les intitulés, dates et descriptions ne correspondent pas. | Écart de contenu non justifié par la maquette. Les dates et intitulés sont des informations personnelles : les confirmer avant de les modifier. |
| Certifications | La maquette présente quatre cartes avec résumé et données de vérification. Le site présente une liste/carrousel de neuf certifications avec émetteur et date, sans descriptions ni justificatifs liés. | Le contenu actuel est plus récent ou plus détaillé, mais les descriptions et preuves visibles dans la maquette ne sont pas reprises. Les identifiants de certificats doivent être vérifiés avant ajout. |
| Expérience | Les trois rôles sont présents, mais la maquette utilise des cartes à deux colonnes avec périodes, lieux et réalisations chiffrées ; le site emploie une chronologie et plusieurs descriptions plus courtes. | La mise en page diffère sans contrainte technique identifiée. Ne pas recopier les chiffres de la maquette sans validation de leur exactitude. |
| Compétences | La maquette regroupe les compétences en quatre panneaux et liste notamment Next.js, Tailwind, Node.js, API REST, ergonomie responsive et cybersécurité. Le contenu et les groupes du site sont différents et moins détaillés. | Écart de contenu et de présentation à rapprocher de la maquette après validation des compétences réellement maîtrisées. |
| Projets | La maquette montre trois cartes visibles en grille. Le site utilise une rangée défilante et présente Task Flow, Refresh Game, Quizzy et SmartResto ; le descriptif de Quizzy ne correspond pas à la plateforme EdTech représentée dans la maquette. | SmartResto a été ajouté après la maquette et le projet est encore en cours. La différence de disposition n’est pas une limite technique démontrée. Le nom et le contenu de Quizzy sont à confirmer. |
| Recommandations / loisirs | La maquette montre une barre de recommandation LinkedIn et six loisirs en ligne. Le site réserve la section recommandations à un texte de transparence et propose une présentation défilante des loisirs. | Le texte de recommandations évite d’attribuer des avis sans accord vérifiable. Le format compact de la maquette n’a pas été repris. |
| Contact | La maquette utilise deux colonnes, des cartes de coordonnées, trois liens sociaux et un panneau de formulaire en conception. Le site présente une composition différente et ne reprend pas tous les éléments visuels. | Aucun formulaire n’est présenté comme fonctionnel dans la maquette ; les coordonnées publiques restent celles du site. L’écart de mise en page est à rapprocher de la référence. |
| Pied de page | Les mentions, liens et organisation diffèrent ; la maquette porte une mention © 2025, tandis que le site indique © 2026. | L’année du site reflète son contenu actuel. Les liens de navigation et la composition ne sont pas alignés sur la maquette. |
| Version mobile | Une capture réelle des projets à 390 px est disponible, mais aucune capture mobile de la maquette n’a été fournie. | La fidélité mobile reste à comparer dès qu’un écran mobile de référence Figma est disponible. |

Les différences de données de formation, de compétences et d’expérience sont signalées séparément des choix visuels : une maquette ne suffit pas à valider des faits biographiques. Les captures du site mobile sont disponibles dans `docs/screenshots/site/projects-mobile.png`.

## Qualité Lighthouse — mobile

Le brief fixe les objectifs suivants pour un audit Lighthouse mobile exécuté sur le site déployé :

| Catégorie | Objectif minimum | Résultat |
| --- | ---: | --- |
| Performance | 85 | Non mesuré |
| Accessibilité | 90 | Non mesuré |
| Bonnes pratiques | 90 | Non mesuré |
| SEO | 90 | Non mesuré |

L’audit n’a pas abouti dans cet environnement : Lighthouse n’était pas installé et npm a refusé son téléchargement depuis le registre (erreur de certificat TLS, puis verrou de cache signalé comme compromis). Aucun score ni rapport n’est donc disponible. Il reste à exécuter Lighthouse en mode mobile sur le site déployé, à joindre la capture du rapport ici et à expliquer chaque score inférieur à l’objectif ainsi que les optimisations tentées.

Vérifications locales exécutées le 24 octobre 2026 : `npm run build` (réussi) et `npm run lint` (réussi). Elles ne remplacent pas une mesure Lighthouse du site publié.

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

Les aperçus des projets sont des illustrations d’interface, pas des captures d’applications. Les projets sans lien public sont identifiés comme locaux ou en cours. Les recommandations ne sont publiées qu’avec une attribution vérifiable et l’accord de leur auteur.
