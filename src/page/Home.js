import React from 'react';

import Intro from '../component/Intro';
import Infos1 from '../component/Infos1';
import Infos2 from '../component/Infos2';
import Melhora from '../component/Melhora';
import ApresentacaoEbook from '../component/ApresentacaoEbook'
import Brinde from '../component/Brinde'
import Garantia from '../component/Garantia'
// import PerguntasFrequentes from '../component/PerguntasFrequentes'
import Footer from '../component/Footer'

const Home = () => {
    return (
        <>
            <Intro />
            <Infos1 />
            <Infos2 />
            <Melhora />
            <ApresentacaoEbook />
            <Brinde />
            <Garantia />
            {/* <PerguntasFrequentes /> */}
            <Footer />
        </>
    )
}

export default Home;
