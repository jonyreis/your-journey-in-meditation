import React from 'react';

import Mind from '../../assets/mind.png';

import { InfosContainer } from './styles'

const Infos1 = () => {
    return (
        <InfosContainer>
            <div className="nosso-cerebro">
                <p>Seu cérebro compreende apenas 2% a 3% do peso corporal. No entanto, ele usa 20% da energia do seu corpo. Ele está constantemente executando milhões de processos a cada segundo, a cada minuto e a cada hora do dia. Funciona enquanto você está acordado e dormindo. É a base de todas as experiências, sentimentos e comportamentos humanos, guia suas percepções, armazena suas memórias e dita seu nível de autoconsciência.</p>
                <img src={Mind} alt="Imagem da Mente" />
            </div>
            <h1>É o computador mais complexo, capaz e poderoso já criado.</h1>
            <p>No entanto, seu cérebro é bombardeado atualmente com sobrecarga de informações. A entrada está sendo recebida por seus 5 sentidos em uma taxa maior do que em qualquer outro momento da história humana. Conseqüentemente, seu cérebro está constantemente processando esse ataque sensorial massivo, enquanto executa simultaneamente os muitos processos que o mantêm vivo.</p>
        </InfosContainer>
    )
}

export default Infos1;
