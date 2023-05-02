import React from 'react';
import Home from './pages/home/home';
import { useRoutes } from 'react-router-dom';
import List from './pages/list/list';
import { Login } from './pages/login/login';
import { Single } from './pages/single/Single';
import { New } from './pages/new/new';
import { ListLayout } from './pages/list/listlayout';

function App() {
  const mainRoutes = {
    path: '/',
    element: <Home />
  };
  const listRoutes = {
    path: '/list',
    element: <ListLayout />,
    children: [
      {path:'user',element:<List/>},
      { path: ':id', element: <Single /> },
      { path: 'new', element: <New /> },
    ]
  };
  const loginRoutes = {
    path: '/login',
    element: <Login />,
  };


  const routing = useRoutes([mainRoutes, listRoutes, loginRoutes]);
  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
