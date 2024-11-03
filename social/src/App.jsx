import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
// import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be constant across all routes */}
      {/* <Routes>
        <Route path="/" exact component={Home} />
      </Routes> */}
    </Router>
  );
}

export default App;
