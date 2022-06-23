// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

//*creo una variabile per chiedere una parola
let userWord = prompt('Hey , dimmi una parola');

//!invoco la funzione
invertWord(userWord);

//?creo la condizione che se e sue parole sono uguali allora :
//la creo dopo la funzione perchè la parola al contrario la otteniamo solo una volta 
if(userWord === invertWord(userWord)){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }

//?creo una funzione per capire se la parola data dal'user è palindroma
//?creo un ciclo while che scorre la parola partendo dalla fine
//tratto la stringa come un array quindi la giro partendo dalla lunghezza -1 , fino a >= 0 


function invertWord(stringa){
  //*creo una variabile vuota per la parola invertita
  let userInvertedWord = '';
   
    //!inizializzo la variabile i = lunghezza della parola
    let i = stringa.length - 1;
    //!creo un ciclo while al contrario
    while (i >= 0) {
      userInvertedWord += stringa[i];
      i--;
    }

    return userInvertedWord;
  }







