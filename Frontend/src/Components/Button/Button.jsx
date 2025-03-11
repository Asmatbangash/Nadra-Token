import React from 'react'

function Button({
    type = 'button',
    text = 'button',
    className = '',
    ...props
}) {
  return (
    <button className={`cursor-pointer ${className}`} {...props}>{text}</button>
  )
}

export default Button