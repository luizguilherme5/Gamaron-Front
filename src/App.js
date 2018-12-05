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
import History from './components/History';
import headerimg from './assets/header-img.png';
import unblogo from './assets/unbpixel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 5,
      isLogged: false,
      nome: '',
      level: 0,
      moedas: 0,
      pontos: 0,
    };

    this.handleClick = this.handleClick.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleCadastrar = this.handleCadastrar.bind(this)
    this.handlePontos = this.handlePontos.bind(this)
  }

  handleClick(value) {
    this.setState({ scene: value })
  }

  handleLogin(value,name){
    this.setState({ isLogged: true, scene: value, nome: name })
  }

  handleCadastrar(){
    this.setState({isLogged: false, scene: 6})
  }

  sair(){
    this.setState({ isLogged: false, scene: 5, moedas: 0, level: 0, nome: ''})
  }

  handlePontos(value, tkt){
    this.setState({pontos: this.state.pontos + value, moedas: this.state.moedas + tkt})
  }

  afterLogin() {
    return (
      <div>
        <div className="Menu-container">
          <button className={this.state.scene == 3 ? 'Menu-selected' : 'Menu-item'} onClick={() => this.handleClick(3)}>Loja</button>
          <button className={this.state.scene == 1 ? 'Menu-selected' : 'Menu-item'} onClick={() => this.handleClick(1)}>Quests</button>
          <button className={this.state.scene == 2 ? 'Menu-selected' : 'Menu-item'} onClick={() => this.handleClick(2)}>Ranking</button>
        </div>
        {this.state.scene == 1 ? <Quests pontos={this.handlePontos}/> : null}
        {this.state.scene == 2 ? <Ranking nome={this.state.nome} pontos={this.state.pontos}/> : null}
        {this.state.scene == 3 ? <Loja /> : null}
        {this.state.scene == 4 ? <Perfil nome={this.state.nome} level={this.state.level} moedas={this.state.moedas} scene={this.handleClick}/> : null}
        {this.state.scene == 7 ? <History /> : null}
      </div>
    )
  }

  beforeLogin(){
    return(
      <div>
        {this.state.scene == 5 ? <Login logged={this.handleClick} islogged={this.handleLogin} cadastrar={this.handleCadastrar}/> : null}
        {this.state.scene == 6 ? <Cadastrar entrar={this.handleLogin}/> : null}
      </div>
    )
  }

  render() {
    const { nome, moedas, level } = this.state
    return (
      <Router>
        <div className="App">
          {this.state.scene == 7 ? null : <div>
            <div className='Header-container'>
              <div className='Header-left'>
                <img className='Header-img' src={nome ? headerimg : null} width="100" height="100" />
                <div>
                  {nome ? <div><p className='Header-nome'>{nome}</p>
                  <p className='Header-information'>Level: {level}</p>
                  <p className='Header-information'>Moedas: {moedas}</p>
                  <button disabled={!nome} className='Header-btn-perfil' onClick={() => this.handleClick(4)}>Ver perfil</button></div> : null}
                  
                </div>
              </div>
              <div>
                <img className='Header-img-logo' src={unblogo} width="100" height="100" onClick={() => this.handleClick(7)}/>
              </div>
              <div className='Header-right'>
                <button className='Header-btn-sair' onClick={() => this.sair()}>sair</button>
              </div>
            </div>
            <div className="Header-sub">
              <h3 className="Header-title">Gamaron</h3>
            </div>
          </div>}
          {this.state.isLogged == true ? this.afterLogin() : this.beforeLogin()}
          <Route path="/login" component={Login} />
          <Route path='/cadastrar' component={Cadastrar} />
        </div>
      </Router>
    );
  }
}

export default App;
