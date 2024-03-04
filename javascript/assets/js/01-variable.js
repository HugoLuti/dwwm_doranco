/* -------------------- VARIABLES -------------------- */

// ? NB : les noms de variables sont sensibles a la casse
// On fait la différence entre les majuscules et les minuscules.

// Déclaration d'une variable
let uneVariable;
let UNEVARIABLE;


// Affectation d'une valeur a une variable.
uneVariable = `Je suis une variable`

// Les deux peuvent se faire en meme temps.
let hello = `hello, world`

hello= uneVariable

console.log(hello)

// le mot clé "const" permet de déclarer une constante.
// Vous ne pouvez pas modifier une constante (on dit qu'elle est imuable)
// const va garantir que la valeur ne soit pas modifié tout au long de l'execution du script.

const constante = `Je suis une constante`;
constante = `autre chose`;

// Le mot clé "var" permet aussi de déclarer des variables.
// C'est une pratique désuée (c'était la seule façon avant 2010)
// Il est /!\ FORTEMENT /!\ déconseillé de l'utiliser.

var past = `Je suis dépassé`

