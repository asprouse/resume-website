import React from 'react';

function DateRange({ to, from }) {
  return (
    <div className="date-range">
      <span className="from">{from}</span> - <span className="to">{to ? to : 'Present' }</span>
    </div>
  );
}

DateRange.propTypes = {
  from: React.PropTypes.string,
  to: React.PropTypes.string
};

export default DateRange;
