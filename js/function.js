// funzione per generare numeri casuali
/**
 * It generates an amount of random numbers
 * @param {number} min the minimum number to be generated
 * @param {number} max the maximum number to be generated
 * @param {number} numbersToGenerate the amount of numbers to generate
 * @returns an array of random numbers
 */
const getRandomNumber = (min, max, numbersToGenerate) => {
    const randomNumbers = [];
    while (randomNumbers.length < numbersToGenerate) {
        const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}









// funzione che blocca il riavvio della pagina, raccoglie le risposte dell'utente e conferma il risultato
/**
 * it prevents the page to refresh when the button is clicked and checks the answers of the user
 * @param {event} e the event triggered by the click of the user 
 */
const confirm = e => {
    // impedisco l'aggiornamento della pagina
    e.preventDefault();
    const inputs = document.querySelectorAll('input');

    // dichiaro un array per raccogliere le risposte dell'utente
    const userAnswers = [];
    for (let i = 0; i < inputs.length; i++) {
        // raccolgo le rispsote dell'utente
        const field = inputs[i];
        // converto le risposte in numeri 
        const value = parseInt(field.value);

        // controllo che le risposte siano valide
        if (isNaN(value) && value <= min && value >= max && !userAnswers.includes(value)) return;
        else userAnswers.push(value);

    }

    // controllo se l'utente ha sbagliato e glielo comunico
    if (userAnswers.length !== numbersToGenerate) {
        scoreElement.innerText = "I valori inseriti non sono validi o sono ripetuti";
    }
    // controllo se l'utente ha vinto e gli dico anche quanti numeri ha indovinato
    const rigthAnswers = [];
    for (let i = 0; i < userAnswers.length; i++) {
        const answer = userAnswers[i];
        if (numbers.includes(answer)) rigthAnswers.push(answer);
    }

    scoreElement.innerText = `Hai indovinato ${rigthAnswers.length} numeri. (${rigthAnswers})`;
}