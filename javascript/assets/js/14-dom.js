/* -------------------- MANIPULATION DU DOM -------------------- */

/*

    Le DOM (Document Object Model) en Javascript est une représentation en mémoire d'un document HTML chargé par le navigateur
    Le DOM represente chaque élément du document comme un objet Javascript qui peut etre manipulé et modifié à travers le code Javascript

*/


// La méthode par id
const mainTitle = document.getElementById('main-title')
console.log(mainTitle);


// La méthode par tagname (balise)


// La méthode par class

const h = document.getElementsByClassName(`title`)
console.log(h);

for(let tour = 0; tour < h.length; tour++){
    h[tour].style.backgroundColor = 'purple'
}

// La méthode querySelector()

const cssProperties = document.querySelector(`.title`)
console.log(cssProperties);
cssProperties.style.fontSize = '50px'

// recuperer tout les paragraphes avec la méthodes queryselectorAll()
// souligne les paragraphes

const allP = document.querySelectorAll(`p`)
// console.log(allP);

// for(let tour of allP){
//     tour.style.textDecoration = 'underline'
// }

allP.forEach(function(paragraphe){
    paragraphe.style.textDecoration = 'underline'
})

// selectionner tous les éléments qui ont la class txt-uppercase
// tous les mettre en majuscule

const upp = document.querySelector('.txt-uppercase')
console.log(upp);
upp.style.textTransform = 'uppercase'