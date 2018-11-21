import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sound from 'react-sound';
import './App.css';
import './components/Menu.css';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';
import Header from './components/Header';
import Quests from './components/Quests';
import Ranking from './components/Ranking';
import Loja from './components/Loja';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 1,
      isLogged: true
    };
  }

  handleClick(value) {
    this.setState({ scene: value })
  }

  afterLogin() {
    return (
      <div>
        <div className="Menu-container">
          <button className={this.state.scene == 3 ? 'Menu-selected' : 'Menu-item'} onClick={() => this.handleClick(3)}>Loja</button>
          <button className={this.state.scene == 1 ? 'Menu-selected' : 'Menu-item'} onClick={() => this.handleClick(1)}>Quests</button>
          <button className={this.state.scene == 2 ? 'Menu-selected' : 'Menu-item'} onClick={() => this.handleClick(2)}>Ranking</button>
        </div>
        {this.state.scene == 1 ? <Quests /> : null}
        {this.state.scene == 2 ? <Ranking /> : null}
        {this.state.scene == 3 ? <Loja /> : null}
      </div>
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {this.state.isLogged == true ? this.afterLogin() : null}
          <Route path="/login" component={Login} />
          <Route path='/cadastrar' component={Cadastrar} />
        </div>
      </Router>
    );
  }
}

export default App;
