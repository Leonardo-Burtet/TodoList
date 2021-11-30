import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <NavLink to="/tarefas-pendentes">
          <Button title="Tarefas pendentes" />
        </NavLink>
        <NavLink to="/tarefas-concluidas">
          <Button title="Tarefas concluidas" />
        </NavLink>{' '}
        <NavLink to="/adicionar-tarefa">
          <Button title="Adicionar tarefa" />
        </NavLink>
      </nav>

      <section className={styles.section}>
        <p>Uma lista de tarefas para te ajudar a organizar o seu dia.</p>
        <p> Para começar, clique no botão "Adicionar Tarefa".</p>
      </section>
    </main>
  );
};

export default Home;
