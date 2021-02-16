import React from 'react'

import Maca from '../../assets/maca.svg'

import { PerguntasFrequentesContainer } from './styles'

const PerguntasFrequentes = () => {
    return (
        <PerguntasFrequentesContainer>
            <h1>Perguntas Frequentes</h1>
            <div className="grid">
                <ul>
                    <li>
                        <div className="grid-pergunta">
                            <img src={Maca} alt="Maça" />
                            <div>
                                <h3>Quanto tempo tenho para Meditar?</h3>
                                <p>No início da prática, 5 minutos é o suficiente. À medida que você vai se aperfeiçoando, poderá gradualmente aumentar o tempo e seguir conforme sua disponibilidade.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="grid-pergunta">
                            <img src={Maca} alt="Maça" />
                            <div>
                                <h3>O que ganharei se começar a Meditar imediatamente?</h3>
                                <p>Há muitos benefícios a serem obtidos com a meditação, incluindo menos estresse, distanciamento de sentimentos aparentemente esmagadores, eliminação de maus hábitos e conflitos, e promoção de relacionamentos harmoniosos.</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className="grid-pergunta">
                            <img src={Maca} alt="Maça" />
                            <div>
                                <h3>Todo mundo pode meditar, até idosos e crianças?</h3>
                                <p>Sim, todos podem meditar quando aprenderem o básico. E as crianças podem realmente ser os melhores meditadores porque elas têm menos comparação com os adultos. Idosos tendem a ser menos distraídos e possuem maior sabedoria com base na experiência.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="grid-pergunta">
                            <img src={Maca} alt="Maça" />
                            <div>
                                <h3>A partir do momento que eu compro, em quanto tempo eu recebo o conteúdo?</h3>
                                <p>Você vai receber o link para baixar o livro digital (ebook) e mais todos os acessos ao bônus, imediatamente após a confirmação de sua compra.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <button>
                <a href="https://app.monetizze.com.br/checkout/PFH160295" rel="noreferrer" ><span>Clique Aqui</span> para adquirir agora o E-book Sua Jornada na Meditação + Bônus</a>
            </button>
        </PerguntasFrequentesContainer>
    )
}

export default PerguntasFrequentes;
