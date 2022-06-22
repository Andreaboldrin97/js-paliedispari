// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
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
})



//? creo la funzione per generare un numero random
function getNumberRandom(min, max) {
    return Math.random() * (max - min) + min;
  }