// recupero gli elementi dalla pagina
const titleElement = document.querySelector("h1");
const listOfNumbers = document.getElementById("numbers");
const answersField = document.getElementById("answers");
const scoreElement = document.getElementById("score-message"); 
const countdownElement = document.getElementById("countdown"); 
const listSection = document.querySelector(".numbers-box");
const formSection = document.querySelector(".answers-box");
// informazioni iniziali
const numbersToGenerate = 5;
const min = 1;
const max = 100;
let seconds = 5;

// genero un titolo dinamico 
titleElement.innerText = `Memorizzali! Hai solo ${seconds} secondi.`;

// invoco la funzione per generare un numero casuale
const numbers = getRandomNumber (min, max, numbersToGenerate);
// inietto i numeri nell'ul e genero gli input
let items = "";
let inputFields = "";
for (let number of numbers) {
    items += `<li>${number}</li>`;
    inputFields += `<input type="number" min="1" max="5" required>`
}

listOfNumbers.innerHTML = items;
answersField.innerHTML = inputFields;

// mostro il countdwon in pagina
countdownElement.innerText = seconds;
const countdown = setInterval (() =>{
    countdownElement.innerText = --seconds;
    if (seconds === 0){
        clearInterval(countdown);
        answersField.classList.remove("d-none");
        listOfNumbers.classList.add("d-none");
    }
}, 1000)



answersField.addEventListener ("submit", function(e){
    e.preventDefault;
    
})



