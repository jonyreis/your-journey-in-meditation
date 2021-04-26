import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import emailjs from 'emailjs-com'
import apiKeys from '../apikeys'


import Footer from '../component/Footer'
import { ContatoContainer } from './styles'

const Contato = () => {
    const { trackPageView } = useMatomo();

    React.useEffect(() => {
      trackPageView();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => {
        window.scrollTo(0, 0);
      }
    }, [trackPageView]);

    function onSubmit(e) {
        console.log(e)
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then(result => {
            alert('Mensagem enviada, entraremos em contato em breve!', result.text);
        },
        error => {
            alert( 'Ocorreu um erro. Por favor, tente novamente!',error.text)
        })
    }
    return (
        <ContatoContainer>
            <div className="container">
                <h1>Fale Conosco</h1>
                <p>Adoraríamos receber suas sugestões e feedback.</p>
                <form className='form' onSubmit={onSubmit}>
                    <div className="grid">
                        <input name='name' type='text' placeholder="Nome" />
                        <input name='user_email' type='email' placeholder="E-mail" />
                    </div>
                    <input name='subject' type='text' placeholder="Assunto" />
                    <textarea name='message' type='text' placeholder="Mensagem" rows="10" ></textarea>
                    <button type='submit'>Enviar mensagem </button>
                </form>
            </div>
            <Footer />
        </ContatoContainer>
    )
}

export default Contato
