
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous messages
    document.querySelectorAll("small").forEach(function(error) {
        error.textContent = "";
    });

    document.getElementById("success").textContent = "";

    let valid = true;

    // Validate name
    if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 2 characters.";
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email.";
        valid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 6 characters.";
        valid = false;
    }

    // Confirm password
    if (password !== confirmPassword || confirmPassword === "") {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        valid = false;
    }

    // Successful validation
    if (valid) {
        document.getElementById("success").textContent =
            "Registration successful!";

        form.reset();
    }
});
