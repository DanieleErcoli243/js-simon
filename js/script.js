// recupero gli elementi dalla pagina
const listOfNumbers = document.getElementById("numbers");
const answersField = document.getElementById("answers");
const numberOfNumbers = 5;
// funzione per generare un numero casuale
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

for (let i = 0; i < numberOfNumbers; i++) {
    const randomNumber = getRandomNumber(100);
    const listItem = `<li>${randomNumber}</li>`
    listOfNumbers.innerHTML += listItem;
}