import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import Nav from '../UI/Nav';
import MainContainer from '../UI/MainContainer';
import styles from './Home.module.css';

const Home = () => {
  return (
    <MainContainer>
      <Nav>
        <NavLink to="/tarefas-pendentes">
          <Button title="Tarefas pendentes" />
        </NavLink>
        <NavLink to="/tarefas-concluidas">
          <Button title="Tarefas concluidas" />
        </NavLink>{' '}
        <NavLink className={styles.animeBtn} to="/adicionar-tarefa">
          <Button title="Adicionar tarefa" />
        </NavLink>
      </Nav>

      <section className={styles.section}>
        <h2>Início</h2>
        <p>Uma lista de tarefas para te ajudar a organizar o seu dia.</p>
        <p> Para começar, clique no botão "Adicionar Tarefa".</p>
      </section>
    </MainContainer>
  );
};

export default Home;
