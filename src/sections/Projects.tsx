import { projects } from '../data/projects';
import '../assets/styles/sections-styles/Projects.css';
import ProjectItem from '../components/ProjectItem';
import Button from '../components/Button';


const Projects: React.FC = () => {
    return (
      <section className="projects container" id="projects">
        <h2>Projects</h2>
        <div className="projects__container">
            {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
            ))}
        </div>
        <Button href="https://github.com/annakrolikowska">Check out my GitHub</Button>
      </section>
    );
  };
  
  export default Projects;