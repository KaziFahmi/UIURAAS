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
    width:"60%",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif",
    margin: "2.5%",
    overflowY:"Scroll",
    marginLeft:".5%"
}