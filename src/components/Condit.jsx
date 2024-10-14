import React from 'react'
import Event from './Event'
import Map from './Map'
 
const Condit = () => {
    let course = "Programming"
    if ( course !== "Programming")
  return (
    <div>
      <Map/>
    </div>
  )
  else {
    return (
        <div>
          <Event/>
        </div>
    )
  }
}

export default Condit
