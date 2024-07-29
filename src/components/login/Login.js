import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, setAuthenticated } from '../../redux/actions/AuthActions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({ email: "", password: "" });
  const [validationError, setValidationError] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

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

    // Simulate successful login
    localStorage.setItem("email", values.email);
    localStorage.setItem("isAuthenticated", "true");
    dispatch(setEmail(values.email));
    dispatch(setAuthenticated(true));
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/user-dashboard");
    }, 2000);  // Show the success message for 2 seconds
  };

  return (
    <div id="login-box">
      <form onSubmit={handleSubmit}>
        <h2 id="loginTitle">Login</h2>
        {error && (
          <div id="error">
            <strong id="errorTitle">Error: </strong>
            <span>{error}</span>
          </div>
        )}
        <div id="user-box" className="user-box">
          <input
            type="text"
            id="email"
            onChange={handleEmailChange}
            value={values.email}
            placeholder="Email"
          />
          <label>Email</label>
          {validationError.email && (
            <div id="validationError">
              {validationError.email}
            </div>
          )}
        </div>
        <div id="user-box" className="user-box">
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
            value={values.password}
            placeholder="Password"
          />
          <label>Password</label>
          {validationError.password && (
            <div id="validationError">
              {validationError.password}
            </div>
          )}
        </div>
        <button type="submit" id="loginBtn">Login</button>
        <p>Don't have an account?</p>
        <a href="/signup">Sign up here</a>
      </form>

      {showSuccess && (
        <div className="success-popup">
          <p>Login Successful!</p>
        </div>
      )}
    </div>
  );
}

export default Login;
