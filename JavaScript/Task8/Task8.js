document.getElementById("registerBtn").addEventListener("click", function() {
    let isValid = true;

    function validateField(fieldId, errorId) {
        let field = document.getElementById(fieldId);
        let error = document.getElementById(errorId);
        if (field.value.trim() === "") {
            error.style.display = "inline";
            isValid = false;
        } else {
            error.style.display = "none";
        }
    }

    validateField("firstName", "errorFirstName");
    validateField("lastName", "errorLastName");
    validateField("email", "errorEmail");
    validateField("password", "errorPassword");
    validateField("rePassword", "errorRePassword");
    validateField("age", "errorAge");
    validateField("phoneNumber", "errorPhone");
    validateField("address", "errorAddress");
    validateField("state", "errorState");

    // Validate password match
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;
    let errorRePassword = document.getElementById("errorRePassword");
    
    if (password !== rePassword || password === "") {
        errorRePassword.style.display = "inline";
        isValid = false;
    } else {
        errorRePassword.style.display = "none";
    }

    if (isValid) {
        alert("Registration Successful!");
    }
});
