import React from 'react';
import styled from 'styled-components';

const SharedStyleCard = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 5rem;
  }
`;

const SharedStyleModal = styled.div`
  max-width: 60vw;
  height: 20vh;
  padding: 10px;
  min-width: 300px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.4rem;

  @media (max-width: 600px) {
    width: 100%;
    height: 50vh;
  }
`;

const Card = ({ children }) => {
  return (
    <SharedStyleCard>
      <SharedStyleModal>{children}</SharedStyleModal>
    </SharedStyleCard>
  );
};

export default Card;
