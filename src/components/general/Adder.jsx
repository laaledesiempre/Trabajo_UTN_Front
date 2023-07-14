import React from 'react'

export const Adder = (id = 1) => {
  const element = [{
    id: 1,
    quantity: 2
  }].find(e => e.id = id)
  const SnSHandler = (sign) => {
    if (sign === "-") {
      // restar
    } else {
      // sumar
    }
  }
  return (
    <div className="quantity-display">
      <button onClick={() => { SnSHandler("-") }} className="cart-counter">-</button>
      <p>{element.quantity}</p>
      <button onClick={() => { SnSHandler("+") }} className="cart-counter">+</button>
    </div>
  )
}
