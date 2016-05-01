import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './libs/configureStore';
import routes from './routes';

const store = configureStore(window.__DATA__);
const children = routes(store);

let initialRender = true;

function appComponent(Component, props) {
  return (
    <Component
      store={store}
      initialRender={initialRender}
      {...props}
    />
  );
}

const AppContainer = (
  <Provider store={store}>
    <Router history={browserHistory} children={children} createElement={appComponent} />
  </Provider>
);

const appDOMNode = document.getElementById('app');

if (__DEV__) {
  const DevTools = require('./dev/DevTools').default;
  ReactDOM.render(<Provider store={store}>
    <div>
      <Router history={browserHistory} children={children} createElement={appComponent} />
      <DevTools />
    </div>
  </Provider>, appDOMNode, () => { initialRender = false; });
} else {
  ReactDOM.render(AppContainer, appDOMNode, () => { initialRender = false; });
}

