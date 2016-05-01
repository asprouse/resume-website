import React from 'react';

function Location(props) {
  return (
    <div className="location">
      <span className="city">{props.city}</span>, <span className="state">{props.state}</span>
    </div>
  );
}


Location.propTypes = {
  city: React.PropTypes.string,
  state: React.PropTypes.string
};

export default Location;
