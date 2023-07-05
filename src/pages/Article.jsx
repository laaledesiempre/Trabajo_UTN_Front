import React from 'react'

export const Article = () => {
  const params={};
  return (
    <section>
     <h3>{params}</h3>
     <p>{params}</p>
     <div>
        <div className="image-wrapper">
            <img src="#" alt="#" />
        </div>
        <p>{params}</p>
        <div>
            <p>Colors:</p>
            <div>
                <div>
                    <svg viewBox="0 0 120 120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
                    black
                </div>
                <div>
                    <svg viewBox="0 0 120 120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
                    orange
                </div>
                <div>
                    <svg viewBox="0 0 120 120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
                    gray
                </div>
            </div>
        </div>
     </div>
    </section>
  )
}
