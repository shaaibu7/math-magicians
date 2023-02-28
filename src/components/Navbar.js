import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
    <Outlet />
  </header>;
};

export default Navigation;
