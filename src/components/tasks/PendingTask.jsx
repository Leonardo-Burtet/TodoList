/* eslint-disable no-restricted-globals */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import Input from '../UI/Input';
import MainContainer from '../UI/MainContainer';
import Nav from '../UI/Nav';
import Radio from '../UI/Radio';
import WrapperTask from '../UI/WrapperTask/WrapperTask';

const PendingTask = () => {
  const [taskList, setTaskList] = React.useState(null);
  const [card, setCard] = React.useState(false);
  const [changePriority, setChangePriority] = React.useState('');
  const [changeTask, setChangeTask] = React.useState('');
  const [target, setTarget] = React.useState('');
  const date = new Date();
  const dateTask = `${
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  }/${date.getMonth()}/${date.getFullYear()}`;

  React.useEffect(() => {
    fetch('/api/pending-tasks')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

  function handleClickCard() {
    setCard(!card);
  }

  function handleClickFinish({ currentTarget }) {
    const taskFinish = taskList.tasks.filter(
      (item) => item.id === currentTarget.value
    );

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

  function handleClickEdit({ currentTarget }) {
    const taskEdit = taskList.tasks.filter(
      (item) => item.id === currentTarget.value
    );
    setTarget(currentTarget.value);
    setChangeTask(taskEdit[0].text);
    setChangePriority(taskEdit[0].prioridade);
    handleClickCard();
  }

  function handleClickChange() {
    fetch(`/api/pending-tasks/${target}`, {
      method: 'PUT',
      Head: ['Content-Type:application/json'],
      body: JSON.stringify({
        text: changeTask,
        prioridade: changePriority,
      }),
    });

    fetch('/api/pending-tasks')
      .then((response) => response.json())
      .then((json) => setTaskList(json))
      .then(handleClickCard());

    setChangeTask('');
    setChangePriority('');
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
      <section>
        <WrapperTask
          title="Tarefas pendentes"
          taskList={taskList}
          local="tasks"
          handleClickFinish={handleClickFinish}
          handleClickRemove={handleClickRemove}
          handleClickEdit={handleClickEdit}
        />

        {card === true ? (
          <div className="card">
            <div className="modal">
              <p>Altere a tarefa</p>
              <div>
                <Input
                  id="Tarefa"
                  label="Tarefa"
                  value={changeTask}
                  setValue={setChangeTask}
                  placeholder={`${changeTask}`}
                  required
                />

                <Radio
                  options={['Alta', 'Media', 'Baixa']}
                  value={changePriority}
                  setValue={setChangePriority}
                />

                <Button title="Alterar" onClick={handleClickChange} />
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </MainContainer>
  );
};

export default PendingTask;
