import React from 'react';

function Person({ first, last, location }) {
  return (
    <div className="person">
      <div className="name">{first} {last}</div>
      <div className="location">{location.city}, {location.state}</div>
    </div>
  );
}

Person.propTypes = {
  first: React.PropTypes.string,
  last: React.PropTypes.string,
  location: React.PropTypes.object
};

export default Person;
