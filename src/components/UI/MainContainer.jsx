import React from 'react';
import styled from 'styled-components';

const SharedStyleMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  .animeBtn button {
    animation: buttonAdd 0.5s ease-in alternate infinite;
    background-color: #141414;
    transform: translateY(-5px);
  }

  .homeSection {
    animation: animeLeft 0.8s forwards;
    background-color: #ecece7;
    border: 1px solid #1414143a;
    border-radius: 15px;
    font-size: 1.3rem;
    margin: 1rem 0;
    opacity: 0;
    padding: 1rem;
    transform: translateX(-20px);
    text-align: center;
  }

  .homeSection h2 {
    font-size: 1.5rem;
    padding-bottom: 15px;
  }

  .newTaskSection {
    align-items: center;
    animation: animeLeft 0.8s forwards;
    background-color: #ecece7;
    border: 1px solid #1414143a;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    opacity: 0;
    padding: 10px 0;
    transform: translateX(-20px);
  }
  .newTaskSection form {
    display: flex;
    flex-direction: column;
    height: 25vh;
    justify-content: space-around;
    padding: 2rem;
    min-width: 60%;
    max-width: 80%;
  }

  .newTaskSection form button {
    margin-top: 20px;
    width: 100%;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @keyframes buttonAdd {
    to {
      transform: translateY(0px);
    }
  }

  @media (max-width: 600px) {
    .newTaskSection {
      margin: 50px 20px;
    }
    .newTaskSection form {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
    }

    .card {
      padding: 5rem;
    }
    .card .modal {
      width: 100%;
      height: 50vh;
    }
  }
`;

const MainContainer = ({ children }) => {
  return <SharedStyleMain>{children}</SharedStyleMain>;
};

export default MainContainer;
