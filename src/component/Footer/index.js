import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer-left">
                <p>Copyright 2020 - Equipe Sua Jornanda na Meditação </p>
                <p>Todos os Direitos Reservados</p>
            </div>
            <div className="links">
                <Link to="/politica-privacidade">Política de Privacidade</Link>
                <Link to="/obrigado">Contato</Link>
            </div>
        </FooterContainer>
    )
}

export default Footer;
