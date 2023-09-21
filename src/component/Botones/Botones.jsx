import React from 'react'
import { NavLink } from 'react-router-dom'
export const Botones = ({anchor, path}) => {
  return (
    <button><NavLink to={path}>{anchor}</NavLink></button>
  )
}
