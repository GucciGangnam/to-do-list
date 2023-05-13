// imports
import './style.css';
import { displayPageTemplate } from './page-template';
import { displayProjects } from './display-projects';


// libraries 
const projects = [];

// classes
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        
    }
}


class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

////////////////// sample projects and tasks //////////////////
const sampleProject1 = new Project('Test Project 1');
const sampleProject2 = new Project('Project 2');
const sampleProject3 = new Project('Project 3');

const sampleTask1 = new Task('Task 1', 'This is task 1', '2024-01-01', 'important');
const sampleTask2 = new Task('Task 2', 'This is task 2', '2024-01-01', 'not important');
sampleProject1.tasks.push(sampleTask1);
sampleProject1.tasks.push(sampleTask2);
projects.push(sampleProject1);

const sampleTask3 = new Task('Task 3', 'This is task 3', '2024-01-01', 'important');
const sampleTask4 = new Task('Task 4', 'This is task 4', '2024-01-01', 'not important');
sampleProject2.tasks.push(sampleTask3);
sampleProject2.tasks.push(sampleTask4);
projects.push(sampleProject2);

const sampleTask5 = new Task('Task 5', 'This is task 5', '2024-01-01', 'important');
const sampleTask6 = new Task('Task 6', 'This is task 6', '2024-01-01', 'not important');
sampleProject3.tasks.push(sampleTask5);
sampleProject3.tasks.push(sampleTask6);
projects.push(sampleProject3);


export { projects, Project, Task };
// functions

////////// load page template //////////
displayPageTemplate();
displayProjects();
