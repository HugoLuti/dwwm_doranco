/* -------------------- CONCATENATION -------------------- */

// CONCATENATION : afficher du texte et des variables.

// Declarer des variables
    // Un age
    // Un prénom
    // Un nom
    // Une adresse
    // La formation que vous suivez
    // L'organisme de formation qui fait la formation

// Recuperer dans une variable le message
// Je m'appelle NOM PRENOM, j'ai AGE ans et je suis en formation FORMATION à ORGANISME

const AGE = 24;
const PRENOM = "Hugo"
const NOM = "Lutigneaux"
const FORMATION = "AQ DWWM"
const ORGANISME = "Doranco"


let information = "Je m'appelle " + PRENOM + " " + NOM + ", j'ai " + AGE + " ans et je suis en formation " + FORMATION + " à " + ORGANISME;


information = 'Je m`appelle ' + PRENOM + ' ' + NOM + ', j`ai ' + AGE + ' ans et je suis en formation ' + FORMATION + ' à ' + ORGANISME;

information = `Je m'appelle ${PRENOM} ${NOM}, j'ai ${AGE} ans et je suis en formation ${FORMATION} à ${ORGANISME}`

console.log(information)
