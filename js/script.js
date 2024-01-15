// recupero gli elementi dalla pagina
const titleElement = document.querySelector("h1");
const listOfNumbers = document.getElementById("numbers");
const answersField = document.getElementById("answers");
const scoreElement = document.getElementById("score-message") 
const countdownElement = document.getElementById("countdown") 

// informazioni iniziali
const numberOfNumbers = 5;
const min = 1;
const max = 100;
const seconds = 30;

// genero un titolo dinamico 
titleElement.innerText = `Memorizzali! Hai solo ${seconds} secondi.`;
// mostro il countdwon in pagina
countdownElement.innerText = seconds;
// funzione per generare un numero casuale
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
}
const randomNumbers =[];
for (let i = 0; i < numberOfNumbers; i++) {
    const randomNumber = getRandomNumber(100);
    const listItem = `<li>${randomNumber}</li>`
    randomNumbers.push.apply(randomNumber);
    listOfNumbers.innerHTML += listItem;
}

setTimeout (function(){
    listOfNumbers.classList.add("d-none");
    answersField.classList.remove("d-none")
});

answersField.addEventListener ("submit", function(e){
    e.preventDefault;
    
})



