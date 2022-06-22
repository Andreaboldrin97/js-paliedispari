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

//*dichiaro la variabile somma vuota per poterla richiamare 
let sum ;

//!recupero il contenitore dell'html e lo associo a la variabile
let containerForm = document.getElementById('container_form');
//!recupero il contenitore dell'html e lo associo a la variabile
let btnReplay = document.getElementById('btn_replay');

//?creo levento al click sul btn
btnSend.addEventListener(`click`, 
function(){
    //cero una var per chiedere il numero dell'utente
    let userChoiceN= document.getElementById('user_choice_N').value ;
    console.log(userChoiceN);

    //cero una var per chiedere la scelta dell'utente
    let userChoice = document.getElementById('user_choice').value ;
    console.log(userChoice);

    //*creo la variabile per l'somma
    //*visto che il valore di userChoiseN è una stringa la converto in un number per fare la somma
    let sum =parseInt(userChoiceN)  + pcNumber ;
    console.log(sum);

    //!creo l'elemento div e lo associo alla variabile divResult
    let divResult= document.createElement('div');
    //!creo l'elemento div e lo associo alla variabile divResult
    let aReplay= document.createElement('a');
  

    //! do alcune classi al div creato
    divResult.classList.add('col-12' , 'text-center', 'mt-5')
    //! do alcune classi al div creato
    aReplay.classList.add('btn', 'btn-success')

    aReplay.setAttribute('href', '../pariedispari/index.html')

    aReplay.innerHTML= ('gioca di nuova')

    //?creo un if per vedere se la somma del numero è pari o dispari
    if((sum % 2 === 0) && (userChoice === 'Pari')){

        //!il valore di divResult all'interno dell'dom è
        divResult.innerHTML = (`bravo hai fatto bene a scegliere Pari , congratulazione hai vinto`)

        }else if((sum % 2 === 1) && (userChoice === 'Dispari')){

        //!il valore di divResult all'interno dell'dom è
        divResult.innerHTML = (`bravo hai fatto bene a scegliere Pari , congratulazione hai vinto`)

        }else{

            //!il valore di divResult all'interno dell'dom è
            divResult.innerHTML = (`hey amico mi dispiace ma ho vinto io`);
        }

        
        //!porto l'elemento html
        containerForm.append(divResult);
        btnReplay.append(aReplay);
})

  
   ///FUNZIONE///

//!invoco la funzione con i numeri da 1 a 5
//! e la associo a una variabile
let pcNumber = getNRandom(1,5);
console.log(pcNumber);

//? creo la funzione per generare un numero random
function getNRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }