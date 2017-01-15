import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './app/app';
// import uiState from './app/stores/ui';
import './app/assets/css/reset.css';

const renderApp = () =>
    render(
      <Provider>
        <App />
      </Provider>,
      document.getElementById('root'),
    );

renderApp();
