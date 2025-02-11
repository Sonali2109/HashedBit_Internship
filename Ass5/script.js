function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultDiv = document.getElementById("result");
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "Please enter valid numbers!";
        return;
    }

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero!";
            break;
        default: result = "Invalid operation";
    }

    resultDiv.innerText = `Result: ${result}`;
}