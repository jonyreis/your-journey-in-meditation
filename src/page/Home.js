import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import Intro from '../component/Intro';
import Infos1 from '../component/Infos1';
import Infos2 from '../component/Infos2';
import Midia from '../component/Midia'
import Melhora from '../component/Melhora';
import Equipe from '../component/Equipe';
import ApresentacaoEbook from '../component/ApresentacaoEbook'
import Brinde from '../component/Brinde'
import Garantia from '../component/Garantia'
import PerguntasFrequentes from '../component/PerguntasFrequentes'
import Footer from '../component/Footer'

const Home = () => {
  const { trackPageView } = useMatomo();

  React.useEffect(() => {
    trackPageView();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      window.scrollTo(0, 0);
    }
  }, [trackPageView]);
  return (
    <>
      <Intro />
      <Infos1 />
      <Infos2 />
      <Midia />
      <Melhora />
      <Equipe />
      <ApresentacaoEbook />
      <Brinde />
      <Garantia />
      <PerguntasFrequentes />
      <Footer />
    </>
  )
}

export default Home;
