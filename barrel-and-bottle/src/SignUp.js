import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css'

function UserSignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email_address, setEmail] = useState('');

  const navigate = useNavigate();

  // const handleRegistration = async (e) => {
  //   e.preventDefault();
  
  //   const usernameInput = document.getElementById('username').value;
  //   const passwordInput = document.getElementById('password').value;
  //   const emailInput = document.getElementById('email').value;

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleRegistration = async (e) => {
      e.preventDefault();
    
      const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('password').value;
      const emailInput = document.getElementById('email').value;
    
      if (!usernameInput || !passwordInput || !emailInput) {
        console.error('Username, password, and email are required');
    
        // Set error messages
        if (!usernameInput) {
          setUsernameError('Must input field');
        }
        if (!passwordInput) {
          setPasswordError('Must input field');
        }
        if (!emailInput) {
          setEmailError('Must input field');
        }
    
        return;
      }

  
    // if (!usernameInput || !passwordInput || !emailInput) {
    //   console.error('Username, password, and email are required');
  
    //   // Display error message inside the input fields
    //   if (!usernameInput) {
    //     document.getElementById('username-error').textContent = 'Must input field';
    //   }
    //   if (!passwordInput) {
    //     document.getElementById('password-error').textContent = 'Must input field';
    //   }
    //   if (!emailInput) {
    //     document.getElementById('email-error').textContent = 'Must input field';
    //   }
  
    //   return;
    // }
  
    try {
      const response = await fetch('http://127.0.0.1:5000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameInput, password: passwordInput, email_address: emailInput }),
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
  <fieldset className='loginjs'>
    <form onSubmit={handleRegistration}>
    <div>
  <label htmlFor="username">Username</label><br></br>
  <input
    type="text"
    id="username"
    value={username}
    onChange={(e) => {setUsername(e.target.value);
    setUsernameError('');
    }}
    placeholder="Enter your username"
  /><br></br>
  <span class="placeholder" id="username-error" style={{ color: 'red' }}>{usernameError}</span>
</div><br></br>

      <div>
        <label htmlFor="password">Password</label><br></br>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value);
            setPasswordError('');
          }}
        /><br></br>
        <span class="placeholder" id="password-error" style={{ color: 'red' }}>{passwordError}</span>
      </div><br></br>
      <div>
        <label htmlFor="email_address">Email</label><br></br>
        <input
          type="email"
          id="email"
          value={email_address}
          onChange={(e) => {setEmail(e.target.value);
            setEmailError('');
          }}
        /><br></br>
        <span class="placeholder" id="email-error" style={{ color: 'red' }}>{emailError}</span>
      </div><br></br>
      <button type="submit">Create Account</button>
    </form>
  </fieldset><br></br>
  <h7>Already a user? Click here : </h7>
  <Link to="/Login">Login</Link>
</div>

  );
}

export default UserSignUp;