// A block to simply vertically place items
import React from 'react'

function VerticalBlock(props) {
  return (
    <div style={{...props.style}}>
        {props.children}
    </div>
  )
}

export default VerticalBlock