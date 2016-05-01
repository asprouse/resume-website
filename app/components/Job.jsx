import React from 'react';

import Location from './Location';
import DateRange from './DateRange';
import Projects from './Projects';

function Job({ title, company, dateRange, location, projects }) {
  return (
    <section className="job">
      <div>
        <span className="title">{title}</span> - <span className="company">{company}</span>
      </div>
      <DateRange {...dateRange} />
      <Location {...location} />
      <Projects projects={projects} />
    </section>
  );
}


Job.propTypes = {
  title: React.PropTypes.string,
  company: React.PropTypes.string,
  dateRange: React.PropTypes.object,
  location: React.PropTypes.object,
  projects: React.PropTypes.array
};

export default Job;

