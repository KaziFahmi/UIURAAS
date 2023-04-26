import React from 'react'
import PaperCard from './PaperCard'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'


function Papers(props) {
  return (
  <VerticalBlock style={body}>
    <RowBlock>
        < h2 style={{paddingLeft:"2.5%"}}>Papers</h2>
    </RowBlock>
    
     <br/>
     <PaperCard link="/inbox"/>
     <PaperCard link="/inbox"/>
     <PaperCard link="/inbox"/>
    
   </VerticalBlock>
  )
}

export default Papers

const body={
    width:"95%",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif",
    marginLeft:"2.3%",
    margin: "1.5%",
    marginLeft:"2.5%",
    height:"auto",
}
