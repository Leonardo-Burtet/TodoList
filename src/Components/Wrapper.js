import React from 'react';
import Button from './Button';
import NewTask from './NewTask';
import styles from './Wrapper.module.css';

const WrapperButtons = () => {
  const [task, setTask] = React.useState(false);

  function handleClick() {
    setTask(!task);
    console.log(task);
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperButtons}>
        <Button title="Nova tarefa" onClick={handleClick} />
        <Button title="Tarefas Concluidas" />
        <Button title="Data" />
      </div>

      {task ? <NewTask /> : null}
    </section>
  );
};

export default WrapperButtons;
