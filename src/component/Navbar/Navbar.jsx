import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <li><NavLink to={path}>{anchor}</NavLink></li>
  )
}
