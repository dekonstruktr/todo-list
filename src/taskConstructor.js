export let taskListArray = [];
export let defaultTaskListArray = [];
export const allProjects = [];


export const newProject = (title) => {
  allProjects.push({
    title,
    
    toDos: [],
  });
};

export const task = ({ title, description, dueDate, priority }) => ({
    title,
    description,
    dueDate,
    priority
});

export const taskListFunc = (a, b, c, d) => {
    let listItem = {};
    listItem = task({ title: a, description: b, dueDate: c, priority: d });
    
    return listItem;
}







export const clearArray = (arr) => arr.length = 0;