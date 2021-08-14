import { mainDiv, navDiv } from './index.js';
import { taskListFunc, taskListArray, defaultTaskListArray, allProjects, newProject } from './taskConstructor.js'


let isActive = 0;




export function taskDomBuilder(obj, val, val2) {
    const taskBox = document.createElement('div');
    taskBox.classList.add('task-div');
    taskBox.setAttribute('data-num', val);

    mainDiv.appendChild(taskBox);
    const doneBtn = document.createElement('span');
    doneBtn.classList.add('doneBtn');
    doneBtn.innerText = "☐";
    taskBox.appendChild(doneBtn);
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('closeBtn');
    closeBtn.innerHTML = "&times;";
    taskBox.appendChild(closeBtn);

    const taskTitle = document.createElement('h2');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = obj[val].toDos[val2].title;
    taskBox.appendChild(taskTitle);

    const taskDesc = document.createElement('p');
    taskDesc.classList.add('task-description');
    taskDesc.innerText = obj[val].toDos[val2].description;
    taskBox.appendChild(taskDesc);

    const dateDue = document.createElement('span');
    dateDue.classList.add('task-description');
    dateDue.innerText = obj[val].toDos[val2].dueDate;
    taskBox.appendChild(dateDue);

    const br = document.createElement('br');
    taskBox.appendChild(br);

    const completion = document.createElement('span');
    completion.classList.add('task-description');
    completion.innerText = 'Incomplete'
    taskBox.appendChild(completion);

    taskBox.onclick = function(event) {
        if (event.target.className != 'closeBtn' && event.target.className != 'doneBtn') return;

        let task = event.target.closest('.task-div');
        if (event.target.matches('.closeBtn')) {
            task.remove();
        } else if (event.target.matches('.doneBtn')) {
            if (doneBtn.innerText == "☐") {
                doneBtn.innerText = "☑";
                completion.innerText = "DONE"
            } else if (doneBtn.innerText == "☑") {
                doneBtn.innerText = "☐";
                completion.innerText = 'Incomplete';
            }
        }
    };

}

export function buildList(allProjects, index) {
    clearScreen();
    if (index == null) {
        for (let i = 0; i < allProjects.length; i++) {
            for (let j = 0; j < allProjects[i].toDos.length; j++) {
                taskDomBuilder(allProjects, i, j);
            }
            projectDomBuilder(allProjects, i);


        }
    } else {
        for (let i = 0; i < allProjects.length; i++) {
            projectDomBuilder(allProjects, i);

        }
        for (let j = 0; j < allProjects[index].toDos.length; j++) {
            taskDomBuilder(allProjects, index, j);
        }


    }
}
export function projectDomBuilder(project, val, arr) {

    const projectBox = document.createElement('div');
    projectBox.setAttribute('data-num', val);
    projectBox.classList.add('project-divs');
    navDiv.appendChild(projectBox);
    const projectTitle = document.createElement('h1');
    projectTitle.innerText = project[val].title;
    projectBox.appendChild(projectTitle);


    projectBox.onclick = function() {
        clearScreen();
        buildList(allProjects, val);
        isActive = val;
        console.log(val, isActive);
    }

}


export function clearScreen() {
    navDiv.innerHTML = '';
    mainDiv.innerHTML = '';
}

const addProjectBtn = document.getElementById("add-project-btn");
const newProjectDiv = document.getElementById("add-project-input");
const modal = document.getElementById("myModal");


const btn = document.getElementById("myBtn");


const span = document.getElementsByClassName("close")[0];

addProjectBtn.onclick = function() {
    newProjectDiv.style.display = 'flex';
}
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    let val = isActive;
    console.log(val);
    allProjects[val].toDos.push(taskListFunc(taskTitleInput.value, taskDescriptionInput.value, taskDateInput.value, 'High'));
    modal.style.display = "none";


    buildList(allProjects, val);
});
const showAll = document.getElementById('show-all-btn');

showAll.addEventListener('click', function() {
    buildList(allProjects);

});

const addProjectSubmit = document.getElementById("newProjectBtn");
const addProjectForm = document.getElementById("addProjectForm");

addProjectSubmit.addEventListener('click', function() {
    newProject(addProjectForm.value);
    newProjectDiv.style.display = 'none';
    buildList(allProjects);
})