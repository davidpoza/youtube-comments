import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/';
import Drawer from './components/drawer';
import SearchScreen from './components/search-screen';
import ResultsScreen from './components/results-screen';
import AppBar from './components/app-bar';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar drawerIsOpen={open} setDrawerOpen={setOpen} />
      <Drawer drawerIsOpen={open} setDrawerOpen={setOpen} />
      <Router>
        <Route exact path="/" component={SearchScreen} />
        <Route path="/results/:searchId" component={ResultsScreen} />
      </Router>
    </>
  );
}

export default App;
