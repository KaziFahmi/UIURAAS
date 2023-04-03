import React from 'react'

function ColumnBlock(props) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",...props.style}}>
        {props.children}
    </div>
  )
}

export default ColumnBlock