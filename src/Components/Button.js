import React from 'react';
import '../Stylesheet/Button.css'

function Button({text, buttonClass, itsFree}) {
  return (
    <button className={`${buttonClass}`} >
      <strong>{text}</strong> 
      <span className='itsFree'>{itsFree}</span>
    </button>
  )
}

export default Button;