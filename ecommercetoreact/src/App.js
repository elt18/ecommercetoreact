import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            exact path="/about"
            component={About}
          />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
