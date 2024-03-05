/* -------------------- LES FONCTIONS -------------------- */

/* Une fonction est un bloc de code réutilisable.
Qui peut etre appelé à partir d'autres parties du code pour effectuer une tâche spécifique.
Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus facile a gérer.
Elles permetents de réutiliser le meme code plusieurs fois sans avoir à le copier coller. */

// Déclarer une fonction

function hello(x, y) {
  console.log(`Bonjour ` + x + ` ` + y);
}

hello(`thomas`, `dupuis`);

// Déclarer une fonction qui prend 3 paramètres
// déclare une variable TVA à 20%
// multiplie les trois nombres et la TVA
// Appelez la fonction

function truc(x, y, z) {
  let tva = 20 / 100;
  let calcul = x * y * z * tva;

  return calcul;
}

const calcul = truc(14, 67, 96);
console.log(calcul);

// Il est possible de sauvegarder une fonction dans une variable.
// On les appelle des fonctions anonymes.

const math = function (x, y) {
  return x * y;
};

const res = math(12, 89);
console.log(res);

// Faire une fonction addition

const plus = function (x, y) {
  return x + y;
};

const resultat = plus(1, 1);
console.log(resultat);

// Arrow function (fonction fléché)
// Nouvelle syntaxe introduite avec ES6 (en 2015)

const divide = (x, y) => {
  return x / y;
};

const result = divide(5, 2);
console.log(result);

// Il existe des façons encore plus concise d'écrire des fonctions fléchés

const arrow = (x) => x * 2;
const r = arrow(45);
console.log(r);

// Créer une fonction fléché "hello you" qui affiche bonjour + son prénom

const helloyou = (x) => `Bonjour ` + x;
const helloyou2 = helloyou(`Hugo`);
console.log(helloyou2);

let userInput = prompt(`Donnez un nombre !`);

const jeu = (userInput) => {
  if (userInput % 3 == 0 && userInput % 5 == 0) {
    console.log(`Fizz buuz`);
  } else if (userInput % 5 == 0) {
    console.log(`buzz`);
  } else if (userInput % 3 == 0) {
    console.log(`fizz`);
  } else {
    console.log(userInput);
  }
};

jeu(userInput);
