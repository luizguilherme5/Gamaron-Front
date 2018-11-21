import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import headerimg from '../assets/header-img.png';
import unblogo from '../assets/unb_logo.png';

class Header extends Component {

    render() {
        return (
            <div>
                <div className='Header-container'>
                    <div className='Header-left'>
                        <img className='Header-img' src={headerimg} width="100" height="100" />
                        <div>
                            <p className='Header-nome'>nome</p>
                            <p className='Header-information'>Level:</p>
                            <p className='Header-information'>Moedas:</p>
                            <button className='Header-btn-perfil'>Ver perfil</button>
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
        );
    }
}

export default Header;
