import React from 'react';
import Button from './Button';
import styles from './NewTask.module.css';

const NewTask = () => {
  const [Tasks, setTasks] = React.useState([]);

  function handleAdd() {
    console.log('teste');
  }
  return (
    <section className={styles.newtask}>
      <div className={styles.formTask}>
        <p>Nova tarefa:</p> <textarea></textarea>{' '}
        <Button title="Adicionar" onClick={handleAdd} />
      </div>
    </section>
  );
};

export default NewTask;
