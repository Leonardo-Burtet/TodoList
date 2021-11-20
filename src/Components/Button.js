import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, ...props }) => {
  return (
    <button className={styles.button} name={title} {...props}>
      {title}
    </button>
  );
};

export default Button;
