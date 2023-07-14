import React from 'react'
import "./cart.css"
export const Cart = () => {
  const cart = [{
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://www.recetasgratis.net/receta-de-empanadas-veganas-de-lentejas-75952.html",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  }, {
    image: "https://cdn0.recetasgratis.net/es/posts/2/5/9/empanadas_veganas_de_lentejas_75952_600.jpg",
    category: "example",
    name: "example",
    price: NaN,
    id: "1",
    quantity: 2
  },]
  return (
    <div className="cart-wrapper">
      <h3>Cart</h3>
      <div className="cart-items-wrapper">
        {cart.map(e => {
          return (
            <div key={e.id} className="cart-item">
              <img src={e.image} />
              <p className="cart-category">{e.category}</p>
              <h4>{e.name}</h4>
              <p className="cart-price">${e.price}</p>
              <div className="quantity-display">
                <button className="cart-counter">-</button>
                <p>{e.quantity}</p>
                <button className="cart-counter">+</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
