import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer-left">
                <p>Copyright 2020 - Sua Jornanda na Meditação </p>
                <p>Todos os Direitos Reservados</p>
            </div>
            <div>
                <Link to="/politica-privacidade">Política de Privacidade</Link>
            </div>
        </FooterContainer>
    )
}

export default Footer;
