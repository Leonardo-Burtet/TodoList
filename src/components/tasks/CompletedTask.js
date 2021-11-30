import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import WrapperTask from '../UI/WrapperTask';
import styles from './CompletedTask.module.css';

const CompletedTask = () => {
  const [taskList, setTaskList] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/completed-task')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <NavLink to="/home">
          <Button title="Início" />
        </NavLink>
        <NavLink to="/adicionar-tarefa">
          <Button title="Adicionar tarefa" />
        </NavLink>
        <NavLink to="/tarefas-pendentes">
          <Button title="Tarefas pendentes" />
        </NavLink>
      </nav>

      <WrapperTask taskList={taskList} local="completeds" />
    </main>
  );
};

export default CompletedTask;
