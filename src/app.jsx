import React, { Fragment } from 'react';
import Drawer from './components/drawer';
import { BrowserRouter as Router, Route } from "react-router-dom/";
import SearchScreen from './components/search-screen';
import ResultsScreen from './components/results-screen';
import './app.css';

function App() {
  return (
    <Fragment>
      <Drawer />
      <Router>
        <Route path="/" component={SearchScreen} />
        <Route path="/results" component={ResultsScreen} />
      </Router>
    </Fragment>
  );
}

export default App;
