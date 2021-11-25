import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <div className={styles.radio}>
      <p>Prioridade</p>
      <div>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
              {...props}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;
