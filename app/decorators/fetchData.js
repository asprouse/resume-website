import React, { PropTypes } from 'react';

export default (fetch) => {

  return DecoratedComponent => (

    class FetchDataDecorator extends React.Component {

      static fetchData = fetch;

      static propTypes = {

        store: PropTypes.shape({
          dispatch: PropTypes.func
        }),

        location: PropTypes.object,
        params: PropTypes.object,
        initialRender: PropTypes.bool
      };


      componentDidMount() {
        if (!__DEV__ && this.props.initialRender) return;

        const { location, params, store } = this.props;

        fetch({
          location,
          params,
          dispatch: store.dispatch
        });
      }

      render() {
        return <DecoratedComponent {...this.props} />;
      }
    }

  );

};
