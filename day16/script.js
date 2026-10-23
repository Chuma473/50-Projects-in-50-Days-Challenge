
let startTime = 0;
let elapsedTime = 0;
let timer = null;

function updateDisplay() {
    let time = elapsedTime;

    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    let milliseconds = Math.floor((time % 1000) / 10);

    document.getElementById("display").textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + "." +
        String(milliseconds).padStart(2, "0");
}

function startStopwatch() {
    if (timer !== null) {
        return;
    }

    startTime = Date.now() - elapsedTime;

    timer = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10);
}

function stopStopwatch() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    updateDisplay();
}

updateDisplay();
