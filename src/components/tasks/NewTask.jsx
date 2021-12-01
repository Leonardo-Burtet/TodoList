import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import Radio from '../UI/Radio';
import Input from '../UI/Input';
import styles from './NewTask.module.css';
import Nav from '../UI/Nav';
import MainContainer from '../UI/MainContainer';

const NewTask = () => {
  const [prioridade, setPrioridade] = React.useState('');
  const [task, setTask] = React.useState('');
  const [card, setCard] = React.useState(false);

  function handleClickCard() {
    setCard(!card);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (prioridade && task) {
      fetch('/api/pending-tasks', {
        method: 'POST',
        body: JSON.stringify({
          text: task,
          prioridade: prioridade,
        }),
      });
      setTask('');
      setPrioridade('');
    }
  }

  return (
    <MainContainer>
      <Nav>
        <NavLink to="/home">
          <Button title="Início" />
        </NavLink>
        <NavLink to="/tarefas-pendentes">
          <Button title="Tarefas pendentes" />
        </NavLink>
        <NavLink to="/tarefas-concluidas">
          <Button title="Tarefas concluidas" />
        </NavLink>
        <NavLink to="/adicionar-tarefa">
          <Button title="Adicionar tarefa" />
        </NavLink>
      </Nav>
      <section className={styles.section}>
        <h2>Adicione uma tarefa</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            id="Tarefa"
            label="Tarefa"
            value={task}
            setValue={setTask}
            placeholder="Digite aqui a sua tarefa"
            required
          />
          <Radio
            options={['Alta', 'Media', 'Baixa']}
            value={prioridade}
            setValue={setPrioridade}
          />
          <Button
            title="Adicionar"
            onClick={prioridade && task !== '' ? handleClickCard : null}
          />
        </form>
      </section>
      {card === true ? (
        <div className={styles.card}>
          <div className={styles.modal}>
            <p>Deseja adicionar mais uma tarefa?</p>
            <div>
              <Button title="Sim" onClick={handleClickCard} />
              <NavLink to="/tarefas-pendentes">
                <Button title="Não" />
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </MainContainer>
  );
};

export default NewTask;
