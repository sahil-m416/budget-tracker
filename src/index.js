import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import { Provider } from 'react-redux';
import storeConfig from './stores/configureStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = storeConfig()
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>
);