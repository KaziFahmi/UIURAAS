import React, { useEffect, useState } from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import ClickableBlock from '../../../Components/BasicBlocks/ClickableBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import Spinner from 'react-bootstrap/esm/Spinner'
//Holds the data of past experiences

function Experiences(props) {
  
  return (
        <VerticalBlock style={experienceBox}>
            <div style={{ display: "flex", flexDirection: "column",marginLeft:"2%"}}>
                <label style={{fontWeight:"bold",fontSize:"22.5px"}}>{props.experience.title}</label>
                <label style={{color:PrimaryTemplate.grey,fontSize:"15px"}}>{props.experience.company}</label>
                <label style={{color:PrimaryTemplate.grey,fontSize:"12px"}}>{props.experience.startDate} - {props.experience.endDate}</label> 
            </div>
           
    </VerticalBlock>
  )
}

export default Experiences

const experienceBox={
    display:"flex",
    border:"1px solid " + PrimaryTemplate.borders,
    width:"90%",
    height:"10vh",
    marginLeft:"8%",
    marginBottom:"5%",
    backgroundColor:PrimaryTemplate.white
}