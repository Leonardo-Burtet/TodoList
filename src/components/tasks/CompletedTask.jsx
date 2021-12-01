import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import MainContainer from '../UI/MainContainer';
import Nav from '../UI/Nav';
import WrapperTask from '../UI/WrapperTask';

const CompletedTask = () => {
  const [taskList, setTaskList] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/completed-task')
      .then((response) => response.json())
      .then((json) => setTaskList(json));
  }, []);

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
          title="Tarefas concluidas"
          taskList={taskList}
          local="completeds"
        />
      </section>
    </MainContainer>
  );
};

export default CompletedTask;
