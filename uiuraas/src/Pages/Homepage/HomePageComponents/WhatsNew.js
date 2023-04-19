import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import InfoCard from './InfoCard'

function WhatsNew() {
  return (
    <VerticalBlock style={body}>
        <RowBlock style={{padding:"1%"}}>
          <h2 style={{paddingLeft:"1%"}}>Whats New ?</h2>
        </RowBlock>
        <InfoCard data="InceptionV3 update"/>
        
    </VerticalBlock>
  )
}

export default WhatsNew

const body={
    width:"50%",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif",
    overflowY:"Scroll",
    marginLeft:"2.5%",
    marginRight:"2.5%"
}