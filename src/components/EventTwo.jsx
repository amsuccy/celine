import React from 'react'

const EventTwo = () => {
    const action = (val) => {
        alert (val)
    }
  return (
    <div>
        <h2>The Match Has Just Began</h2>
        <button onClick={()=> action ("it's a gooooaaallll!!")}>Take the shot</button>
        <button onClick={()=> action ("over the baaarr!!!")}>Take a corner kick</button>
    </div>
  )
}

export default EventTwo