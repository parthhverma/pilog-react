import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({ loggedIn, logout }) {
  const navigate = useNavigate();
  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-pi">π</span>
          <span className="logo-text">PiLog</span>
        </Link>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Posts</Link>
          <Link to="/about" className="nav-link">About</Link>
          {loggedIn ? (
            <>
              <Link to="/admin" className="nav-link nav-admin">Admin</Link>
              <button onClick={handleLogout} className="nav-link nav-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="nav-link nav-login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
