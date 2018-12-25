import React from 'react';
import {  NavLink } from 'react-router-dom';

import './Header.scss'

const Header = () => {
    return (
        <header className="header">
        <ul>
          <li>
            <NavLink activeClassName="activeNavLink" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavLink" to="/contact">Contacts</NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavLink" to="/statistics">statistics</NavLink>
          </li>
        </ul>
      </header>
    )
}

export default Header
