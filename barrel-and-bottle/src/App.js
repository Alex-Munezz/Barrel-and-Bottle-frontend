import React from 'react';
import { FaWineBottle } from 'react-icons/fa';
import LiquorList from './liquorList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="h1">
        <h1>Welcome to Barrel & Bottle <FaWineBottle /></h1>
      </div>
      <LiquorList />
    </div>
  );
}

export default App;
