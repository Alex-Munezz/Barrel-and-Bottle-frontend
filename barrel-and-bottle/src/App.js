import React from 'react';
import LiquorList from './liquorList';
import './App.css';
import {Twemoji} from 'react-emoji-render';

function App() {
  return (
    <div className="App">
      <div className="h1">
        <h1>Welcome to Barrel & Bottle <Twemoji text="🥂" /></h1>
      </div>
      <LiquorList />
    </div>
  );
}

export default App;
