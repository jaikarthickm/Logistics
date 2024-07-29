import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FAQ</h3>
          <ul>
            <li><Link to="/faq">faq</Link></li>
          </ul>
          
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="#">
                <BsFacebook /> JK Logistics
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare /> JK Logistics
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter /> JK Logistics
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillGithub /> JK Logistics
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JK Logistics. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
