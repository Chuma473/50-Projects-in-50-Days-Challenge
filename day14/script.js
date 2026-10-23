
function generatePassword() {
    let length = Number(document.getElementById("length").value);
    let password = "";
    let characters = "";

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+-=[]{}?";

    if (!Number.isInteger(length) || length < 8 || length > 64) {
        document.getElementById("message").textContent =
            "Choose a length between 8 and 64.";
        return;
    }

    if (document.getElementById("uppercase").checked) {
        characters += upper;
        password += randomChar(upper);
    }

    if (document.getElementById("lowercase").checked) {
        characters += lower;
        password += randomChar(lower);
    }

    if (document.getElementById("numbers").checked) {
        characters += numbers;
        password += randomChar(numbers);
    }

    if (document.getElementById("symbols").checked) {
        characters += symbols;
        password += randomChar(symbols);
    }

    if (characters === "") {
        document.getElementById("message").textContent =
            "Select at least one character type.";
        return;
    }

    while (password.length < length) {
        password += randomChar(characters);
    }

    // Shuffle the password characters
    password = password.split("");

    for (let i = password.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    password = password.join("");

    document.getElementById("password").value = password;
    document.getElementById("message").textContent =
        "Password generated!";
}

function randomChar(characters) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

async function copyPassword() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (password === "") {
        message.textContent = "Generate a password first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(password);
        message.textContent = "Password copied!";
    } catch (error) {
        message.textContent =
            "Copy unavailable. Select the password and copy it manually.";
    }
}
