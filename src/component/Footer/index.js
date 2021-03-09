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
                <Link id="obrigado" to="/obrigado">Obrigado</Link>
                <Link to="/politica-privacidade">Política de Privacidade</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </FooterContainer>
    )
}

export default Footer;
