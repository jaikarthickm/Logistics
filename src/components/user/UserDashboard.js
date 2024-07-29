// src/components/user/UserDashboard.js
import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './UserDashboard.css';

const orderData = [
  { name: 'Pending', value: 8 },
  { name: 'Completed', value: 12 },
  { name: 'In Transit', value: 5 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const performanceData = [
  { month: 'Jan', deliveries: 30, returns: 2 },
  { month: 'Feb', deliveries: 40, returns: 3 },
  { month: 'Mar', deliveries: 35, returns: 1 },
  { month: 'Apr', deliveries: 50, returns: 5 },
];

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <div className="chart-section">
        <h2>Logistics Overview</h2>
        <div className="charts">
          <div className="chart">
            <h3>Orders Summary</h3>
            <PieChart width={400} height={400}>
              <Pie
                data={orderData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {orderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="chart">
            <h3>Performance Metrics</h3>
            <LineChart width={600} height={300} data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="deliveries" stroke="#8884d8" />
              <Line type="monotone" dataKey="returns" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
