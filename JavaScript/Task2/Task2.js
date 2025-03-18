function sortString() {
    const textInput = document.getElementById("textInput").value;
    const resultElement = document.getElementById("result");

    if (textInput.trim() !== "") {
        const sortedString = textInput.split('').sort().join('');
        resultElement.textContent = `Sorted String: ${sortedString}`;
    } else {
        resultElement.textContent = "Please enter a valid string.";
    }
}
