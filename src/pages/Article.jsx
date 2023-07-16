import React from 'react'
import "./artcile.css"
import { Adder } from '../components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Article = () => {
  const {id}= useParams()
  const store= useSelector(store=>store.carritoReducer.Productos)
  const item= store.find(e=>e.id==id)
  return (
    <section className='article-wrapper'>
      <div>
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </div>
      <img src={item.pic} />
      

     
      <p className='description'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Cus.</p>
<div className='article-adder'>      <Adder id={1}/> </div>
    </section>
  )
}
