import React from 'react'
import './Registro.css'
export const Registro = () => {
  return (
    <div className='Gen'>
      
      <div className='Formulario'>
        <h2>Registro</h2>
        
        <label htmlFor="Nombre">Nombre</label><br />
        <input type="text" /><br />

        <label htmlFor="Apellido">Apellido</label><br />
        <input type="text" /><br />

        <label htmlFor="Correo">Correo</label><br />
        <input type="text" /><br />

        <label htmlFor="Contraseña">Contraseña</label><br />
        <input type="text" /><br />

        <button >Registrar</button>
      </div>
      <div className='O'>
        <p>o</p>
      </div>
      <div className='RedesSociales'>
        <button>Google</button>
        <button>Facebook</button>
        <button>LinkedIn</button>
      </div>
    </div>
  )
}
