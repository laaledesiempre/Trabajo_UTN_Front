import React from "react"
import "./mainPage.css"
import { useSelector } from "react-redux"
import { Adder } from "../components"
import { Link } from "react-router-dom"
export const MainPage = () => {
  const filterString= useSelector((state)=> state.filtersReducer.input)
  const productos = useSelector((state) => state.carritoReducer.Productos)
  return (
    <div className="main-page-wrapper">
      {productos.filter(e=>e.name.includes(filterString)).map(e => {
        return (
          <div key={e.id} className="cart-item">
            <img src={e.pic} />
            <p className="cart-category">{e.category}</p>

              <Link to={"/article/"+e.id}><h4>{e.name}</h4></Link>
            <p className="cart-price">${e.price}</p>
            <Adder id={e.id} />
          </div>
        )

      })}

    </div>
  )
}
