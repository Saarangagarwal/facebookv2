import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './Reducer';

ReactDOM.render(
  <React.StrictMode>

    <StateProvider initialState={initialState} reducer={reducer}>
 
      <App />
    
    </StateProvider>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// for app to work offline and load faster, change unregister() to register() below
serviceWorker.unregister();
