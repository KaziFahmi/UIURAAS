import React from 'react'
import HoverBlock from '../BasicBlocks/HoverBlock';
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate';
import { Link } from 'react-router-dom';

function SidebarButtons(props) {
  return (
    <HoverBlock hover={{ color: PrimaryTemplate.yellow }}>
        <Link to={props.link}><button style={sidebarButtons}> 
         {props.body}
    </button></Link>
   </HoverBlock>
  )
}

export default SidebarButtons

const sidebarButtons={
    backgroundColor:"transparent",
    border:"none",
    color: PrimaryTemplate.white,
    
}
  