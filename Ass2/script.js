// 1️⃣ Display Even Numbers from 1 to 100 (On Button Click)
function displayEvenNumbers() {
    let result = "";
    for (let i = 2; i <= 100; i += 2) {
        result += i + " ";
    }
    document.getElementById("evenNumbers").innerText = result;
}

// 2️⃣ Calculator Function (Add, Subtract, Multiply, Divide)
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
            break;
        default:
            result = "Invalid Operation";
    }
    document.getElementById("calcResult").innerText = result;
}

// 3️⃣ Find Tax Function
function findTax() {
    let salary = parseFloat(document.getElementById("salary").value);
    let taxAmount = 0;

    switch (true) {
        case salary > 0 && salary <= 500000:
            taxAmount = 0;
            break;
        case salary > 500000 && salary <= 1000000:
            taxAmount = salary * 0.10;
            break;
        case salary > 1000000 && salary <= 1500000:
            taxAmount = salary * 0.20;
            break;
        case salary > 1500000:
            taxAmount = salary * 0.30;
            break;
        default:
            taxAmount = "Invalid Salary Input";
    }

    document.getElementById("taxResult").innerText = taxAmount;
}

// 4️⃣ Sum of Products of Corresponding Digits
function sumOfProducts() {
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;

    let str1 = n1.toString().split("").reverse();
    let str2 = n2.toString().split("").reverse();
    let length = Math.max(str1.length, str2.length);
    
    let sum = 0;
    for (let i = 0; i < length; i++) {
        let digit1 = parseInt(str1[i] || 0);
        let digit2 = parseInt(str2[i] || 0);
        sum += digit1 * digit2;
    }

    document.getElementById("productSum").innerText = sum;
}
