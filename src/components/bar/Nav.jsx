import React, {useState , useEffect} from 'react'
import { IconContext } from 'react-icons'
import { BsSearch, } from 'react-icons/bs'
import { useDispatch}  from 'react-redux'
import {updateInput} from '../../store/slices/filters'
export const Nav = () => {
  const dispatch= useDispatch()
  const [inputValue, setInputValue] = useState("")
  useEffect(() => {
    dispatch(updateInput(inputValue))
  }, [inputValue])
  
  return (
    <div className='input-box'>
      <IconContext.Provider value={{ className: "input-search-icon" }}>
        <BsSearch />
      </IconContext.Provider>
      <input placeholder='Busca Productos ...' onChange={(e)=>{setInputValue(e.target.value)}} type="text"></input>
    </div>
  )
}
