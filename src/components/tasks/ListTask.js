import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './ListTask.module.css';

const ListTask = () => {
  const [taskList, setTaskList] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/complete')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

  return (
    <div>
      <NavLink to="/home">
        <Button title="Inicio" />
      </NavLink>

      <NavLink to="/novatarefa">
        <Button title="Adicionar tarefa" />
      </NavLink>
      <section className={styles.tasks}>
        <h2>Tarefas Concluidas</h2>
        <div className={styles.wrapper_list}>
          <ul className={styles.ul}>
            {taskList && taskList.completes !== null ? (
              taskList.completes.map((item) => (
                <li key={item.id}>
                  <p>
                    <span>Tarefa:</span> {item.text}
                  </p>

                  <p>
                    <span>Prioridade:</span> {item.prioridade}
                  </p>
                </li>
              ))
            ) : (
              <li>
                <p>Não há tarefas concluidas</p>
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ListTask;
