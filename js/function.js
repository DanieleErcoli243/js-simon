/**
 * It generates an amount of random numbers
 * @param {number} min the minimum number to be generated
 * @param {number} max the maximum number to be generated
 * @param {number} numbersToGenerate the amount of numbers to generate
 * @returns an array of random numbers
 */
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