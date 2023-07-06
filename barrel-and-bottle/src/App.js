import React from 'react';
import './App.css';
import { Twemoji } from 'react-emoji-render';
import LiquorList from './Login';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="liquor">
         <div className="h1">
      </div>
      </div>
      <BrowserRouter>
       <LiquorList />
      </BrowserRouter>
    </div>
  );
}

export default App;
