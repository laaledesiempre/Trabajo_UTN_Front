import React from 'react'

export const Cart = () => {
    const cart=[{
        image:"",
        category:"",
        name:"",
        price:NaN,
    }]
  return (
    <div className="cart-wrapper">
        <h2>Cart</h2>
        <div className="cart-items-wrapper">
            {cart.map(e=>{
                return(
                    <div className="cart-item">
                        <img src={e.image}/>
                        <p className="cart-category">{e.category}</p>
                        <h4 className="cart-name">{e.name}</h4>
                        <p className="cart-price">${e.price}</p>
                        <div className="quantity-display">
                            <button className="cart-counter"></button>
                            <p className="counter-number">{e.quantity}</p>
                            <button className="cart-counter"></button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
