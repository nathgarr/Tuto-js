//Variable textuelle
const divVies=document.querySelector('.vies');
const message=document.getElementById('message');
const Formulaire=document.getElementById('inputBox');
const Input=document.getElementById('number');
const essayrBtn=document.getElementById('essayerBtn');
const rejouer=document.getElementById('rejouer');
const body =document.getElementsByTagName('body')[0];

//Modèle de coeur
const coeurVide='<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein ='<ion-icon name="heart"></ion-icon>';

//Variable couleur
const bgFroid ='linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiède ='linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
const bgChaux='linear-gradient(to top, #f43b47 0%, #453a94 100%)';
const bgBrulant='linear-gradient(to right, #ff8177 0%, #b12a5b 100%)';

const bgWin="linear-gradient(-225deg,#231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)";
const bgloose='linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)'

//logique Play fonction flécher

const play = () =>{

    //nb aleatoire
    //mathfloor pour arondir et math/random pour un nombre a virgule compri entre 0 et 1 exclu donc on arrondi
    const randomNumber = Math.floor(Math.random() * 101);
    const totalVies=6;
    let vies=totalVies;
    //préparation des variable coeur
    console.log(randomNumber);
    //Actualisation a chaque essai toute la logique
    Formulaire.addEventListener('submit', (e) =>{
        //empeche la modification du nombre a l'actualisation/envoi du formulaire
        e.preventDefault()
        //Ne pas oublier de convertir les lettre en nombre
        const valeurInput=parseInt(Input.value);
        //si l'utilisateur triche le jeux se ferme
        if(valeurInput < 0 || valeurInput > 100) return;
        //si le joueur gagne il se passe cela
        if(valeurInput === randomNumber){
            //changement de style du a la victoire
            body.style.backgroundImage=bgWin;
            message.textContent=`BRAVO !!! le nombre était bien ${randomNumber}🥝🥝🥝`
            //si il veux rejouer
            rejouer.style.display="block"
            essayrBtn.setAttribute("disabled", "")
            //block le bouton essay pour que le joueur ayant gagner
        }
        //!== différent de randomnumber
        if(valeurInput !== randomNumber){
            //intervale chaux froid
            if(randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3){
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgBrulant;
                //emoji =ctr+i
                message.textContent="C'est Brûlant !!! 🔥🔥🔥";
            }
            else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6){
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgChaux;
                //emoji =ctr+i
                message.textContent="C'est Chaux ! 🧯🧯🧯";
            }
            else if (randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11){
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgTiède;
                //emoji =ctr+i
                message.textContent="C'est tiède ! 🤒🤒🤒";
            }
            else{
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgFroid;
                //emoji =ctr+i
                message.textContent="C'est Froid ❄️❄️❄️";
            }
            vies--;
            //perte de vie a chaque essay rater
            verifyLoose();
            //active la focntion qui permet de deduire si un coeur et perdu ou non
        }
        actualiseCoeur(vies);
    })
    //verification de defaite
    const verifyLoose=()=>{
        if(vies===0){
            //ajout de styles garce a javascript
            body.style.backgroundImage=bgloose;
            body.style.color='#990000'
            //desactivation bouton essay
            essayrBtn.setAttribute("disabled", "")
            //générateur de nombre randome
            message.textContent = `Vous avez perdu. La réponse était ${randomNumber}😥😥😥`
            //Activation button rejouer
            rejouer.style.display="block";
        }
    }
    //tableau générateur de coeur
    const actualiseCoeur=(vies)=>{
        divVies.innerHTML="";
        let tableauDeVies=[];
        for(let i = 0; i < vies; i++){
            //génération coeur remplit
            tableauDeVies.push(coeurPlein);
        }
        for(let i = 0; i < totalVies-vies; i++){
            //génération coeur vide=perdu
            tableauDeVies.push(coeurVide);
        }
        tableauDeVies.forEach(coeur =>{
            //activation de la génération de coeur
            divVies.innerHTML+=coeur;
        })
    }
    actualiseCoeur(vies);
    rejouer.addEventListener('click', () => {
        //retirer le message
        message.style.display='none';
        //force le navigateur a actualiser la page web pour changer le nombre et redonner les vie
        document.location.reload(true);
    })
}
play();