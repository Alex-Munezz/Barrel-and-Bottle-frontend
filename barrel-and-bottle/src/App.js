import React from 'react';
import './App.css';
import LiquorList from './LiquorList';
import LoginAdmin from './LoginAdmin';
import Login from './Login';
import Admin from './Admin';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/" element={<Login />} />
          <Route path="/liquorlist" element={<LiquorList />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;