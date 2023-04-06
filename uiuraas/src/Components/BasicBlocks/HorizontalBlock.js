import React from 'react'

function HorizontalBlock(props) {
  return (
    <div className='rowBlock' style={{display:"flex", ...props.style}}>
        {props.children}
    </div>
  )
}

export default HorizontalBlock