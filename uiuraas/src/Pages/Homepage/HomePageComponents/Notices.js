import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import DataModal from '../../../Components/DataModal'
//Holds the notices
function Notices() {
  const [notices,setNotices]=React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3001/notices/notices/')
    .then(res=>res.json())
    .then(data=>setNotices(data))
  }, [notices])


  return (
    
    <VerticalBlock style={body}>
      <h2 style={{paddingLeft:"2%"}}>Notices</h2>
      <VerticalBlock style={noticeHolder}>
         {notices.map(notice=>(
          <DataModal name={notice.title} data={notice.detail}/>
          ))}
      </VerticalBlock>
      {/* Uses DataModal To display notice data */}
     
   </VerticalBlock>
  )
}

export default Notices

const body={
    width:"23vw",
    height:"250px",
    border:"1px solid"+PrimaryTemplate.borders,
    fontFamily: "'Inder', sans-serif",
    marginLeft:".5%",
    backgroundColor:PrimaryTemplate.white,
    marginTop:"1.5%",
    marginBottom:"5%"
}

const noticeHolder={
  overflow:"auto",
  height:"180px",
}