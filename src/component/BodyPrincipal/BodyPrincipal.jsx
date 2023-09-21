import React from 'react'
import './BodyPrincipal.css'

export const BodyPrincipal = () => {
  return (
    <div className='gen2'>
      <div className='imagenZorro'>
        <div id='tablero'>
            <img src="public/images/banderas.jpg" alt="" />
        </div>
      </div>
        
      <div className='parrafo'>
          <h1>APRENDER</h1>
          <p>Hablar e interactuar <br/> con tus amigos en <br /> otros idiomas</p>
          <button id='conoceMas'>Conoce más</button>
      </div>
    </div>
  )
}
