import React, { useEffect, useState } from 'react'
import "./cart.css"
import { useSelector } from 'react-redux'
import { Adder } from '../components'
export const Cart = () => {
  const cart = useSelector(state => state.carritoReducer.Productos)
  const [carrito, setCarrito] = useState(cart.filter(e => e.quantity > 0))
  useEffect(() => {
    setCarrito(cart.filter(e => e.quantity > 0))
  }, [cart])
  return (
    <div className="cart-wrapper">
      <h3>Carrito</h3>
      <div className="cart-items-wrapper">
        {carrito.map(e => {
          return (
            <div key={e.id} className="cart-item">
              <img onClick={() => navigate("/article/" + e.id)} src={e.pic} />
              <p className="cart-category">{e.category}</p>
              <h4>{e.name}</h4>
              <p className="cart-price">${e.price}</p>
              <Adder id={e.id} />
            </div>
          )
        })}

      </div>
      {carrito.length ? "" : <h5 className="empty-message"> Perdon, no hay nada por aca :(</h5>}
      <p>Total:</p>
      <h5>${carrito.reduce((acc, e) => acc + e.price * e.quantity, 0)}</h5>

    </div>
  )
}
