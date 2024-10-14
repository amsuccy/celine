import React from 'react'

const Map = () => {
    const students = ["Dozie", "Labake", "Olalade", "Austin"]
  return (
    <div>
      {
        students.map((student, idx) =>{
            return(
                <div key={idx}>
                    <h1>{student} is in New Horizons</h1>
                    </div>
                
            )
          })
      }
    </div>
  )
}

export default Map
