import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Today } from './Home/Today';
import { Task } from './models/Task';
import { Symptom } from './models/Symptom';
import { task1, task2 } from './models/Task';

ReactDOM.render(
  <React.StrictMode>
    <Today tasks={[task1, task2]} symptoms={[]} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
