// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");
// const paragDay = document.querySelector("#parag");


var interval = setInterval(updateClock, 1000);

function updateClock() {

    let date = new Date();
    let second = date.getSeconds() / 60 ;
    let minute = (date.getMinutes() + second) / 60 ;
    let hour = (date.getHours() + minute) / 12 ;

    AIGUILLEHR.style.transform = "rotate(" + (hour * 360) + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + (minute * 360) + "deg)";
    AIGUILLESEC.style.transform = "rotate(" + (second * 360) + "deg)";

  

}
updateClock();


  
const button = document.querySelector("#btn").addEventListener('click',buttonClick);

function buttonClick () {
    let d = new Date();
    let day = d.getDay();
    document.querySelector("#btn").innerHTML = day;
}


