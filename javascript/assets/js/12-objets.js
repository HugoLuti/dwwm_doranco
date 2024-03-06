/* -------------------- LES OBJECTS -------------------- */

// Les objets sont des structures de données complexe qui permettent stocker des valeurs et des fonctions ensembles.

const person = {
  firstName: `Hugo`,
  lastName: `Lutigneaux`,
  age: 24,
  formation: [`algo`, `html`, `git`, `javascript`],
  job: {
    name: `stagiaire`,
    hours: 35,
  },
  getindentify: function () {
    return `je m'appelle hugo lutigneaux`;
  },
};

// Pour acceder a la propriété d'un objet
console.log();

// Créer un objet car
// model = `audi`
// année de sortie = `année`
// une couleur = 'color'
// option = ['siege chauffants', 'vitres electiques', '.......',]
// moteur => objet => cylindre, nombre de chevaux
// description (fonction) => 'Je suis une audi sortie en .........'

const car = {
  model: "Audi",
  sortie: 2023,
  color: "black",
  options: [
    "sièges chauffants",
    "vitres éléctriques",
    'écran de télé 55 pouces a l"arrière',
  ],
  moteur: {
    cylindres: 28,
    chevaux: 350,
  },
  description: function () {
    return `Je suis une ${this.model} sortie en ${this.sortie}.`
  },
};

console.log(car.model);
console.log(car.options[0]);
console.log(car.description());

// On peut également acceder a une propriété d'un objet grace aux crochets et à sa clé en guise de valeur
console.log(car[`model`]);


// Pour pouvoir boucler sur un objet il faut utiliser for (... in ...){} car les bjets sont des énumérables 
for(let x in car){
  console.log(x)
}