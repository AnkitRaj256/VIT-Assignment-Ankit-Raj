function validateLogin() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Username validation
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    }

    return isValid;
}
