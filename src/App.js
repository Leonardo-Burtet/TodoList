import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import ListTask from './Components/ListTask/ListTask';
import NewTask from './Components/NewTask/NewTask';
import './miragejs/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="container">
          <h1>Lista de Tarefas</h1>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="novatarefa" element={<NewTask />} />
            <Route path="lista" element={<ListTask />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
