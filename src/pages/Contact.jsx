import React from 'react'

export const Contact = () => {
  return (
    <div>
        <form>
            <label htmlFor="fullname">Full name*</label>
            <input id="fullname" type="text" />
            <label htmlFor="email">Email*</label>
            <input id="email" type="text" />
            <label htmlFor="message">Message*</label>
            <textarea id="message"/>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}
