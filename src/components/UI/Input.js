import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
