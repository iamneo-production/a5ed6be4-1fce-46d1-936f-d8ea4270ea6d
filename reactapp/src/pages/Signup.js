import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupBranchName, setSignupBranchName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication logic here

    // Example: Check if login credentials are valid
    if (loginEmail.trim() === '' || loginPassword.trim() === '') {
      alert('Please enter valid login credentials.');
      return;
    }

    // Navigate to the authenticated page on successful login
    navigate('/Home');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup authentication logic here

    // Example: Check if signup data is valid
    if (signupBranchName.trim() === '') {
      alert('Please enter a branch name.');
      return;
    }

    if (signupEmail.trim() === '' || signupPassword.trim() === '') {
      alert('Please enter valid signup credentials.');
      return;
    }

    // Navigate to the authenticated page on successful signup
    navigate('/Home');
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            className="in"
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            className="in"
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />

          <button className="b">Login</button>
        </form>
       

        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input
            className="in"
            type="text"
            placeholder="Branch Name"
            value={signupBranchName}
            onChange={(e) => setSignupBranchName(e.target.value)}
            required
          />
          <input
            className="in"
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            className="in"
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />

          <button className="b">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
