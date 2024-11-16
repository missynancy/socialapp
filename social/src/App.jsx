import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import CreatePost from './component/CreatePost';
// import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be constant across all routes */}
      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
