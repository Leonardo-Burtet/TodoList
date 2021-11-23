import React from 'react';
import './Root.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreensTaskHome from './task/ScreensTaskHome';
import ScreensTaskNew from './task/ScreensTaskNew';
import ScreensTaskList from './task/ScreensTaskList';

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <main className="container">
          <h1>Lista de Tarefas</h1>
          <Routes>
            <Route path="/*" element={<ScreensTaskHome />} />
            <Route path="novatarefa" element={<ScreensTaskNew />} />
            <Route path="lista" element={<ScreensTaskList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default Root;
