/* -------------------- BOUCLES -------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

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
