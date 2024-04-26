// app.js
let taskCount = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            taskList.removeChild(li);
            taskCount--;
            updateTaskCounter();
        };
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input field
        taskCount++;
        updateTaskCounter();
    }
}

function clearAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskCount = 0;
    updateTaskCounter();
}

function updateTaskCounter() {
    const taskCounter = document.getElementById('taskCounter');
    taskCounter.textContent = `${taskCount} task${taskCount === 1 ? '' : 's'}`;
}