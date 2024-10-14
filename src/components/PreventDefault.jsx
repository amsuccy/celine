import React from 'react'

const PreventDefault = () => {
    const trigger = () => {
        event.preventDefault();
        console.log("Lambo")
    }
  return (
    <div><h1>You want to click this <a href="https://lamborghini.com" onClick={trigger}>Lambo</a></h1></div>
  )
}

export default PreventDefault