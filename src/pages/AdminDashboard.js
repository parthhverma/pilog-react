import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard({ posts, deletePost }) {
  const handleDelete = (id, title) => {
    if (window.confirm(`Delete "${title}"?`)) deletePost(id);
  };

  return (
    <section className="admin-page">
      <div className="admin-header">
        <div>
          <span className="section-label">Admin Panel</span>
          <h1 className="admin-title">Manage Posts</h1>
        </div>
        <Link to="/admin/new" className="btn-primary">+ New Post</Link>
      </div>

      <div className="admin-stats">
        <div className="stat-card"><span className="stat-num">{posts.length}</span><span className="stat-label">Total Posts</span></div>
        <div className="stat-card"><span className="stat-num">React</span><span className="stat-label">Framework</span></div>
        <div className="stat-card"><span className="stat-num">localStorage</span><span className="stat-label">Storage</span></div>
        <div className="stat-card"><span className="stat-num">Nginx</span><span className="stat-label">Web Server</span></div>
      </div>

      <div className="posts-table-wrap">
        {posts.length === 0 ? (
          <div className="empty-state"><p>No posts yet. <Link to="/admin/new">Create one</Link>.</p></div>
        ) : (
          <table className="posts-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Tag</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.id}>
                  <td><Link to={`/post/${post.slug}`}>{post.title}</Link></td>
                  <td><span className="post-tag-sm">{post.tag}</span></td>
                  <td className="mono">{post.date}</td>
                  <td className="action-cell">
                    <Link to={`/admin/edit/${post.id}`} className="action-btn edit">Edit</Link>
                    <button onClick={() => handleDelete(post.id, post.title)} className="action-btn delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
