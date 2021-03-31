import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NewTask } from './Tasks/NewTask';
import { EditTask } from './Tasks/EditTask';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EditTask />
      </div>
    </div>
  );
}

export default App;
