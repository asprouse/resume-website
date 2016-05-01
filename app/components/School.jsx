import React from 'react';
import Location from './Location';

function School(props) {
  return (
    <div className="school">
      <div className="name">{props.school} - <Location {...props.location} /></div>
      <div className="college">{props.college}</div>

      <div className="degree">{props.degree}, <span className="year">{props.date}</span></div>

      <div className="honors">
        Honors:
        <ul>
          {props.honors.map(honor => <li key={honor}>{honor}</li>)}
        </ul>
      </div>
    </div>
  );
}

School.propTypes = {
  school: React.PropTypes.string,
  location: React.PropTypes.object,
  college: React.PropTypes.string,
  degree: React.PropTypes.string,
  date: React.PropTypes.string,
  honors: React.PropTypes.array
};

export default School;
