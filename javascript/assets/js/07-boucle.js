/* -------------------- BOUCLES -------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

/*
    La principale difference entre 'for' et 'while' :
    'for' est generalement utilise lorsque le nombre d'iteration est connue a l'avance
    'while' est utilise lorsque le nomvre d'iteration est inconnu a l'avance et depend d'une condition specifique

*/

// Boucle : for(){.....}
// Afficher les nombres de 10 a 20 avec une boucle for

for (let tour = 10; tour <= 20; tour++) {
  console.log(tour++);
}

// Boucle : while(){.....}
// Afficher les nombres pairs de 10 à 20 dans une boucle while

let start = 10;

while (start <= 20) {
  start = start + 2;
  console.log(start);
}

// Demander un nomber a l'utilisateur, tant que ce nombre n'est pas le bon dite lui + ou -

userInput = prompt(`Donnez moi un nombre`);
magicNumber = 100;

while (userInput != magicNumber) {
  if (userInput < magicNumber) {
    userInput = prompt(`Donne moi un autre nombre plus grand.`);
  } else {
    userInput = prompt(`Donne moi un autre nombre plus petit.`);
  }
}

// Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10
// Si la reponse n'est pas entre 1 et 10, afficher que le message devait etre compris entre 1 et 10
// Le programme doit ensuite dissiner un sapin de Noel composé d'étoile
// *
// **
// ***
// ****
// *****

let response = prompt(`Veuillez indiquer un nombre entre 1 et 10`);
let stars = ` `;

if (response >= 1 && response <= 10) {
  for (let tour = 0; tour < response; tour++) {
    stars = stars + `*`;
    console.log(stars);
  }
} else {
  console.log(`Le nombre doit etre compris entre 1 et 10.`);
}
