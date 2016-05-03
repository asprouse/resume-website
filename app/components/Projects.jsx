import React from 'react';
import Project from './Project';

function Projects(props) {
  const projects = props.projects.map((project, i) => <Project key={i} {...project} />);

  return (
    <div className="projects">
      <h3 className="projects-heading">Projects:</h3>
      {projects}
    </div>
  );
}

Projects.propTypes = {
  projects: React.PropTypes.array
};


export default Projects;
