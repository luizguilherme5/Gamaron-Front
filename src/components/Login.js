import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Cadastrar from './Cadastrar';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha:'',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

      }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({senha: event.target.value});
    }
    
    render() {
        return (
            <div className="Login-container">
                <div className="Login-header">
                    <h3 className="Login-title">Gamaron</h3>
                </div>

                <div className="Login-card">
                    <div className="Login-input">
                        <label>Email/Usuario:</label>
                        <input className="input" type='text' value={this.state.email} name='email' onChange={this.handleChange} />
                        <label>Senha:</label>
                        <input className="input" type='password' value={this.state.senha} name='senha' onChange={this.handleChangePassword} />
                    </div>
                    <div className="Login-btn">
                        <Link to="/cadastrar" component={Cadastrar} className="Login-btn-cadastrar">Cadastrar</Link>
                        <button className="Login-btn-entrar">Entrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
