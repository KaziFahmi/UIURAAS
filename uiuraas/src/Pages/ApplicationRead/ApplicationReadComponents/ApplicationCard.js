import React from 'react'
import userImg from '../../../Images/userImg.png'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'

const ApplicationCard = (props) => {
  return (
    <HorizontalBlock style={appCardBody}>
      <HorizontalBlock>  
        <div style={profImg}><img src={userImg} /></div>
        <ColumnBlock >
            <input type="text" value="Shahil Yasar Haque " readOnly style={profInfo}/>
            <input type="text" value="011201021" readOnly style={profInfo} />
         </ColumnBlock>
        </HorizontalBlock>
        <input style={checkbox}  type="checkbox"/>
       
    </HorizontalBlock>
  )
}

export default ApplicationCard

const appCardBody={
  display: "flex",
    border: "1px solid #FC9E04",
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    alignItems:'left',
   justifyContent:'left',
   textAlign:'left',
   justifyContent:"space-between"
    
}

const profImg={
  width: "auto",
  position:"relative",
  
}

const profInfo={
  fontSize: "large",
  fontWeight: "600",
  fontFamily: "'Inter', sans-serif",
  width:"90%",
  border:"none",
}

const checkbox={
  border:"1px solid"+PrimaryTemplate.yellow+"!important"
}