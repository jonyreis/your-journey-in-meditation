import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './styles';

const Footer = () => {
    const { trackEvent } = useMatomo();

    function clickFooter(selected) {
      trackEvent({
        category: "footer",
        action: "click-on-link",
        name: selected,
      });
    }

    return (
        <FooterContainer>
            <div className="footer-left">
                <p>Copyright 2020 - Equipe Sua Jornanda na Meditação </p>
                <p>Todos os Direitos Reservados</p>
            </div>
            <div className="links">
                <Link onClick={() => clickFooter('politica-privacidade')} to="/politica-privacidade">Política de Privacidade</Link>
                <Link onClick={() => clickFooter('contato')} to="/contato">Contato</Link>
            </div>
        </FooterContainer>
    )
}

export default Footer;
