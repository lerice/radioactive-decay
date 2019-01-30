import '@babel/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import 'sanitize.css/sanitize.css';
import App from './app/App';
import configureStore from './configureStore';

import '!file-loader?name=[name].[ext]!./images/favicon.ico';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const render = (Component = App) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

render(App);
