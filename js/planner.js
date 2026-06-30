window.onload = function () {
    loadTasks();
};

function addTask() {

    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    loadTasks();
}

function loadTasks() {

    const list = document.getElementById("taskList");

    list.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => {

        const li = document.createElement("li");
        li.textContent = task;

        list.appendChild(li);

    });

}
