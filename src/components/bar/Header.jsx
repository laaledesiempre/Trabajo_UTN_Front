import React from 'react'
import {Nav, Account} from "./"
export const Header = () => {
  return (
    <header>
        <button className="burger"></button>
        <h1>Constructo</h1>
        <Nav></Nav>
        <Account></Account>
    </header>
  )
}
