import React from 'react'

export default props => {
  return (
    <div 
      className={`
        pixel 
        ${props.background} 
        ${props.current ? 'current-color' : ''}
      `}
      onClick={props.onClick}
    />
  )
}