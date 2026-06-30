// Welcome Message
window.onload = function () {
    alert("🎓 Welcome to AI Student Hub!");
};

// Get Started Button
function startApp() {
    alert("🚀 Welcome! Start exploring your study dashboard.");
}

// -----------------------------
// Dark Mode
// -----------------------------
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// -----------------------------
// Notes
// -----------------------------
function saveNotes() {

    const notes = document.getElementById("notes");

    if (!notes) return;

    localStorage.setItem("studentNotes", notes.value);

    alert("✅ Notes Saved!");
}

window.addEventListener("load", () => {

    const notes = document.getElementById("notes");

    if (notes) {
        notes.value = localStorage.getItem("studentNotes") || "";
    }

});

// -----------------------------
// Pomodoro Timer
// -----------------------------
let time = 25 * 60;
let timer;

function startTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        const display = document.getElementById("timer");

        if (display) {
            display.innerText =
                `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
        }

        if (time <= 0) {
            clearInterval(timer);
            alert("🎉 Study session complete!");
        }

        time--;

    },1000);

}

// -----------------------------
// Progress Bar
// -----------------------------
function updateProgress(value){

    const progress = document.getElementById("progress");

    if(progress){
        progress.value = value;
    }

}