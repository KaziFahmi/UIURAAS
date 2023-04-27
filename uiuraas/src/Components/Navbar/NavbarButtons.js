import React from 'react'
import HoverBlock from '../BasicBlocks/HoverBlock'
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate'
import { Link } from 'react-router-dom'

const NavbarButtons=(props)=> {
  //reusable component for navbar buttons
  return (
   <Link to={props.link}><HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}>
      <button style={navbarButton}> 
         {props.body}
    </button>
    </HoverBlock> </Link>
  )
}

export default NavbarButtons

const navbarButton={
    backgroundColor:"transparent",
    border:"none"
}