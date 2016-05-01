import React from 'react';
import Job from './Job';

function jobKey(job) {
  return (`${job.company}-${job.title}`).toLowerCase().replace(' ', '-');
}

function Experience({ experience }) {
  const jobs = experience ? experience.map(job => <Job key={jobKey(job)} {...job} />) : '';

  return <div className="experience">{jobs}</div>;
}


Experience.propTypes = {
  experience: React.PropTypes.array
};


export default Experience;
