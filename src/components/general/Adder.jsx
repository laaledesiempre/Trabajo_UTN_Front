import React, { useState } from 'react'
import { AgregarAlCarrito } from '../../store/slices/carrito'
import { useSelector, useDispatch } from 'react-redux'
export const Adder = (id = 1) => {
  const productos = useSelector(store => store.carritoReducer.Productos)
  const producto = productos.find(e => e.id == id.id)
  const dispatch = useDispatch()
  const [cantidad, setCantidad] = useState(producto.quantity)
  const SnSHandler = (sign) => {
    if (sign === "-") {
      setCantidad(cantidad - 1)
      dispatch(AgregarAlCarrito({ ...producto, quantity: cantidad }))
    } else {
      setCantidad(cantidad + 1)
      dispatch(AgregarAlCarrito({ ...producto, quantity: cantidad }))
    }
  }
  return (
    <div className="quantity-display">
      <button onClick={() => { SnSHandler("-") }} className="cart-counter">-</button>
      <p>{cantidad}</p>
      <button onClick={() => { SnSHandler("+") }} className="cart-counter">+</button>
    </div>
  )
}
