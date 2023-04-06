import React from 'react'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'

function PaperCard(props) {
    function handleClick() {
        window.location.href = props.link;
        console.log("Pressed")
      }
    

  return (
    <RowBlock role="button" tabIndex='0' style={paperBox}  >
     <button onClick={handleClick} style={paperButton}> &nbsp; InceptionV3 on Histological Images &nbsp; </button> 
   </RowBlock>
  )
}

export default PaperCard

const paperBox={
    display:"flex",
    border:"1px solid " + PrimaryTemplate.yellow,
    height:"12%",
    alignItems:"center",
    margin:"2%" ,
    marginTop:"-2%",
    paddingBottom:".5%",
    paddingTop:".5%",
    marginBottom:"2.5%"
}

const paperButton={
    border:"none",
    backGroundColor:PrimaryTemplate.white,
    padding: '0',
    border: '0',
    background: 'none',
    boxShadow: 'none',
}