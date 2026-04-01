import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './EditPost.css';

const TAGS = ['General', 'Raspberry Pi', 'Web Dev', 'DevOps', 'Hardware', 'Python'];

export default function EditPost({ posts, addPost, updatePost }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const existing = posts?.find(p => p.id === Number(id));
  const isEdit = Boolean(existing);

  const [title, setTitle] = useState(existing?.title || '');
  const [tag, setTag] = useState(existing?.tag || 'General');
  const [excerpt, setExcerpt] = useState(existing?.excerpt || '');
  const [content, setContent] = useState(existing?.content || '');
  const [excerptManual, setExcerptManual] = useState(false);

  const handleContentChange = (val) => {
    setContent(val);
    if (!excerptManual) setExcerpt(val.slice(0, 130).replace(/\n/g, ' ') + (val.length > 130 ? '…' : ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, tag, excerpt, content };
    if (isEdit) {
      updatePost(existing.id, data);
      navigate('/admin');
    } else {
      const slug = addPost(data);
      navigate('/admin');
    }
  };

  return (
    <section className="edit-page">
      <div className="edit-header">
        <Link to="/admin" className="back-link">← Back to admin</Link>
        <h1>{isEdit ? 'Edit Post' : 'New Post'}</h1>
      </div>

      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter post title…" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <select id="tag" value={tag} onChange={e => setTag(e.target.value)}>
              {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="excerpt">Excerpt <small>(auto-filled)</small></label>
            <input id="excerpt" type="text" value={excerpt} onChange={e => { setExcerpt(e.target.value); setExcerptManual(true); }} placeholder="Short summary…" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content <small>(blank line = new paragraph)</small></label>
          <textarea id="content" rows={16} value={content} onChange={e => handleContentChange(e.target.value)} placeholder="Write your post here…" required />
        </div>

        <div className="form-actions">
          <Link to="/admin" className="btn-secondary">Cancel</Link>
          <button type="submit" className="btn-primary">{isEdit ? 'Update Post →' : 'Publish Post →'}</button>
        </div>
      </form>
    </section>
  );
}
