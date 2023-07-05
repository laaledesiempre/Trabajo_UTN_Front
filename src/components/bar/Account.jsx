import React from 'react'
import { BsCart3, BsHouse } from 'react-icons/bs'
export const Account = () => {
  return (
    <div className="account-wrapper">
      <button className="account-button">Contacto</button>
      <button className="account-button"><BsHouse /></button>
      <button className="account-button"><BsCart3 /></button>
    </div>
  )
}
