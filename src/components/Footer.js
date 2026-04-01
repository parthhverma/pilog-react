import React from 'react';
import './Footer.css';

export default function Footer({ posts }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-logo">π PiLog</span>
        <span className="footer-note">Hosted on Raspberry Pi · React + Nginx</span>
        <span className="footer-stats">{posts.length} posts · Running on localhost</span>
      </div>
    </footer>
  );
}
