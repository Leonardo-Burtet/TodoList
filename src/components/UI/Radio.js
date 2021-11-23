import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ options, value, setValue }) => {
  return (
    <div className={styles.radio}>
      <p>Prioridade</p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Radio;
