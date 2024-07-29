import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Dashboard.css';

// Sample data for the bar chart
const chartData = [
  { name: 'Trucks', count: 15 },
  { name: 'Goods Transported', count: 500 },
  { name: 'Orders', count: 200 },
  { name: 'Active Users', count: 600 }
];

// Sample data for the table
const orderData = [
  { id: 1, orderNumber: 'ORD123', status: 'Delivered', date: '2024-07-25' },
  { id: 2, orderNumber: 'ORD124', status: 'Pending', date: '2024-07-26' },
  { id: 3, orderNumber: 'ORD125', status: 'Shipped', date: '2024-07-27' }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Logistics Management Dashboard</h1>
      
      <div className="info-cards">
        <div className="info-card">
          <h3>Total Trucks</h3>
          <p>15</p>
        </div>
        <div className="info-card">
          <h3>Total Goods Transported</h3>
          <p>500</p>
        </div>
        <div className="info-card">
          <h3>Total Orders</h3>
          <p>200</p>
        </div>
        <div className="info-card">
          <h3>Active Users</h3>
          <p>600</p>
        </div>
      </div>
      
      <div className="chart-container">
        <h2>Statistics Overview</h2>
        <BarChart width={800} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>
      
      <div className="table-container">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order Number</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderNumber}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
