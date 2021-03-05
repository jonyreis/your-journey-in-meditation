import React from 'react'

import Combo3d from '../../assets/CAPA_3D_COMBO.png';
import Individual3d from '../../assets/CAPA_3D_INDIVIDUAL.png';
import Buda2 from '../../assets/buda-2.svg';


import { ApresentacaoEbookContainer } from './styles'

const ApresentacaoEbook = () => {
    return (
        <ApresentacaoEbookContainer>
            <div className="container-1">
                <div className="width-960">
                    <div className="conteudo-1">
                        <h2>Tenha hoje seu ebook <span>Sua Jonanda na Meditação</span> e comece a experimentar os <span>benefícios da meditação</span> de uma forma simples e descomplicada</h2>
                        <img src={Combo3d} alt="Foto do Ebook" />
                        <button type="button"><a href="https://app.monetizze.com.br/checkout/PFH160295"><span>Clique Aqui</span> e adquira o seu E-book!</a></button>
                    </div>
                </div>
            </div>
            <div className="container-2">
                <div className="width-960">
                <div className="conteudo-2">
                    <h2>O que você vai aprender adquirindo o Ebook <span>Sua Jornada na Meditação</span></h2>
                    <div className="capa-aprender">
                        <img src={Individual3d} alt="Capa do Ebook" />
                        <div>
                            <h3>Você vai aprender:</h3>
                            <ul>
                                <li>
                                    <img src={Buda2} alt="imagem do buda"/>
                                    <span>Como iniciar a prática da meditação</span>
                                </li>
                                <li>
                                    <img src={Buda2} alt="imagem do buda"/>
                                    <span>Diferentes tipos de meditação</span>
                                </li>                                <li>
                                    <img src={Buda2} alt="imagem do buda"/>
                                    <span>Assumir o controle do estresse, em vez de deixá-lo controlá-lo</span>
                                </li>                                <li>
                                    <img src={Buda2} alt="imagem do buda"/>
                                    <span>Como criar e manter um estado de paz e bem-estar físico e mental</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </ApresentacaoEbookContainer>
    )
}

export default ApresentacaoEbook;
