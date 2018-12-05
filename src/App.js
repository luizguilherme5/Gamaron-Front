import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './components/Menu.css';
import './components/Header.css';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';
import Quests from './components/Quests';
import Ranking from './components/Ranking';
import Loja from './components/Loja';
import Perfil from './components/Perfil';
import headerimg from './assets/header-img.png';
import unblogo from './assets/unb_logo.png';

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
        {this.state.scene == 4 ? <Perfil /> : null}
      </div>
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <div className='Header-container'>
              <div className='Header-left'>
                <img className='Header-img' src={headerimg} width="100" height="100" />
                <div>
                  <p className='Header-nome'>nome</p>
                  <p className='Header-information'>Level:</p>
                  <p className='Header-information'>Moedas:</p>
                  <button className='Header-btn-perfil' onClick={() => this.handleClick(4)}>Ver perfil</button>
                </div>
              </div>
              <div className='Header-right'>
                <button className='Header-btn-sair'>sair</button>
              </div>
            </div>
            <div className="Header-sub">
              <h3 className="Header-title">Gamaron</h3>
            </div>
          </div>
          {this.state.isLogged == true ? this.afterLogin() : null}
          <Route path="/login" component={Login} />
          <Route path='/cadastrar' component={Cadastrar} />
        </div>
      </Router>
    );
  }
}

export default App;
