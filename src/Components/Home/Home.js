import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main1}>
      <nav className={styles.nav}>
        <NavLink to="novatarefa">
          <Button title="Adicionar tarefa" />
        </NavLink>
        <NavLink to="lista">
          <Button title="Tarefas concluidas" />
        </NavLink>
      </nav>
      <section className={styles.tasks}>
        <h2>Tarefas Ativas</h2>
        <div className={styles.wrapper_list}>
          <ul className={styles.ul}>
            <li>titulo descricao horario finalizar</li>
            <li>titulo descricao horario finalizar</li>
            <li>titulo descricao horario finalizar</li>
            <li>titulo descricao horario finalizar</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
