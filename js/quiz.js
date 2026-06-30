function checkQuiz() {

    let score = 0;

    const answer = document.querySelector('input[name="q1"]:checked');

    if (!answer) {
        alert("Please select an answer.");
        return;
    }

    if (answer.value === "B") {
        score++;
    }

    document.getElementById("score").innerHTML =
        `🎉 Your Score: ${score}/1`;

}
