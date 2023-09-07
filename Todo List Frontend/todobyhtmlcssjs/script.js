// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Array to store tasks
const tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the task list

    if (tasks.length === 0) {
        const noTasksMessage = document.createElement("p");
        noTasksMessage.textContent = "No tasks added yet!";
        taskList.appendChild(noTasksMessage);
    } else {
        tasks.forEach((task, index) => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");

            const taskText = document.createElement("p");
            taskText.textContent = task;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-button");

            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

            taskCard.appendChild(taskText);
            taskCard.appendChild(removeButton);

            taskList.appendChild(taskCard);
        });
    }
}

// Function to add a task
function addTask() {
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listeners
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Initial rendering
renderTasks();
