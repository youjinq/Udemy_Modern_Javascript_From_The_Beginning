const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const form = document.querySelector("#task-form");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// part 1 - testtasks; loadtesttasks
// part 2- not update to UI ,so proceed to add;
// part3 -remove function as optional
// part 4- filter and clear
// part 5- LS

const LocalStoragetasks = JSON.parse(localStorage.getItem("tasks"));

// const testtasks = [
//   {
//     id: 1,
//     task: "running",
//   },
//   {
//     id: 2,
//     task: "swimming",
//   },
//   {
//     id: 3,
//     task: "climbing",
//   },
// ];

let tasks = localStorage.getItem("tasks") != null ? LocalStoragetasks : [];

// add task to array
function addTask(e) {
  e.preventDefault();

  if (taskInput.value.trim() === "") {
    alert("please key in your input");
  } else {
    let newinput = {
      id: getRandomId(),
      task: taskInput.value,
    };

    tasks.push(newinput);

    // add single item, so dont use init( actually also can de)
    addTasksDOM(newinput);

    // UPDAE LS
    updateLocalStorage(tasks);

    // clear
    taskInput.value = "";
  }
}

function getRandomId() {
  return Math.floor(Math.random() * 100000);
}

// **************************************{Remove TASK}***********************************************

// get id and delete it from array form
function removeTask(e) {
  e.preventDefault;
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      id = e.target.parentElement.getAttribute("id");
      // != to match any type of data ; !== to match exactly !!!!!!!important
      tasks = tasks.filter((item) => item.id != id);

      updateLocalStorage(tasks);

      init();
    }
  }
}

// **************************************{CLEAR ALL}***********************************************
function removeAll() {
  taskList.innerHTML = "";

  tasks=[];
  updateLocalStorage(tasks);

}


// **************************************{Filter word}***********************************************
function filterTask() {
  // string to index of only can specific every character
  const text = filter.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// **************************************{LS to update}***********************************************

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// **************************************{Load to DOM}***********************************************
// load Task to DOM
function addTasksDOM(task) {
  const item = document.createElement("li");
  item.classList.add("collection-item");
  item.innerHTML = `${task.task} 
    <a id= ${task.id} class="delete-item secondary-content">
     <i class="fa fa-remove"></i>
    </a>`;
  taskList.appendChild(item);
  //   console.log(taskList);
}

function init() {
  taskList.innerHTML = "";

  if (tasks != null) {
    tasks.forEach(addTasksDOM);
  }
}

// **************************************{EVENT LISTENERs}***********************************************

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", removeAll);
filter.addEventListener("keyup", filterTask);
init();
