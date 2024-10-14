import  { useState } from 'react'

const StateHoldTwo = () => {
const [car, setCar] = useState ({
    brand:"Nissan",
    model: "Mustang",
    year:"1963",
    color:"red"


})

  return (
    <div>
      <h1>My {car.brand} </h1>
      <p>It is a {car.color} {car.model} from {car.year}  </p>
      <p>I got the {car.brand} in 2002, I wanted to get the black but it was not available so I got the {car.year} {car.model} instead </p>
    </div>
  )
}

export default StateHoldTwo
