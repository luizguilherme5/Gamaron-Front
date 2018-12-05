import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Loja.css';
import Sound from 'react-sound';
import money from '../assets/money.mp3';

class Loja extends Component {
    render() {
        return (
            <div className="Loja-container">
                <Sound
                    url={money}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={1400 /* in milliseconds */}
                    volume={60}
                    loop={true}
                />
                <h2>Loja de Gamaron</h2>
                <p>Em manutenção</p>
                <div className="Loja-mid-div">
                    <div className="Loja-cash">
                        <p>Tickets: 2</p>
                        <p>Moedas: 2</p>
                    </div>
                    <div className="Loja-itens">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                        <p>Item 4</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loja;
