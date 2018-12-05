import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import './Quests.css';
import Sound from 'react-sound';
import sad from '../assets/sad-sor.mp3';
import ticket from '../assets/ticket.png'


class Quests extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            renderModal: 1,
            renderPremio: false,
        }
    }

    openModal(value) {
        this.setState({
            visible: true,
            renderModal: value
        });
    }

    closeModal() {
        this.setState({
            visible: false,
            renderPremio: false
        });
    }

    aceitar(value){
        let handlePontos = this.props.pontos
        handlePontos(value, 1)
        this.setState({renderPremio: true})
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
                    {this.state.renderModal == 1 ?
                        <Modal
                            visible={this.state.visible}
                            width="830"
                            height="400"
                            effect="fadeInUp"
                            onClickAway={() => this.closeModal()}
                        >
                            <div className="Quests-modal">
                                <h1>Em busca do SS lendario</h1>
                                <p className="Modal-p">Está chegando a hora do embate final, os guerreiros de Gamaron já lutam a incansaveis anos atrás de aumentar sua reputação para
                                   com as organizações do exterior, a lenda diz que apenas o guerreiro com maior IRA pode prevalecer, e nada aumenta mais a ira de um guerreiro que o lendario SS.
                               Um item quase nunca visto, mas que todos almejam.</p>
                                <h3 className="Modal-objetivos">Objetivos</h3>
                                <li className="Modal-objetivos-lista">75% de presença em batalhas</li>
                                <li className="Modal-objetivos-lista">Apresentar trabalho final</li>
                                <button className="Modal-btn" onClick={() => this.aceitar(300)}>Aceitar</button>
                                <a className="Modal-btn-2" href="javascript:void(0);" onClick={() => this.closeModal()}>Fechar</a>
                                {this.state.renderPremio ? 
                                    <div><p className="Modal-p">Parabéns você ganhou um prêmio</p>
                                    <img className="Perfil-img-item" src={ticket} width={100} height={100} />
                                    </div>
                                    : null
                                }
                                
                            </div>
                        </Modal> :
                        <Modal
                            visible={this.state.visible}
                            width="830"
                            height="400"
                            effect="fadeInUp"
                            onClickAway={() => this.closeModal()}
                        >
                            <div className="Quests-modal">
                                <h1>Os Migadores: migué infinito</h1>
                                <p className="Modal-p">Após diversos dias de festas e truco pelas gramas de Gamaron, o rei precisa juntar um grupo experiente na arte de deixar pra depois
                                                       as suas tarefas, todos estão motivados com essa chance, será que você pode fazer parte da inicativa Migadores? </p>
                                <h3 className="Modal-objetivos">Objetivos</h3>
                                <li className="Modal-objetivos-lista">Barganhar 0,5 a 1,0 ponto com o professor</li>
                                <button className="Modal-btn" onClick={() => this.aceitar(310)}>Aceitar</button>
                                <a className="Modal-btn-2" href="javascript:void(0);" onClick={() => this.closeModal()}>Fechar</a>
                                {this.state.renderPremio ? 
                                    <div><p className="Modal-p">Parabéns você ganhou um prêmio</p>
                                    <img className="Perfil-img-item" src={ticket} width={100} height={100} />
                                    </div>
                                    : null
                                }
                            </div>
                        </Modal>
                    }

                    <div class="d-flex flex-row">
                        <div class="p-2 item first" onClick={() => this.openModal(1)}>
                            <h3>EM BUSCA DO SS LENDARIO</h3>
                        </div>
                        <div class="p-2 item second" onClick={() => this.openModal(2)}>
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
