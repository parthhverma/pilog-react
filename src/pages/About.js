import React from 'react';
import './About.css';

const stack = [
  { icon: '⚙', name: 'Raspberry Pi 4', desc: 'ARM Cortex-A72 · 4GB RAM · Quad-core' },
  { icon: '⟁', name: 'Nginx', desc: 'Reverse proxy · Static file serving' },
  { icon: '⚛', name: 'React', desc: 'SPA · Component-based · localStorage' },
  { icon: '▣', name: 'React Router', desc: 'Client-side routing · Protected routes' },
  { icon: '◈', name: 'Cloudflare Tunnel', desc: 'Public URL · No port forwarding needed' },
];

export default function About() {
  return (
    <section className="about-page">
      <div className="about-header">
        <span className="section-label">About this project</span>
        <h1 className="about-title">Built on a<br /><em>$35 computer.</em></h1>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>PiLog is a student project demonstrating how a <strong>Raspberry Pi 4</strong> can serve as a fully functional web server. The entire stack is designed to run within the Pi's constraints.</p>
          <p>This project was built as part of a Computer Organization course, exploring IoT and server-side computing on low-power hardware.</p>
          <p>The frontend is a React SPA — built with <code>npm run build</code> and served as static files by Nginx. This means the Pi's CPU is barely used; it just serves files and the browser does the rest.</p>
          <p>Posts are stored in the browser's <code>localStorage</code>, making the app fully functional with zero backend required.</p>
        </div>

        <div className="tech-stack">
          <h3 className="stack-title">Tech Stack</h3>
          <ul className="stack-list">
            {stack.map(item => (
              <li className="stack-item" key={item.name}>
                <span className="stack-icon">{item.icon}</span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pi-diagram">
        <h3 className="diagram-title">Deployment Architecture</h3>
        <div className="diagram-flow">
          {[
            { label: 'Browser / Client', cls: 'client' },
            { arrow: 'HTTP :80' },
            { label: 'Nginx', cls: 'nginx' },
            { arrow: 'Static Files' },
            { label: 'React Build', cls: 'flask' },
            { arrow: 'localStorage' },
            { label: 'Browser DB', cls: 'sqlite' },
          ].map((item, i) =>
            item.arrow
              ? <div className="diagram-arrow" key={i}>{item.arrow}</div>
              : <div className={`diagram-box ${item.cls}`} key={i}>{item.label}</div>
          )}
        </div>
      </div>
    </section>
  );
}
