function reverseNumber() {
    const numInput = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");

    if (!isNaN(numInput) && numInput.trim() !== "") {
        const reversed = parseInt(numInput.split('').reverse().join(''));
        resultElement.textContent = `Reversed Number: ${reversed}`;
    } else {
        resultElement.textContent = "Please enter a valid number.";
    }
}
