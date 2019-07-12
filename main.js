var choixJoueur = document.getElementById('choixJoueur');
var choixAdversaire = document.getElementById('choixAdversaire');
var scoreAdverse = document.getElementById('scoreAdverse');
var scoreJoueur = document.getElementById('scoreJoueur');
var resultat = document.getElementById('resultat');
var troll = document.getElementById('troll');
var tableauChoix = ['feuille','ciseaux','pierre'];
var mesPoints = 0;
var pointsAdversaire = 0;
var audio = new Audio('./sons/madgiggle.mp3');
var applause = new Audio('./sons/applause.wav');

function checkScore(){
    if (mesPoints === 3 || pointsAdversaire === 3) {  
        if (mesPoints > pointsAdversaire) {
            if (confirm ('Vous avez gagné la partie avec ' + mesPoints + ' contre ' + pointsAdversaire)){
                window.location.reload();
            }
        }else {
           if (confirm ('Vous avez perdu la partie avec '+ pointsAdversaire + ' contre '+ mesPoints)) {
            window.location.reload();
           }
        }
    }
}
function play (e) {
    audio.pause()
    applause.pause();
    choixJoueur.setAttribute('src', 'images/'+e+'.png');
    var random = tableauChoix[Math.floor(Math.random()*tableauChoix.length)];
    choixAdversaire.setAttribute('src', 'images/'+ random +'.png');
    if (random == e) {
        resultat.innerHTML = 'Egalité !!';
    }else {
        if (e == 'feuille' && random == 'ciseaux') {
            resultat.innerHTML = 'Vous avez perdu !!!';
            pointsAdversaire++;
            scoreAdverse.innerHTML = pointsAdversaire;
            troll.style.right = '0';
            audio.play();
            checkScore();
        } else if (e == 'feuille' && random == 'pierre') {
            resultat.innerHTML = 'Vous avez gagné !!!';
            mesPoints++;
            scoreJoueur.innerHTML = mesPoints;
            applause.play();
            checkScore();
        }else if (e == 'ciseaux' && random == 'feuille') {
            resultat.innerHTML = 'Vous avez gagné !!!';
            mesPoints++;
            scoreJoueur.innerHTML = mesPoints;
            applause.play();
            checkScore();
        } else if (e == 'ciseaux' && random == "pierre") {
            resultat.innerHTML = 'Vous avez perdu !!!';
            pointsAdversaire++;
            scoreAdverse.innerHTML = pointsAdversaire;
            troll.style.right = '0';
            audio.play();
            checkScore();
        } else if (e == 'pierre' && random == 'feuille') {
            resultat.innerHTML = 'Vous avez perdu !!!';
            pointsAdversaire++;
            scoreAdverse.innerHTML = pointsAdversaire;
            troll.style.right = '0';
            audio.play();
            checkScore();
        } else if (e == 'pierre' && random == 'ciseaux') {
            resultat.innerHTML = 'Vous avez gagné !!!';
            mesPoints++;
            scoreJoueur.innerHTML = mesPoints;
            applause.play();
            checkScore();
        }
    }
}
function cacher() {
    troll.style.right = '150%';
    audio.pause()
}

