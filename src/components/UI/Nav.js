import React from 'react';
import styles from './Nav.module.css';
const Nav = ({ children }) => {
  return <nav className={styles.nav}>{children}</nav>;
};

export default Nav;
