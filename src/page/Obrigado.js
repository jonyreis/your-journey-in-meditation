import React from 'react'

import Capa3D from '../assets/CAPA_3D_COMBO.png'

import { ObrigadoContainer } from './styles'

const Obrigado = () => {
  return (
    <ObrigadoContainer>
      <h1>Obrigado!!</h1>
      <div>
        <img src={Capa3D} alt="Capa do Ebook" />
        <h3>Em alguns instantes enviaremos um e-mail para você
        confirmando sua compra e com o link para acesso e
        download imediato do ebook Sua Jornanda na Meditação
        bem como todos os bônus.
        </h3>
      </div>
    </ObrigadoContainer>
  )
}

export default Obrigado
