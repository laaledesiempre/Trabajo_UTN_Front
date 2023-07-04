import React from 'react'

export const Categories = () => {
const catergories=[{
    icon:"a",
    name:"a"
}]

  return (<>
    <aside className="categories-wrapper">
        {categories.map((e)=>{
            return (
              <div className="categorie-element">
                <i className={e.icon} />
                <h4>{e.name}</h4>
                <button>{">"}</button>
              </div>
            );
             })}        
            </aside>
            <aside>
{/*todo*/}
            </aside>
        </>
  )
}
