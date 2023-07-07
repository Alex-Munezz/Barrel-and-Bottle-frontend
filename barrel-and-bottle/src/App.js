import React from 'react';
import './App.css';
import LiquorList from './LiquorList';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="liquor">
         <div className="h1">
         <h1>Where every sip tells a story.</h1>
      </div>
       <BrowserRouter>
       <LiquorList />
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
