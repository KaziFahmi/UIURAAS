import React from 'react'
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate'

function ClickableBlock(props) {
  return (
   <button onClick={props.onClick} style={blockStyle}>
    {props.children}
   </button>
  )
}

export default ClickableBlock

const blockStyle={
    border:"none",
    backGroundColor:PrimaryTemplate.white,
    padding: '0',
    border: '0',
    background: 'none',
    boxShadow: 'none',
}