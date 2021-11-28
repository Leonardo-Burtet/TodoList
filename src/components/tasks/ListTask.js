import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import WrapperTask from '../UI/WrapperTask';
import styles from './ListTask.module.css';

const ListTask = () => {
  const [taskList, setTaskList] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/complete')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <NavLink to="/home">
          <Button title="Inicio" />
        </NavLink>

        <NavLink to="/novatarefa">
          <Button title="Adicionar tarefa" />
        </NavLink>
      </nav>

      <WrapperTask taskList={taskList} local="completes" />
    </main>
  );
};

export default ListTask;
