import React from 'react'
import { Nav, Account } from "../"
import "./header.css"
export const Header = () => {
  return (
    <header>
      <h1>Iempanada</h1>
      <Nav />
      <Account></Account>
    </header>
  )
}
