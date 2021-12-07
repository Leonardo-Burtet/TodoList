import React from 'react';
import styled from 'styled-components';

const SharedStyleButton = styled.button`
  border-radius: 10px;
  border: 2px solid #ccc;
  background-color: #141414;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  height: 50px;
  width: 140px;
  padding: 0.5rem;
  transition: 0.2s;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    opacity: 0.9;
    transform: translateY(-3px);
  }
`;

const Button = ({ title, ...props }) => {
  return <SharedStyleButton {...props}>{title}</SharedStyleButton>;
};

export default Button;
