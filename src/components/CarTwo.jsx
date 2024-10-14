import React from 'react'

const CarTwo = (props) => {
    const {brand, model, color} = props
  return (
    <div>
       <h2>These are my car specifications</h2>
      <h5>The car brand is {props.brand}</h5>
      <h5>The car model is {props.model}</h5>
     
      <h4>The car color is {props.color}</h4>
    </div>
  )
}

export default CarTwo
