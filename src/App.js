import React from 'react';
import './App.css';
import Home from './Home'
import Services from './Services'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/services'>
            <Services/>
          </Route>
          <Route path='/menu'>
            <Menu/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
