'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const IMG_PATH = 'images/';
const START = 9;

let timer;
let count;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
// Gestionnaire d'événement au clic sur le bouton de mise à feu
function onClickFiringButton()
{
    // Une fois que la mise à feu lancée, on désactive le bouton de mise à feu
    firingButton.removeEventListener('click', onClickFiringButton);
    firingButton.classList.add('disabled');
    
    // Programmation du décollage de la fusée à la fin du compte à rebours
    scheduleTakeOff();
    // Affichage initial du compte à rebours
    countDown();
    // Lancement du compte à rebours
    timer = window.setInterval(countDown, 1000);
    // On change la source de l'image de la fusée
    updateRocket('rocket2.gif');
}   
/**
 * Programme le décollage de la fusée à la fin du compte à rebours
 */
function scheduleTakeOff()
{
    // Programmation du décollage pour dans x secondes
    setTimeout(function(){
        // On change la source de l'image de la fusée
        updateRocket('rocket3.gif');
        // On fait décoller la fusée en lui donnant la classe 'tookOff', la transition CSS fera le reste
        rocket.classList.add('tookOff');
    }, count * 1000);
}

// Gestion du compte à rebours
function countDown()
{
    // Affichage sur le panneau du compte à rebours
    billboard.textContent = count;
    // On décrémente le compteur
    count--;
    // Si le compteur arrive à -1, 
    if( count == -1 ){
        //on stoppe le chronomètre
        window.clearInterval(timer);
    }
}

/**
 * Met à jour l'image de la fusée
 */
function updateRocket(filename)
{
    //on attribut la nouvelle image avec la propriété src
    rocket.src = IMG_PATH + filename;
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
// Initialisation des variables globales
count = 10;

// Sélection des différents éléments du DOM sur lesquels nous allons agir (3 constantes)
const rocket = document.getElementById('rocket');
const billboard = document.querySelector('#billboard span');
const firingButton = document.getElementById('firing-button');



// Installation du gestionnaire d'événement au clic sur le bouton de mise à feu
firingButton.addEventListener('click', onClickFiringButton);

/************************************************************************************/
/* *********************************** ETOILES  *************************************/
/************************************************************************************/

/**
 * Bonus: Choisir la taille de l'étoile
 */
 function choisirTaille() {
     //chiffre au hasard entre 1 et 3
    let taille = getRandomInteger(1,3);
    //condition qui va choisir une classe déjà dans le css pour la taille 
    switch (taille) {
        case 1 : 
            return "tiny";
            break;
        case 2 :
            return "normal";
            break;
        case 3 :
            return "big";
            break;
    }
}
 
 /**
 * Bonus: Choisir la position x pour les étoiles
 */
 function choisirX() {
     //je recupère la largeur de la taille de ma fenêtre je tire au hasard un chiffre entre 1 et cette valeur
    let x = getRandomInteger(1, window.innerWidth - 3);
    return x;
}
 
 
 function choisirY() {
     //je recupère la hauteur de la taille de ma fenêtre je tire au hasard un chiffre entre 1 et cette valeur
     let y = getRandomInteger(1, window.innerHeight - 3);
    return y;
}

// Ajouter des étoiles (code principal)

//je met une limite
const numberOfStars = 300;
//j'initialise un tableau qui va stocker toutes mes étoiles (div)
let stars=[];

//boucle qui va afficher 300 étoiles une par une
for (let i = 0; i <= numberOfStars; i++) {
    //je crée un élément (ici une div)
    stars[i]=document.createElement("div");
    //je vais ajouter la div à mon body dans le HTML
    document.body.appendChild(stars[i]);
    //on ajoute la classe star pour donner une apparence d'étoile (présente dans le css)
    stars[i].classList.add("star");
    //on ajoute une classe qui sera retournée par la fonction choisirTaille
    stars[i].classList.add(choisirTaille());
    //on détermine la position de l'étoile avec top et bottom (star a déjà un position absolute dans le css)
    stars[i].style.left = choisirX() + "px";
    stars[i].style.top = choisirY() + "px";
}

