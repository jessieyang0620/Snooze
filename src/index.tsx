import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Today} from './Home/Today';
import {task1, task2} from './models/Task';

ReactDOM.render(
    <React.StrictMode>
        <Today tasks={[task1, task2]} symptoms={[]}/>
    </React.StrictMode>,
    document.getElementById('root')
);
