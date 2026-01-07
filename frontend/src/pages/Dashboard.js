import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login if not logged in
  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  return (
    <div className="container py-5">
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}</p>
      <p>This is your protected dashboard page.</p>
    </div>
  );
}

export default Dashboard;
