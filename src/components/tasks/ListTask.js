import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';

const ListTask = () => {
  return (
    <div>
      <NavLink to="/home">
        <Button title="Inicio" />
      </NavLink>

      <NavLink to="/novatarefa">
        <Button title="Adicionar tarefa" />
      </NavLink>
      <ul>
        <li>data que começou</li>
        <li>data que terminou</li>
        <li>titulo</li>
        <li>descricao</li>
        <li></li>
      </ul>
    </div>
  );
};

export default ListTask;
