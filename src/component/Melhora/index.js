import React from 'react'

import TrabalhoMelhor from '../../assets/trabalho-melhor.png';
import RelacionamentosMelhor from '../../assets/relacionamentos-melhor.png';
import VidaMelhor from '../../assets/vida-melhor.png';
import CriancaMeditando from '../../assets/crianca-meditando.png';


import { MelhoraContainer } from './styles'

const Melhora = () => {
    return (
        <MelhoraContainer>
            <h2>Os resultados dos estudos feitos sobre a prática diária de MEDITAÇÃO foram surpreendentes.Veja alguns deles:</h2>
            <div className="melhorias">
                <div>
                    <img src={TrabalhoMelhor} alt="Imagem de bons relacionamento no trabalho"/>
                    <h3>Melhora nosso dia a dia no trabalho</h3>
                    <p>Nos ajuda a equilibrar a vida com o trabalho, aumenta a clareza mental, as habilidades de tomada de decisão e nutre a confiança, a criatividade, a inovação e a intuição.</p>
                </div>
                <div>
                    <img src={RelacionamentosMelhor} alt="Imagem de amigas felizes"/>
                    <h3>Melhora os nossos relacionamentos</h3>
                    <p>Nós desenvolvemos uma personalidade agradável, sociável e conseguimos aceitar mais as pessoas como são.</p>
                </div>
                <div>
                    <img src={VidaMelhor} alt="Imagem de mulher feliz"/>
                    <h3>Melhora a nossa qualidade de vida</h3>
                    <p>Lhe traz uma sensação profunda de saúde e bem-estar e se, praticado frequentemente o corpo, a mente e o espírito se beneficiam imensamente.</p>
                </div>
                <div>
                    <img src={CriancaMeditando} alt="Imagem de criança meditando"/>
                    <h3>Melhora a concentração, auxiliando no processo de aprendizagem</h3>
                    <p>Crianças que são ensinadas desde cedo a meditar costumam ter mais facilidade com o processo de aprendizagem. Isso porque os exercícios de meditação ajudam a melhorar o foco e a concentração - assim, fica mais fácil estudar e absorver novos conhecimentos.</p>
                </div>
            </div>
        </MelhoraContainer>
    )
}

export default Melhora;
