export const projectListNames = [];

export const allProjects = [];

export const projectListFunc = (project, list) => {

    project.push(list);
    return project;
}

export function projectDomBuilder(projectName, val) {
    const projectBox = document.createElement('div');
    projectBox.setAttribute('data-num', val);
    projectBox.classList.add('project-divs');
    navDiv.appendChild(projectBox);
    const projectTitle = document.createElement('h1');
    projectTitle.innerText = projectName;
    projectBox.appendChild(projectTitle);
}




export const newProject = (name, description) => {
  allProjects.push({
    name,
    description,
    toDos: [],
  });
};