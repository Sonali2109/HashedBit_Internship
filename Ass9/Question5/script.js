// Function to filter out even numbers and return only odd numbers
function filterOddNumbers(numbers) {
    return numbers.filter(number => number % 2 !== 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterOddNumbers(numbersArray);

console.log(oddNumbers); 
