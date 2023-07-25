import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { BsSearch, } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { updateInput } from '../../store/slices/filters'
import { Link, useNavigate } from 'react-router-dom'
export const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")
  window.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("#main-input"))
    document.querySelector("#main-input").addEventListener("keypress", (e) => {
      e.key == "Enter" && navigate("/")
    })
  })
  useEffect(() => {
    dispatch(updateInput(inputValue))
  }, [inputValue])

  return (
    <div className='input-box'>
      <IconContext.Provider value={{ className: "input-search-icon" }}>
        <Link to="/"><BsSearch /></Link>
      </IconContext.Provider>
      <input id='main-input' placeholder='Busca Productos ...' onChange={(e) => { setInputValue(e.target.value) }} type="text"></input>
    </div>
  )
}
