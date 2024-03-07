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

// Quand on double clique sur la liste 
    // On va créer un élément h2, le texte de ce h2 sera le texte de l'élément de la liste sur lequel on a double cliqué
    // On ajoute ensuite l'élément créer tout en haut avant le titre principale
// 

listMovies.addEventListener("dblclick",function(event){
  const createH2 = document.createElement("h2")
  createH2.textContent = event.target.textContent
  const container = document.querySelector('#container')
  container.prepend(createH2)
})
