import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import DataModal from '../../../Components/DataModal'
import InfoCard from './InfoCard'
//Displays news same way as Notices display noitices
function WhatsNew() {
  const [news,setNews]=React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3001/news/news/')
    .then(res=>res.json())
    .then(data=>setNews(data))
  }, [news])

  return (
    <VerticalBlock style={body}>
    <h2 style={{paddingLeft:"2%"}}>News</h2>
    <VerticalBlock style={newsHolder}>
       {news.map(newss=>(
        <InfoCard title={newss.title} link={newss.link}/>
        ))}
    </VerticalBlock>
    {/* Uses DataModal To display notice data */}
   
 </VerticalBlock>
  )
}

export default WhatsNew

const body={
  width:"23vw",
  height:"330px",
  border:"1px solid"+PrimaryTemplate.borders,
  fontFamily: "'Inder', sans-serif",
  marginLeft:".5%",
  backgroundColor:PrimaryTemplate.white,
  marginTop:"1.5%",
  marginBottom:"5%"
}

const newsHolder={
overflow:"auto",
height:"220px",
}