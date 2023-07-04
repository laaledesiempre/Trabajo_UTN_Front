import React from 'react'

export const Items = () => {
  const items=[{
    name: "MacBookPro",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ullam animi. Doloribus, quam. Amet quod doloribus eaque eveniet voluptate vero id aperiam ad praesentium accusamus. Aperiam dolore soluta explicabo!",
    categorie:"Laptop",
    price:950.00,
    id:1,
    image:""
  }]
  return (
    <div className="item-wrapper">
        {items.map(e=>{return(
            <div className="item-container">
                <img src={e.image}></img>
                <p className="item-categorie">{e.categorie}</p>
                <h6 className="item-name">{e.name}</h6>
                <p className="price">${e.price}</p>
            </div>
        )})}
    </div>
  )
}
