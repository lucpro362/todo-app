import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
);