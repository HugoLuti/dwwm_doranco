/* -------------------- LES EVENTS -------------------- */

/*

    En Javascript les evenements (events) permettent d'intéragir avec les actions de l'utilisateur,
    telles que le clik, le scroll, etc....

*/

// Cibler le h1
// Mettre un écouteur d'évenement

const mainTitle = document.querySelector("#mainTitle");
const secondTitle = document.querySelector("#secondTitle");

mainTitle.addEventListener("click", function () {
  secondTitle.style.fontSize = "50px";
});

mainTitle.addEventListener("dblclick", function () {
  secondTitle.style.fontSize = "150px";
});

mainTitle.addEventListener("mouseover", function () {
  secondTitle.style.color = "red";
});

// 'addEventListener' permet de récuperer l'evenement (toutes les informations liées au click)
// .target permet par exemple de récuperer la balise HTML qui a réellement été cliqué.

const paragraphe = document.querySelector(".paragraphe");

paragraphe.addEventListener("click", function (e) {
  e.target.style.color = "red";
});
