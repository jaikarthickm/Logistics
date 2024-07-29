import React from 'react';
import './Home.css';
import image from './homepage-image.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Home() {
  const auth = localStorage.getItem("isAuthenticated");
  const admin = localStorage.getItem("admin");

  console.log("isAuthenticated " + auth);
  console.log("admin " + admin);

  return (
    <div>
      <div className="home_container">
        <div id="home" className="">
          <h1 id="welcome">Welcome to JK Logistics</h1>
          <p id="welcome_subtext">Efficiently manage and track your shipments and inventory with ease.</p>
          {(auth && admin) ? (
            <Link to="/orderlist"><button id="btn">Manage Orders</button></Link>
          ) : (
            <>
              {auth && !admin ? (
                <Link to="/order"><button id="btn">Place an Order</button></Link>
              ) : (
                <Link to="/login"><button id="btn">Join Us Now</button></Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
