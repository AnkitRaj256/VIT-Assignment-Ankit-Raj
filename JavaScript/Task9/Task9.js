function showRegisterForm() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("registeredUsers").classList.add("hidden");
    document.getElementById("registrationForm").classList.remove("hidden");
}

function showRegisteredUsers() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("registrationForm").classList.add("hidden");
    document.getElementById("registeredUsers").classList.remove("hidden");

    displayUsers();
}

function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "" || email === "" || contact === "" || address === "") {
        alert("All fields are required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, contact, address });
    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully!");
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("address").value = "";
}

function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        let row = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.address}</td>
            <td><button onclick="deleteUser(${index})" class="delete-btn">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers(); 
}
