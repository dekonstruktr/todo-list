export const mainDiv = document.getElementById('main');
export const navDiv = document.getElementById('project-list-div');
import './styles.css';
export let taskListArray = [];
export let defaultTaskListArray = [];


import { taskListFunc, clearArray, allProjects, newProject, task } from './taskConstructor.js';
import { buildList } from './ui.js';

newProject('Default Project');


allProjects[0].toDos.push(taskListFunc('Wash Car', 'Take Car to carwash for full detail and wax', '08/01/2021'));

allProjects[0].toDos.push(taskListFunc('Take Dog To Groomer', 'Wash dog and trim nails', '08/01/2021'));

allProjects[0].toDos.push(taskListFunc('Grocery Shopping', 'Milk, eggs, bread', '08/02/2021'));




buildList(allProjects);