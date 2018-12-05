import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Ranking.css';
import Sound from 'react-sound';
import led from '../assets/led.mp3';
import throne from '../assets/throne.jpg';

class Ranking extends Component {
    render() {
        return (
            <div className="Ranking-container">
                <Sound
                    url={led}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={100 /* in milliseconds */}
                    volume={50}
                    loop={true}
                />
                <div className="Ranking-img">
                    <h2 className="Ranking-titulo">A briga pelo trono de Gamaron continua</h2>
                    <img src={throne} width={300} height={420}/>
                </div>
                <div className="Ranking-list">
                    <div className="Ranking-single-card first">
                        <div className="fl">
                            <p className="position Ranking-txt">1º</p>
                            <p className="Ranking-txt">Karine Bruno</p>
                        </div>
                        <p className="Ranking-txt">600 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">2º</p>
                            <p>Karine Bruno</p>
                        </div>
                        <p>600 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">3º</p>
                            <p>Karine Bruno</p>
                        </div>
                        <p>600 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">4º</p>
                            <p>Karine Bruno</p>
                        </div>
                        <p>600 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">5º</p>
                            <p>Karine Bruno</p>
                        </div>
                        <p>600 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">6º</p>
                            <p>Karine Bruno</p>
                        </div>
                        <p>600 pts</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ranking;
