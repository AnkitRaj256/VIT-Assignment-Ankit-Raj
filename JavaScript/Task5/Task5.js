function validateForm() {
    let isValid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll(".error-border").forEach(el => el.classList.remove("error-border"));

    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "This field is required";
        document.getElementById("name").classList.add("error-border");
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "A valid email address is required";
        document.getElementById("email").classList.add("error-border");
        isValid = false;
    }

    const website = document.getElementById("website").value.trim();
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+.*)$/;
    if (website === "" || !urlPattern.test(website)) {
        document.getElementById("websiteError").textContent = "A valid URL is required";
        document.getElementById("website").classList.add("error-border");
        isValid = false;
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "This field is required";
        document.getElementById("message").classList.add("error-border");
        isValid = false;
    }

    return isValid;
}
