import { Registro } from './component/Registro/Registro';
import { Main } from './component/Main/Main';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { IniciarSesion } from './component/IniciarSesion/IniciarSesion';
import { useEffect, useState } from 'react';

const URLBASE = "https://localhost:7155/"

const user = {

}

function App() {

  return (
    <div className='general'>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/Registro' Component={Registro} />
        <Route path='/IniciarSesion' Component={IniciarSesion} />
      </Routes>
    </div>
  )
}

export default App
