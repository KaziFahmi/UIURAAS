import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import Searchbar  from './Searchbar'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import ProfessorsCards from './ProfessorsCards'

function FindCard() {
    
  return (
    <VerticalBlock style={body}>
        <RowBlock style={{padding:"1%"}}>
          <h2 style={{paddingLeft:"1%"}}>Professors</h2>
          <Searchbar/>
        </RowBlock>
        <RowBlock>
          <ProfessorsCards name='Swakkhor Shatabda' keyword='research'/>
          <ProfessorsCards name='Chowdhury Mofizur Rahman' keyword='research'/>
        </RowBlock>
        
    </VerticalBlock>
  )
}

export default FindCard

const body={
  border: "1px solid"+PrimaryTemplate.yellow,
  margin: "2.5%",
  position: 'relative',
  height:"550px",
  width:"95%",
  alignItems:'left',
 justifyContent:'left',
 textAlign:'left',
 justifyContent:"space-between",
 marginTop:".5%"
}