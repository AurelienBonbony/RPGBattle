// BOUTON Heros/PV Heros
monBouton1 = document.getElementById("boutonAttaque1");
pvHero1 = document.getElementById("pvHero1");

monBouton2 = document.getElementById("boutonAttaque2");
pvHero2 = document.getElementById("pvHero2");

monBouton3 = document.getElementById("boutonAttaque3");
pvHero3 = document.getElementById("pvHero3");

monBouton4 = document.getElementById("boutonAttaque4");
pvHero4 = document.getElementById("pvHero4");

monBouton1.onclick = function(){
    pvHero1.innerHTML = pvHero1.innerHTML - 10;
    if (pvHero1.innerHTML == 0){
        pvHero1.innerHTML = "MORT"
        pvHero1.style.backgroundColor ="#FF0000";
    }
}    
monBouton2.onclick = function(){
    pvHero2.innerHTML = pvHero2.innerHTML - 10;
    if (pvHero2.innerHTML == 0){
        pvHero2.innerHTML = "MORT"
        pvHero2.style.backgroundColor ="#FF1000";
    }
}
monBouton3.onclick = function(){
    pvHero3.innerHTML = pvHero3.innerHTML - 10;
    if (pvHero3.innerHTML == 0){
        pvHero3.innerHTML = "MORT"
        pvHero3.style.backgroundColor ="#FF2000";
    }
}
monBouton4.onclick = function(){
    pvHero4.innerHTML = pvHero4.innerHTML - 10;
    if (pvHero4.innerHTML == 0){
        pvHero4.innerHTML = "MORT"
        pvHero4.style.backgroundColor ="#FF3000";
    }
}
