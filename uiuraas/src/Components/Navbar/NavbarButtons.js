import React from 'react'
import HoverBlock from '../BasicBlocks/HoverBlock'
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate'
import { Link } from 'react-router-dom'

const NavbarButtons=(props)=> {


  return (
   <HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}>
      <Link to={props.link}><button style={navbarButton}> 
         {props.body}
    </button></Link>
    </HoverBlock> 
  )
}

export default NavbarButtons

const navbarButton={
    backgroundColor:"transparent",
    border:"none"
}