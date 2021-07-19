import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  ApolloClient, ApolloProvider } from '@apollo/client';

import App from './App';
import client from './services/apollo.config';
import { store } from './store';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client as ApolloClient<unknown>}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
