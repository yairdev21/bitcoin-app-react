import React from 'react';
import {  Link } from 'react-router-dom';

// import '../assets/HomePage.css'

const Header = () => {
    return (
        <header className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <Link to="/statistics">statistics</Link>
          </li>
        </ul>
      </header>
    )
}

export default Header
