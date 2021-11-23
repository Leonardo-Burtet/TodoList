import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import Radio from '../UI/Radio';
import Input from '../UI/Input';
import styles from './NewTask.module.css';

const NewTask = () => {
  const [prioridades, setPrioridades] = React.useState('');
  const [task, setTask] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(prioridades);
    console.log(task);
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
          <Input id="Titulo" label="Titulo" value={task} setValue={setTask} />
          <Radio
            options={['Alto', 'Medio', 'Baixo']}
            value={prioridades}
            setValue={setPrioridades}
          />
          <Button title="Adicionar" />
        </form>
      </ul>
    </main>
  );
};

export default NewTask;
