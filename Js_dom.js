document.getElementById("formTask").onsubmit = function (event) {
    event.preventDefault();
    const inputNode = document.getElementById("inputTask"); 
    const valueInput = inputNode.value.trim();
    if (valueInput !== "") {
         const value = {
            text: valueInput,
            completed: false
        }
        addTask(value);
    }
}

function addTask(value) {
    const list = document.getElementById("Tasks");
    const item = document.createElement("li");
    item.textContent = value.text;
    if (value.completed)
        item.classList.toggle("completed");
    item.addEventListener("click", function () {
        item.classList.toggle("completed");
    } )
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click", function () {
        list.removeChild(item);
    })
    item.appendChild(remove);
    list.appendChild(item);

}
document.getElementById("save_btt").addEventListener("click", function (event) {
    event.preventDefault();
    const list = document.getElementById("Tasks");
    const tasks = [];
    for (let item of list.getElementsByTagName("li")) {
        const task = {
            text: item.childNodes[0].textContent,
            completed: item.classList.contains("completed")

        }
        tasks.push(task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));


})
const tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks) {
    for (let task of tasks) {
        addTask(task);
    }
}