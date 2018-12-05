import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Cadastrar from './Cadastrar';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            senha:'',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

      }

    handleChange(event) {
        this.setState({nome: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({senha: event.target.value});
    }
    
    render() {
        let logged = this.props.logged;
        let islogged = this.props.islogged;
        let cadastrar = this.props.cadastrar;
        return (
            <div className="Login-container">
                <div className="Login-card">
                    <div className="Login-input">
                        <label>Email/Usuario:</label>
                        <input className="input" type='text' value={this.state.nome} name='email' onChange={this.handleChange} />
                        <label>Senha:</label>
                        <input className="input" type='password' value={this.state.senha} name='senha' onChange={this.handleChangePassword} />
                    </div>
                    <div className="Login-btn">
                        <button className="Login-btn-cadastrar" onClick={() => cadastrar()}>Cadastrar</button>
                        <button disabled={!this.state.nome && !this.state.senha} className="Login-btn-entrar" onClick={() => islogged(1, this.state.nome)}>Entrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
