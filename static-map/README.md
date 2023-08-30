# STATIC EU MAP

> Ceci est (pour l'essentiel) une archive du POC (v1) initié en amont de ce projet.

Carte interactive de l'Europe présentant des informations sur les régimes politiques de chaque pays SANS Javascript.

Ce projet est un exercice de style destiné à :

1. donner l'impulsion initiale à une recherche documentaire sur l'état actuel de l'Europe politique (et en particulier, de la montée de l'extrême droite en son sein)
2. voir jusqu'où je pouvais pousser l'idée d'une application web dynamique sans aucun code JavaScript ni outil de développement

## Considérations techniques

De nombreuses astuces permettent effectivement de créer un contenu dynamique en n'utilisant uniquement HTML, SVG et CSS.
Ainsi, vous pouvez directement télécharger le projet et ouvrir le fichier HTML dans votre navigateur sans même avoir besoin de recourir à un serveur HTTP.

Ici, j'ai notamment eu recours à :

- des éléments masqués `<input>` de [type `checkbox`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/checkbox) contrôlés par un menu formé d'éléments [`<label>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/label) correspondants
- la pseudo-classe CSS [`:checked`](https://developer.mozilla.org/fr/docs/Web/CSS/:checked), pour l'affichage dans la carte des éléments sélectionnés dans le menu
- des éléments HTML [`<details>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/details), pour le menu déroulant
- la pseudo-classe CSS [`:target`](https://developer.mozilla.org/fr/docs/Web/CSS/:target), pour afficher une modale
- des éléments SVG [`<pattern>`](https://developer.mozilla.org/fr/docs/Web/SVG/Element/pattern), pour apporter un minimum de réutilisabilité

Des telles astuces peuvent, effectivement, faire l'affaire pour des applications très simples.

Mais ce projet pousse le concept à l'extrême précisément afin d'en explorer les limites.

Ainsi, on constate rapidement que l'absence de solution de templating (cf. la [discussion WHATWG associée](https://github.com/whatwg/html/issues/2254)) amène irrémédiablement à de nombreuses duplications, rendant la page index.html globalement illisible et inmaintenable.

Ce point seul pourrait être facilement résolu en recourant à un outil de templating très simple tel que [Mustache](https://mustache.github.io/).

Cependant, d'autres fonctionnalités plus poussées (comme afficher des cartes avec plusieurs légendes alternatives en un seul clic), demandent d'abandonner ces astuces au bénéfice d'un outil de rendering plus poussé.

React étant le plus connu et populaire, je construirai prochainement un contre exemple avec celui-ci pour mieux illustrer son intérêt.
