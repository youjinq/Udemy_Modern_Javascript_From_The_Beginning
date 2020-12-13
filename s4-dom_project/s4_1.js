// Define UL vars

const form = document.querySelector("#task-form");

const taskList = document.querySelector(".collection");

const clearBtn = document.querySelector(".clear-tasks");

const filter = document.querySelector("#filter");

const taskInput = document.querySelector("#task");

// Load all eventlistener
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // ADD tasks
  form.addEventListener("submit", addTask);

  //// delete and filter tasks

  taskList.addEventListener("click", removeTask);

  // cleat task events by button
  clearBtn.addEventListener("click", clearTask);

  // filter task event
  filter.addEventListener("keyup", filterTasks);
}

// load from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    const li = document.createElement("li");

    // add a class

    li.className = "collection-item";

    // create textnode

    li.appendChild(document.createTextNode(task));

    // create new link element

    const link = document.createElement("a");
    // add a class
    link.className = "delete-item secondary-content";
    // add a icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link in li

    li.appendChild(link);

    // append li to ul

    taskList.appendChild(li);
  });
}

// Add Task

// 1.alert to add text
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  // Create li elements

  const li = document.createElement("li");

  // add a class

  li.className = "collection-item";

  // create textnode

  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element

  const link = document.createElement("a");
  // add a class
  link.className = "delete-item secondary-content";
  // add a icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link in li

  li.appendChild(link);

  // append li to ul

  taskList.appendChild(li);

  console.log(taskList);
  // store in local storage
  storeTaskLocalStorage(taskInput.value);

  // clear input
  taskInput.value = "";

  e.preventDefault();
}

// stored in LS
function storeTaskLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// remove task
function removeTask(e) {
  e.preventDefault();
  
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      //   remove from LS too

      removeTaskLocalStorage(e.target.parentElement.parentElement);
    }
  }

}

// remove from LS function

function removeTaskLocalStorage(taskItem) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}





// clear Task
function clearTask(e) {
  // firstway make innerHtml becomes blank
  taskList.innerHTML = "";

  // faster -- remove child - if somethings still in firstelementchild or firstchild

  while (taskList.firstElementChild) {
    taskList.removeChild(taskList.firstElementChild);
  }

//   clear from LS
  clearTaskLocationStorage();

}

// clear tasks from LS function
function clearTaskLocationStorage(){
    localStorage.clear();
}




// filter Task
function filterTasks(e) {
  // anythings u type in
  const text = e.target.value.toLowerCase();

  // selectorall return a node list; forclass; byid or else return a html => need convert to array if wanna use foreach
  document.querySelectorAll(".collection-item").forEach(function (task) {
    // get first child here is a
    const item = task.firstChild.textContent;

    console.log(item);
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
