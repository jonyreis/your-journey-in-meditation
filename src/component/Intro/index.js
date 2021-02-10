/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

// import Audio from '../../assets/audio.mp3';

import MulherMeditando from '../../assets/mulher-meditando.jpg';
import Buda1 from '../../assets/buda-1.svg';

import { IntroContainer } from './styles';

const Intro = () => {
    return (
        <IntroContainer>
            <div className="container">
            {/* <audio id="player" preload="auto" loop="loop" controls="controls" type="">
                <source src={Audio} type="audio/mp3" />
                </audio> */}
                {/* <audio id="player" autoplay loop controls>
                    <source src={Audio} type="audio/mp3" />
                </audio> */}
                <h1>Inicie a sua jornada na meditação com apenas 5 minutos por dia e tenha uma vida de <span>Prosperidade, Abundância e Paz</span>.</h1>
                <div className="foto-beneficios">
                    <img src={MulherMeditando} alt="Mulher Meditando" />
                    <div className="beneficios">
                        <h2>6 Benefícios que adquirimos com a prática da meditação:</h2>
                        <ul>
                            <li>
                                <img src={Buda1} alt="imagem de buda"/>
                                <span>redução de estresses;</span>
                            </li>
                            <li>
                                <img src={Buda1} alt="imagem de buda"/>
                                <span>melhora o sono;</span>
                            </li>
                            <li>
                                <img src={Buda1} alt="imagem de buda"/>
                                <span>controle da ansiedade;</span>
                            </li>
                            <li>
                                <img src={Buda1} alt="imagem de buda"/>
                                <span>diminuição de sintomas depressivos;</span>
                            </li>
                            <li>
                                <img src={Buda1} alt="imagem de buda"/>
                                <span>potencialização do autoconhecimento e da autoestima;</span>
                            </li>
                            <li>
                                <img src={Buda1} alt="imagem de buda"/>
                                <span>redução da perda da memória;</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3>Venha aprender a Meditar de forma simples e fácil!</h3>
                <button type="button" className="button-large"><a href="https://app.monetizze.com.br/checkout/PFH160295"><span>Clique aqui</span> e adquira o seu E-book Sua Jornada na Meditação</a></button>
                <button type="button" className="button-small"><a href="https://app.monetizze.com.br/checkout/PFH160295"><span>Clique aqui</span> e adquira o seu E-book</a></button>
            </div>
        </IntroContainer>
    )
}

export default Intro;
