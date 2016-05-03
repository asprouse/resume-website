import React from 'react';
import Tech from './Tech';

function Project({ technologies, description }) {
  const technologyItems = technologies.map(tech => <li key={tech.id}><Tech {...tech} /></li>);
  return (
    <section className="project">
      <div className="description" dangerouslySetInnerHTML={{__html: description }} />

      <div className="technologies">
        <ul className="technologies-list">
          {technologyItems}
        </ul>
      </div>

    </section>
  );
}

Project.propTypes = {
  description: React.PropTypes.string,
  technologies: React.PropTypes.array
};

export default Project;
