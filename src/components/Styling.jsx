import React from 'react'
import '../css/style.css'

const Styling = () => {
    const theStyle ={
        color:"blue",
        fontSize:"4rem",
        textdecoration:"underline"
    }
  return (
    <div>
      <p style={{color:"red", fontSize:"2rem"}}>Give me the vibe and share</p>
      <p style={theStyle}>Give me the barber chair</p>
      <p className='greatful'>Up and greatful oh Lord, I'm greatful</p>
    </div>
  )
}

export default Styling
