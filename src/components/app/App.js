import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Login from '../login/Login';
import Footer from '../footer/Footer';
import FaqPage from '../faq/FaqPage';
import Signup from '../signup/Signup';
import OrderList from '../order-card/OrderList';
import OrderForm from '../Order/order';
import OrderCard from "../order-card/OrderCard";
import AdminLogin from "../admin/AdminLogin";
import Dashboard from "../admin/Dashboard";
import UserDashboard from "../user/UserDashboard";
import UserProfile from "../user/UserProfile"; // Add this import

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [admin, setAdmin] = useState(null);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Simulate successful login
    localStorage.setItem("email", values.email);
    localStorage.setItem("isAuthenticated", "true");
    setUserId(1);  // Simulated user ID
    setAdmin(false);  // Simulated admin status
    setIsAuthenticated(true);
    navigate("/user-dashboard");
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} admin={admin} />
        <Routes>
          <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} admin={admin} />} />
          <Route path="/about" element={<About setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/faq" element={<FaqPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login error={error} setIsAuthenticated={setIsAuthenticated} setValues={setValues} values={values} handleLogin={handleLogin} setUserId={userId} setAdmin={setAdmin} />} />
          <Route path="/signup" element={<Signup error={error} setError={setError} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<UserProfile />} /> {/* Add this route */}
          

          {isAuthenticated && (
            <>
              <Route path="/orders" element={<OrderForm userId={userId} admin={admin} />} />
              <Route path="/orderlist" element={<OrderList userId={userId} admin={admin} />} />
              <Route path="/updateorder/:id" element={<OrderForm userId={userId} admin={admin} />} />
              <Route path="/ordercard/:id" element={<OrderCard userId={userId} admin={admin} />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
