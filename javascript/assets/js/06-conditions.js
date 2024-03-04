/* -------------------- INSTRUCTIONS CONDITIONNELLES -------------------- */

// Les opérateurs de comparaison (==, ===, !=, !==, >=, <=, <, >)

// Declarer une constante condition, donner lui une valeur nombre

// Verifier si ce nombre est superieur ou egal a 18 si c'est le cas afficher vous etes majeur

const condition = 24

if(condition>=18){
    console.log(`Vous etes majeur`)
}

// Si la condition est vraie (truthy), le bloc d'instruction est exécuté
// Sinon il est ignoré

// Declarer une variable qui contient un nombre
// Si le nombre est divisible par 3 afficher une alert 'fizz'
// Si le nombre est divisible par 5 afficher une alert 'buzz'
// Si le nombre est divisible par 3 et par 5 afficher une alert 'fizz buzz'
// Sinon afficher dans un alert le nombre

// let nombre = prompt(`Veuillez me donner un nombre`)

// if(nombre % 3 == 0) && (nombre % 5 == 0){
//     console.log(`FIZZ BUZZ`)
// } else if(nombre % 3 == 0){
//     console.log(`fizz`)
// } else if(nombre % 5 == 0){
//     console.log(`buzz`)
// }

// else{
//     console.log(nombre)
// }

// demander un nombre 
// if ce nombre est egale a 12
// verifier avec == ===

// === vérifie a la fois la valeur et le type des valeurs comparées (opérantes)

// let response = prompt(`Donnez moi un nombre`)

// if(response === 12){
//     console.log(`Bravo`)
// }
// else{
//     console.log(`faux`)
// }


// demander a l'utilisateur son animal pref
// si c'est un chien
    // vous etes qlq de bieng
// si c'est un chat
    // quelle drole d'idée
// si c'est un poisson rouge
    // Je ne souhaite plus communiquer avec vous.
// sinon
    // je n'ai pas compris la réponse.
// 


let response = prompt(`Quel est votre animal préferer ?`)

switch(response){
    case `chien` : console.log(`Vous etes qlq de bieng`)
    break;
    case `chat` : console.log(`Quelle drôle d'idée`)
    break;
    case `poisson rouge` : console.log(`Je ne souhaite plus communiquer avec vous.`)
    break;
    default:
        console.log(`Je n'ai pas compris votre réponse.`)
}