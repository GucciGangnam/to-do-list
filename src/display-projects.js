// imports 
import { projects, Project, Task } from './index.js';






function displayProjects() { 
    const content = document.getElementById('content');
    //loop through projects array and console.log each project name
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
                    }
                );
                const projectTitle = document.createElement('div');
                projectTitle.classList.add('projecttitle');
                projectTitle.id = 'projecttitle' + project.name;
                projectTitle.innerHTML = project.name;
                projectBanner.appendChild(projectTitle);
                const addTaskBtn = document.createElement('button');
                addTaskBtn.classList.add('addtaskbtn');
                addTaskBtn.id = 'addtaskbtn' + project.name;
                addTaskBtn.innerHTML = '+';
                projectBanner.appendChild(addTaskBtn);
                    addTaskBtn.addEventListener('click', () => {
                        console.log('add task to' + project.name + 'button clicked');
                    }
                );





    });
}
export { displayProjects };