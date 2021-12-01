/* eslint-disable no-restricted-globals */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import MainContainer from '../UI/MainContainer';
import Nav from '../UI/Nav';
import WrapperTask from '../UI/WrapperTask';

const PendingTask = () => {
  const [taskList, setTaskList] = React.useState(null);
  const date = new Date();
  const dateTask = `${
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  }/${date.getMonth()}/${date.getFullYear()}`;

  React.useEffect(() => {
    fetch('/api/pending-tasks')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

  function handleClickFinish({ currentTarget }) {
    const taskFinish = taskList.tasks.filter(
      (item) => item.id === currentTarget.value
    );

    const completed = confirm(`Você finalizou a tarefa ?`);
    if (completed) {
      fetch('/api/completed-task', {
        method: 'POST',
        body: JSON.stringify({
          text: taskFinish[0].text,
          prioridade: taskFinish[0].prioridade,
          date: dateTask,
        }),
      });

      fetch(`/api/pending-tasks/${currentTarget.value}`, {
        method: 'DELETE',
      });

      fetch('/api/pending-tasks')
        .then((response) => response.json())
        .then((json) => setTaskList(json));
    }
  }

  function handleClickRemove({ currentTarget }) {
    const del = confirm('Você tem certeza que deseja excluir a tarefa ?');
    if (del === true) {
      fetch(`/api/pending-tasks/${currentTarget.value}`, {
        method: 'DELETE',
      });

      fetch('/api/pending-tasks')
        .then((response) => response.json())
        .then((json) => setTaskList(json));
    }
  }

  return (
    <MainContainer>
      <Nav>
        <NavLink to="/home">
          <Button title="Início" />
        </NavLink>
        <NavLink to="/tarefas-concluidas">
          <Button title="Tarefas concluidas" />
        </NavLink>{' '}
        <NavLink to="/adicionar-tarefa">
          <Button title="Adicionar tarefa" />
        </NavLink>
      </Nav>
      <section>
        <WrapperTask
          title="Tarefas pendentes"
          taskList={taskList}
          local="tasks"
          handleClickFinish={handleClickFinish}
          handleClickRemove={handleClickRemove}
        />{' '}
      </section>
    </MainContainer>
  );
};

export default PendingTask;
