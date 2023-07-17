import React from 'react';
import './App.css';
import LiquorList from './LiquorList';
import LoginAdmin from './LoginAdmin';
import SignUp from './SignUp';
import Admin from './Admin';
import Login from './Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/" element={<SignUp/>} />
          <Route path="/liquorlist" element={<LiquorList />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;