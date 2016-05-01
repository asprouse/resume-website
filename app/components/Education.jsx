import React from 'react';
import School from './School';


function Education({ education }) {
  return (
    <section className="education">
      {education.map((school, i) => <School key={i} {...school} />)}
    </section>
  );
}

Education.propTypes = {
  education: React.PropTypes.array
};

export default Education;
