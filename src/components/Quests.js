import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Quests.css';
import Sound from 'react-sound';
import sad from '../assets/sad-sor.mp3';

class Quests extends Component {
    render() {
        return (
            <div className="Quests-container">
                <Sound
                url={sad}
                playStatus={Sound.status.PLAYING}
                playFromPosition={100 /* in milliseconds */}
                volume={100}
                loop={true}
            />
                <div className="big-menu container-fluid">
                    <div class="d-flex flex-row">
                        <div class="p-2 item first">
                            <h3>EM BUSCA DO SS LENDARIO</h3>
                        </div>
                        <div class="p-2 item second">
                            <h3>OS MIGADORES: MIGUÉ INFINITO</h3>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2 item third">
                            <h3>EXTERMINADOR DE PONTEIROS</h3>
                        </div>
                        <div class="p-2 item forth">
                            <h3>O SENHOR DOS ARRAYS</h3>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2 item-small fifth">
                            <h3>CICLO BASICO CONTRA ATACA</h3>
                        </div>
                        <div class="p-2 item-small sixth">
                            <h3>JUBILANDIA</h3>
                        </div>
                        <div class="p-2 item-small seventh">
                            <h3>V DE VALIDAÇÃO E VERIFICAÇÃO</h3>
                        </div>
                        <div class="p-2 item-small last">
                            <h3>A SAGA DOS 12 CRÉDITOS</h3>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Quests;
