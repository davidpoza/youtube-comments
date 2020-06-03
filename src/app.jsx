import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/';
import Drawer from './components/drawer';
import SearchScreen from './components/search-screen';
import ResultsScreen from './components/results-screen';
import AppBar from './components/app-bar';
import LoginForm from './components/login-form';
import RegisterForm from './components/register-form';
import Store from './reducers/store';

function App() {
  const [state, dispatch] = useContext(Store);
  const [drawerIsOpen, setOpenDrawer] = useState(false);
  const [loginFormIsOpen, setLoginFormOpen] = useState(!state.user);
  const [registerFormIsOpen, setRegisterFormOpen] = useState(false);
  return (
    <>
      <Router>
        <LoginForm
          formIsOpen={loginFormIsOpen}
          setFormOpen={setLoginFormOpen}
          setRegisterFormOpen={setRegisterFormOpen}
        />
        <RegisterForm formIsOpen={registerFormIsOpen} setFormOpen={setRegisterFormOpen} />
        <AppBar drawerIsOpen={drawerIsOpen} setDrawerOpen={setOpenDrawer} setLoginFormOpen={setLoginFormOpen} />
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerOpen={setOpenDrawer} />
        <Route
          exact
          path="/"
          render={(props) => <SearchScreen {...props} setFormOpen={setLoginFormOpen} />}
        />
        <Route path="/results/:searchId/:pag?" component={ResultsScreen} />
      </Router>
    </>
  );
}

export default App;
