import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './Perfil.css';
import Sound from 'react-sound';
import perfil from '../assets/perfil.mp3';
import fotodeperfil from '../assets/fotoperfil.jpg';
import ultimaquest from '../assets/throne.jpg';
import ticket from '../assets/ticket.png'

class Perfil extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: this.props.nome,
            level: this.props.level,
            xp: 230,
            moedas: this.props.moedas,
            posicao: 3
        }
    }
    
    
    render() {
        const { nome, level, xp, moedas, posicao } = this.state
        let scene = this.props.scene
        return (
            <div className="Perfil-container">
                <Sound
                    url={perfil}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={1400 /* in milliseconds */}
                    volume={50}
                    loop={true}
                />
                
                <div className="Perfil-container-info">
                    <h2>{nome}</h2>
                    <img className="Perfil-img" src={fotodeperfil} width={245} height={400}/>
                    <p>Level: {level}</p>
                    <p>Xp: {xp}</p>
                    <p>Moedas: {moedas}</p>
                    <p>Posição no ranking atual: {posicao}</p>
                </div>
                <div className="Perfil-timeline">
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                            key="001"
                            dateText="11/11"
                            style={{color: '#e86971'}}
                        >
                            <h3>Se registrou</h3>
                        </TimelineItem>
                        <TimelineItem
                            key="002"
                            dateText="12/11"
                            style={{color: '#056971'}}
                        >
                            <h3>Completou a primeira quest</h3>
                        </TimelineItem>
                        <TimelineItem
                            key="003"
                            dateText="18/11"
                            style={{color: '#61b971'}}
                        >
                            <h3>Completou 10 quests</h3>
                        </TimelineItem>
                        <TimelineItem
                            key="004"
                            dateText="21/11"
                            style={{color: '#ee3971'}}
                        >
                            <h3>Chegou em 1 no ranking</h3>
                        </TimelineItem>
                        <TimelineItem
                            key="004"
                            dateText="05/12"
                            style={{color: '#2220aa'}}
                        >
                            <h3>Completou a quest "Em busca do SS lendario"</h3>
                        </TimelineItem>
                        <TimelineItem
                            key="004"
                            dateText="12/12"
                            style={{color: '#ea0901'}}
                        >
                            <h3>Final da Season</h3>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="Perfil-container-quest">
                    <h2 className="flashit">Temporada aberta!</h2>
                    <img className="Perfil-img-quest" src={ultimaquest} width={245} height={400} onClick={() => scene(2)}/>
                    {this.state.moedas > 0 ? <img className="Perfil-img-item" src={ticket} width={245} height={245} /> : null}
                </div>
            </div>
        );
    }
}

export default Perfil;
