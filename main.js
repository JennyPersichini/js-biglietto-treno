//Chiedo il numero di chilometri che vuole percorrere e converto la stringa in numero
let chilometri = prompt("Quanti chilometri vuoi percorrere?");

chilometri = parseInt(chilometri);

//Chiedo l'età e converto la stringa in numero
let age = prompt("Quanti anni hai?");

age = parseInt(age);

//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
let price = 0.21 * chilometri;

//Va applicato uno sconto del 20% per i minorenni
//Va applicato uno sconto del 40% per gli over 65

let scontoBaby = price * 20 / 100;
let ticketBaby = price - scontoBaby;

let scontoOver = price * 40 / 100;
let ticketOver = price - scontoOver;

if (age <= 17) {
    console.log(ticketBaby);
    document.getElementById("finalPrice").innerHTML= ticketBaby.toFixed(2) + " €";
} else if (age > 65) {
    console.log(ticketOver);
    document.getElementById("finalPrice").innerHTML= ticketOver.toFixed(2) + " €";
} else {
    console.log(price);
    document.getElementById("finalPrice").innerHTML= price.toFixed(2) + " €";
}