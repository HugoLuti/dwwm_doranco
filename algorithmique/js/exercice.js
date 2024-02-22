// Transformer la foncton pour la rendre parametrable et pouvoir decider jusqu'a quel nombre la boucle se fait

// function paire2(x) {
//     for(let i = 0; i < x; i = i+2) {
//         console.log(i);
//     }
// }

// paire2()

// Transformer la foncton pour la rendre parametrable et pouvoir decider jusqu'a quel nombre la boucle se fait et le pas

// function paire(x, y) {
//     for(let i = 0; i < x; i = i+y) {
//         console.log(i)
//     }
// }

// paire(1000, 3)

/*  ------------------------------------------------------------
                        LES TABLEAUX
    ------------------------------------------------------------ */

/* 
    Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utilisant des crochets et en y insérant les éléments séparés par des virgules
*/

// On peut acceder a un élément du tableau en utilisant son index numérique (indice)
// L'index du premier element est toujours 0
// console.log(week[0]);

// Pour modifier la valeur d'un element d'un tableau, je précise l'indexe
// week[6] = `test`;
// console.log(week);

// Pour connaitre la longeur d'un tableau nous pouvons utiliser la propriété .lenght
// console.log(week.length + 1);

// Faire une fonction 'displayarray'
//      Affiche tout les éléments du tableau animals

// let animals = [`Lapin`, `Chien`, `Vache`, `Chevre`, `Poule`, `Chat`];
// let week = [
//   `Lundi`,
//   `Mardi`,
//   `Mercredi`,
//   `Jeudi`,
//   `Vendredi`,
//   `Samedi`,
//   `Dimanche`,
// ];

// function displayArrayWithParameter(array) {
//   for (let i = 0; i < array.lenght; i++) {
//     console.log(array[i]);
//   }
// }
// displayArrayWithParameter(week);
// displayArrayWithParameter(animals);

// Les tableaux peuvent contenir d'autres tableaux

let note = [
  [12, 16, 19],
  [9, 5, 4],
  [12, 24, 7],
];

// Pour acceder a une note du tableau
console.log(note[1][2]);
