import React, { useEffect, useState } from 'react'
import { AgregarAlCarrito } from '../../store/slices/carrito'
import { useSelector, useDispatch } from 'react-redux'
export const Adder = (id = 1) => {
  const productos = useSelector(store => store.carritoReducer.Productos)
  const dispatch = useDispatch()
  const [cantidad, setCantidad] = useState(productos[id.id].quantity)
  useEffect(()=>{
    dispatch(AgregarAlCarrito({ ...productos[id.id], quantity: cantidad }))
  },[cantidad])
  useEffect(()=>{
    if (productos[id.id].quantity!== cantidad)
    {setCantidad(productos[id.id].quantity)}}
  ,[productos[id.id].quantity])
  const SnSHandler = (sign) => {
    if (sign === "-") {
      setCantidad(cantidad - 1)
    } else {
      setCantidad(cantidad + 1)
    }
  }
  return (
    <div className="quantity-display">
      <button disabled={cantidad<1} onClick={() => { SnSHandler("-") }} className="cart-counter">-</button>
      <p>{productos[id.id].quantity}</p>
      <button onClick={() => { SnSHandler("+") }} className="cart-counter">+</button>
    </div>
  )
}
