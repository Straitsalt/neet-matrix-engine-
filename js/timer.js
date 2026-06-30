let seconds = 1500;
let timer;

function updateDisplay() {

    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    document.getElementById("timer").innerText =
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

function startTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

        if (seconds > 0) {
            seconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("🎉 Great job! Study session completed.");
        }

    },1000);

}

function resetTimer() {

    clearInterval(timer);

    seconds = 1500;

    updateDisplay();

}

updateDisplay();
