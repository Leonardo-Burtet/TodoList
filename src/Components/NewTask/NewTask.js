import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './NewTask.module.css';

const NewTask = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main>
      <nav className={styles.nav}>
        <NavLink to="/home">
          <Button title="Inicio" />
        </NavLink>

        <NavLink to="/lista">
          <Button title="Tarefas concluidas" />
        </NavLink>
      </nav>
      <ul>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Titulo</label>
          <input type="text" />

          <label for="nivelum">nivel um</label>
          <input
            type="radio"
            id="nivelum"
            name="nivelum"
            value="nivelum"
            checked
          />

          <label for="niveldois">nivel dois</label>
          <input
            type="radio"
            id="niveldois"
            name="niveldois"
            value="niveldois"
          />

          <label for="niveltres">nivel tres</label>
          <input
            type="radio"
            id="niveltres"
            name="niveltres"
            value="niveltres"
          />

          <Button title="Adicionar" />
        </form>
      </ul>
    </main>
  );
};

export default NewTask;
