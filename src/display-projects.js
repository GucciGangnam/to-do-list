// imports 
import { projects, Project, Task } from './index.js';
import { displayAddTaskWindow } from './add-task-window.js';
    // images 
    import EditIcon from './icons/Edit.png';
    const editIcon = new Image();
    editIcon.src = EditIcon;  




function displayProjects() { 
    const content = document.getElementById('content');
    projects.forEach(project => {
        const projectBox = document.createElement('div');
        projectBox.classList.add('projectbox');
        projectBox.id = project.name;
        content.appendChild(projectBox);
            const projectBanner = document.createElement('div');
            projectBanner.classList.add('projectbanner');
            projectBanner.id = 'projectbanner' + project.name;
            projectBox.appendChild(projectBanner);
                const deleteProjectBtn = document.createElement('button');
                deleteProjectBtn.classList.add('deleteprojectbtn');
                deleteProjectBtn.id = 'deleteprojectbtn' + project.name;
                deleteProjectBtn.innerHTML = 'x';
                projectBanner.appendChild(deleteProjectBtn);
                    deleteProjectBtn.addEventListener('click', () => {
                        console.log('delete' + project.name + 'button clicked');
                        projects.splice(projects.indexOf(project), 1);
                        console.log(projects);
                        content.innerHTML = '';
                        displayProjects();
                    }
                );
                const projectTitle = document.createElement('div');
                projectTitle.classList.add('projecttitle');
                projectTitle.id = 'projecttitle' + project.name;
                projectTitle.innerHTML = project.name;
                projectBanner.appendChild(projectTitle);
// display tasks
                project.tasks.forEach(task => {
                    const taskBox = document.createElement('div');
                    taskBox.classList.add('taskbox');
                    taskBox.id = 'taskbox' + task.name;
                    projectBox.appendChild(taskBox);
                        const taskTitle = document.createElement('div');
                        taskTitle.classList.add('tasktitle');
                        taskTitle.id = 'tasktitle' + task.name;
                        taskTitle.innerHTML = task.name;
                        taskBox.appendChild(taskTitle);
                        const taskDueDate = document.createElement('div');
                        taskDueDate.classList.add('taskduedate');
                        taskDueDate.id = 'taskduedate' + task.name;
                        taskDueDate.innerHTML = task.dueDate;
                        taskBox.appendChild(taskDueDate);
                        if (task.priority === 'important') {
                            taskBox.style.border = '1px solid red';
                        } 

                        const taskEditImg = document.createElement('img');
                        taskEditImg.classList.add('taskeditimg');
                        taskEditImg.id = 'taskeditimg' + task.name;
                        taskEditImg.src = EditIcon;
                        taskEditImg.style.width = '20px';
                        taskEditImg.style.height = '20px';
                        taskBox.appendChild(taskEditImg);


                        const taskCompletedMarker = document.createElement('button');
                        taskCompletedMarker.classList.add('taskcompletedmarker');
                        taskCompletedMarker.id = 'taskcompletedmarker' + task.name;
                        if (task.completed === true) {
                            taskCompletedMarker.innerHTML = '✓';
                            taskCompletedMarker.style.backgroundColor = '#4CD964';
                            taskBox.style.textDecoration = 'line-through';
                        }
                        else {
                            taskCompletedMarker.innerHTML = '';
                            taskCompletedMarker.style.backgroundColor = '#F0EBD8';
                            taskBox.style.textDecoration = 'none';
                        }
                        taskBox.appendChild(taskCompletedMarker);
                            taskCompletedMarker.addEventListener('click', () => {
                                console.log('task completed marker clicked');
                                if (task.completed === false) {
                                    task.completed = true;
                                    taskCompletedMarker.innerHTML = '✓';
                                    taskCompletedMarker.style.backgroundColor = '#4CD964';
                                    taskBox.style.textDecoration = 'line-through';
                                    taskDueDate.style.display = 'none';
                                }
                                else {
                                    task.completed = false;
                                    taskCompletedMarker.innerHTML = '';
                                    taskCompletedMarker.style.backgroundColor = '#F0EBD8';
                                    taskBox.style.textDecoration = 'none';
                                    taskDueDate.style.display = 'block';
                                }
                            }
                        );
                });
// add add task btn 
                const addTaskBtn = document.createElement('button');
                addTaskBtn.classList.add('addtaskbtn');
                addTaskBtn.id = 'addtaskbtn' + project.name;
                addTaskBtn.innerHTML = '+';
                projectBanner.appendChild(addTaskBtn);
                    addTaskBtn.addEventListener('click', () => {
                        displayAddTaskWindow(project.name);
                    }
                );
    });
}
export { displayProjects };

