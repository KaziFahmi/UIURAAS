import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import DataModal from '../../../Components/DataModal'
//Displays news same way as Notices display noitices
function WhatsNew() {
  return (
    <VerticalBlock style={body}>
        <RowBlock style={{padding:"1%"}}>
          <h2 style={{paddingLeft:"1%"}}>Whats New ?</h2>
        </RowBlock>
        <DataModal  name="InceptionV3 update" data="Hello world"/>
        
    </VerticalBlock>
  )
}

export default WhatsNew

const body={
  width:"23vw",
  border:"1px solid"+PrimaryTemplate.borders,
  fontFamily: "'Inder', sans-serif",
  margin: "2.5%",
  overflow:"auto",
  marginLeft:".5%",
  marginTop:".5%",
  backgroundColor:PrimaryTemplate.white,
  height:"328px"
}