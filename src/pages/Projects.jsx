
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects-container">
      <h1 className="projects-title">{t('projects.title')}</h1>
      <div className="project-item">
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
      </div>
      <div className="project-item">
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
      </div>
      {/* Añade más proyectos según sea necesario */}
    </div>
  );
}

export default Projects;
