import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Loja.css';
import Sound from 'react-sound';
import money from '../assets/money.mp3';
import sad from '../assets/sad-sor.mp3';

class Loja extends Component {
    render() {
        return (
            <div className="Loja-container">
                <Sound
                    url={money}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={1400 /* in milliseconds */}
                    volume={100}
                    loop={true}
                />
                <p>Loja</p>
            </div>
        );
    }
}

export default Loja;
