import React from 'react';
import styled from 'styled-components';

const SharedStyleRadio = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  p {
    font-size: 25px;
    font-weight: bold;
  }

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 65%;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    padding-top: 20px;

    div {
      width: 100%;
    }
  }
`;
const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <SharedStyleRadio>
      <p>Prioridade:</p>
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
    </SharedStyleRadio>
  );
};

export default Radio;
