import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../page/Home'
import PoliticaDePrivacidade from '../page/PoliticaDePrivacidade'
import Contato from '../page/Contato'

const index = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/politica-privacidade" component={PoliticaDePrivacidade} />
            <Route path="/contato" component={Contato} />
        </Switch>
    )
}

export default index
