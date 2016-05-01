import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import fetchData from '../decorators/fetchData';
import Actions from '../actions/Actions';

import Person from './Person';
import Experience from './Experience';
import Education from './Education';

let Resume = ({ resume }) => {
  let content = <div>Loading</div>;

  if (resume.loaded) {
    content = (
      <div>
        <Person {...resume.person} />
        <Experience experience={resume.experience} />
        <Education education={resume.education} />
      </div>
    );
  }

  return (
    <DocumentTitle title="Resume">
      {content}
    </DocumentTitle>
  );
};

Resume.propTypes = {
  resume: React.PropTypes.object
};


Resume = connect(state => ({ resume: state.resume }))(Resume);

Resume = fetchData(({ dispatch }) =>
  dispatch(Actions.loadResume())
)(Resume);

export default Resume;
