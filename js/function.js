const getRandomNumber = (min, max, numbersToGenerate) => {
    const randomNumbers =[];
    while (randomNumbers.length < numbersToGenerate) {
        const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}