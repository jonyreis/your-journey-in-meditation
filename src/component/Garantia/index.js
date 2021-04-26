import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import SeloGarantia from '../../assets/selo-garantia.png';

import { GarantiaContainer } from './styles'

const Garantia = () => {
    const { trackEvent } = useMatomo()

    function clickBuy() {
      trackEvent({
        category: "garantia",
        action: "click-on-button",
        name: "button-buy",
      });
    }
    return (
        <GarantiaContainer>
            <div className="grid-garantia">
                <img src={SeloGarantia} alt="Selo de Garantia" />
                <div>
                    <h3>Compra do ebook com garantia de satisfação!</h3>
                    <p>Se no período de 07 dias, por qualquer motivo, você não estiver satisfeito com o Ebook -  Sua Jornada na Meditação, basta você nos enviar 1 único e-mail através do nosso suporte e nós devolvemos todo o seu dinheiro imediatamente!</p>
                </div>
            </div>
            <button type="button" onClick={clickBuy}>
                <a href="https://app.monetizze.com.br/checkout/PFH160295" rel="noreferrer" ><span>Clique Aqui</span> para adquirir agora o E-book Sua Jornada na Meditação + Bônus</a>
            </button>
        </GarantiaContainer>
    )
}

export default Garantia
