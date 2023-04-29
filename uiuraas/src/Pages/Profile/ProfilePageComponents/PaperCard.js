import React from 'react'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
//Holds the data of papers
function PaperCard(props) {
    function handleClick() {
      window.open(props.link);
      }
    

  return (
    <RowBlock role="button" tabIndex='0' style={paperBox}  >
     <button onClick={handleClick} style={paperButton}> &nbsp; {props.title} &nbsp; </button> 
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
    padding: '0',
    border: '0',
    background: 'none',
    boxShadow: 'none',
    height:"100%",
    width:"90vw",
    textAlign:"left"
}