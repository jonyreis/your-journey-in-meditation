import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../page/Home'
import PoliticaDePrivacidade from '../page/PoliticaDePrivacidade'
import Contato from '../page/Contato'
import Obrigado from '../page/Obrigado'

const index = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/politica-privacidade" component={PoliticaDePrivacidade} />
            <Route path="/contato" component={Contato} />
            <Route path="/obrigado" component={Obrigado} />
        </Switch>
    )
}

export default index
