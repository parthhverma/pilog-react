import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './PostPage.css';

export default function PostPage({ posts, loggedIn }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.slug === slug);

  if (!post) return (
    <div className="not-found">
      <p>Post not found. <Link to="/">Go home</Link></p>
    </div>
  );

  return (
    <article className="single-post">
      <header className="post-header">
        <div className="post-meta-top">
          <span className="post-tag">{post.tag}</span>
          <span className="post-date">{post.date}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-divider" />
      </header>
      <div className="post-body">
        {post.content.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>
      <footer className="post-footer">
        <Link to="/" className="back-link">← Back to all posts</Link>
        {loggedIn && (
          <Link to={`/admin/edit/${post.id}`} className="edit-link">Edit post</Link>
        )}
      </footer>
    </article>
  );
}
