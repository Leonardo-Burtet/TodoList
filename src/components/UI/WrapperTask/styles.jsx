import styled from 'styled-components';

const SharedStyleWrapperTask = styled.section`
  animation: animeLeft 0.8s forwards;
  background-color: #ecece7;
  border: 1px solid #1414143a;
  border-radius: 15px;
  font-size: 25px;
  margin: 1rem 0;
  opacity: 0;
  overflow: auto;
  padding: 0.2rem calc(0.2rem + 15px) 0.2rem 0.2rem;
  transform: translateX(-20px);

  h2 {
    font-size: 1.5rem;
    padding-top: 5px;
    padding-bottom: 2rem;
  }

  ul li {
    align-items: center;
    border-bottom: 0.5px solid rgba(161, 157, 157, 0.116);
    display: grid;
    font-size: 1.2rem;
    grid-template-columns: 1fr 1fr 0.3fr;
    justify-items: left;
    align-items: center;
    margin: 10px auto;
    padding: 0 1rem;
    width: 100%;
  }

  ul li .textTask {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    word-break: break-word;
    padding: 5px;
  }

  ul li span {
    font-weight: bold;
    padding-right: 5px;
  }

  ul li .divButtons {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
  }

  ul li div button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
    transition: 0.2s;
  }

  ul li div button:hover {
    opacity: 0.8;
  }

  ul li div button:last-child {
    padding-bottom: 1px;
  }

  .noTasks {
    display: inline-block;
    text-align: center;
  }

  .noTasks p {
    justify-content: center;
  }

  .confirm {
    color: #068d06;
  }

  .remove {
    color: #c4342d;
  }

  .edit {
    color: #0e4bef;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #141414 #fb1;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #fb1;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #141414;
    border-radius: 20px;
    border: 3px solid #fb1;
  }

  @media (max-width: 600px) {
    margin: 10px;

    ul li {
      font-size: 1rem;
      grid-template-columns: 1fr 1fr 0.3fr;
      padding: 0px;
    }

    ul li div {
      width: 100%;
    }
  }
`;

export { SharedStyleWrapperTask };
