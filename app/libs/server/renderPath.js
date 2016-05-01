import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import populateState from '../populateState';
import template from './template';

import configureStore from '../configureStore';
import createRoutes from '../../routes';

import RouterUtil from './RouterUtil';


function renderToString(store, renderProps) {

  function createElement(Component, props) {
    return <Component store={store} initialRender {...props} />;
  }

  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <RoutingContext {...renderProps} createElement={createElement} />
    </Provider>
  );
}

export default function renderPath(url, baseContext) {
  const store = configureStore();
  const routes = createRoutes(store);

  return RouterUtil.run(routes, url)
    .then(({ renderProps }) => {

      return populateState(renderProps.components, {
        dispatch: store.dispatch,
        location: renderProps.location,
        params: renderProps.params
      }).then(() => renderProps);

    })
    .then((renderProps) => {
      const templateContext = {
        ...baseContext,
        fullPath: url,
        data: serialize(store.getState()),
        body: renderToString(store, renderProps)
      };

      return template(templateContext);
    });

}
