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
