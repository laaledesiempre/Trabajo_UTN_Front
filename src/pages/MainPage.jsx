import React, { useEffect } from "react"
import "./mainPage.css"
import { useDispatch, useSelector } from "react-redux"
import { Adder } from "../components"
import { Link } from "react-router-dom"
import { resetFilters, updateFilter } from "../store/slices/filters"
export const MainPage = () => {
  const dispatch = useDispatch()
  const filterString = useSelector((state) => state.filtersReducer.input)
  const filterFilters = useSelector((state) => state.filtersReducer.filters)
  const productos = useSelector((state) => state.carritoReducer.Productos)
  useEffect(() => {
    dispatch(resetFilters())
  }, [])
  return (<>

    <div className="main-page-wrapper checkbox-wrapper">
      <p >Filtros:</p>
      <div>
        <label to="Empanada" >Empanadas: </label>
        <input onChange={(e) => { dispatch(updateFilter(e.target.value)) }} value="Empanada" defaultChecked type="checkbox" id="Empanada" />
      </div>
      <div>
        <label to="Bebidas" >Bebidas: </label>
        <input onChange={(e) => { dispatch(updateFilter(e.target.value)) }} value="Bebida" defaultChecked type="checkbox" id="Bebidas" />
      </div>
      <div>
        <label to="Complementos" >Complementos: </label>
        <input onChange={(e) => { dispatch(updateFilter(e.target.value)) }} value="Complementos" defaultChecked type="checkbox" id="Complementos" />
      </div>
    </div>
    <div className="main-page-wrapper">
      {productos.filter(e => e.name.toLowerCase().includes(filterString) && filterFilters.includes(e.category))
        .map((e) => {
          return (
            <div key={e.id} className="cart-item">
              <img src={e.pic} />
              <p className="cart-category">{e.category}</p>
              <Link to={"/article/" + e.id}><h4>{e.name}</h4></Link>
              <p className="cart-price">${e.price}</p>
              <Adder id={e.id} />
            </div>
          )
        })}
      {productos.filter(e => e.name.toLowerCase().includes(filterString) && filterFilters.includes(e.category)).length ? "" : <h5 className="empty-message"> Perdon, no hay nada por aca :(</h5>}
    </div>
  </>
  )
}
