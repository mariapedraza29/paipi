import React, { useState } from 'react'
import estilos from './Slider.css'
export const Slider = ({imagenes}) => {
  const [imagenActual, setImagenActual]= React.useState(0)
  useState(0);
  const cantidad = imagenes?.length;

  if(!Array.isArray(imagenes)|| cantidad == 0)
  return;

  const siguienteImagen=() =>{
    setImagenActual(imagenActual == cantidad - 1 ? 0: imagenActual +1);
  }
  const anteriorImagen =()=>{
    setImagenActual(imagenActual == 0 ? cantidad - 1 : imagenActual -1);
  }
  return (
    <div>
      <div className='tituloB'>
          <hr className='linea'/>
          <h1>Novedades</h1>
          <hr className='linea1'/>
      </div>
      <div className='container'>
          <button onClick={anteriorImagen} ><img src="public/images/flechaIzq.png" alt="" /></button>
          {imagenes.map((imagen, index)=>{
            return (
              <div className={imagenActual == index ? `${estilos.slide} ${estilos.active}` : estilos.slide
                }>
              {imagenActual == index &&(
                <img key={index} src={imagen} alt="imagen" className='imagenes'/>
              )}
              </div>
            
            );
          })}
        <button onClick={siguienteImagen}><img src="public/images/flechaDer.png" alt="" /></button>

        <img className="zorroNovedades" src="./public/images/zorro9.jpg" alt="" />
      </div>
    </div>
  )
}
