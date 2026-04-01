import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home({ posts }) {
  return (
    <>
      <section className="hero">
        <div className="hero-label">Raspberry Pi · Web Server</div>
        <h1 className="hero-title">A blog served<br /><em>fresh from the Pi.</em></h1>
        <p className="hero-sub">Thoughts on hardware, web dev, and everything in between — hosted on a $35 computer running 24/7.</p>
        <div className="hero-bar" />
      </section>

      <section className="posts-section">
        <div className="posts-header">
          <span className="section-label">Latest Posts</span>
          <span className="post-count">{posts.length} entries</span>
        </div>

        {posts.length > 0 ? (
          <div className="posts-grid">
            {posts.map((post, i) => (
              <article className="post-card" key={post.id} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="post-card-top">
                  <span className="post-tag">{post.tag}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h2 className="post-card-title">
                  <Link to={`/post/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-card-excerpt">{post.excerpt || post.content.slice(0, 130)}…</p>
                <Link to={`/post/${post.slug}`} className="post-card-link">Read more →</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No posts yet. <Link to="/login">Log in</Link> to create the first one.</p>
          </div>
        )}
      </section>
    </>
  );
}
