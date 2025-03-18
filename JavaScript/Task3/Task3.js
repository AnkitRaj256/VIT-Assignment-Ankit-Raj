function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");

    if (!isNaN(num1) && !isNaN(num2)) {
        if (operation === 'multiply') {
            resultElement.textContent = num1 * num2;
        } else if (operation === 'divide') {
            if (num2 !== 0) {
                resultElement.textContent = (num1 / num2).toFixed(2);
            } else {
                resultElement.textContent = "Cannot divide by zero.";
            }
        }
    } else {
        resultElement.textContent = "Please enter valid numbers.";
    }
}
