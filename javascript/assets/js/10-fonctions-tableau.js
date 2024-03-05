/* -------------------- FONCTIONS SUR LES TABLEAUX -------------------- */

// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin', 'panda')

const animals = ["chat", "chien", "tigre", "lion", "requin", "panda"];

console.log(animals);

// ! /!\ ATTENTION, la plupart des méthodes modifient le tableau de départ /!\

// Ajoute un ou plusieur éléments a la fin d'un tableau

let response = animals.push(`dauphin`, `loup`);
console.log(animals);

console.log(response);

// Supprime le dernier élément du tableau

response = animals.pop();
console.log(animals);

// Affiche l'élément supprimer
console.log(response);

// Ajoute un ou plusieur éléments au début d'un tableau

response = animals.unshift(`DracoFeu`);
console.log(animals);

// Affiche l'élément ajouter

console.log(response);

// Supprimer le premier élément d'un tableau

response = animals.shift();
console.log(animals);

// Affiche l'élément supprimer au debut du tableau

console.log(response);

// Réorganise le tableau de la fin vers le début

animals.reverse();
console.log(animals);

// Modifier, ajouter ou supprimer l'élément dans un tableau
// Ajouter un raton laveur en deuxième position

animals.splice(1, 0, `raton laveur`);
console.log(animals);

// Modifier 'chien' en 'aigle'

animals.splice(6, 1, "aigle");
console.log(animals);

// Supprimer 'panda'

animals.splice(2, 1);
console.log(animals);

// Declarer un tableau contenant ("Paris", "Berlin", "Rome", "Moscou", "Londres", "Madrid")

/*      
        Créer une fonction qui prend en paramètre le tableau:
            Retire Madrid
            Ajoute au début Vienne
            Rome devient Alger
            Retourne la taille du tableau
*/

let ville = ["Paris", "Berlin", "Rome", "Moscou", "Londres", "Madrid"];
console.log(ville);

function modif() {
  ville.splice(5, 0);
  ville.unshift(`Vienne`);
  ville.splice(3, 0, `Alger`);
  let taille = ville.length;
  console.log(ville);
  console.log(taille);
}

modif();
