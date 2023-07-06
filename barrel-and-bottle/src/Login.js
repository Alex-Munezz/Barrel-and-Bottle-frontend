import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email_address, setEmail] = useState('');

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5555/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email_address }),
      });

      if (response.ok) {
        navigate('/LiquorList');
      } else {
        console.error('User registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='login-form'>
      <h2>Barrel & Bottle</h2>
      <h2>Please create an account to continue to view our products: </h2><br></br>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="username">Username</label><br></br>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div><br></br>
        <div>
          <label htmlFor="password">Password</label><br></br>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br></br>
        <div>
          <label htmlFor="email_address">Email</label><br></br>
          <input
            type="email"
            id="email"
            value={email_address}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div><br></br>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default UserLogin;
