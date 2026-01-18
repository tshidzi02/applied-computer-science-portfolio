// Import React
import React from 'react';

// Import NavLink for routing
import { NavLink } from 'react-router-dom';

// Import logo
import logo from '../assets/logo.png';

// Import styles
import './TopNav.css';

function TopNav() {
  return (
    <header className="top-nav">
      {/* INNER CONTAINER HOLDS LOGO + NAV ITEMS */}
      <div className="top-nav-inner">
        {/* LOGO SECTION */}
        <div className="nav-left">
          <NavLink to="/">
            <img src={logo} alt="My Budget Manager" className="nav-logo" />
          </NavLink>
        </div>

        {/* NAVIGATION ITEMS — NEXT TO LOGO */}
        <nav className="nav-right">
          <NavLink to="/" className="nav-item">
            Dashboard
          </NavLink>

          <NavLink to="/reference" className="nav-item">
            Reference
          </NavLink>

          <NavLink to="/transactions" className="nav-item">
            Transactions
          </NavLink>

          <NavLink to="/monthly" className="nav-item">
            Monthly View
          </NavLink>

          <NavLink to="/reports" className="nav-item">
            Reports
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default TopNav;
