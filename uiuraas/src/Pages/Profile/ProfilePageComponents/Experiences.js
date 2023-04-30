import React from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import ClickableBlock from '../../../Components/BasicBlocks/ClickableBlock'
//Holds the data of past experiences
function handleClick() {
    console.log('You clicked submit.');
  }

function Experiences(props) {
  return (
    <ClickableBlock onClick={handleClick} >
        <RowBlock style={experienceBox}>
            <HorizontalBlock>
            <button style={cardButton}> &nbsp;Worked at &nbsp;
                <span style={{fontWeight:"bold"}}>{props.experience.company}</span> &nbsp;
                as {props.experience.title}</button>
            </HorizontalBlock> 
            <div>
                {props.experience.startDate} - {props.experience.endDate}&nbsp;
            </div> 
    </RowBlock>
   </ClickableBlock>
  )
}

export default Experiences

const experienceBox={
    display:"flex",
    border:"1px solid " + PrimaryTemplate.yellow,
    height:"10%",
    alignItems:"center",
    margin:"2%" ,
    marginTop:"-2%",
    marginBottom:"2.5%",
    width:"30vw"
}
const cardButton={
    border:"none",
    backGroundColor:PrimaryTemplate.white,
    padding: '0',
    border: '0',
    background: 'none',
    boxShadow: 'none',
}