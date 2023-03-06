// console.dir(document);

// for (let element of document.all){
//     console.log(element);
// }

// console.log(document.images);

//get element
let headerTitle = document.getElementById('header-title');
// *** innerText vs textContent ***
console.log(headerTitle.innerText)
// headerTitle.style.color = 'red';

console.log(document.getElementsByClassName('container'));

let divTags = document.getElementsByTagName('div')
for (let divTag of divTags){
    console.log(divTag);
}

//query  selector
let featureList = document.querySelectorAll('#feature-list li');
for (let feature of featureList){
    console.log(feature.innerText);
}

//parent child
let firstFeature = document.querySelector('#feature-list li:first-child');
console.log(firstFeature.parentElement);
console.log(firstFeature.parentElement.previousElementSibling);
console.log(firstFeature.closest('div'));

// modyfying dom
// const lists = document.querySelector('#feature-list');
// console.log(lists);
// let newFeature = document.createElement('li');
// newFeature.innerText = 'New Feature';
// lists.prepend(newFeature);


// event listening and project
let taskInput = document.querySelector('#task-input');
let live = document.getElementById('live');
let incompleted = document.getElementById('incompleted');
var currentTasks = document.querySelectorAll(".complete");
let completedTask = document.getElementById('completed');

taskInput.addEventListener('focus', () => {
    let writing = document.createElement('h6')
    writing.className = 'text-danger'
    writing.innerText = 'Writing Task....'
    live.appendChild(writing);
})

// create task
let createTask = (taskName) => {
    let task = document.createElement('li');
    task.className = 'list-group-item';
    task.innerText = taskName;
    let newBtn = document.createElement('button');
    newBtn.className = 'btn btn-success btn-sm float-end complete';
    newBtn.innerText = 'Task Done';
    task.append(newBtn);
    incompleted.append(task);
    taskInput.value = '';
}

taskInput.nextElementSibling.addEventListener('click', (event) => {
    event.preventDefault();
    createTask(taskInput.value);
    let submitting = document.createElement('h6')
    submitting.className = 'text-danger'
    submitting.innerText = 'Submitted Task....'
    live.appendChild(submitting);
    currentTasks = document.querySelectorAll(".complete");
    console.log(currentTasks);
});

// mark as completed
// let completeTask = () => {

// }
console.log(currentTasks);
for(let i=0; i < currentTasks.length; i++){
    currentTasks[i].addEventListener('click', function (e) {
        parent = e.target.closest('li');
        e.target.remove();
        console.log(parent)
        let task = document.createElement('li');
        task.className = 'list-group-item';
        task.innerText = parent.innerText;
        let newBtn = document.createElement('button');
        newBtn.className = 'btn btn-danger btn-sm float-end';
        newBtn.innerText = 'Delete';
        task.append(newBtn);
        completedTask.append(task);
        parent.remove();
    })
}

