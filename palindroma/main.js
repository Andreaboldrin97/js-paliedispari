// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

//*creo una variabile per chiedere una parola
let userWord = prompt('Hey , dimmi una parola');

//*creo una variabile vuota per la parola invertita
var userInvertedWord = '';


//!invoco la funzione
invertWord(userWord);

//?creo la condizione che se e sue parole sono uguali allora :
//la creo dopo la funzione perchè la parola al contrario la otteniamo solo una volta 
if(userWord === userInvertedWord){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }

//mando in console le due parole
console.log(`la parola è ${userWord} al contrario ${userInvertedWord}`);

//?creo una funzione per capire se la parola data dal'user è palindroma
//?creo un ciclo while che scorre la parola partendo dalla fine


function invertWord(stringa){
   
    //!inizializzo la variabile i = lunghezza della parola
    var i = stringa.length - 1;
    //!creo un ciclo while al contrario
    while (i >= 0) {
      userInvertedWord += stringa[i];
      i--;
    }

    return userInvertedWord;
  }







