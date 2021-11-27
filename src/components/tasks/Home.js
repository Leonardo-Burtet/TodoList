import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import WrapperTask from '../UI/WrapperTask';
import styles from './Home.module.css';

const Home = () => {
  const [taskList, setTaskList] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

  function handleClickFinish({ currentTarget }) {
    const taskFinish = taskList.tasks.filter(
      (item) => item.id === currentTarget.value
    );

    fetch('/api/complete', {
      method: 'POST',
      body: JSON.stringify({
        text: taskFinish[0].text,
        prioridade: taskFinish[0].prioridade,
      }),
    });

    fetch(`/api/tasks/${currentTarget.value}`, {
      method: 'DELETE',
    });

    fetch('/api/tasks')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }

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
      <WrapperTask
        taskList={taskList}
        local="tasks"
        handleClick={handleClickFinish}
      />
    </main>
  );
};

export default Home;
