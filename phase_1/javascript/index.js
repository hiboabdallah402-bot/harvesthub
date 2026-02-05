const input = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
button.addEventListener("click" , () => {
    const task = input.value;
    if (task === ""){
        alert("please enter a task")
        return;
    }
    const li = document.createElement("li")
    li.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click" , () => {
        taskList.removeChild(li);
        });
        li.appendChild(deleteButton);
    taskList.appendChild(li);
    input.value = "";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
})
