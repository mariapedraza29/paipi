import React from 'react'
import { Botones } from '../Botones/Botones'
import './Header.css'

export const Header = () => {
  return (
    <header className='gen1'>
        <input type="text" placeholder='    Buscar Idioma'/>
        <img src="public/images/logoBlanco.jpeg" alt="" />
        <div className='botones'>
            <Botones anchor='iniciar Sesion' path='/IniciarSesion'></Botones>
            <Botones anchor='Registro' path='/Registro'></Botones>
        </div>
    </header>
    
  )
}
