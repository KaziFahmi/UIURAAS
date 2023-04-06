import React from 'react'
import HoverBlock from '../BasicBlocks/HoverBlock'
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate'

const NavbarButtons=(props)=> {

  function handleClick() {
    window.location.href = props.link;
  }

  return (
   <HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}>
      <button style={navbarButton} onClick={handleClick}> 
         {props.body}
      </button>
    </HoverBlock> 
  )
}

export default NavbarButtons

const navbarButton={
    backgroundColor:"transparent",
    border:"none"
}