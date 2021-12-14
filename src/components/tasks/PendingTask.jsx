/* eslint-disable no-restricted-globals */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { TASK_DELETE, TASK_GET, TASK_POST, TASK_PUT } from '../../services/api';
import Button from '../UI/Button';
import Card from '../UI/Card';
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
    TASK_GET('pending-tasks', setTaskList);
  }, []);

  function handleClickCard() {
    setCard(!card);
  }

  function handleClickFinish({ currentTarget }) {
    const taskFinish = taskList.tasks.filter(
      (item) => item.id === currentTarget.value
    );

    TASK_POST('completed-task', {
      text: taskFinish[0].text,
      prioridade: taskFinish[0].prioridade,
      date: dateTask,
    });

    TASK_DELETE(currentTarget.value);

    TASK_GET('pending-tasks', setTaskList);
  }

  function handleClickRemove({ currentTarget }) {
    const del = confirm('Você tem certeza que deseja excluir a tarefa ?');
    if (del === true) {
      TASK_DELETE(currentTarget.value);

      TASK_GET('pending-tasks', setTaskList);
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
    TASK_PUT(target, {
      text: changeTask,
      prioridade: changePriority,
    });

    TASK_GET('pending-tasks', setTaskList);

    handleClickCard();
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
          <Card>
            <p>Altere a tarefa</p>
            <div className="form">
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
          </Card>
        ) : null}
      </section>
    </MainContainer>
  );
};

export default PendingTask;
