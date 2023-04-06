import React from 'react'
import HoverBlock from '../BasicBlocks/HoverBlock';
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate';

function SidebarButtons(props) {
    function handleClick() {
        window.location.href = props.link;
      }
  return (
    <HoverBlock hover={{ color: PrimaryTemplate.yellow }}>
        <button style={sidebarButtons} onClick={handleClick}> 
         {props.body}
    </button>
   </HoverBlock>
  )
}

export default SidebarButtons

const sidebarButtons={
    backgroundColor:"transparent",
    border:"none",
    color: PrimaryTemplate.white,
    
}
  