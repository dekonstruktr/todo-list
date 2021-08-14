export const allProjects = [];

export const newProject = (name, description) => {
    allProjects.push({
        name,
        description,
        toDos: [],
    })
}

newProject('Project name', 'random description');
newProject('Project 2', 'random description 2');
newProject('Project 3', 'random description 3');

allProjects[0].toDos.push('task 1', 'task 2');
allProjects[1].toDos.push('task 3', 'task 4');
allProjects[2].toDos.push('task 4', 'task 5');

allProjects.forEach((el) => el.toDos.forEach((el2) => console.log(el2)));