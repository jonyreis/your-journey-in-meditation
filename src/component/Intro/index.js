import React from 'react';

import MulherMeditando from '../../assets/mulher-meditando.jpg';
import Buda1 from '../../assets/buda-1.svg';

import { IntroContainer } from './styles';

const Intro = () => {
    return (
        <IntroContainer>
            <div className="container">
                <h1>Inicie a sua jornada na meditação e tenha uma vida de <span>Prosperidade, Abundância e Paz</span>.</h1>            
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
                                <span>insônia;</span>
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
                <button type="button"><span>Clique aqui</span> e adquire seu Livro Online Sua Jornada na Meditação</button>
            </div>
        </IntroContainer>
    )
}

export default Intro;
