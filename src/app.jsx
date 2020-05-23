import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/';
import Drawer from './components/drawer';
import SearchScreen from './components/search-screen';
import ResultsScreen from './components/results-screen';
import AppBar from './components/app-bar';
import LoginForm from './components/login-form';

function App() {
  const [drawerIsOpen, setOpenDrawer] = useState(false);
  const [loginFormIsOpen, setLoginFormOpen] = useState(false);
  return (
    <>
      <Router>
        <LoginForm formIsOpen={loginFormIsOpen} setFormOpen={setLoginFormOpen} />
        <AppBar drawerIsOpen={drawerIsOpen} setDrawerOpen={setOpenDrawer} setLoginFormOpen={setLoginFormOpen} />
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerOpen={setOpenDrawer} />
        <Route exact path="/" component={SearchScreen} />
        <Route path="/results/:searchId/:pag?" component={ResultsScreen} />
      </Router>
    </>
  );
}

export default App;
