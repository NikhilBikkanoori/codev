import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const styles = `
    :root {
      --c1: #192047;
      --c2: #FFD1D8;
      --c3: #262C53;
      --c4: #A2F4F9;
      --text-dark: #F7FAFC;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: var(--c1);
      color: var(--text-dark);
      margin: 0;
      padding: 0;
    }

    .admin-header {
      background: var(--c3);
      padding: 15px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .admin-header h1 {
      background: linear-gradient(135deg, var(--c1), var(--c4));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 1.8em;
      font-weight: bold;
    }

    .admin-card {
      background: var(--c3);
      border-radius: 12px;
      padding: 20px;
      margin: 15px;
      color: var(--text-dark);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .admin-card:hover {
      transform: translateY(-5px);
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--c2), var(--c4));
      color: var(--c3);
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 10px 5px;
    }

    .btn-primary:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(162, 244, 249, 0.3);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 20px;
    }

    .stat-box {
      background: var(--c3);
      padding: 20px;
      border-radius: 12px;
      text-align: center;
    }

    .stat-value {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--c4);
      margin: 10px 0;
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
  `;

  return (
    <div style={{ background: '#192047', minHeight: '100vh' }}>
      <style>{styles}</style>

      {/* HEADER */}
      <header className="admin-header">
        <h1>DropShield Admin</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button className="btn-primary" onClick={() => navigate('/home')}>Home</button>
          <button className="btn-primary" onClick={() => navigate('/')}>Logout</button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ padding: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Admin Dashboard</h2>

        {/* Statistics */}
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-label">Total Students</div>
            <div className="stat-value">2,450</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Active Mentors</div>
            <div className="stat-value">320</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">At-Risk Students</div>
            <div className="stat-value">187</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Success Rate</div>
            <div className="stat-value">95%</div>
          </div>
        </div>

        {/* Admin Cards */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ color: '#FFD1D8', fontSize: '1.5rem', marginLeft: '15px' }}>Admin Functions</h3>

          <div className="admin-card">
            <h4 style={{ color: '#A2F4F9', marginTop: 0 }}>User Management</h4>
            <p>Manage student, mentor, and parent accounts. View activity logs and handle account requests.</p>
            <button className="btn-primary">Manage Users</button>
          </div>

          <div className="admin-card">
            <h4 style={{ color: '#A2F4F9', marginTop: 0 }}>Risk Assessment Reports</h4>
            <p>View comprehensive reports on student dropout risks and intervention outcomes.</p>
            <button className="btn-primary">View Reports</button>
          </div>

          <div className="admin-card">
            <h4 style={{ color: '#A2F4F9', marginTop: 0 }}>System Configuration</h4>
            <p>Configure system settings, notification preferences, and alert thresholds.</p>
            <button className="btn-primary">Settings</button>
          </div>

          <div className="admin-card">
            <h4 style={{ color: '#A2F4F9', marginTop: 0 }}>Analytics & Insights</h4>
            <p>Access detailed analytics about system usage, prediction accuracy, and effectiveness.</p>
            <button className="btn-primary">Analytics</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;