import React from 'react';
import styled from 'styled-components';

const SharedStyleInput = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  label {
    font-size: 25px;
    font-weight: bold;
  }

  input {
    width: 65%;
    font-size: 1rem;
    padding: 2px;
    border: 1px solid #141414;
    border-radius: 2px;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`;

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <SharedStyleInput>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </SharedStyleInput>
  );
};

export default Input;
