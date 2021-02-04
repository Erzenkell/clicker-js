let doc = document.querySelector('body')

let a1 = document.querySelector('#achat1');
let a2 = document.querySelector('#achat2');
let a3 = document.querySelector('#achat3');
let a4 = document.querySelector('#achat4');

let u1 = document.querySelector('#upgrade1');
let u2 = document.querySelector('#upgrade2');
let u3 = document.querySelector('#upgrade3');
let u4 = document.querySelector('#upgrade4');

let cookie = document.querySelector('#cookie');

let cookie_par_seconde = 0;
let compteur_cookie = 0;

let prix_upgrade_clic = 30;
let clic_power = 1;
let nb_upgrade_clic = 0;
let multiplicateur_achat_1 = 1;

let prix_achat_2 = 100;
let nb_achat_2 = 0;
let cookie_par_seconde_a2 = 0;
let multiplicateur_achat_2 = 1;

let prix_achat_3 = 1000;
let nb_achat_3 = 0;
let cookie_par_seconde_a3 = 0;
let multiplicateur_achat_3 = 1;

let prix_achat_4 = 5000;
let nb_achat_4 = 0;
let cookie_par_seconde_a4 = 0;
let multiplicateur_achat_4 = 1;

let nb_upgrade_1 = 0;
let prix_upgrade_1 = 10000;

let nb_upgrade_2 = 0;
let prix_upgrade_2 = 20000;

let nb_upgrade_3 = 0;
let prix_upgrade_3 = 30000;

let nb_upgrade_4 = 0;
let prix_upgrade_4 = 40000;

setInterval(cookie_temps,50);

function cookie_clic(){
    compteur_cookie+= clic_power*multiplicateur_achat_1;
    bulles.Creer_Bulle(); //crée une bulle a chaque clic
}

function bouton_achat_1(){
    if (compteur_cookie >= prix_upgrade_clic){
        nb_upgrade_clic += 1;
        clic_power += 1;
        compteur_cookie -= prix_upgrade_clic;
        prix_upgrade_clic += nb_upgrade_clic*2;
        a1.textContent = "("+nb_upgrade_clic+") Upgrade clic : "+prix_upgrade_clic;
    }
}

function bouton_achat_2(){
    if (compteur_cookie >= prix_achat_2){
        nb_achat_2 += 1;
        compteur_cookie -= prix_achat_2;
        prix_achat_2 += nb_achat_2*3;
        cookie_par_seconde_a2 += 1;
        a2.textContent = "("+nb_achat_2+") Upgrade Pps 1 : "+prix_achat_2;
    }
}

function bouton_achat_3(){
    if (compteur_cookie >= prix_achat_3){
        nb_achat_3 += 1;
        compteur_cookie -= prix_achat_3;
        prix_achat_3 += nb_achat_3*4;
        cookie_par_seconde_a3 += 5;
        a3.textContent = "("+nb_achat_3+") Upgrade Pps 2 : "+prix_achat_3;
    }
}

function bouton_achat_4(){
    if (compteur_cookie >= prix_achat_4){
        nb_achat_4 += 1;
        compteur_cookie -= prix_achat_4;
        prix_achat_4 += nb_achat_4*5;
        cookie_par_seconde_a4 += 10;
        a4.textContent = "("+nb_achat_4+") Upgrade Pps 3 : "+prix_achat_4;
    }
}

function bouton_upgrade_1(){
    if (compteur_cookie >= prix_upgrade_1){
        nb_upgrade_1 += 1;
        compteur_cookie -= prix_upgrade_1;
        prix_upgrade_1 = prix_upgrade_1 * 2;
        multiplicateur_achat_1 = multiplicateur_achat_1 * 2
        u1.textContent = "("+nb_upgrade_1+") Upgrade clic x 2 : "+prix_upgrade_1;
    }
}

function bouton_upgrade_2(){
    if (compteur_cookie >= prix_upgrade_2){
        nb_upgrade_2 += 1;
        compteur_cookie -= prix_upgrade_2;
        prix_upgrade_2 = prix_upgrade_2 * 3;
        multiplicateur_achat_2 = multiplicateur_achat_2 * 2
        u2.textContent = "("+nb_upgrade_2+") Upgrade 1 x 2 : "+prix_upgrade_2;
    }
}

function bouton_upgrade_3(){
    if (compteur_cookie >= prix_upgrade_3){
        nb_upgrade_3 += 1;
        compteur_cookie -= prix_upgrade_3;
        prix_upgrade_3 = prix_upgrade_3 * 4;
        multiplicateur_achat_3 = multiplicateur_achat_3 * 2
        u3.textContent = "("+nb_upgrade_3+") Upgrade 2 x 2 : "+prix_upgrade_3;
    }
}

function bouton_upgrade_4(){
    if (compteur_cookie >= prix_upgrade_4){
        nb_upgrade_4 += 1;
        compteur_cookie -= prix_upgrade_4;
        prix_upgrade_4 = prix_upgrade_4 * 5;
        multiplicateur_achat_4 = multiplicateur_achat_4 * 2
        u4.textContent = "("+nb_upgrade_4+") Upgrade 3 x 2 : "+prix_upgrade_4;
    }
}

function cookie_temps(){
    cookie_par_seconde = (cookie_par_seconde_a2*multiplicateur_achat_2) + (cookie_par_seconde_a3*multiplicateur_achat_3) + (cookie_par_seconde_a4*multiplicateur_achat_4)
    compteur_cookie += cookie_par_seconde/20;
    document.querySelector('#nombre_cookies').textContent = Math.round(compteur_cookie)+" Pintes";
    document.querySelector('#cookies_par_seconde').textContent = cookie_par_seconde+" Pintes par seconde";  
    bulles.canvas.width = doc.offsetWidth;
    bulles.canvas.height = doc.offsetHeight;      
}

a1.addEventListener('click', bouton_achat_1);
a2.addEventListener('click', bouton_achat_2);
a3.addEventListener('click', bouton_achat_3);
a4.addEventListener('click', bouton_achat_4);

u1.addEventListener('click', bouton_upgrade_1);
u2.addEventListener('click', bouton_upgrade_2);
u3.addEventListener('click', bouton_upgrade_3);
u4.addEventListener('click', bouton_upgrade_4);

cookie.addEventListener('click', cookie_clic);

//Canvas gerant les bulles

class Bulles{
    constructor(options){
        this.options = options;
        this.setCanvas();
            this.Creer_Bulles();
            this.drawBulles();
        this.options.Taille_sprite = this.options.sprite.height / this.options.Nb_bulle_differentes;
    }

    setCanvas(){          
        this.canvas = document.getElementById('bulles');
        this.canvas.width = doc.offsetWidth;
        this.canvas.height = doc.offsetHeight;
        this.contexte = this.canvas.getContext('2d');
    }

    resizeCanvas() {
        this.setCanvas();
        this.Creer_Bulles()
    }

    Creer_Bulles(){
        this.Tableau_bulle = [];
        let nb_bulles = Math.floor(this.options.Densite_bulle * (this.canvas.width * this.canvas.height / 2000))
        console.log(nb_bulles)
        for(let i = 0; i<nb_bulles; i++){
            this.Creer_Bulle()
        }
    }

    Creer_Bulle(){
        if(this.Tableau_bulle.length < 2500){
            let sprite={};
            let bulle={};
            let canvas={}

            sprite.posX = 0; 
            sprite.posY = Math.floor(Math.random() * this.options.Nb_bulle_differentes) * 50; 
            bulle.size = Math.floor(Math.random() * this.options.Taille_bulle); 
            bulle.velocity = Math.random() * this.options.Velocite_bulle; 
            bulle.opacity = Math.random() * this.options.opacite_bulle;
            canvas.posX = Math.floor(Math.random() * this.canvas.width - ( bulle.size / 2));
            canvas.posY = Math.floor(Math.random() * this.canvas.height);
            let UneBulle = {sprite, bulle, canvas};
            this.Tableau_bulle.push(UneBulle);
        }
    }

    drawBulles(){
        this.updateBulles();
        this.contexte.clearRect(0,0,this.canvas.width,this.canvas.height);
    
        for(let i=0; i<this.Tableau_bulle.length;i++){
            let b = this.Tableau_bulle[i];
            this.contexte.globalAlpha = b.bulle.opacity;   
            this.contexte.drawImage(
                this.options.sprite,
                this.Tableau_bulle[i].sprite.posX, this.Tableau_bulle[i].sprite.posY, this.options.Taille_sprite, this.options.Taille_sprite,
                this.Tableau_bulle[i].canvas.posX, this.Tableau_bulle[i].canvas.posY, this.Tableau_bulle[i].bulle.size, this.Tableau_bulle[i].bulle.size
            ) 
        }
        requestAnimationFrame(this.drawBulles.bind(this));
    }

    updateBulles(){
        for(let i = 0; i < this.Tableau_bulle.length; i++){
            if(this.Tableau_bulle[i].canvas.posY < 0) {
                this.Tableau_bulle[i].canvas.posY = this.canvas.height + this.Tableau_bulle[i].bulle.size;
            } else {
                this.Tableau_bulle[i].canvas.posY -= this.Tableau_bulle[i].bulle.velocity;
            }
        }
    }

}

let sprite=new Image();
    sprite.onload = ()=> {
      bulles = new Bulles({
        sprite: sprite,
        Nb_bulle_differentes: 10,
        Densite_bulle: 1.5,
        Taille_bulle: 15,
        Velocite_bulle: 2,
        opacite_bulle: 0.25
      });
    }
  sprite.src = 'bulles.png'