import React, { Component } from 'react';
import './Login.css';
import {Link, withRouter} from 'react-router-dom';

class Cadastrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha:'',
            tipo: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeMatricula = this.handleChangeMatricula.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
      }

    handleChangeNome(event) {
        this.setState({nome: event.target.value});
      }

    handleChangeMatricula(event){
        this.setState({matricula: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({senha: event.target.value});
      }

    handleSelectChange(event){
        this.setState({tipo: event.target.value})
    }

  render() {
    let entrar = this.props.entrar;
    return (
      <div className="Login-container">        
        <div className="Login-card">
            <div className="Login-input">
                <label>Usuario:</label>
                <input className="input" type='text' value={this.state.nome} name='nome' onChange={this.handleChangeNome}/>
                <label>Email:</label>
                <input className="input" type='email' value={this.state.email} name='email' onChange={this.handleChange}/>
                <label>Senha:</label>
                <input className="input" type='password' value={this.state.senha} name='senha' onChange={this.handleChangePassword}/>
                <label>Confirmar Senha:</label>
                <input className="input" type='password' value={this.state.senha} name='senha' onChange={this.handleChangePassword}/>
                <label>Tipo de usuário:</label>
                <select value={this.state.tipo} onChange={this.handleSelectChange}>
                    <option value={0}>Aluno</option>
                    <option value={1}>Professor</option>
                </select>
            </div>
            <div className="Login-btn">
                <button disabled={!this.state.nome && !this.state.senha && !this.state.email} className="Login-btn-entrar" onClick={() => entrar(7, this.state.nome)}>Entrar</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Cadastrar;
