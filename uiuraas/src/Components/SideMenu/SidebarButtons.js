import React from 'react'
import HoverBlock from '../BasicBlocks/HoverBlock';
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate';
import { Link } from 'react-router-dom';

function SidebarButtons(props) {
  return (
    <Link to={props.link}><HoverBlock hover={{ color: PrimaryTemplate.yellow }}>
        <button style={sidebarButtons}> 
         {props.body}
    </button>
   </HoverBlock></Link>
  )
}

export default SidebarButtons

const sidebarButtons={
    backgroundColor:"transparent",
    border:"none",
    color: PrimaryTemplate.white,
    marginBottom:"10px"
    
}
  