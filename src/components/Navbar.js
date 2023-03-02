import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <h1>Math Magicians</h1>
    <nav className={styles.navbar}>
      <NavLink to="/">Home |</NavLink>
      <NavLink to="/calculator">Calculator |</NavLink>
      <NavLink to="/quote">Quote</NavLink>
    </nav>
    <Outlet />
  </header>
);

export default Navigation;
