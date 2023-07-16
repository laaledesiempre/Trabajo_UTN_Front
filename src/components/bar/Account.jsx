import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3, BsHouse } from 'react-icons/bs'
export const Account = () => {
  return (
    <div className="account-wrapper">
      <button className="account-button"><Link to="/contact">Contacto</Link></button>
      
      <button className="account-button"><Link to="/"><BsHouse /></Link></button>
      <button className="account-button"><Link to="/cart"><BsCart3 /></Link></button>
    </div>
  )
}
