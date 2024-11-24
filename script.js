function add() {
    const newTask = document.createElement('li')
    const taskList = document.getElementById("space")
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = "";
    deleteTask(newTask)
}

function deleteTask(newTask) {
    const delBtn = document.createElement("button")
    delBtn.textContent = "Delete"
    newTask.appendChild(delBtn)
    delBtn.onclick = function() {
        newTask.remove()
    }
}