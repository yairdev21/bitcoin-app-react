import React from 'react';
import {  NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Header.scss'

const Header = () => {
    return (
        <header className="header">
        <ul>
          <li>
            <NavLink   activeClassName="activeNavLink" exact to="/"><FontAwesomeIcon  size="2x" icon="home" /></NavLink>
          </li>
          <li>
            <NavLink  activeClassName="activeNavLink" to="/contact"><FontAwesomeIcon  size="2x" icon="users" /></NavLink>
          </li>
          <li>
            <NavLink   activeClassName="activeNavLink" to="/statistics"><FontAwesomeIcon size="2x" icon="chart-line" /></NavLink>
          </li>
        </ul>
      </header>
    )
}

export default Header
