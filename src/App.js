import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import EventComponent from './components/EventComponent';
import CreateLinkComponent from './components/CreateLinkComponent';

class App extends Component {

  componentDidMount() {
    document.title = "Awesome Event Planner";
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Awesome Event Planner</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li>
                  <Link to={'/createlink'} className="nav-link">Create</Link>
                </li>
                <li>
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                <li>
                  <Link to={'/edit/:id'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav>
            <Switch>
              <Route path='/edit/:id' component={EditComponent} />
              <Route exact path='/index' component={IndexComponent} />
              <Route exact path='/event/:id' component={EventComponent} />
              <Route exact path='/createlink' component={CreateLinkComponent} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;