import React from 'react';
import styles from './WrapperTask.module.css';

const WrapperTask = ({ taskList, local, handleClick }) => {
  console.log(taskList);
  console.log(local);
  return (
    <section className={styles.tasks}>
      <div className={styles.wrapper_list}>
        <ul className={styles.ul}>
          {taskList !== null && taskList[local].length > 0 ? (
            taskList[local].map((item) => (
              <li key={item.id}>
                <p>
                  <span>Tarefa:</span> {item.text}
                </p>

                <p>
                  <span>Prioridade:</span> {item.prioridade}
                </p>
                <div>
                  {local === 'tasks' ? (
                    <button onClick={handleClick} value={item.id}>
                      <i className="fas fa-check-square"></i>
                    </button>
                  ) : null}
                </div>
              </li>
            ))
          ) : (
            <li>
              <p>Nenhuma tarefa concluida.</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default WrapperTask;
