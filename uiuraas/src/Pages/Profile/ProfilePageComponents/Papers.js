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
     < h2 style={{borderRadius: '5px 5px 0 0', color: 'white', fontWeight: 500,paddingLeft:"2.5%", paddingBottom: "10px", paddingTop: "10px", borderBottom: '1px solid rgb(11, 128, 218)', backgroundColor: 'rgb(11, 128, 218)'}}>Papers</h2>

      <VerticalBlock style={paperHolder} >
        <br/>
        {papers.map(paper=>(
          <PaperCard key={paper.id} title={paper.title} keywords={paper.keywords} abstract={paper.abstract}/>
          ))}
       
        
      </VerticalBlock>
       {props.body}
   </VerticalBlock> 
  )
}

export default Papers

const body={
    width:"100%",
    // border:"1px solid"+PrimaryTemplate.borders,
    borderRadius:"5px",
    fontFamily: "'Inder', sans-serif",
    // margin: "1.5%",
    // marginLeft:"2.5%",
    // padding: "10px",
    height:"auto",
    backgroundColor:PrimaryTemplate.white
}
const paperHolder={
  overflow:"auto",
  backgroundColor:PrimaryTemplate.white,
  minHeight:"28vh",
}