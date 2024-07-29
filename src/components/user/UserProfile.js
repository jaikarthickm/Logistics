import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.css';

const UserProfile = () => {
  const email = useSelector((state) => state.auth.email);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
