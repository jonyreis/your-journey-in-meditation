import React from 'react'

import emailjs from 'emailjs-com'
import apiKeys from '../apikeys'


import Footer from '../component/Footer'
import { ContatoContainer } from './styles'

const Contato = () => {

    function onSubmit(e) {
        console.log(e)
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then(result => {
            alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
            alert( 'An error occured, Plese try again',error.text)
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
