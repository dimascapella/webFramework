import React from 'react';
import logo from './logo.svg';
import TugasStatefull from './container/TugasStatefull';
import TugasStateless from './component/TugasStateless';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="data">
        <div className="vh-100">
          <TugasStatefull />
        </div>
        <div className="vh-100">
          <TugasStateless />
        </div>
      </div>
    </div>
  );
}

export default App;
