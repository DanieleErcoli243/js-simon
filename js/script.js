// recupero gli elementi dalla pagina
const titleElement = document.querySelector("h1");
const numberElement = document.getElementById("number-box");
const listOfNumbers = document.getElementById("numbers");
const answersField = document.querySelector(".answers");
const inputBox = document.querySelector(".inputs");
const scoreElement = document.getElementById("score-message");
const countdownElement = document.getElementById("countdown");
const button = document.getElementById("button");

// informazioni iniziali
const numbersToGenerate = 5;
const min = 1;
const max = 100;
let seconds = 30;

// genero un titolo dinamico 
titleElement.innerText = `Memorizzali! Hai solo ${seconds} secondi.`;

// invoco la funzione per generare un numero casuale
const numbers = getRandomNumber(min, max, numbersToGenerate);
// inietto i numeri nell'ul e genero gli input
let items = "";
let input = ``;
for (let number of numbers) {
    items += `<li>${number}</li>`;

    input += `<input type="number" min="${min}" max="${max}" required>`;
}

listOfNumbers.innerHTML = items;
inputBox.innerHTML = input;


// mostro il countdwon in pagina
countdownElement.innerText = seconds;
const countdown = setInterval(() => {
    countdownElement.innerText = --seconds;
    if (seconds === 0) {
        clearInterval(countdown);
        titleElement.innerText = "Scrivi i numeri che ricordi (anche non in ordine)."
        answersField.classList.remove("d-none");
        numberElement.classList.add("d-none");
        clearInterval(countdown);
    }

}, 1000)



answersField.addEventListener("submit", confirm);



