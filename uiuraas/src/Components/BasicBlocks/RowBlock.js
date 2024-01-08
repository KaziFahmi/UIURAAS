//A block to horizontally place items with space between them
import React from 'react'

function RowBlock(props) {
  return (
    <div className='rowBlock' style={{display:"flex", justifyContent:"space-between", ...props.style}}>
        {props.children}
    </div>
  )
}

export default RowBlock