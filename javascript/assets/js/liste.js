// Faire une liste de films Avanger

// ecouteur sur le UL
// Le LI cliqué doit changer de taille et se mettre a 28px

const listMovies = document.querySelector("#liste-movies");

listMovies.addEventListener("click", function (event) {
  // Permet de récuperer la taille du texte
  // console.log(event.target.style.fontSize);

  //   Si la taille du texte est égla à 16px
  // On change la taille du texte a 50px
  // Sinon
  // On change la taille du texte a 16px

  if (
    event.target.style.fontSize == "16px" ||
    event.target.style.fontSize == ""
  ) {
    event.target.style.fontSize = "50px";
  } else {
    event.target.style.fontSize = "16px";
  }
});
