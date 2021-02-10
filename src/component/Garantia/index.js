import React from 'react'

import Garantia from '../../assets/selo-garantia.png';

import { GarantiaContainer } from './styles'

const index = () => {
    return (
        <GarantiaContainer>
            <div className="grid-garantia">
                <img src={Garantia} alt="Selo de Garantia" />
                <div>
                    <h3>Compra do ebook com garantia de satisfação!</h3>
                    <p>Se no período de 07 dias, por qualquer motivo, você não estiver satisfeito com o Ebook -  Sua Jornada na Meditação, basta você nos enviar 1 único e-mail através do nosso suporte e nós devolvemos todo o seu dinheiro imediatamente!</p>
                </div>
            </div>
            <button>
                <a href="https://app.monetizze.com.br/checkout/PFH160295" rel="noreferrer" ><span>Clique Aqui</span> para adquirir agora o E-book Sua Jornada na Meditação + Bônus</a>
            </button>
        </GarantiaContainer>
    )
}

export default index
