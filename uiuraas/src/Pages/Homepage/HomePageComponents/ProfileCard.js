import React from 'react'
import userImg from '../../../Images/userImg.png'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
//Holds user data. Requires functions
function ProfileCard(props) {
  return (
    <HorizontalBlock style={profCardBody}>
    <HorizontalBlock>  
      <img src={userImg} style={profImg} />
      <VerticalBlock >
          <input type="text" value="Shahil Yasar Haque " readOnly style={profInfo}/>
          <input type="text" value="011201021" readOnly style={profInfo} />
       </VerticalBlock>
      </HorizontalBlock>
     
  </HorizontalBlock>
  )
}

export default ProfileCard

const profCardBody={
    display: "flex",
      border: "1px solid"+PrimaryTemplate.yellow,
      margin: "2.5%",
      position: 'relative',
      height:"20vh",
      width:"95%",
      alignItems:'left',
     justifyContent:'left',
     textAlign:'left',
     justifyContent:"space-between"
      
  }
  
  const profImg={
    width: "10vw",
    height:'20vh',
    position:"relative",
    
  }
  
  const profInfo={
    fontSize: "5vh",
    fontWeight: "600",
    fontFamily: "'Inter', sans-serif",
    color:PrimaryTemplate.blue,
    width:"70%",
    border:"none",
  }