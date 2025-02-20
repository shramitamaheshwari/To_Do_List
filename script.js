// script.js

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.querySelector("button");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        // Mark task as completed
        li.querySelector(".complete-btn").addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", function () {
            taskList.removeChild(li);
        });
    }

    addButton.addEventListener("click", addTask);

    // Allow adding task with Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
function setUsername() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if (username && password) {
        document.getElementById("greeting").innerText = `Hello, welcome to ${username}'s To-Do List`;
        document.getElementById("login-section").style.display = "none";
        document.getElementById("todo-section").style.display = "flex";
    }
}
