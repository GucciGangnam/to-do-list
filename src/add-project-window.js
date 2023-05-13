








function displayAddProjectWindow() {
    const addProjectWindow = document.createElement('div');
    addProjectWindow.classList.add('addprojectwindow');
    addProjectWindow.id = 'addprojectwindow';
    document.body.appendChild(addProjectWindow);
        const addProjectWindowBanner = document.createElement('div');
        addProjectWindowBanner.classList.add('addprojectwindowbanner');
        addProjectWindowBanner.id = 'addprojectwindowbanner';
        addProjectWindow.appendChild(addProjectWindowBanner);
            const addProjectWindowBannerCloseBtn = document.createElement('button');
            addProjectWindowBannerCloseBtn.classList.add('addprojectwindowbannerclosebtn');
            addProjectWindowBannerCloseBtn.id = 'addprojectwindowbannerclosebtn';
            addProjectWindowBannerCloseBtn.innerHTML = 'x';
            addProjectWindowBanner.appendChild(addProjectWindowBannerCloseBtn);
                addProjectWindowBannerCloseBtn.addEventListener('click', () => {
                    console.log('add project window close button clicked');
                });
                const addProjectWindowBannerTitle = document.createElement('div');
            addProjectWindowBannerTitle.classList.add('addprojectwindowbannertitle');
            addProjectWindowBannerTitle.id = 'addprojectwindowbannertitle';
            addProjectWindowBannerTitle.innerHTML = 'Add Project';
            addProjectWindowBanner.appendChild(addProjectWindowBannerTitle);
            const addProjectWindowInput = document.createElement('input');
            addProjectWindowInput.classList.add('addprojectwindowinput');
            addProjectWindowInput.id = 'addprojectwindowinput';
            addProjectWindowInput.placeholder = 'Project Name';
            addProjectWindow.appendChild(addProjectWindowInput);
            const addProjectWindowSubmitBtn = document.createElement('button');
            addProjectWindowSubmitBtn.classList.add('addprojectwindowsubmitbtn');
            addProjectWindowSubmitBtn.id = 'addprojectwindowsubmitbtn';
            addProjectWindowSubmitBtn.innerHTML = 'Add Project';
            addProjectWindow.appendChild(addProjectWindowSubmitBtn);
                addProjectWindowSubmitBtn.addEventListener('click', () => {
                    console.log('add project window submit button clicked');
                }
            );
}
export { displayAddProjectWindow };