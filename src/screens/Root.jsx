import React from 'react';
import './Root.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreensHome from './task/ScreensHome';
import ScreensPendingTask from './task/ScreensPendingTask';
import ScreensNewTask from './task/ScreensNewTask';
import ScreensCompletedTask from './task/ScreensCompletedTask';

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <main className="container">
          <h1>Lista de Tarefas</h1>
          <Routes>
            <Route path="/*" element={<ScreensHome />} />
            <Route path="tarefas-pendentes" element={<ScreensPendingTask />} />
            <Route path="adicionar-tarefa" element={<ScreensNewTask />} />
            <Route
              path="tarefas-concluidas"
              element={<ScreensCompletedTask />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default Root;
