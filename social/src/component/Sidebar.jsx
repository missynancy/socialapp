import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '/stories/p9.jpg';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('/'); // Set the default active item

  // Handle click to set active item
  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={profile} alt="Profile" />
        <div className="sidebar-header-name">
          <h3>Nancy</h3>
          <h5>@nancy_m</h5>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li
          className={`sidebar-item ${activeItem === '/' ? 'active' : ''}`}
          onClick={() => handleItemClick('/')}
        >
          <Link to="/">
            <i className="bx bxs-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === '/explore' ? 'active' : ''}`}
          onClick={() => handleItemClick('/explore')}
        >
          <Link to="/explore">
            <i className="bx bxl-internet-explorer"></i>
            <span>Explore</span>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === '/notifications' ? 'active' : ''}`}
          onClick={() => handleItemClick('/notifications')}
        >
          <Link to="/notifications">
            <i className="bx bxs-bell"></i>
            <span>Notifications</span>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === '/messages' ? 'active' : ''}`}
          onClick={() => handleItemClick('/messages')}
        >
          <Link to="/messages">
            <i className="bx bxs-envelope"></i>
            <span>Messages</span>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === '/bookmarks' ? 'active' : ''}`}
          onClick={() => handleItemClick('/bookmarks')}
        >
          <Link to="/bookmarks">
            <i className="bx bx-bookmark"></i>
            <span>Bookmarks</span>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === '/analytics' ? 'active' : ''}`}
          onClick={() => handleItemClick('/analytics')}
        >
          <Link to="/analytics">
            <i className="bx bx-line-chart"></i>
            <span>Analytics</span>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === '/theme' ? 'active' : ''}`}
          onClick={() => handleItemClick('/theme')}
        >
          <Link to="/theme">
            <i className="bx bxs-palette"></i>
            <span>Theme</span>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === '/settings' ? 'active' : ''}`}
          onClick={() => handleItemClick('/settings')}
        >
          <Link to="/settings">
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className="create-post">
        <Link to="/create-post">
          <button>Create Post</button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
