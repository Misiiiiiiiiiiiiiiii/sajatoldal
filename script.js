const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const moonIcon = darkModeToggle.querySelector(".fa-moon");
    const sunIcon = darkModeToggle.querySelector(".fa-sun");
    if (body.classList.contains("dark-mode")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    } else {
        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
    }
    saveDarkModePreference();
});

function loadTasks() {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = savedTasks;
        attachDeleteHandlers();
    }
    loadDarkModePreference();
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    if (taskInput.value !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.className = "list-group-item";
        taskItem.innerHTML = taskInput.value + '<button class="btn-delete" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>';
        taskList.appendChild(taskItem);
        taskInput.value = "";
        attachDeleteHandlers();
        saveTasks();
    }
}

function deleteTask(deleteButton) {
    var taskItem = deleteButton.parentNode;
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.innerHTML;
    localStorage.setItem("tasks", tasks);
}

function attachDeleteHandlers() {
    var deleteButtons = document.getElementsByClassName("btn-delete");
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            deleteTask(this);
        });
    }
}

function saveDarkModePreference() {
    var darkModePreference = body.classList.contains("dark-mode");
    localStorage.setItem("darkModePreference", darkModePreference);
}

function loadDarkModePreference() {
    var darkModePreference = localStorage.getItem("darkModePreference");
    if (darkModePreference === "true") {
        body.classList.add("dark-mode");
        const moonIcon = darkModeToggle.querySelector(".fa-moon");
        moonIcon.style.display = "none";
        const sunIcon = darkModeToggle.querySelector(".fa-sun");
        sunIcon.style.display = "inline";
    }
}

loadTasks();
attachDeleteHandlers();
loadDarkModePreference();
