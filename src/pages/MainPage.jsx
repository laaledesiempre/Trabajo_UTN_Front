import React from "react"
import "./mainPage.css"
import { useSelector } from "react-redux"
import { Adder } from "../components"
export const MainPage = () => {
  const productos = useSelector((state) => state.carritoReducer.Productos)
  return (
    <div className="main-page-wrapper">
      {productos.map(e => {
        return (
          <div key={e.id} className="cart-item">
            <img src={e.pic} />
            <p className="cart-category">{e.category}</p>

              <h4>{e.name}</h4>
            <p className="cart-price">${e.price}</p>
            <Adder id={e.id} />
          </div>
        )

      })}

    </div>
  )
}
