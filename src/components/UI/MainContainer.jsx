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

  .newTaskSection .card {
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
  }

  .newTaskSection .modal {
    width: 20vw;
    height: 30vh;
    min-width: 300px;
    background: rgb(255, 255, 255);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 1.4rem;
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

    .newTaskSection .modal {
      width: 100%;
      height: 30%;
    }
  }
`;

const MainContainer = ({ children }) => {
  return <SharedStyleMain>{children}</SharedStyleMain>;
};

export default MainContainer;
