import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Account } from "../"
import "./header.css"
export const Header = () => {
  return (
    <header>
      <Link to="/" ><h1>Iempanada</h1></Link> 
      <Nav />
      <Account></Account>
    </header>
  )
}
