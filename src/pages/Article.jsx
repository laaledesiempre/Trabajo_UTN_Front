import React from 'react'
import "./artcile.css"
import { Adder } from '../components';
export const Article = () => {
  const params = { a: "a" };
  return (
    <section className='article-wrapper'>
      <div>
        <h3>Item Name</h3>
        <p>Category</p>
      </div>
      <img src="https://cdn0.recetasgratis.net/es/posts/2/5/9/empanadas_veganas_de_lentejas_75952_600.jpg" alt="#" />
      <div>

      </div>
      <p className='description'>{params.a}</p>
      <Adder id={1}/>
    </section>
  )
}
