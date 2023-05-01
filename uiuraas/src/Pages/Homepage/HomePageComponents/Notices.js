import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import DataModal from '../../../Components/DataModal'
//Holds the notices
function Notices() {
  return (
    <VerticalBlock style={body}>
      <RowBlock style={{padding:"1%"}}>
        <h2 style={{paddingLeft:"1%"}}>Notices</h2>
      </RowBlock>
      {/* Uses DataModal To display notice data */}
      <DataModal name="Maintenance notice" data="hello world"/>
      <DataModal name="Maintenance notice" data="hello world"/>
   </VerticalBlock>
  )
}

export default Notices

const body={
    width:"23vw",
    height:"250px",
    border:"1px solid"+PrimaryTemplate.borders,
    fontFamily: "'Inder', sans-serif",
    overflow:"auto",
    marginLeft:".5%",
    backgroundColor:PrimaryTemplate.white,
    marginTop:"1.5%",
    marginBottom:"5%"
}