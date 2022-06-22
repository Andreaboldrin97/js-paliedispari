// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//!apro un form in html
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//!creo la funzione getNrRandom
// Sommiamo i due numeri
//!creo la vaiabile sum = userChoiseN + pcNumber
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.





//creo una var per il btn invia form
let btnSend = document.getElementById('send_form');

//?creo levento al click sul btn
btnSend.addEventListener(`click`, 
function(){
    //cero una var per chiedere il numero dell'utente
    let userChoiseN= document.getElementById('user_choise_N').value ;
    console.log(userChoiseN);

    //cero una var per chiedere la scelta dell'utente
    let userChoise = document.getElementById('user_choise').value ;
    console.log(userChoise);

    //*creo la variabile per l'somma
    //*visto che il valore di userChoiseN è una stringa la converto in un number per fare la somma
    let sum =parseInt(userChoiseN)  + pcNumber ;
    console.log(sum)
})


//!invoco la funzione con i numeri da 1 a 5
//! e la associo a una variabile
let pcNumber = getNRandom(1,5);
console.log(pcNumber);

//? creo la funzione per generare un numero random
function getNRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }