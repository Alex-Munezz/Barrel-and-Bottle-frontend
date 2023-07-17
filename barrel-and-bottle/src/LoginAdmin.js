import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email_address, setEmail_Adress] = useState('');
  const navigate= useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/register?username=${username}&password=${password}&email_address=${email_address}`, {
        method: 'GET'
      });
         
      if (response.ok) {
        const adminDetails = await response.json();

        if (adminDetails.length > 0) {
          // Authentication successful, redirect to the admin page
          navigate.push('/Admin');
        } else {
          console.error('Invalid admin credentials');
        }
      } else {
        console.error('Failed to fetch admin details');
      }
    } catch (error) {
      console.error('Error during admin login:', error);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email address">Email</label>
          <input
            type="email"
            id="email"
            value={email_address}
            onChange={(e) => setEmail_Adress(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
