// recupero gli elementi dalla pagina
const titleElement = document.querySelector("h1");
const listOfNumbers = document.getElementById("numbers");
const answersField = document.getElementById("answers");
const scoreElement = document.getElementById("score-message") 
const countdownElement = document.getElementById("countdown") 

// informazioni iniziali
const numbersToGenerate = 5;
const min = 1;
const max = 100;
const seconds = 30;

// genero un titolo dinamico 
titleElement.innerText = `Memorizzali! Hai solo ${seconds} secondi.`;
// mostro il countdwon in pagina
countdownElement.innerText = seconds;
// invoco la funzione per generare un numero casuale
const numbers = getRandomNumber (min, max, numbersToGenerate);

console.log(numbers);
setTimeout (function(){
    listOfNumbers.classList.add("d-none");
    answersField.classList.remove("d-none")
});

answersField.addEventListener ("submit", function(e){
    e.preventDefault;
    
})



