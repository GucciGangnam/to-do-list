// imports 
  //images
    import HomeIcon from './icons/Home.png';
    const homeIcon = new Image();
    homeIcon.src = HomeIcon;
    import TasksIcon from './icons/Tasks.png';
    const tasksIcon = new Image();
    tasksIcon.src = TasksIcon;
    import CompletedIcon from './icons/Completed.png';
    const completedIcon = new Image();
    completedIcon.src = CompletedIcon;
// modules
    import { displayPageTemplate } from './page-template';
    import { displayProjects } from './display-projects';

// libraries 
import { projects } from './index.js';






//loop thgrough all tasks in the 'projects' array and add then to a new array in order of due date from soonest to latest






function displayTasksPage () { 
    console.log('displayTasksPage() called');
    document.body.innerHTML = '';
    const NavBar = document.createElement('div');
    NavBar.classList.add('navBar');
    NavBar.id = 'navBar';
    document.body.appendChild(NavBar);
        const navBarLeft = document.createElement('div');
        navBarLeft.classList.add('navBarLeft');
        navBarLeft.innerHTML = 'Tasks';
        NavBar.appendChild(navBarLeft);
        const todayBtn = document.createElement('button');
        todayBtn.classList.add('loginbtn');
        todayBtn.innerHTML = 'Today';
        NavBar.appendChild(todayBtn);
        const thisWeekBtn = document.createElement('button');
        thisWeekBtn.classList.add('loginbtn');
        thisWeekBtn.innerHTML = 'This Week';
        NavBar.appendChild(thisWeekBtn);
        const allTasksBtn = document.createElement('button');
        allTasksBtn.classList.add('loginbtn');
        allTasksBtn.innerHTML = 'All Tasks';
        NavBar.appendChild(allTasksBtn);
        const navBarRight = document.createElement('div');
        navBarRight.classList.add('navBarRight');
        navBarRight.innerHTML = '';
        NavBar.appendChild(navBarRight);
        const vnavBar = document.createElement('div');
        vnavBar.classList.add('vnav');
        vnavBar.id = 'vnav';
        document.body.appendChild(vnavBar);
            const homeBtn = document.createElement('button');
            homeBtn.classList.add('vnav-btn');
            homeBtn.id = 'vnav-home-btn';
            homeBtn.appendChild(homeIcon);
            vnavBar.appendChild(homeBtn);
                homeBtn.addEventListener('click', () => {
                    console.log('home button clicked');
                    document.body.innerHTML = '';
                    displayPageTemplate();
                    displayProjects();
                    });
            const tasksBtn = document.createElement('button');
            tasksBtn.classList.add('vnav-btn');
            tasksBtn.id = 'vnav-tasks-btn';
            tasksBtn.appendChild(tasksIcon);
            vnavBar.appendChild(tasksBtn);
                tasksBtn.addEventListener('click', () => {
                    console.log('tasks button clicked');
                    displayTasksPage();
                });
            const completedBtn = document.createElement('button');
            completedBtn.classList.add('vnav-btn');
            completedBtn.id = 'vnav-completed-btn';
            completedBtn.appendChild(completedIcon);
            vnavBar.appendChild(completedBtn);
                completedBtn.addEventListener('click', () => {
                    console.log('completed button clicked');
                }
                );
    const content = document.createElement('div');
    content.classList.add('content');
    content.id = 'content';
    document.body.appendChild(content);
        const taskListDiv = document.createElement('div');
        taskListDiv.classList.add('taskListDiv');
        taskListDiv.id = 'taskListDiv';
        content.appendChild(taskListDiv);
        
}
export { displayTasksPage };



// Extracting all tasks into a single array
//const allTasks = projects.flatMap(project => project.tasks);