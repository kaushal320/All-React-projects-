import React from 'react'

export default function Greet() {
    const message = "Hello, World!"
    const date = new Date();
  return (
    <div>
        <h1>{message}</h1>
        <p>date:{date.getDate()}</p>
      
    </div>
  )
}
