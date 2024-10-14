import React from 'react'

const Animals = () => {
  return (
    <div>
      <h1 style={{textTransform:'uppercase'}}>Animals</h1>
     <h1>1. Mammals</h1>

<ul style={{fontSize:"20px", fontWeight:"bolder"}}>  <li>Warm-blooded, have fur or hair, and most give birth to live young.</li>
<li>Examples: Lions, Humans, Whales, Elephants.</li>
</ul>


<h1>2. Birds</h1>

<ul style={{fontSize:"20px", fontWeight:"bolder"}}>  <li>Warm-blooded, have feathers, and lay eggs.</li>
<li>Examples: Eagles, Penguins, Parrots, Sparrows.</li>
</ul>


<h1>3.Reptiles</h1>
<ul style={{fontSize:"20px", fontWeight:"bolder"}}>  <li>Cold-blooded, have scaly skin, and lay eggs or give birth to live young.</li>
<li>Examples: Snakes, Lizards, Turtles, Crocodiles.</li>
</ul>

    </div>
  )
}

export default Animals
