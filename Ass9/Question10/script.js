// Create an array of numbers
const numbersArr = [10, 20, 30, 40, 50];

// Function to calculate the sum using reduce()
function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Call the function and log the result
console.log("Sum of numbers:", calculateSum(numbersArr));
