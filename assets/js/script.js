/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

Dichiariamo chi ha vinto.


Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
:boolean-hug: Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione.
 */

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const whoSelect = prompt('Scegli tra pari e dispari');
const numberQuery = prompt('Scegli un numero da 1 a 5');
console.log(numberQuery + ' numero UTENTE');
//Creo element della Dom dove stamperò i risultati
const printSumDadi = document.getElementById('summary_dadi');

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const userMachine = Math.floor(Math.random() * 5);
console.log(userMachine + ' numero MACCHINA');

/* 
//stampa a video i numeri dei partecipanti
const numberNearby = userNumber + ' ' + userMachine;
const numberNearbyElement = document.getElementById('result_dadi');
numberNearbyElement.innerHTML = numberNearby;
 */

//Scegliere se la somma dei numeri è pari o dispari
const sumDadi = Number(numberQuery) + Number(userMachine);
//console.log(sumDadi);

if (sumDadi % 3){
    console.log('Dispari')
    printSumDadi.innerHTML = sumDadi + ' Dispari';
} else if (sumDadi % 2) {
    console.log('Pari');
    printSumDadi.innerHTML = sumDadi + 'Pari';
}


/* 
Palidroma:
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */


//iniziare a leggere la stringa dal suo valore massimo di lunghezza  e sottrarre man mano all'indice fino ad arrivare a 0 e aggiungere
// a una nuova variabile i vari valori dell'indice per ottenere la stringa al contrario.

const CheckInput = document.getElementById("check_input");
const CheckBtn = document.getElementById("check_btn");
const paliResult = document.getElementById("palindroma_result");

let word = "";
console.log('Parola inserita');

function allaRovescia(wordCheck) {

    let returnWord = "";
    console.log('Parola inserita');

    console.log(wordCheck.length)

    for (let i = wordCheck.length - 1; i >= 0; i--) {

        returnWord += wordCheck[i];

    };

    return returnWord;
    
}

function paliCheck(word1, reverseWord1) {

    if (word1.toLowerCase() == reverseWord1.toLowerCase()) {
        console.log("Palindromo");
        paliResult.innerHTML = "Palindromo";
    } else {
        console.log('Non è un palindromo')
        paliResult.innerHTML = 'Non è un palindromo';
    }

}

CheckBtn.addEventListener('click', function () {
    let word = CheckInput.value;
    let reverseResult = allaRovescia(word);

    paliCheck(word, reverseResult);
})
console.log(word);