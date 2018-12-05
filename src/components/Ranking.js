import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Ranking.css';
import Sound from 'react-sound';
import led from '../assets/led.mp3';
import throne from '../assets/throne.jpg';

class Ranking extends Component {
    render() {
        const { nome, pontos } = this.props
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
                        <p className="Ranking-txt">700 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">2º</p>
                            <p>John Connor</p>
                        </div>
                        <p>660 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">3º</p>
                            <p>{nome}</p>
                        </div>
                        <p>{pontos} pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">4º</p>
                            <p>Ingryd</p>
                        </div>
                        <p>300 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">5º</p>
                            <p>Bruno</p>
                        </div>
                        <p>280 pts</p>
                    </div>
                    <div className="Ranking-single-card">
                        <div className="fl">
                            <p className="position">6º</p>
                            <p>Ingryd Bruno</p>
                        </div>
                        <p>200 pts</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ranking;
