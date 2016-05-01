import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

let finalCreateStore;

if (__DEV__) {
  const DevTools = require('../dev/DevTools').default;
  const { persistState } = require('redux-devtools');
  finalCreateStore = compose(
    applyMiddleware(promiseMiddleware(), thunk),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(promiseMiddleware(), thunk)
  )(createStore);
}


export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
