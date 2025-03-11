import React from 'react'

function Input({type = 'text',id='', className = '', ...props}) {
  return (
    <input className={`${className}`} id={id} type={type} {...props}/>
  )
}

export default Input