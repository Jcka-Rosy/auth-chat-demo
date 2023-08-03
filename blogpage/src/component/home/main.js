import React, { useState } from 'react';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const Main = () => {
  const [role, setRole] = useState(localStorage.getItem("AdminAccess"));

  const handleLogin = (role) => {
    setRole(role);
  };

  return (
    <div>
      {role === null && <Login onLogin={handleLogin} />}
      {role === 'true' && <AdminDashboard />}
      {role === 'user' && <UserDashboard />}
    </div>
  );
};

export default Main;