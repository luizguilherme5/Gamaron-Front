import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './History.css';
import Sound from 'react-sound';
import history from '../assets/history';

class History extends Component {
    render() {
        return (
            <div className="History-container">
                <Sound
                    url={history}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={100 /* in milliseconds */}
                    volume={60}
                    loop={true}
                />
                <h2>Gamaron</h2>
                <p className="History-p"> Em um reino muito avançado tecnologicamente com um povo dotado de grande intelecto permeia a opressão devido a ameaça de uma guerra que dura desde o início dos tempos. A ameaça dessa terrível guerra ecoa tão forte dentro do reino de Gamaron, que foi capaz de abater até mesmo os mais nobres e hábeis guerreiros e ainda dividir o povo.</p>
                <p className="History-p"> Mas eis que surge uma fagulha de esperança, levantam-se guerreiros dispostos a trabalhar pelo reino, motivar e reerguer sua nação abatida, preparar o povo pra guerra e trazer felicidade e prosperidade para dentro dos portões de Gamaron.</p>
                <h4>O reino de Gamaron</h4>
                <div className="History-lista">
                    <li className="History-p">Aero-Espartanos, a lenda diz que os filhos dos deuses quando crianças brincavam no Olimpo de um disputa de aviões de papel, porém em uma dessa brincadeiras alguns aviões caíram no poço da vida e daí surgiu esse povo, apaixonado pelo céu e pelas alturas, para eles nem mesmo o céu é o limite.</li>
                    <li className="History-p">Energípcios, descendentes de um dos mais antigos povos da terra, que foram abençoados pelos deuses e são extremamente hábeis em produzir e armazenar energia, até mesmo o vento.</li>
                    <li className="History-p">Automanos, um povo que descende de grandes guerreiros e sábios orientais, são dotados de grande criatividade e são sedentos por guerra. Seu hobbie é a criação de carros e máquinas de guerra.</li>
                    <li className="History-p">Eletroianos, muitos dizem ser magia e feitiçaria, mas as habilidades de criação de dispositivos e máquinas que refletem o que há na natureza é inigualável. Dizem que uma pequena descarga de um dos raios lançado por Zeus um dia atingiu um rio, e todos que estavam no rio receberam esse dom. </li>
                    <li className="History-p">Softéricos, não se sabe muito sobre a origem desse povo, mas são dotados de grande inteligência, raciocínio lógico e espírito de liderança, que por sinal são muito invejados pelos outros povos e isso acaba os deixando mais reclusos a interagir com diferentes povos e vice-versa. </li>
                </div>
            </div>
        );
    }
}

export default History;
