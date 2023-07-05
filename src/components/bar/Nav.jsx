import React from 'react'
import { IconContext } from 'react-icons'
import { BsSearch, } from 'react-icons/bs'
export const Nav = () => {
  return (
    <div className='input-box'>
      <IconContext.Provider value={{ className: "input-search-icon" }}>
        <BsSearch />
      </IconContext.Provider>
      <input placeholder='Busca Productos ...' type="text"></input>
    </div>
  )
}
