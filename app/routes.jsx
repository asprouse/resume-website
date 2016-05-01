import React from 'react';
import { Route } from 'react-router';

import NotFound from './components/NotFound';
import Resume from './components/Resume';


export default(store) => {
  return (
    <Route>
      <Route path="/" component={Resume}/>
      <Route path="*" component={NotFound} />
    </Route>
  );
};
