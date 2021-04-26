import React from 'react'

import Buda1 from '../../assets/buda-1.svg';

import { EquipeContainer } from './styles'

const Equipe = () => {
  return (
    <EquipeContainer>
      <div className="container">
        <div>
          <h2>Nós da Equipe Sua Jornada na Meditação</h2>
          <p>E foi pensando nas pessoas que sofrem de estresse, assiedade e depressão
            e todos os problemas acometidos pela mente que nós da equipe SUA JORNADA NA
          MEDITAÇÃO, desenvolvemos um programa <b>100% online</b> com tudo que você precisa para começar a
          praticar uma meditação guiada com o passo a passo para obter uma vida de paz, amor, saúde
          física, mental e emocional com muito sucesso </p>
          <h3>(Equipe SUA JORNADA NA MEDITAÇÃO)</h3>
        </div>
        <div className="buda">
          <img src={Buda1} alt="Buda" />
        </div>

        <h3 id="h3-order">(Equipe SUA JORNADA NA MEDITAÇÃO)</h3>
      </div>
    </EquipeContainer>
  )
}

export default Equipe
