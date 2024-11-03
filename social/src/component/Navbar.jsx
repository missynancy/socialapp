import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import profile from '../assets/female.jpg'
import './Components.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
            SOCIAL <span>APP</span>
        </Link>
        <div className="search-bar">
        <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
          <input type="text" placeholder="search for creators, inspirations, and projects" />
        </div>
        <div className="user-profile">
        <Link to="/other" className="add-post-button">Add Post</Link>
          <img src={profile} alt="User Profile" />
        </div>
      </div>
    </nav>
    <Sidebar/>
    </>
  );
}

export default Navbar;
