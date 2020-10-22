import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Update from './pages/Update';
import Filter from './pages/Filter';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/update' component={Update} />
          <Route path='/filter' component={Filter} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
