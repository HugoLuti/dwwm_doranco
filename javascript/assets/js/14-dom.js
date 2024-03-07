/* -------------------- MANIPULATION DU DOM -------------------- */

/*

    Le DOM (Document Object Model) en Javascript est une représentation en mémoire d'un document HTML chargé par le navigateur
    Le DOM represente chaque élément du document comme un objet Javascript qui peut etre manipulé et modifié à travers le code Javascript

*/

// La méthode par id
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

// La méthode par tagname (balise)

// La méthode par class

const h = document.getElementsByClassName(`title`);
console.log(h);

for (let tour = 0; tour < h.length; tour++) {
  h[tour].style.backgroundColor = "purple";
}

// La méthode querySelector()

const cssProperties = document.querySelector(`.title`);

// recuperer tout les paragraphes avec la méthodes queryselectorAll()
// souligne les paragraphes

const allP = document.querySelectorAll(`p`);
console.log(allP);

for (let tour of allP) {
  tour.style.textDecoration = "underline";
}

allP.forEach(function (paragraphe) {
  paragraphe.style.textDecoration = "underline";
});

// selectionner tous les éléments qui ont la class txt-uppercase
// tous les mettre en majuscule

const txtUppercases = document.querySelectorAll(".txt-uppercase");
for (let txtUppercase of txtUppercases) {
  txtUppercase.style.textTransform = "uppercase";
}

// Quelques propriété liés aux éléments du DOM

// La propriété 'style' permet de modifier le style

mainTitle.style.textTransform = "uppercase";

// Ajouter la classe txt-green

mainTitle.classList.add("txt-green");

// Cibler le paragraphe qui a la class 'txt-uppercase'
// Enlever lui la class

const remoove = document.querySelector("#remoove");
remoove.classList.remove("txt-uppercase");

// Cibler le deuxième h2
// Vérifier s'il contient la class title

const secondTitle = document.querySelector("#second-title");
const isTitle = secondTitle.classList.contains("title");
console.log(isTitle);

// Modifier le text => c'est pas si dur avec de la pratique

// La propriété 'textContent' permet de récupérer ou de définir le contenu textuel d'un élément HTML.

secondTitle.textContent = "c'est pas si dur avec de la pratique";

// La propriété 'innerHTML' permet de récupérer ou de définir le contenu HTML d'un élément HTML (le HTML est interprété)

secondTitle.innerHTML = "c'est <em>pas</em> si dur avec de la pratique";

// Cibler le dernier paragraphe
// Lui ajouter l'attribut 'title' avec la valeur 'je suis une pop-up ajouter en Javascript'

const popUp = document.querySelector("#popUp");
popUp.title = "Je suis une pop-up ajouter en Javascript.";

/* -------------------- Créer des éléments -------------------- */

const newParagraphe = document.createElement("p");
newParagraphe.classList.add("new-paragraphe");
newParagraphe.textContent = "Je suis un nouvel element créer en js";

const paragrapheContainer = document.querySelector("#paragraphe-container");

// Ajoute un nouvel élément a la fin
paragrapheContainer.append(newParagraphe);
