import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import tasks from './reducers';
import {Provider} from 'react-redux';

const store= createStore(tasks);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
