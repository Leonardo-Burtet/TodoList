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

  function handleClickFinish({ currentTarget }) {
    const taskFinish = taskList.tasks.filter(
      (item) => item.id === currentTarget.value
    );

    console.log(taskFinish[0]);

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

    console.log(taskList);
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
      <section className={styles.tasks}>
        <h2>Tarefas Ativas</h2>
        <div className={styles.wrapper_list}>
          <ul className={styles.ul}>
            {taskList && taskList.tasks.length > 0 ? (
              taskList.tasks.map((item) => (
                <li key={item.id}>
                  <p>
                    <span>Tarefa:</span> {item.text}
                  </p>

                  <p>
                    <span>Prioridade:</span> {item.prioridade}
                  </p>
                  <div>
                    <button onClick={handleClickFinish} value={item.id}>
                      <i className="fas fa-check-square"></i>
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>
                {console.log(taskList)}
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
