import React from 'react';
import styles from './MainContainer.module.css';

const MainContainer = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainContainer;
