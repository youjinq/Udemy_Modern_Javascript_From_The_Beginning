// local storage



// set local storage item => stay until u manually clear ur storage

// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '30');




// // section storage=> clean up after u close browser
// sessionStorage.setItem('name', 'bart');


// // get from storage

// const name=localStorage.getItem('name');
// const age=localStorage.getItem('age');

// // clear storage
// localStorage.clear();

// console.log(name,age);


// 


document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value;


    let tasks;

    if (localStorage.getItem('tasks')===null) {
        tasks=[]; 
    }else{
        tasks= JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    
    // make it into json format because local storage only store string; json is string in array   
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('task saved');

    e.preventDefault();
});

// if wanna pull out    'tasks'= lookin as variable
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((element,index) => {
    console.log(`${index} : ${element}`);
});

