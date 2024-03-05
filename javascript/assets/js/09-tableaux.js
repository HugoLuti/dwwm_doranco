/* -------------------- LES TABLEAUX -------------------- */

/*
    Un tableau est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utilisant des crochets [] et en y insérants les éléments séparés par des virugles.
*/

// Créer un tableau avec tout les mois de l'année
// Afficher en console janvier et décembre
// Afficher tout les mois de l'année avec une boucle
// Puis transformer la boucle en fonction sans paramètre

const tableau = [
  `Janvier`,
  `Février`,
  `Mars`,
  `Avril`,
  `Mai`,
  `Juin`,
  `Juillet`,
  `Août`,
  `Septembre`,
  `Octobre`,
  `Novembre`,
  `Decembre`,
];

console.log(tableau[0], tableau[11]);

// for (let tour = 0; tour < tableau.length; tour++) {
//   console.log(tableau[tour]);
// }

function display() {
  for (let tour = 0; tour < tableau.length; tour++) {
    console.log(tableau[tour]);
  }
}

display();
