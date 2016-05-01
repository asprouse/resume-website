import { match } from 'react-router';

function isNotFound(renderProps) {
  if (!renderProps) {
    return true;
  }
  const { routes } = renderProps;
  return routes[routes.length - 1].path === '*';
}

function run(routes, location) {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          notFound: isNotFound(renderProps),
          renderProps,
          redirectLocation
        });
      }
    });
  });
}

export default { run };
