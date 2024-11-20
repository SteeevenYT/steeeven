// Example data for the 30 projects
const projects = Array.from({ length: 30 }, (_, index) => `Project ${index + 1}`);

function displayProjects(projectsToDisplay) {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    projectsToDisplay.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML
