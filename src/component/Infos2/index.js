import React from 'react';

import MulherGirasol from '../../assets/mulher-girasol.png';

import { InfosContainer } from './styles';

const Infos2 = () => {
    return (
        <InfosContainer>
            <div className="background-h3">
                <h3>É por isso que você está constantemente estressado e tem problemas de saúde física e mental relacionados aos seus sentimentos de ser oprimido e fora de controle.</h3>
            </div>
            <div className="container">
                <img src={MulherGirasol} alt="Mulher no campo de girasol" />
                <p>Felizmente, sua vida não precisa ser assim. Imagine se você pudesse eliminar todas as informações e entradas desnecessárias e inúteis que seu cérebro recebe todos os dias. Como seriam suas experiências espirituais, mentais e físicas se você pudesse aproveitar a incrível capacidade de seu cérebro de se concentrar em apenas um pensamento, percepção ou realidade?</p>
            </div>
        </InfosContainer>
    )
}

export default Infos2;
