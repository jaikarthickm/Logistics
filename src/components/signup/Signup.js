import React, { useState } from "react";
import '../login/Login.css'; // Ensure Login.css is imported to reuse styles
import './Signup.css';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    setErrors({});

    // Validate inputs
    const validationErrors = {};
    if (!username) {
      validationErrors.username = "Username is required.";
    }
    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Email is invalid.";
    }
    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Redirect to home page after successful validation
    navigate("/");
  };

  return (
    <div id="login-box" className="login-box">
      <form onSubmit={handleSubmit}>
        <h2 id="loginTitle">Sign Up</h2>
        <div id="user-box" className="user-box">
          <input type="text" id="name" value={username} onChange={handleNameChange} placeholder="Name" />
          <label htmlFor="name">Name</label>
          {errors.username && (
            <div id="validationError" className="text-red-700 text-sm mt-1">
              {errors.username}
            </div>
          )}
        </div>
        <div id="user-box" className="user-box">
          <input type="text" id="email" value={email} onChange={handleEmailChange} placeholder="Email" />
          <label htmlFor="email">Email</label>
          {errors.email && (
            <div id="validationError" className="text-red-700 text-sm mt-1">
              {errors.email}
            </div>
          )}
        </div>
        <div id="user-box" className="user-box">
          <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
          <label htmlFor="password">Password</label>
          {errors.password && (
            <div id="validationError" className="text-red-700 text-sm mt-1">
              {errors.password}
            </div>
          )}
        </div>
        <button type="submit" id="loginBtn">Sign Up</button>
        <p>Already have an account?</p>
        <Link to="/login">Login here</Link>
      </form>
    </div>
  );
}

export default Signup;
