import React from 'react'
import "./contacts.css"

export const Contact = () => {
  return (
    <div className='form-container'>
      <h4>Contact</h4>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <label htmlFor="fullname">Full name</label>
        <input id="fullname" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
        <label htmlFor="message">Message</label>
        <textarea rows={5} cols={15} id="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
