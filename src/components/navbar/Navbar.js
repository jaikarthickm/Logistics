import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaInfoCircle, FaUser, FaSignInAlt, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import logo from './courier.png';

function Navbar() {
  const navigate = useNavigate();
  const email = useSelector((state) => state.auth.email);  // Get email from Redux store
  const admin = localStorage.getItem("admin") === "true";
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img className='logo' src={logo} alt="LogistiCare Logo" />
          <span className="logo-text">JK Logistics</span>
        </Link>
      </div>
      <ul className="nav-links">
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/"><FaHome /> HOME</Link>
            </li>
            <li>
              <Link to="/about"><FaInfoCircle /> ABOUT</Link>
            </li>
            <li>
              <Link to="/profile"><FaUser /> PROFILE</Link>
            </li>
            <li>
              <Link to="/login"><FaSignInAlt /> LOGIN</Link>
            </li>
            <li>
              <Link to="/admin-login"><FaSignInAlt /> ADMIN LOGIN</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/"><FaHome /> HOME</Link>
            </li>
            <li>
              <Link to="/about"><FaInfoCircle /> ABOUT</Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard"></Link>
              </li>
            )}
            <li>
              <Link to="/profile"><FaUser /> PROFILE</Link>
            </li>
            <li>
              <Link onClick={handleLogout} to="/"><FaSignOutAlt /> LOGOUT</Link>
            </li>
            {email && <li className="welcome-message">Welcome, {email}</li>}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
