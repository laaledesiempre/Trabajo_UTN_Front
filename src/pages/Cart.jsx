import React, { useEffect, useState } from 'react'
import "./cart.css"
import { useSelector } from 'react-redux'
import { Adder } from '../components'
export const Cart = () => {
  const cart= useSelector(state=> state.carritoReducer.Productos)
  const [carrito,setCarrito]= useState(cart.filter(e=>e.quantity>0))
  useEffect(()=>{
    console.log(cart)
    setCarrito(cart.filter(e=>e.quantity>0))
    console.log(carrito)
  },[cart])
  return (
    <div className="cart-wrapper">
      <h3>Cart</h3>
      <div className="cart-items-wrapper">
        {carrito.map(e => {
          return (
            <div key={e.id} className="cart-item">
              <img src={e.pic} />
              <p className="cart-category">{e.category}</p>
              <h4>{e.name}</h4>
              <p className="cart-price">${e.price}</p>
               <Adder id={e.id}/> 
            </div>
          )
        })}
      </div>
    </div>
  )
}
