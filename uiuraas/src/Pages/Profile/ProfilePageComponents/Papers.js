import React from 'react'
import PaperCard from './PaperCard'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'

//Displays all the papers

function Papers(props) {
  const [papers,setPapers]=React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3001/paper/byauthor/'+props.id)
    .then(res=>res.json())
    .then(data=>setPapers(data))
  }, [props.id])
  return (
  <VerticalBlock style={body}>
    <RowBlock>
        < h2 style={{paddingLeft:"2.5%"}}>Papers</h2>
    </RowBlock>
    
     <br/>
     {papers.map(paper=>(
       <PaperCard key={paper.id} title={paper.title} keywords={paper.keywords} abstract={paper.abstract}/>
      ))}
     {props.body}
    
   </VerticalBlock>
  )
}

export default Papers

const body={
    width:"83vw",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif",
    margin: "1.5%",
    marginLeft:"2.5%",
    height:"auto",
}
