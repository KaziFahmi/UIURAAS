import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import Experiences from './Experiences'

function PastExperience(props) {
  return (
    <VerticalBlock style={body}>
    <h2 style={{paddingLeft:"2.5%"}}>Activities & Experience</h2>
    <br/>
    <Experiences/>
    <Experiences/>
    
</VerticalBlock>
  )
}

export default PastExperience

const body={
    width:"60vw",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif",
    marginLeft:"2.3%",
    overflowY:"scroll"
}