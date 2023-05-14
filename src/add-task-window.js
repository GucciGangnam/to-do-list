import { displayProjects } from './display-projects';
import { projects, Project, Task } from './index.js';








function displayAddTaskWindow(projectName) { 
    console.log('adding task for ' + projectName);
    const darkOverlay = document.createElement('div');
    darkOverlay.classList.add('darkoverlay');
    darkOverlay.id = 'darkoverlay';
    document.body.appendChild(darkOverlay);

    const addTaskWindow = document.createElement('div');
    addTaskWindow.classList.add('addtaskwindow');
    addTaskWindow.id = 'addtaskwindow';
    document.body.appendChild(addTaskWindow);
        const addTaskWindowBanner = document.createElement('div');
        addTaskWindowBanner.classList.add('addtaskwindowbanner');
        addTaskWindowBanner.id = 'addtaskwindowbanner';
        addTaskWindow.appendChild(addTaskWindowBanner);
        const addTaskWindowBannerCloseBtn = document.createElement('button');
        addTaskWindowBannerCloseBtn.classList.add('addtaskwindowbannerclosebtn');
        addTaskWindowBannerCloseBtn.id = 'addtaskwindowbannerclosebtn';
        addTaskWindowBannerCloseBtn.innerHTML = 'x';
        addTaskWindowBanner.appendChild(addTaskWindowBannerCloseBtn);
        addTaskWindowBannerCloseBtn.addEventListener('click', () => {
                console.log('add task window close button clicked');
                addTaskWindow.remove();
                const darkOverlay = document.getElementById('darkoverlay');
                darkOverlay.remove();
            });
            const addTaskWindowBannerTitle = document.createElement('div');
            addTaskWindowBannerTitle.classList.add('addtaskwindowbannertitle');
            addTaskWindowBannerTitle.id = 'addtaskwindowbannertitle';
            addTaskWindowBannerTitle.innerHTML = 'Add Task to ' + projectName;
            addTaskWindowBanner.appendChild(addTaskWindowBannerTitle);
        const addTaskWindowInput = document.createElement('input');
        addTaskWindowInput.classList.add('addtaskwindowinput');
        addTaskWindowInput.id = 'addtaskwindowinput';
        addTaskWindowInput.placeholder = 'Task Name';
        addTaskWindow.appendChild(addTaskWindowInput);
        const addTaskWindowDate = document.createElement('input');
        addTaskWindowDate.classList.add('addtaskwindowdate');
        addTaskWindowDate.id = 'addtaskwindowdate';
        addTaskWindowDate.type = 'date';
        addTaskWindow.appendChild(addTaskWindowDate);
        const addTaskWindowPriority = document.createElement('select');
        addTaskWindowPriority.classList.add('addtaskwindowpriority');
        addTaskWindowPriority.id = 'addtaskwindowpriority';
        addTaskWindow.appendChild(addTaskWindowPriority);
            const addTaskWindowPriorityOption1 = document.createElement('option');
            addTaskWindowPriorityOption1.classList.add('addtaskwindowpriorityoption');
            addTaskWindowPriorityOption1.id = 'addtaskwindowpriorityoption1';
            addTaskWindowPriorityOption1.value = 'not important';
            addTaskWindowPriorityOption1.innerHTML = 'Normal';
            addTaskWindowPriority.appendChild(addTaskWindowPriorityOption1);
            const addTaskWindowPriorityOption2 = document.createElement('option');
            addTaskWindowPriorityOption2.classList.add('addtaskwindowpriorityoption');
            addTaskWindowPriorityOption2.id = 'addtaskwindowpriorityoption2';
            addTaskWindowPriorityOption2.value = 'important';
            addTaskWindowPriorityOption2.innerHTML = 'Important';
            addTaskWindowPriority.appendChild(addTaskWindowPriorityOption2);

        const addTaskWindowSubmitBtn = document.createElement('button');
        addTaskWindowSubmitBtn.classList.add('addtaskwindowsubmitbtn');
        addTaskWindowSubmitBtn.id = 'addtaskwindowsubmitbtn';
        addTaskWindowSubmitBtn.innerHTML = 'Add Task';
        addTaskWindow.appendChild(addTaskWindowSubmitBtn);
        addTaskWindowSubmitBtn.addEventListener('click', () => {
            if (addTaskWindowInput.value == '') {
                addTaskWindowInput.style.border = '1px solid red';
                addTaskWindowInput.placeholder = 'Task Name Required';
                return;
            }
            console.log('add task window submit button clicked');
            const taskName = document.getElementById('addtaskwindowinput').value;
            const taskDate = document.getElementById('addtaskwindowdate').value;
            const taskPriority = document.getElementById('addtaskwindowpriority').value;
            const newTask = new Task(taskName, " ", taskDate, taskPriority);
            console.log(newTask);
            // add new task to project that is named projectName
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].name == projectName) {
                    projects[i].tasks.push(newTask);
                    console.log(projects);
                    addTaskWindow.remove();
                    const darkOverlay = document.getElementById('darkoverlay');
                    darkOverlay.remove();
                    const content = document.getElementById('content');
                    content.innerHTML = '';
                    displayProjects();
                }
            }
            
        }
    );

}
export { displayAddTaskWindow };