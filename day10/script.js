
function calculateGrade() {
    let name = document.getElementById("name").value;
    let score = Number(document.getElementById("score").value);
    let result = document.getElementById("result");

    if (name.trim() === "" || document.getElementById("score").value === "") {
        result.innerHTML = "Please enter your name and score.";
        return;
    }

    if (score < 0 || score > 100) {
        result.innerHTML = "Score must be between 0 and 100.";
        return;
    }

    let grade;

    if (score >= 70) {
        grade = "A";
    } else if (score >= 60) {
        grade = "B";
    } else if (score >= 50) {
        grade = "C";
    } else if (score >= 45) {
        grade = "D";
    } else if (score >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    result.innerHTML = name + ", your grade is " + grade;
}
