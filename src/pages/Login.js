import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import './Login.css';

export default function Login({ login, loggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (loggedIn) return <Navigate to="/admin" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/admin');
    } else {
      setError('Invalid credentials');
      setTimeout(() => setError(''), 2500);
    }
  };

  return (
    <section className="login-page">
      <div className="login-box">
        <div className="login-header">
          <span className="logo-pi-large">π</span>
          <h1>Admin Login</h1>
          <p>Access the PiLog admin panel</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="login-error">{error}</div>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="admin" required autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary">Sign in →</button>
        </form>
        <p className="login-hint">Default: admin / raspberry</p>
      </div>
    </section>
  );
}
