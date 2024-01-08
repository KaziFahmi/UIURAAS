import React, { useEffect } from 'react'
import HoverBlock from '../../../Components/BasicBlocks/HoverBlock';
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';
//To remove data . requires a delete function
function RemoveButton(props) {
  let onClick = () => {

    fetch('http://localhost:3001/application/deleteApplication', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:props.formId})
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.alert("Application Deleted");
        window.location.reload();
      });
  };
  if(props.type==2){
    onClick = props.onClick;
  }

      return (
       <HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}>
          <button style={removeButton} onClick={onClick}>
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