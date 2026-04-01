import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { INITIAL_POSTS, ADMIN } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EditPost from './pages/EditPost';

function App() {
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem('pilog_posts');
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch { return INITIAL_POSTS; }
  });
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem('pilog_auth') === 'true');
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    localStorage.setItem('pilog_posts', JSON.stringify(posts));
  }, [posts]);

  const showFlash = (msg) => {
    setFlash(msg);
    setTimeout(() => setFlash(null), 3000);
  };

  const login = (username, password) => {
    if (username === ADMIN.username && password === ADMIN.password) {
      sessionStorage.setItem('pilog_auth', 'true');
      setLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => { sessionStorage.removeItem('pilog_auth'); setLoggedIn(false); };

  const slugify = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');

  const addPost = (data) => {
    const newPost = { id: Date.now(), slug: slugify(data.title), date: new Date().toISOString().slice(0, 10), ...data };
    setPosts(prev => [newPost, ...prev]);
    showFlash('Post published!');
    return newPost.slug;
  };

  const updatePost = (id, data) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, ...data } : p));
    showFlash('Post updated!');
  };

  const deletePost = (id) => { setPosts(prev => prev.filter(p => p.id !== id)); showFlash('Post deleted.'); };

  const ProtectedRoute = ({ children }) => loggedIn ? children : <Navigate to="/login" />;

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} logout={logout} />
      {flash && <div className="flash-bar">{flash}</div>}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:slug" element={<PostPage posts={posts} loggedIn={loggedIn} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login login={login} loggedIn={loggedIn} />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard posts={posts} deletePost={deletePost} /></ProtectedRoute>} />
          <Route path="/admin/new" element={<ProtectedRoute><EditPost addPost={addPost} /></ProtectedRoute>} />
          <Route path="/admin/edit/:id" element={<ProtectedRoute><EditPost posts={posts} updatePost={updatePost} /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer posts={posts} />
    </BrowserRouter>
  );
}

export default App;
