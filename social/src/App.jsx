import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import CreatePost from './component/CreatePost';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be constant across all routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Correct way to render Home */}
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
