import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/';
import Drawer from './components/drawer';
import SearchScreen from './components/search-screen';
import ResultsScreen from './components/results-screen';


function App() {
  return (
    <>
      <Drawer />
      <Router>
        <Route path="/" component={SearchScreen} />
        <Route path="/results" component={ResultsScreen} />
      </Router>
    </>
  );
}

export default App;
