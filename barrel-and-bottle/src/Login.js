import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email_address, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email_address }),
      });

      if (response.ok) {
        // Registration successful, fetch drinks data
        const drinksResponse = await fetch('http://127.0.0.1:5000/drinks');
        const drinksData = await drinksResponse.json();
        // Navigate to the LiquorList component with drinks data
        navigate('/LiquorList', { state: { drinks: drinksData } });
      } else {
        console.error('User registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email_address}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default UserLogin;
