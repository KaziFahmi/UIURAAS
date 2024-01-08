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
     <button onClick={handleClick} style={paperButton}> 
     <div style={{ display: "flex", flexDirection: "column",marginLeft:"2%"}}>
        <label style={{fontWeight:"bold",fontSize:"22.5px",width: "90%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{props.title}</label>
        <label style={{color:PrimaryTemplate.grey,fontSize:"15px",width: "90%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {/*{props.abstract}*/} This is sample text
          </label>
     </div> 
     </button> 
   </RowBlock>
  )
}

export default PaperCard

const paperBox={
    display:"flex",
    border:"1px solid " + PrimaryTemplate.borders,
    height:"10vh",
    marginBottom:"2%",
    marginLeft:"2.5%",
    width:"70vw"

}

const paperButton={
    border:"none",
    padding: '0',
    border: '0',
    backgroundColor: PrimaryTemplate.white,
    boxShadow: 'none',
    height:"100%",
    width:"80vw",
    textAlign:"left"
}