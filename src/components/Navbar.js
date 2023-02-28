import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <h1>Math Magicians</h1>
    <nav className={styles.navbar}>
      <Link to="/">Home |</Link>
      <Link to="/calculator">Calculator |</Link>
      <Link to="/quote">Quote</Link>
    </nav>
    <Outlet />
  </header>
);

export default Navigation;
