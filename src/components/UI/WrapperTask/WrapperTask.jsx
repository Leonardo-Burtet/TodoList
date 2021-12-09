import React from 'react';
import { SharedStyleWrapperTask } from './styles';

const WrapperTask = ({
  taskList,
  local,
  handleClickFinish,
  handleClickRemove,
  handleClickEdit,
  title,
}) => {
  return (
    <SharedStyleWrapperTask>
      <h2>{title}</h2>
      <ul>
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
                  <>
                    <button
                      className="confirm"
                      onClick={handleClickFinish}
                      value={item.id}
                    >
                      <i className="fas fa-check-square"></i>
                    </button>
                    <button
                      className="remove"
                      onClick={handleClickRemove}
                      value={item.id}
                    >
                      <i className="fas fa-window-close"></i>
                    </button>
                    <button
                      className="edit"
                      onClick={handleClickEdit}
                      value={item.id}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </>
                ) : (
                  <p>{item.date}</p>
                )}
              </div>
            </li>
          ))
        ) : (
          <li className="noTasks">
            {local === 'tasks' ? (
              <p>Nenhuma tarefa pendente.</p>
            ) : (
              <p>Nenhuma tarefa concluida.</p>
            )}
          </li>
        )}
      </ul>
    </SharedStyleWrapperTask>
  );
};

export default WrapperTask;
