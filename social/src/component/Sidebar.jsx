import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Import your CSS file for styling

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src="https://www.flaticon.com/free-icons/samvic-codes" alt="SamVic Codes Logo" />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/explore">
            <i className="fas fa-compass"></i>
            <span>Explore</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/notifications">
            <i className="fas fa-bell"></i>
            <span>Notifications</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/messages">
            <i className="fas fa-envelope"></i>
            <span>Messages</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/bookmarks">
            <i className="fas fa-bookmark"></i>
            <span>Bookmarks</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/analytics">
            <i className="fas fa-chart-bar"></i>
            <span>Analytics</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/theme">
            <i className="fas fa-palette"></i>
            <span>Theme</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className="main-content">
        <header className="header">
          <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
          <h1>SamVic Codes</h1>
        </header>
        <main className="main">
          <h2>Welcome to SamVic Codes!</h2>
          <p>This is a sample website built with React.</p>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
