import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './Home.module.css';

const Home = () => {
  const [taskList, setTaskList] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

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
            {taskList && taskList.tasks.length !== 0 ? (
              taskList.tasks.map((item) => (
                <li key={item.id}>
                  <p>{item.text}</p>

                  <p>{item.prioridade}</p>
                </li>
              ))
            ) : (
              <li>
                <p>Não há tarefas pendentes</p>
              </li>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
