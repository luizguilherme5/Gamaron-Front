import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import './Quests.css';
import Sound from 'react-sound';
import sad from '../assets/sad-sor.mp3';

class Quests extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

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
                    <Modal
                        visible={this.state.visible}
                        width="830"
                        height="400"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >
                        <div className="Quests-modal">
                            <h1>Titulo da Quest</h1>
                            <p>Textp que explica a quest e bla bla bla e tal e coisa e deyli e zaga e pey</p>
                            <button className="Modal-btn">Aceitar</button>
                            <a className="Modal-btn-2" href="javascript:void(0);" onClick={() => this.closeModal()}>Fechar</a>
                        </div>
                    </Modal>
                    <div class="d-flex flex-row">
                        <div class="p-2 item first" onClick={() => this.openModal()}>
                            <h3>EM BUSCA DO SS LENDARIO</h3>
                        </div>
                        <div class="p-2 item second" onClick={() => this.openModal()}>
                            <h3>OS MIGADORES: MIGUÉ INFINITO</h3>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2 item third" onClick={() => this.openModal()}>
                            <h3>EXTERMINADOR DE PONTEIROS</h3>
                        </div>
                        <div class="p-2 item forth" onClick={() => this.openModal()}>
                            <h3>O SENHOR DOS ARRAYS</h3>
                        </div>
                    </div>
                    <div class="d-flex flex-row" onClick={() => this.openModal()}>
                        <div class="p-2 item-small fifth">
                            <h3>CICLO BASICO CONTRA ATACA</h3>
                        </div>
                        <div class="p-2 item-small sixth" onClick={() => this.openModal()}>
                            <h3>JUBILANDIA</h3>
                        </div>
                        <div class="p-2 item-small seventh" onClick={() => this.openModal()}>
                            <h3>V DE VALIDAÇÃO E VERIFICAÇÃO</h3>
                        </div>
                        <div class="p-2 item-small last" onClick={() => this.openModal()}>
                            <h3>A SAGA DOS 12 CRÉDITOS</h3>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Quests;
