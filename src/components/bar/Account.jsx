import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3, BsHouse, BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../../store/slices/filters'
export const Account = () => {
  const carrito = useSelector(state => state.carritoReducer.Productos)
  const count = carrito.reduce((acc, e) => acc + e.quantity, 0)
  const dispatch = useDispatch()
  return (
    <div className="account-wrapper">
      <button className="account-button" ><Link to="/contact">Contacto</Link></button>
      <button className="account-button" onClick={() => { document.querySelector("#main-input").value = ""; dispatch(updateInput("")) }}><Link to="/"><BsHouse /></Link></button>
      <button className="account-button search-icon" onClick={() => { document.querySelector(".input-box").classList.toggle("input-on-site") }} ><BsSearch /></button>
      <button className="account-button cart-icon"><Link to="/cart">{count > 0 && <span className='cart-counter-dot'>{count}</span>}<BsCart3 /></Link></button>
    </div>
  )
}
