import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListagemAlunos from './pages/ListagemAlunos';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Exemplos from './pages/Material/Exemplos';
import NavBar from './components/NavBar';
import Cadastro2 from './pages/Cadastro2';

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <ListagemAlunos/>},
    {path: "/aula2", element: <Exemplos/>},
    { path: "/cadastro", element: <Cadastro2 />}
  ]);
  return routes;
}

ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
    <NavBar />
    <Routes />
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
