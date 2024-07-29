import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
    setValidationError({ ...validationError, email: "" });
    setError(null);
  };

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
    setValidationError({ ...validationError, password: "" });
    setError(null);
  };

  const validate = () => {
    let isValid = true;
    let errors = { email: "", password: "" };

    if (!values.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!values.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setValidationError(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    // Simulating successful login and navigation
    localStorage.setItem("email", values.email);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("admin", "true");
    navigate("/dashboard");
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h2>Admin Login</h2>
        {error && (
          <div className="error-message">
            <strong>Error: </strong>
            <span>{error}</span>
          </div>
        )}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            onChange={handleEmailChange} 
            value={values.email} 
            placeholder="Email" 
          />
          {validationError.email && (
            <div className="validation-error">
              {validationError.email}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            onChange={handlePasswordChange} 
            value={values.password} 
            placeholder="Password" 
          />
          {validationError.password && (
            <div className="validation-error">
              {validationError.password}
            </div>
          )}
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
