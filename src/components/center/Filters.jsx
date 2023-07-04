import React, {useState} from 'react'

export const Filters = () => {
  const [brandFilter,setBrandFilter]=useState("")
  const [memory,setMemory]=useState("")
  const [price,setPrice]=useState({min:0,max:999999})
  const brands=[]
  return (
    <aside>
        <div className="dropdown-filter">
            <div className="filter-title">Brand</div>
            <button>v</button>
            <div className="filterbody">
                
            </div>
        </div>
        <div className="dropdown-filter"></div>
        <div className="dropdown-filter"></div>
    </aside>
  )
}
