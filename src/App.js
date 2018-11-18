import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route path="/login" component={Login} />
            <Route path='/cadastrar' component={Cadastrar} />
        </div>
      </Router>
    );
  }
}

export default App;
