import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import Radio from '../UI/Radio';
import Input from '../UI/Input';
import styles from './NewTask.module.css';

const NewTask = () => {
  const [prioridade, setPrioridade] = React.useState('');
  const [task, setTask] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (prioridade && task) {
      fetch('/api/pending-tasks', {
        method: 'POST',
        body: JSON.stringify({
          text: task,
          prioridade: prioridade,
        }),
      })
        .then((res) => res.json())
        .then((json) => json);
      setTask('');
      setPrioridade('');
    }
  }

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <NavLink to="/home">
          <Button title="Início" />
        </NavLink>
        <NavLink to="/tarefas-pendentes">
          <Button title="Tarefas pendentes" />
        </NavLink>
        <NavLink to="/tarefas-concluidas">
          <Button title="Tarefas concluidas" />
        </NavLink>
      </nav>
      <section className={styles.section}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            id="Titulo"
            label="Titulo"
            value={task}
            setValue={setTask}
            required
          />
          <Radio
            options={['Alta', 'Media', 'Baixa']}
            value={prioridade}
            setValue={setPrioridade}
          />

          <Button title="Adicionar" />
        </form>
      </section>
    </main>
  );
};

export default NewTask;
