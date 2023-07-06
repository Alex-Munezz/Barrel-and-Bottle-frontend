import React from 'react';
import './App.css';
import { Twemoji } from 'react-emoji-render';
import LiquorList from './LiquorList';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="h1">
        <h1>Welcome to Barrel & Bottle <Twemoji text="🥂" /></h1>
      </div>
      <BrowserRouter>
       <LiquorList />
      </BrowserRouter>
    </div>
  );
}

export default App;
