import React from 'react';

import BrindeIndividual from '../../assets/CAPA_BRINDE_3D_INDIVIDUAL.png';

import { BrindeContainer } from './styles';

const Brinde = () => {
    return (
        <BrindeContainer>
            <div className="background-h1">
                <h1>E além do Ebook Sua Jornada na Meditação, preparamos um BÔNUS exclusivos para você:</h1>
            </div>
            <div className="descricao-foto">
                <div>
                    <h2>Ebook Meditação mindful</h2>
                    <p>Neste ebook você vai aprender está prática ocidental com raízes em milhares de anos de budismo, onde é chamada de "Meditação do Discernimento". Como esse nome sugere, ele visa desenvolver nossas habilidades mentais e tornar-se mais consciente.</p>
                </div>
                <img src={BrindeIndividual} alt="Capa do Brinde" />
            </div>
        </BrindeContainer>
    )
}

export default Brinde;
