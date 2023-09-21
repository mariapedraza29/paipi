import React from 'react'
import { Slider } from '../Slider/Slider'
import './Body.css'
import { BodyPrincipal } from '../BodyPrincipal/BodyPrincipal'
import { BodyFinal } from '../BodyFinal/BodyFinal'
export const Body = () => {
  const mockImagenes=[
    "./public/images/trabajoRemoto.png",
    "./public/images/foros.png",
    "./public/images/profesor.jpg"
  ]
  return (
    <div className='body'>
      <BodyPrincipal/>
      <Slider imagenes={mockImagenes}/>
      <BodyFinal></BodyFinal>

    </div>
    
  )
}
