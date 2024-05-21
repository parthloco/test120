import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EasyButton } from './components';
import ClassEnumTypes from './components/ClassEnumTypes';
import './global.css';

function App() {
  return (
    <div className="App">
              <ClassEnumTypes/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <EasyButton size="easy" theme="success" label="Press me"/> */}
      </header>
    </div>
  );
}

export default App;
