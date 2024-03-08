// Cibler le boutton ajouter
// verifie ce que je récupere

// Ajouter un ecouteur d'evenement => click
// verifie si au click on affiche un message en console
// cree un li
// cible l'input
// le text du li sera le text de l'input
// ajouter dans le ul

// Ajouter un ecouteur sur l'ul => click
// la cible changera et sera barré (CSS)

// Ajouter un écouteur sur l'ul =>
// la cible sera supprimée
//

const btnAjout = document.querySelector(".btn-ajouter");
const userInput = document.querySelector("#user-input");
const listLi = document.querySelector("#list-li");

btnAjout.addEventListener("click", function () {
  const createLi = document.createElement("li");
  if (userInput.value != "") {
    createLi.textContent = userInput.value;
    listLi.prepend(createLi);
  }
});

listLi.addEventListener("click", function (event) {
  event.target.style.textDecoration = "line-through";
});

listLi.addEventListener("dblclick", function (event) {
  event.target.remove();
});
