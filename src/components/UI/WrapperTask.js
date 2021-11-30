import React from 'react';
import styles from './WrapperTask.module.css';

const WrapperTask = ({
  taskList,
  local,
  handleClickFinish,
  handleClickRemove,
  title,
}) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <ul className={styles.ul}>
        {taskList !== null && taskList[local].length > 0 ? (
          taskList[local].map((item) => (
            <li className={styles.tasks} key={item.id}>
              <p>
                <span>Tarefa:</span> {item.text}
              </p>

              <p>
                <span>Prioridade:</span> {item.prioridade}
              </p>
              <div>
                {local === 'tasks' ? (
                  <>
                    <button
                      className={styles.confirm}
                      onClick={handleClickFinish}
                      value={item.id}
                    >
                      <i className="fas fa-check-square"></i>
                    </button>
                    <button
                      className={styles.remove}
                      onClick={handleClickRemove}
                      value={item.id}
                    >
                      <i class="fas fa-window-close"></i>
                    </button>
                  </>
                ) : (
                  <p>{item.date}</p>
                )}
              </div>
            </li>
          ))
        ) : (
          <li className={styles.noTasks}>
            {local === 'tasks' ? (
              <p>Nenhuma tarefa pendente.</p>
            ) : (
              <p>Nenhuma tarefa concluida.</p>
            )}
          </li>
        )}
      </ul>
    </section>
  );
};

export default WrapperTask;
