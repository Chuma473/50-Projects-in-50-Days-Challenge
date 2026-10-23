
function calculateBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let bmi = document.getElementById("bmi");
    let category = document.getElementById("category");
    let message = document.getElementById("message");

    if (
        document.getElementById("weight").value === "" ||
        document.getElementById("height").value === "" ||
        weight <= 0 ||
        height <= 0
    ) {
        message.textContent = "Please enter a valid height and weight.";
        bmi.textContent = "";
        category.textContent = "";
        return;
    }

    // Convert height from centimetres to metres
    height = height / 100;

    // BMI = weight / height squared
    let result = weight / (height * height);

    bmi.textContent = "BMI: " + result.toFixed(1);

    // These adult categories are only a demonstration.
    category.textContent = "Calculation complete!";
    message.textContent =
        "BMI alone does not determine whether your weight is healthy.";
}
