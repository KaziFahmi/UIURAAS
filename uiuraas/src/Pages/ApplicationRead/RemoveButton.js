import React from 'react'
import HoverBlock from '../../Components/BasicBlocks/HoverBlock';
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate';

function RemoveButton(props) {
    
      return (
       <HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}>
          <button style={removeButton} > 
             {props.body}
             {props.text}
          </button>
        </HoverBlock> 
      )
}

export default RemoveButton

const removeButton={
    backgroundColor: "white",
    color: "#14213D",
    border: "none"
  }