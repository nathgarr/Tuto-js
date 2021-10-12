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
const bgChaux='linear-gradient(to right, #ff8177 0%, #b12a5b 100%)';
const bgBrulant='linear-gradient(to top, #f43b47 0%, #453a94 100%)';

const bgWin="linear-gradient(-225deg,#231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)";
const bgloose='linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)'

//logique Play fonction flécher
const utilisator=document.getElementById('Choixutilisateur')
const jeux=document.getElementById('pacman')
const choix=document.getElementById('choix')
const facile =document.getElementById('facile')
const normale =document.getElementById('normale')
const difficle =document.getElementById('Hard')
const retour =document.getElementById('restart')
const choice= "";
const nombreListe=document.getElementById('nbl')
const titr= document.getElementById('dif')

function choixUtilisateur(){
     facile.addEventListener('click', () =>{
        choix.style.display="none";
        jeux.style.display="block";
        titr.innerHTML=`Difficulter Facile`
        var choice=9;
        play(choice);
    })
    normale.addEventListener('click', ()=>{
        choix.style.display="none";
        jeux.style.display="block";
        titr.innerHTML=`Difficulter Moyen`
        var choice=5;
        play(choice);
    })
    difficle.addEventListener('click', ()=> {
        choix.style.display="none";
        jeux.style.display="block";
        titr.innerHTML=`Difficulter Difficile`
        var choice=3;
        play(choice);
    })
}
choixUtilisateur();
const play = (choice) =>{
    retour.addEventListener('click', () => {
        document.location.reload(true);
    })
    const totalVies= choice;
    //nb aleatoire
    //mathfloor pour arondir et math/random pour un nombre a virgule compri entre 0 et 1 exclu donc on arrondi
    const randomNumber = Math.floor(Math.random() * 101);
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
            let input = document.getElementById('inputBox')
               input.style.backgroundImage=bgWin;
            //si il veux rejouer
            rejouer.style.display="block";
            essayrBtn.style.display="none";
            essayrBtn.setAttribute("disabled", "")
            //block le bouton essay pour que le joueur ayant gagner
            retour.style.display="none";
        }
        //!== différent de randomnumber
        if(valeurInput !== randomNumber){
            //intervale chaux froid
            if(randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3){
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgBrulant;
                let input = document.getElementById('inputBox')
               input.style.backgroundImage=bgBrulant;
                //emoji =ctr+i
                message.textContent="C'est Brûlant !!! ♨️♨️♨️";
            }
            else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6){
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgChaux;
               let input = document.getElementById('inputBox')
               input.style.backgroundImage=bgChaux;
                //emoji =ctr+i
                message.textContent="C'est Chaux ! 🧨🧨🧨";
            }
            else if (randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11){
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgTiède;
                let input = document.getElementById('inputBox')
               input.style.backgroundImage=bgTiède;
                //emoji =ctr+i
                message.textContent="C'est tiède ! 🧯🧯🧯";
            }
            else{
                //ajout de styles garce a javascript
                body.style.backgroundImage=bgFroid;
                let input = document.getElementById('inputBox')
               input.style.backgroundImage=bgFroid;
                //emoji =ctr+i
                message.textContent="C'est Froid ☃️☃️☃️";
            }
            vies--;
            //perte de vie a chaque essay rater
            verifyLoose();
            //active la focntion qui permet de deduire si un coeur et perdu ou non
        }
        const saisinb=(valeurInput)=>{
            // nombreListe.innerHTML="";
            let tableauNombre=[];
            for(let i = 0; i < 1; i++){
            tableauNombre.push("😥"+valeurInput+" ")
            }
            tableauNombre.forEach(valeurInput =>{
                nombreListe.innerHTML+=valeurInput;
            })
        }
        saisinb(valeurInput,vies);
        actualiseCoeur(vies);
    })
    //verification de defaite
    const verifyLoose=()=>{
        if(vies===0){
            //ajout de styles garce a javascript
            body.style.backgroundImage=bgloose;
            let input = document.getElementById('inputBox')
               input.style.backgroundImage=bgloose;
            body.style.color='#990000'
            //desactivation bouton essay
            // essayrBtn.setAttribute("disabled", "")
            essayrBtn.style.display="none";
            //générateur de nombre randome
            message.textContent = `Vous avez perdu. La réponse était ${randomNumber}😥😥😥`
            //Activation button rejouer
            rejouer.style.display="block";
            retour.style.display="none";
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
        let Txt = document.getElementById('Txt');
            Txt.textContent = `Vous avez ${vies} pv bon courage chevalier tuon ce dragon`;
    }
    actualiseCoeur(vies);
    rejouer.addEventListener('click', () => {
        //retirer le message
        message.style.display='none';
        //force le navigateur a actualiser la page web pour changer le nombre et redonner les vie
        document.location.reload(true);
    })
}
// play();

const theme = document.querySelectorAll('.theme');

theme.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        document.body.classList.remove('darkTheme','lightTheme');
        switch(event.target.id){
            case"Dark":
                document.body.classList.add("darkTheme");
                break;
            case"Light":
                document.body.classList.add("lightTheme");
                break;
            default:
                null;
        }
    })
})