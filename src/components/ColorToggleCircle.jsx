import React, { useState } from 'react';

const ColorToggleCircle = () => {
  // Set initial color to red
  const [isRed, setIsRed] = useState(true);

  // Function to toggle color
  const toggleColor = () => {
    setIsRed(!isRed); // Switch between red and blue
  };

  // Styles for the circle
  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: isRed ? 'red' : 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={circleStyle} onClick={toggleColor}>
      {/* You can add text inside the circle if needed */}
    </div>
  );
};

export default ColorToggleCircle;
