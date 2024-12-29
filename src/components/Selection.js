import React, { useState } from 'react'

const Selection = ({applyColor}) => {

    const [style,setstyle]= useState({background:"white"})
  return (
    <div className='fix-box' onClick={() => {
        if (applyColor) {
          applyColor(setstyle); // Call the function passed as a prop
        } else {
          console.error("applyColor is not a function");
        }
      }}
    style={{
        ...style,
        width: "100px",
        height: "100px",
        margin: "10px",
        border: "1px solid black",
        cursor: "pointer",
      }}
    >



    </div>
  )
}

export default Selection
