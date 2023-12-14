import 'focus-visible';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/home';
import './app.scss';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          Component={Home}
        />
      </Routes>
    </HashRouter>
  );
};
