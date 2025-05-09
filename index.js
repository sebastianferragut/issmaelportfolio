import { fetchJSON, renderProjects} from './global.js';
const projects = await fetchJSON('./lib/projects.json');
console.log(projects);

// Display the latest 3 projects
const latestProjects = projects.slice(0, 3);

const projectsContainer = document.querySelector('.projects');

if (Array.isArray(latestProjects) && projectsContainer) {
    renderProjects(latestProjects, projectsContainer, 'h2');
} else {
    console.error("Error rendering latest projects.");
}

