//Element du dom
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

//Fond
const bgFroid ='linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiède ='linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
const bgChaux='linear-gradient(to top, #f43b47 0%, #453a94 100%)';
const bgBrulant='linear-gradient(to right, #ff8177 0%, #b12a5b 100%)';

const bgWin="linear-gradient(-225deg,#231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)";
const bgloose='linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)'
//preparation variable
