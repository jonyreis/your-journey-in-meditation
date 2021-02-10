import React from 'react'

import G1 from '../../assets/img_g1.png';

import { MidiaContainer } from './styles'

const Midia = () => {
  return (
    <MidiaContainer>
      <div className="midia">
        <h2>O que a mídia está falando sobre Meditação?</h2>
        <div className="noticia">
          <a href="https://g1.globo.com/sp/vale-do-paraiba-regiao/especial-publicitario/farma-conde/farma-conde-saude/noticia/previna-a-ansiedade-e-o-estresse-com-a-meditacao.ghtml"><img src={G1} alt="Portal G1" /></a>
          <h3>Previna a ansiedade e o estresse com a meditação</h3>
          <h4>Método simples e acessível proporciona inúmeros benefícios à saúde; saiba como começar a praticar</h4>
          <div>
            <p>Uma prática milenar que tem conquistado cada vez mais adeptos, a meditação proporciona inúmeros benefícios à saúde, pois provoca mudanças no cérebro que aumentam a capacidade de coordenação, concentração e emoção.</p>
            <p>A meditação pode ser definida como uma técnica que engloba relaxamento corporal, por meio da diminuição da respiração, proporcionando ao praticante uma sensação de paz, calma, tranquilidade física e mental.</p>
            <p>A Organização Mundial da Saúde (OMS) reconhece a meditação como um método para a prevenção de doenças. Além disso, essa prática auxilia na melhora da criatividade, diminuição da ansiedade e do estresse e, estabelece uma conexão espiritual.</p>
          </div>
        </div>
      </div>
      <div className="meditacao-numeros-background">
          <div className="meditacao-numeros-container">
              <div>
                  <h2>+74 milhões</h2>
                  <p>Mais de 74 milhões de pessoas praticam Meditação no mundo.</p>
              </div>
              <div>
                  <h2>5 minutos</h2>
                  <p>Pesquisas comprovadas que apenas 5 minutos por dia é o suficiente para reduzir o estresse e controlar a ansiedade</p>
              </div>
          </div>
      </div>
    </MidiaContainer>
  )
}

export default Midia
