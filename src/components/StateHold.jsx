// import {useState} from 'react'

// const StateHold = () => {
//     const [brand, setBrand] = useState ("Chevrolet")
//     const [model, setModel] = useState ("Camero")
//     const [year, setYear] = useState ("2015")
//     const [color, setColor] = useState ("White")

//   return (
//     <div>
//       <h1> My {brand} </h1>
//       <p>It is a {color} {model} from {year}. </p>
//     </div>
//   )
// }

// export default StateHold
import React, { useState } from 'react';

const StateHold = () => {
  // State for brand, color, model, and year
  const [brand, setBrand] = useState("Hyundai");
  const [color, setColor] = useState("White");
  const [model, setModel] = useState("Palisade");
  const [year, setYear] = useState("2015");

  // Arrays of available options for buttons
  const brands = ["Hyundai", "Nissan", "Tesla", "BMW", "Honda"];
  const colors = ["White", "Red", "Black", "Blue", "Green"];
  const models = ["Palisade", "Rogue", "Model S", "3 Series", "Civic"];
  const years = ["2015", "1964", "1960", "2001", "2004"];

  return (
    <div style={{ padding: '20px' }}>
      {/* Display the selected values */}
      <h2 style={{textTransform:"uppercase", color:"yellowgreen"}} >My {brand}</h2>
      <p style={{fontStyle:"italic",}}>It is a {color} {model} from {year}</p>
      
      {/* Table-like layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '50%' }}>
        
        {/* Column for Brands */}
        <div>
          <h3 style={{color:"blue", textTransform:"uppercase"}}>Brands</h3>
          {brands.map((b) => (
            <button key={b} onClick={() => setBrand(b)} style={{ display: 'block', marginBottom: '5px' }}>
              {b}
            </button>
          ))}
        </div>
        
        {/* Column for Colors */}
        <div>
          <h3 style={{color:"purple", textTransform:"uppercase"}}>Colors</h3>
          {colors.map((c) => (
            <button key={c} onClick={() => setColor(c)} style={{ display: 'block', marginBottom: '5px' }}>
              {c}
            </button>
          ))}
        </div>
        
        {/* Column for Models */}
        <div>
          <h3 style={{color:"red", textTransform:"uppercase"}}>Models</h3>
          {models.map((m) => (
            <button key={m} onClick={() => setModel(m)} style={{ display: 'block', marginBottom: '5px' }}>
              {m}
            </button>
          ))}
        </div>
        
        {/* Column for Years */}
        <div>
          <h3 style={{color:"yellow", textTransform:"uppercase"}}>Years</h3>
          {years.map((y) => (
            <button key={y} onClick={() => setYear(y)} style={{ display: 'block', marginBottom: '5px' }}>
              {y}
            </button>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default StateHold;